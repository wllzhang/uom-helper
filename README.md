# 🚁 UOM无人机平台 - 视频后台播放与防暂停助手

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-Install-red.svg)](https://greasyfork.org/zh-CN/scripts)
[![ScriptCat](https://img.shields.io/badge/ScriptCat-%E8%84%9A%E6%9C%AC%E7%8C%AB-orange.svg)](https://scriptcat.org/)

一款专为 **中国民用航空局民用无人驾驶航空器综合管理平台（UOM）** 打造的油猴辅助脚本。

针对平台操控员资质理论培训视频，解除窗口失焦自动暂停限制与 10 分钟防挂机弹窗，让你在分屏、切屏或后台做其他工作时，能够稳定、合规、全自动地累积理论学时。

---

## ✨ 核心特性

- 🛡️ **解除切屏暂停**：拦截网页窗口失焦事件（`onblur` 及 `visibilitychange`），分屏、最小化或切换到其他应用绝不中断播放。
- ⏰ **防超时弹窗卡死**：平台原逻辑超过 10 分钟（600 秒）无鼠标操作会弹窗强制暂停。脚本每 25 秒静默触发轻微活跃信号，彻底告别挂机弹窗。
- ⚖️ **原速合规计时**：遵循民航局后台真实时间戳与单秒校验逻辑（`(e - t == 0 || e - t == 1)`），不进行任何高风险的暴力篡改，保证上报数据的真实性与考试资质审核安全。
- 🎨 **轻量悬浮提示**：右下角优雅的状态胶囊，进入视频页面即可直观确认助手已就绪，5 秒后自动半透明不打扰。

---

## 📥 安装方式

### 方式一：应用市场一键安装（推荐）
- **Greasy Fork**：[点击前往安装](https://greasyfork.org/zh-CN/scripts) *(待提交后更新专属链接)*
- **脚本猫 (ScriptCat)**：[点击前往安装](https://scriptcat.org/) *(待提交后更新专属链接)*

### 方式二：从 GitHub Raw 链接直接安装
在浏览器已安装 **Tampermonkey** 或 **ScriptCat** 的前提下，点击下方链接：
👉 [点击直接安装 uom-helper.user.js](https://raw.githubusercontent.com/wllzhang/uom-helper/main/uom-helper.user.js)

### 方式三：手动复制安装
1. 打开浏览器 Tampermonkey 扩展图标 -> 点击 **“添加新脚本”**。
2. 复制本项目 [`uom-helper.user.js`](./uom-helper.user.js) 内的全部代码并粘贴覆盖。
3. 按 `Ctrl + S` 保存即可。

---

## 🛠️ 自动化发布与同步配置（开发者指南）

本项目已适配 **Greasy Fork** 和 **ScriptCat** 的自动化 Webhook 机制。每次在 GitHub 提交或推送代码，平台将自动拉取并发布新版本：

### 1. Greasy Fork 自动同步设置
1. 登录 [Greasy Fork](https://greasyfork.org/zh-CN)并在首次发布脚本后，进入该脚本页面。
2. 点击 **“管理” (Admin)** -> 找到 **“源码同步” (Source Syncing)**。
3. 复制 Greasy Fork 为你生成的 **Webhook 专属 URL**。
4. 打开本 GitHub 仓库 -> **Settings** -> **Webhooks** -> **Add webhook**：
   - **Payload URL**: 粘贴 Greasy Fork 的 Webhook URL
   - **Content type**: 选择 `application/x-www-form-urlencoded`
   - **Events**: 勾选 `Just the push event`
5. 点击 **Add webhook** 保存。

### 2. 脚本猫 (ScriptCat) 自动同步设置
1. 登录 [脚本猫](https://scriptcat.org/) -> 进入脚本管理详情页。
2. 打开 **“版本管理 / Webhook 同步”** 获取 Webhook 地址。
3. 同样添加到 GitHub 仓库的 Webhooks 列表中即可。

---

## ☕ 赞助与支持

如果这个小工具帮你节省了宝贵的时间，欢迎请作者喝一杯咖啡 ☕！

<p align="center">
  <img src="./assets/reward.jpg" alt="打赏支持" width="480" />
</p>
<p align="center">
  <i>感谢你的认可与支持，祝各位飞友理论考试顺利通关、畅快起飞！</i>
</p>

---

## ⚠️ 免责声明

1. 本脚本仅供前端技术交流与学习使用，未对民航局 UOM 平台的任何通信数据包及接口协议做逆向修改。
2. 脚本采用原速合规播放机制，请使用者合理安排学习时间并认真掌握航空器法规及安全知识。
3. 使用本脚本所产生的一切后果由使用者自行承担，与作者无关。
