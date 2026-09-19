// ==UserScript==
// @name         UOM无人机平台 - 视频后台播放与防暂停助手
// @namespace    https://github.com/wllzhang/uom-helper
// @version      1.0.1
// @description  中国民用航空局UOM无人驾驶航空器综合管理平台操控员培训视频助手：解除切换窗口自动暂停，解除10分钟无操作防挂机弹窗，保持原速合规累计学时。
// @author       wllzhang
// @match        https://uom.caac.gov.cn/*
// @run-at       document-start
// @grant        none
// @license      MIT
// @supportURL   https://github.com/wllzhang/uom-helper/issues
// @homepage     https://github.com/wllzhang/uom-helper
// ==/UserScript==

(function() {
    'use strict';

    console.log('[UOM-Helper] 脚本已加载，正在初始化防暂停和防挂机机制...');

    // 1. 核心拦截：锁定 window.onblur，防止平台监听失焦自动暂停视频
    try {
        Object.defineProperty(window, 'onblur', {
            get: () => null,
            set: () => {},
            configurable: false
        });
    } catch (e) {
        window.onblur = null;
    }

    // 2. 伪装窗口和标签页状态：始终处于激活（Focus）与可见（Visible）状态
    try {
        Object.defineProperty(document, 'hidden', { get: () => false });
        Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });
        document.hasFocus = () => true;
    } catch (e) {}

    // 3. 拦截失焦、切屏等事件在捕获阶段的向下传播
    ['blur', 'visibilitychange', 'pagehide'].forEach(eventName => {
        window.addEventListener(eventName, e => e.stopImmediatePropagation(), true);
        document.addEventListener(eventName, e => e.stopImmediatePropagation(), true);
    });

    // 4. 定时模拟用户活动：绕过平台 10 分钟（600秒）无操作防挂机弹窗
    setInterval(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
    }, 25000);

    // 5. 状态悬浮胶囊：提示用户脚本正在生效
    window.addEventListener('load', () => {
        // 避免在非主界面或登录页插入元素
        if (document.getElementById('uom-helper-status-badge')) return;

        const badge = document.createElement('div');
        badge.id = 'uom-helper-status-badge';
        badge.innerHTML = `
            <div style="display:flex;align-items:center;gap:6px;">
                <span style="font-size:15px;">🚁</span>
                <span style="font-size:13px;font-weight:500;">UOM 后台播放守护中</span>
            </div>
        `;
        badge.style.cssText = `
            position: fixed;
            right: 24px;
            bottom: 24px;
            padding: 8px 16px;
            background: rgba(30, 41, 59, 0.88);
            backdrop-filter: blur(8px);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.25);
            border-radius: 9999px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 999999;
            pointer-events: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            transition: opacity 0.4s ease, transform 0.4s ease;
            user-select: none;
        `;
        document.body.appendChild(badge);

        // 5秒后半透明化，鼠标移入恢复
        setTimeout(() => {
            badge.style.opacity = '0.35';
        }, 5000);
    });

})();
