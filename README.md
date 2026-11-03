# 千问办公浏览器连接实操课

日期：2026-11-03（America/Los_Angeles）。实录：千问办公 macOS v1.3.2，Chrome 扩展 v1.5.20。

来源：Chrome 商店 https://chromewebstore.google.com/detail/qwenwork/ohoaagblcbhagohcegomiejkhgllekgo
开发者：钉钉科技有限公司，网站 qwenwork.ai。主教程按千问办公提供的本机扩展目录，采用开发者模式加载；商店安装收纳为单独备选入口。
本机提供的扩展可执行文件与应用包自带版本一致（15 个文件中，只有部署配置不同）。这是有限静态检查，不是完整安全审计。扩展权限包括 debugger、所有网站、tabs、nativeMessaging 等；用户已在安装权限提示出现后明确同意。

验证：Chrome 显示“从 Chrome 中移除”；扩展面板显示当前页“已连接”；千问办公显示“扩展已连接”和 Chrome v1.5.20；发送只读取 https://example.com 的任务后，已查看实际 browser get_page_text 工具参数与输出，返回 Title: Example Domain、URL 与正文。

课件 index.html，15 步（最后一节为选读）；assets 保存真实逐步截图（发布版已遮盖标签页、书签、昵称、任务与本机路径）。支持章节跳转、点击位置提示、自动演示、关键节点暂停、截图原尺寸放大、输入框原位置一键复制提示词、全屏、键盘切换和手机布局。课件不控制观众电脑。

参考形式：https://oioi-academy.com/offline-exchange/grokbot-codex-sample/ 。页面源码独立编写。

本地运行：python3 -m http.server 8793 --bind 127.0.0.1 --directory .

2026-11-03 修订：加入用户提供的 Chrome 三点菜单入口截图、拼图菜单打开扩展步骤；明确区分管理扩展与打开扩展面板；在发送位置提供完整提示词与直接复制按钮，并说明只读验证的用途。发布资源仅保留遮盖后的 JPEG，不保留原始 PNG。

开发者模式修订：主流程依次为扩展管理页、开发者模式、取得本机扩展目录、加载未打包扩展、选择 chrome-extension 文件夹、连接标签页和验证。开发者开关截图采用用户补充画面；文件夹选择窗口已补录并遮盖私人位置。本机原有商店扩展未卸载，文件夹选择示范录到最终确认之前，未重复安装；后续连接与读取结果沿用已验证实录。
