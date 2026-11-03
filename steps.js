window.lessonSteps=[
  {
    "title": "找到浏览器连接器",
    "chapter": "找到连接器",
    "app": "千问办公 / 扩展 / 连接器",
    "image": "01-connectors-private.jpg",
    "description": "在千问办公侧栏进入「扩展 → 连接器」，找到系统级的「浏览器」。",
    "action": "点击带 Chrome 图标的「浏览器」卡片。",
    "expected": "下一屏应出现浏览器连接说明，以及当前连接状态。",
    "hotspot": [
      23,
      49,
      25,
      10
    ],
    "extra": "准备：已安装并打开千问办公桌面端和 Google Chrome。此课件记录的是 macOS 界面。"
  },
  {
    "title": "看懂连接说明",
    "chapter": "查看连接说明",
    "app": "千问办公 / 浏览器连接说明",
    "image": "02-install-instructions-private.jpg",
    "description": "本机界面显示「等待扩展连接」，并提供本地文件夹安装方法。",
    "action": "保持千问办公打开，接着到 Chrome 安装对应扩展。",
    "expected": "本课采用 Chrome 商店安装：省去开发者模式和手动加载文件夹。",
    "extra": "如果你的环境无法访问商店，可按千问办公窗口内提供的本地方法安装；本课没有执行该备用路径。不要复制讲师电脑的用户名路径。"
  },
  {
    "title": "在 Chrome 商店添加扩展",
    "chapter": "添加官方扩展",
    "app": "Google Chrome / Chrome 应用商店",
    "image": "03-chrome-store-private.jpg",
    "description": "核对扩展名称「千问办公」、开发者「钉钉科技有限公司」与网站 qwenwork.ai。",
    "action": "点击页面右侧蓝色的「添加至 Chrome」。",
    "expected": "Chrome 会弹出安装确认框，列出扩展申请的权限。",
    "hotspot": [
      66,
      36,
      10,
      5
    ],
    "extra": "<a href=\"https://chromewebstore.google.com/detail/qwenwork/ohoaagblcbhagohcegomiejkhgllekgo?hl=zh-CN\" target=\"_blank\" rel=\"noopener\">打开本课使用的 Chrome 商店详情 ↗</a> · 实录版本 1.5.20。"
  },
  {
    "title": "先看权限，再确认安装",
    "chapter": "核对安装权限",
    "app": "Google Chrome / 扩展安装确认",
    "image": "04-permissions-private.jpg",
    "dialog": true,
    "description": "安装前确认你愿意授予这些权限；请自己阅读弹窗内容。",
    "action": "确认权限符合你的用途后，再点击「添加扩展程序」。",
    "expected": "确认后继续等待，商店按钮会从「添加至 Chrome」变为「从 Chrome 中移除」。",
    "pause": true,
    "extra": "权限包括：访问页面调试程序后端、读取和更改所有网站数据、与本机应用通信、查看和管理标签页组。扩展可使用浏览器已有的登录状态执行网页操作。"
  },
  {
    "title": "核对安装成功",
    "chapter": "核对安装结果",
    "app": "Google Chrome / Chrome 应用商店",
    "image": "05-installed-private.jpg",
    "description": "商店按钮已变为「从 Chrome 中移除」，工具栏出现千问办公图标。",
    "action": "保留插件；不要点击「从 Chrome 中移除」。",
    "expected": "这一步确认的是安装完成。还需要连接具体标签页。",
    "extra": "安装完成不等于当前网页已连接。接下来在公开网页上打开千问办公扩展面板。"
  },
  {
    "title": "在 Chrome 菜单里找到扩展管理",
    "chapter": "找到扩展管理入口",
    "app": "Google Chrome / 三点菜单",
    "image": "14-chrome-manage-menu-private.jpg",
    "description": "按截图中的三个红框依次操作：右上角「⋮」→「扩展程序」→「管理扩展程序」。",
    "action": "进入管理页面，找到「千问办公」，确认它处于启用状态。",
    "expected": "这个入口用来管理扩展。下一步回到普通网页，再打开千问办公的操作面板。",
    "hotspot": [
      40,
      57,
      20,
      6
    ],
    "extra": "也可以在 Chrome 地址栏输入 <code>chrome://extensions/</code> 直接打开管理页。需要打开商店时，同一子菜单中有「访问 Chrome 应用商店」。"
  },
  {
    "title": "打开一个公开网页",
    "chapter": "打开演示网页",
    "app": "Google Chrome / example.com",
    "image": "07-example-page-private.jpg",
    "description": "在 Chrome 新建标签页，打开 https://example.com 。",
    "action": "页面加载后，点击地址栏右侧拼图形状的「扩展程序」按钮。",
    "expected": "Chrome 会展开扩展程序列表，在其中找到「千问办公」。",
    "hotspot": [
      91,
      6,
      2,
      3
    ],
    "extra": "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">打开公开演示页面 ↗</a> · 只用于本次讲解中的一次页面读取。"
  },
  {
    "title": "从扩展列表打开千问办公",
    "chapter": "打开千问办公面板",
    "app": "Google Chrome / 拼图扩展菜单",
    "image": "15-extension-menu-private.jpg",
    "dialog": true,
    "description": "这是点击拼图按钮后展开的列表。找到「千问办公」这一行。",
    "action": "点击「千问办公」名称或图标，打开它的连接面板。",
    "expected": "下一屏会看到「当前标签页」状态，以及「连接」按钮。",
    "hotspot": [
      7,
      39,
      52,
      12
    ],
    "extra": "如果已经固定到工具栏，也可以直接点击千问办公图标。旁边的图钉用于固定或取消固定；三点菜单中的「管理扩展程序」用于管理，不能代替打开连接面板。"
  },
  {
    "title": "连接当前标签页",
    "chapter": "连接当前标签页",
    "app": "Google Chrome / 千问办公扩展面板",
    "image": "08-connect-tab-private.jpg",
    "dialog": true,
    "description": "扩展面板显示当前标签页「未连接」，下方列出了千问办公桌面端。",
    "action": "点击「连接」。",
    "expected": "状态应变为「已连接」，按钮变为「移除」。",
    "pause": true,
    "extra": "这一步连接的是当前标签页。请先确认打开的是你打算让千问操作的网页。"
  },
  {
    "title": "确认标签页已连接",
    "chapter": "核对标签页状态",
    "app": "Google Chrome / 千问办公扩展面板",
    "image": "09-connected-popup-private.jpg",
    "dialog": true,
    "description": "当前标签页已经显示「已连接」。",
    "action": "返回千问办公，进入「扩展 → 连接器 → 浏览器」。",
    "expected": "千问办公端也应识别到 Chrome 扩展实例。",
    "extra": "面板上的「移除」用于移除当前页面连接。本课保持此公开演示标签页连接。"
  },
  {
    "title": "核对千问办公端状态",
    "chapter": "核对千问端状态",
    "app": "千问办公 / 浏览器连接器",
    "image": "10-qwen-connected-private.jpg",
    "description": "千问办公显示「扩展已连接」，并列出 1 个浏览器扩展实例。",
    "action": "核对 Chrome 与版本 1.5.20，再关闭说明窗口，点击「新任务」。",
    "expected": "安装和连接两端均已核对完成，可以发起一次实际读取。",
    "extra": "如果仍显示等待连接：保持千问办公桌面端运行，并检查 Chrome 中的扩展是否启用、当前页面是否已连接。"
  },
  {
    "title": "把验证提示词发给千问",
    "chapter": "发送验证提示词",
    "app": "千问办公 / 新任务",
    "image": "11-prompt-private.jpg",
    "description": "为什么要复制？用一次只读任务验证连接是否可用。点击画面里的「一键复制」，粘贴到你自己的千问办公「新任务」中发送。",
    "action": "在画面里的提示词旁直接点击「一键复制」，然后粘贴、发送。",
    "expected": "这次任务只读取公开演示页的标题和正文，用来检验浏览器连接是否真的可用。",
    "pause": true,
    "extra": "为什么复制这段提示词？安装成功、显示已连接，还不能证明千问能读到网页。统一用这段只读指令，便于对照结果；其中明确只读当前公开页，并要求使用浏览器连接器，避免换成其他方式获取内容。这只是安装后的验证示例，以后做任务可以换成自己的需求。",
    "prompt": true
  },
  {
    "title": "看到真实的读取结果",
    "chapter": "核对实际结果",
    "app": "千问办公 / 读取浏览器页面标题",
    "image": "12-read-result-private.jpg",
    "description": "千问办公已返回页面标题 Example Domain 和第一段英文原文。",
    "action": "对照 Chrome 网页，核对标题和文字是否一致。",
    "expected": "本次实际读取已完成。标题、正文与已连接的公开网页一致。",
    "extra": "成功标准：Chrome 已安装扩展、当前标签页已连接、千问办公识别到扩展，并能返回页面真实内容。"
  },
  {
    "title": "选读：遇到问题时查看调用记录",
    "chapter": "选读 · 调用记录",
    "app": "千问办公 / 任务处理过程",
    "image": "13-browser-tools-private.jpg",
    "description": "上一屏已完成安装与验证。本节用于排查问题，不是学员必须执行的安装步骤。",
    "action": "点击「浏览器：读取页面文本」可以进一步查看执行参数和工具返回。",
    "expected": "本次已核对工具实际返回的 Title: Example Domain、URL: https://example.com/ 及页面正文。",
    "pause": true,
    "extra": "正常读到网页结果就可以结束。只有结果不对、想确认是否使用浏览器连接器时，再展开处理记录查看。",
    "optional": true
  }
];
