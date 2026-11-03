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
    "description": "千问办公的连接说明提供本机扩展文件夹。本教程按这个开发者模式流程安装。",
    "action": "保持千问办公运行，按下面步骤打开 Chrome 扩展管理页。",
    "expected": "主流程：开启开发者模式 → 加载未打包的扩展程序 → 选择千问办公的扩展文件夹。",
    "extra": "这是千问办公界面提供的本地加载方式。不同系统的扩展路径不同，以你自己的千问办公显示为准；已安装并连接的学员无需重复安装。"
  },
  {
    "title": "在 Chrome 菜单里找到扩展管理",
    "chapter": "找到扩展管理入口",
    "app": "Google Chrome / 三点菜单",
    "image": "14-chrome-manage-menu-private.jpg",
    "description": "按截图中的三个红框依次操作：右上角「⋮」→「扩展程序」→「管理扩展程序」。",
    "action": "依次点击「⋮」→「扩展程序」→「管理扩展程序」。",
    "expected": "扩展管理页右上角有「开发者模式」开关，下一步将它打开。",
    "hotspot": [
      40,
      57,
      20,
      6
    ],
    "extra": "也可以在 Chrome 地址栏输入 <code>chrome://extensions/</code> 直达扩展管理页。"
  },
  {
    "title": "打开右上角的开发者模式",
    "chapter": "开启开发者模式",
    "app": "Google Chrome / 扩展程序",
    "image": "16-developer-mode-private.jpg",
    "description": "在扩展管理页右上角找到「开发者模式」，将开关切换为蓝色开启状态。",
    "action": "点击右上角「开发者模式」开关；如果已经开启，保持开启。",
    "expected": "页面左上角出现「加载未打包的扩展程序」「打包扩展程序」「更新」三个按钮。",
    "hotspot": [
      92,
      9,
      7.6,
      32
    ],
    "extra": "截图取自你补充的实际界面，只保留本步骤所需的顶部区域。这里只需要开发者模式和「加载未打包的扩展程序」，不需要点击「打包扩展程序」。",
    "pause": true
  },
  {
    "title": "找到千问办公提供的扩展文件夹",
    "chapter": "找到本机扩展目录",
    "app": "千问办公 / 浏览器连接说明",
    "image": "02-install-instructions-private.jpg",
    "description": "回到千问办公的「扩展 → 连接器 → 浏览器」说明，找到第 2 项「打开扩展文件夹」。",
    "action": "点击「打开文件夹」找到 chrome-extension，或点击「复制路径」备用。",
    "expected": "你需要的是千问办公提供的扩展文件夹，里面包含 manifest.json。",
    "hotspot": [
      38.6,
      65.4,
      16,
      3.8
    ],
    "extra": "讲师电脑的路径已隐藏。请使用你自己的千问办公显示的路径，不要把整个千问办公应用目录、压缩包或其中单个文件当作扩展目录。"
  },
  {
    "title": "点击加载未打包的扩展程序",
    "chapter": "加载未打包扩展",
    "app": "Google Chrome / 扩展程序",
    "image": "16-developer-mode-private.jpg",
    "description": "回到 Chrome 扩展管理页，确认开发者模式已开启。",
    "action": "点击左上角「加载未打包的扩展程序」。",
    "expected": "系统会弹出文件夹选择窗口，让你选择扩展程序目录。",
    "hotspot": [
      0.8,
      53,
      12,
      40
    ],
    "extra": "某些 Chrome 版本把同一个按钮写作「加载已解压的扩展程序」。本截图中的名称是「加载未打包的扩展程序」。"
  },
  {
    "title": "选择 chrome-extension 整个文件夹",
    "chapter": "选择扩展文件夹",
    "app": "Google Chrome / 选择扩展程序目录",
    "image": "17-unpacked-folder-private.jpg",
    "description": "在弹出的窗口中找到千问办公提供的 chrome-extension 文件夹，选中整个文件夹。",
    "action": "确认目录正确后，点击右下角「选择」（有些系统显示「打开」）。",
    "expected": "Chrome 会加载这个文件夹；回到扩展列表，应能找到已启用的「千问办公」。",
    "hotspot": [
      89.8,
      90.2,
      8.2,
      5.7
    ],
    "pause": true,
    "extra": "macOS 找不到文件夹时：按 ⌘⇧G，粘贴刚才从千问办公复制的本机路径，按回车定位，再点「选择」。应选择包含 manifest.json 的文件夹，不是点击 manifest.json 文件。若已经安装了同名扩展，先核对现有扩展来源和连接状态，避免重复加载。"
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
