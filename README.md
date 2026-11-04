Nothing bitch of Haxe holy shit



<div align="center">
  <h1>🎤 Different Creatingness Engine (D.C.E.) 🎤</h1>
  <p><b>Friday Night Funkin' 引擎：按下方向键，和菜单里多出来的按钮斗智斗勇。</b></p>
  <p>一个从 Psych Engine 系谱长出来、逐渐长出自己枝叶的 FNF 引擎项目。</p>
</div>

## 这是什么东西？

D.C.E.（Different Creatingness Engine）是一个以 Friday Night Funkin' 为基础的引擎项目。它带着 Psych Engine 的根系，也接入了 V-Slice 0.8.4 与 Codename Engine 1.0.1 相关兼容能力；目前正处于持续开发中，所以菜单可能比你的周末计划更新得还快。

本仓库包含引擎源码、资源、构建配置、工具，以及一些负责让开发者少盯着黑窗口发呆的编辑器功能。它不是官方 FNF，也不是 Psych Engine 官方发行版；请不要把测试构建当作宇宙稳定常数。

## 这台引擎最近在忙什么

- **菜单和界面翻新：**主菜单、Mods 菜单、选项与 Freeplay 都在继续整理，按钮努力排队，偶尔还是会插队。
- **编辑器升级：**图表编辑器持续改进，并加入相机编辑器（请注意这是测试版。如果这东西给你的谱面搞炸了那我只能congratulations）、移动端编辑输入辅助与键位查看工具。
- **输入与移动端：**继续完善触屏、键盘和控制器的协作，尽量避免它们在同一帧争夺方向盘。
- **语言与外观：**项目包含多语言文本、Note Splash 皮肤和界面调整。翻译若有奇怪语气，那可能是文本本人在即兴发挥。
- **兼容与播放体验：**维护 Psych 模组兼容，并提供 V-Slice、Codename 相关兼容路径；支持录像/回放相关能力。
- **开发诊断：**加入性能与资源监视、构建辅助脚本，以及 Windows 中文路径兼容处理。

功能仍在变化中；具体可用范围以当前源码和发行说明为准。某个功能出现在源码里，不代表它已经被每台设备、每个模组、每只D.C.LushiFu测试过。

## 怎么启动这引擎

### 普通玩家

从 [Releases](https://github.com/D-C-LushiFu/Different-Creatingness-Engine/releases) 获取适合自己平台的构建。如果你选择自己编译，请准备好 Haxe、Haxelib、Lime、项目所需库和对应平台工具链；依赖版本以仓库中的 `Project.xml`、`.haxelib/` 配置及 CI 工作流为准。

### 开发者

1. 克隆仓库并初始化项目依赖。

2. 使用 Lime 针对目标平台构建。Windows 示例：

   ```powershell
   haxelib run lime build windows
   ```

3. Android、iOS、macOS 和 Linux 构建还需要各自平台的 SDK、签名或打包环境；请查看 `.github/workflows/` 中对应工作流。

构建参数和依赖正在迭代，遇到错误时先看工作流日志，再给编译器递一杯咖啡（它大概率不会喝，但你会冷静一点）。

## 参与和反馈

欢迎提交问题、改进和模组兼容反馈。提交问题时请尽量附上：系统与设备、引擎版本、复现步骤、相关日志，以及“我只是按了一下”的具体是哪一下。

使用或再发布本项目代码时，请保留原作者与上游项目的署名，并检查相关素材和依赖各自的授权要求。FNF 及其相关作品归其各自权利人所有。

### 别忘了我的Discord！<img src="https://cdn.simpleicons.org/discord/5865F2" width="20" height="20" alt="Discord" style="vertical-align: middle;"> [这里](https://discord.gg/ZcvCQDzUPs)可以加入我的Discord频道

---

# D.C.Fantasy Land

| Avatar                                                                                                    | UserName                                      | Infomation                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img title="" src="https://avatars.githubusercontent.com/u/281948254?v=4" alt="FuckYouHaxe" width="97" /> | [D.C.LushiFu](https://github.com/D-C-LushiFu) | 哦是的是的这里是D.C.E.主开发者。你可以在[B站](https://space.bilibili.com/3461571971910090?spm_id_from=333.1007.0.)/[X](https://x.com/DCoderLushiFu)/[GameBanana](https://gamebanana.com/members/4644352)看到我嗯对 |
|                                                                                                           |                                               |                                                                                                                                                                                                                    |

本项目的贡献者信息持续整理中。感谢所有帮我翻译，以及指出“这里好像不太对劲”的朋友们。名字和头像会随项目维护情况更新。

# Psych Engine credits

| Avatar                                                                                                                            | Username                                                  | Involvement                                                 |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/shadowmario.png)   | [Shadow Mario](https://ko-fi.com/shadowmario)             | Main programmer and Head of Psych Engine                    |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/riveren.png)       | [Riveren](https://x.com/riverennn)                        | Main Artist/Animator of Psych Engine                        |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/bb.png)            | [Bb-Panzu](https://x.com/bbsub3)                          | Ex-programmer of Psych Engine                               |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/crowplexus.png)    | [Crowplexus](https://twitter.com/IamMorwen)               | Linux Support, HScript Iris, Input System v3, and Other PRs |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/kamizeta.png)      | [Kamizeta](https://www.instagram.com/cewweey/)            | Creator of Pessy, Psych Engine's mascot                     |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/maxneton.png)      | [MaxNeton](https://bsky.app/profile/maxneton.bsky.social) | Loading Screen Easter Egg Artist/Animator                   |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/keoiki.png)        | [Keoiki](https://x.com/Keoiki_)                           | Note Splash Animations and Latin Alphabet                   |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/sqirra.png)        | [SqirraRNG](https://x.com/gedehari)                       | Crash Handler and Base code for Chart Editor's Waveform     |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/mastereric.png)    | [EliteMasterEric](https://x.com/EliteMasterEric)          | Runtime Shaders support and Other PRs                       |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/majigsaw.png)      | [MAJigsaw](https://x.com/MAJigsaw77)                      | MP4 Video Loader Library (hxvlc)                            |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/flicky.png)        | [iFlicky](https://x.com/flicky_i)                         | Composer of Psync and Tea Time and some sound effects       |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/kade.png)          | [KadeDev](https://x.com/kade0912)                         | Fixed some issues on Chart Editor and Other PRs             |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/superpowers04.png) | [Superpowers04](https://x.com/Superpowers04)              | LUA JIT fork contributor                                    |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/cheems.png)        | [CheemsAndFriends](https://x.com/CheemsnFriendos)         | Creator of FlxAnimate lib                                   |

# Funkin Crew credits

| Avatar                                                                                                                            | Username                                       | Involvement                        |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------- |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/ninjamuffin99.png) | [NinjaMuffin99](https://x.com/ninja_muffin99)  | Programmer of Friday Night Funkin' |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/phantomarcade.png) | [PhantomArcade](https://x.com/PhantomArcade3K) | Animator of Friday Night Funkin'   |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/evilsk8r.png)      | [Evilsk8r](https://x.com/evilsk8r)             | Artist of Friday Night Funkin'     |
| ![](https://raw.githubusercontent.com/ShadowMario/FNF-PsychEngine/refs/heads/main/assets/shared/images/credits/kawaisprite.png)   | [KawaiSprite](https://x.com/kawaisprite)       | Composer of Friday Night Funkin'   |
