#!/usr/bin/env node
// The engine calls __hxcpp_gc_request_full(), but the pinned NovaFlare hxcpp
// fork does not define it yet. Add the non-blocking request API after haxelib
// installs hxcpp so clean GitHub runners can compile every target.

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const declarations = execFileSync('haxelib', ['path', 'hxcpp'], { encoding: 'utf8' })
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line.length > 0)
  .map((line) => path.resolve(line))
  .filter((root) =>
    fs.existsSync(path.join(root, 'include', 'hx', 'GC.h')) &&
    fs.existsSync(path.join(root, 'src', 'hx', 'gc', 'Immix.cpp'))
  );

if (declarations.length === 0) {
  throw new Error('haxelib path hxcpp did not resolve to an hxcpp source checkout');
}

for (const root of declarations) {
  const headerPath = path.join(root, 'include', 'hx', 'GC.h');
  const immixPath = path.join(root, 'src', 'hx', 'gc', 'Immix.cpp');
  let header = fs.readFileSync(headerPath, 'utf8');
  let immix = fs.readFileSync(immixPath, 'utf8');
  let changed = false;

  if (!header.includes('__hxcpp_gc_request_full')) {
    const safePointDecl = /^\s*HXCPP_EXTERN_CLASS_ATTRIBUTES\s+void\s+__hxcpp_gc_safe_point\(\);\s*$/m;
    if (!safePointDecl.test(header)) {
      throw new Error(`Could not find safe-point declaration in ${headerPath}`);
    }
    header = header.replace(
      safePointDecl,
      (match) => `${match}\n// Non-blocking full-collection request used by GCManager.requestFull().\nHXCPP_EXTERN_CLASS_ATTRIBUTES void  __hxcpp_gc_request_full();`
    );
    fs.writeFileSync(headerPath, header, 'utf8');
    changed = true;
  }

  if (!/\bvoid\s+__hxcpp_gc_request_full\s*\(/.test(immix)) {
    const safePointImpl = /void\s+__hxcpp_gc_safe_point\s*\(\s*\)\s*\{\s*if\s*\(\s*hx::gPauseForCollect\s*\)\s*hx::PauseForCollect\s*\(\s*\)\s*;\s*\}/m;
    if (!safePointImpl.test(immix)) {
      throw new Error(`Could not find safe-point implementation in ${immixPath}`);
    }
    immix = immix.replace(
      safePointImpl,
      (match) => `${match}\n\n// Queue a collection without blocking the calling thread.\nvoid __hxcpp_gc_request_full()\n{\n   hx::gPauseForCollect = 0xffffffff;\n}`
    );
    fs.writeFileSync(immixPath, immix, 'utf8');
    changed = true;
  }

  console.log(`${changed ? 'Patched' : 'Already patched'} hxcpp at ${root}`);
}
