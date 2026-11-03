# 千问办公浏览器连接实操课

日期：2026-11-03（America/Los_Angeles）。实录：千问办公 macOS v1.3.2，Chrome 扩展 v1.5.20。

来源：Chrome 商店 https://chromewebstore.google.com/detail/qwenwork/ohoaagblcbhagohcegomiejkhgllekgo
开发者：钉钉科技有限公司，网站 qwenwork.ai。商店安装，无需开发者模式。
本机提供的扩展可执行文件与应用包自带版本一致（15 个文件中，只有部署配置不同）。这是有限静态检查，不是完整安全审计。扩展权限包括 debugger、所有网站、tabs、nativeMessaging 等；用户已在安装权限提示出现后明确同意。

验证：Chrome 显示“从 Chrome 中移除”；扩展面板显示当前页“已连接”；千问办公显示“扩展已连接”和 Chrome v1.5.20；发送只读取 https://example.com 的任务后，已查看实际 browser get_page_text 工具参数与输出，返回 Title: Example Domain、URL 与正文。

课件 index.html，12 步；assets 保存真实逐步截图。支持章节跳转、点击位置提示、自动演示、关键节点暂停、截图原尺寸放大、提示词复制、全屏、键盘切换和手机布局。课件不控制观众电脑。

参考形式：https://oioi-academy.com/offline-exchange/grokbot-codex-sample/ 。页面源码独立编写。

本地运行：python3 -m http.server 8793 --bind 127.0.0.1 --directory .
