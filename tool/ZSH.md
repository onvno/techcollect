## ZSH

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

3. 主题

   ```
   ZSH_THEME="random"
   ```

   ​

4. 插件&操作

   `j doc`打开历史纪录中的doc目录

   `tab`可打开命令提示或者切换目录

   `node插件`:输入`node-docs http`可快速打开文档

   ​

5. 其他


