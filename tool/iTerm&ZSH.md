## iTerm & ZSH

## iTerm2

基本操作

* `CMD+D`当前tab水平方向分屏，`CMD+SHIFT+D`竖直方向分屏

* `CMD + T`创建新的tab,

* `CMD+/`发现光标位置，有特效

* `CMD+OPTIONS+E`多`tab`中搜索

  ​



参考链接

* [终极 Shell——ZSH](https://zhuanlan.zhihu.com/p/19556676)

* [Become A Command-Line Power User With Oh-My-ZSH And Z](https://www.smashingmagazine.com/2015/07/become-command-line-power-user-oh-my-zsh-z/)



1. 安装`oh my zsh`

   ```
   wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
   ```

   安装完成之后退出当前会话重新打开一个终端窗口，你就可以见到彩色的提示

2. 配置

   zsh 的配置主要集中在用户当前目录的.zshrc里，用 vim 或你喜欢的其他编辑器打开.zshrc

   > .zshrc为根目录中的隐藏文件

3. 主题

   ```
   ZSH_THEME="random"
   ```

   ​

4. 插件&操作

   `j doc`打开历史纪录中的doc目录

   `tab`可打开命令提示或者切换目录

   `node插件`:输入`node-docs http`可快速打开文档








##  zsh插件

- sublime: 
  - `st`:启动sublime
  - `st dir`:将`dir`加入到工作目录
  - `st file`:打开`file`
  - `stt`:将当前目录加入到工作目录
- web-search
  - `google swift学习`:通过google搜索`swift学习`
  - `baidu 天气预报`:百度搜索
  - `bing`...
- OSX
  - `tab`当前的目录在新的`tab`页打开一份
  - `ofd`当前路径在`finder`中打开
  - `pfd`返回当前`finder`打开的顶层窗口路径
  - `cdf`进入（`cd`）当前`finder`打开的顶层窗口中
  - `pushdf`
  - `quick-look`快速预览文件
  - `man-preview



## zsh 插件集合及文章

- [awesome-zsh-plugins](https://github.com/unixorn/awesome-zsh-plugins):A collection of ZSH frameworks, plugins & themes inspired by the various awesome list collections out there.
- [Oh My Zsh 插件篇 - 实用工具](http://www.swiftcafe.io/2015/12/04/omz-plugin/?utm_source=tuicool&utm_medium=referral)