# Vim概述

学习Vim，无他，鼠标费手。号称学习曲线再难，比起自己吃饭的手来，还是要值，学习之。

### 下载安装

* 安装[MacVim](https://github.com/b4winckler/macvim/releases)

* 拷贝`MacVim`到Application目录

* 拷贝`mvim`的shell程序到`/usr/local/bin`,即可通过shell输入`mvim`打开编辑器

  ```
  // sourcedir 为压缩包解压目录
  cp source_dir/mvim /usr/local/bin
  ```

* 打开编辑器可通过

  * `:version`查看版本信息
  * `:h macvim`查看帮助信息

  > 通过`:q`退出提示信息

  ​

### 概述Vim模式

1. **Normal Mode(普通模式)**
   默认进入vim之后，就处于这种模式。在这个模式下你可以快速的移动光标，删除，复制文字。
2. **Visual Mode(可视模式)**
   在这种模式下选定一些字符、行、多列。在普通模式下，可以按V\v进入。
3. **Insert Mode(插入模式)**
   其实就是指处在编辑输入的状态。普通模式下，可以按i\I，a\A，o\O进入，这几个进入插入模式后位置不同。
4. **Select Mode(选择模式)**
   这个模式和无模式编辑器的行为比较相似（Windows标准文本控件的方式）。这个模式中，可以用鼠标或者光标键高亮选择文本，不过输入任何字符的话，Vim会用这个字符替换选择的高亮文本块，并且自动进入插入模式。
5. **Command-Line(命令行模式)**
   在命令行模式中可以输入会被解释成并执行的文本。例如执行命令（”:”键），搜索（”/“和”?”键）或者过滤命令（”!”键）。在命令执行之后，Vim返回到命令行模式之前的模式，通常是普通模式。
6. **Ex Mode(Ex模式)**
   普通模式下键入Q进入该模式，这和命令行模式比较相似，在使用”:visual”命令离开Ex模式前，可以一次执行多条命令。

### 基本操作

#### 基本命令

```
i → Insert 模式，按 ESC 回到 Normal 模式.
x → 删当前光标所在的一个字符。
:wq → 存盘 + 退出 (:w 存盘, :q 退出)   （陈皓注：:w 后可以跟文件名）
dd → 删除当前行，并把删除的行存到剪贴板里
p → 粘贴剪贴板
hjkl (强例推荐使用其移动光标，但不必需) →你也可以使用光标键 (←↓↑→). 注: j 就像下箭头。
:help <command> → 显示相关命令的帮助。你也可以就输入 :help 而不跟命令。（陈皓注：退出帮助需要输入:q）
u   撤销上一步的操作
Ctrl+r 恢复上一步被撤销的操作
```



略，之后完善

#### 退出保存

```bash
# normal quit
:q

# save & quit
:wq

# save & quit, filename
:wq filename

# quit without saving
:q!

# quit all
:qa

# quit and save file path
:wq desktop/test.txt
# or 
:cd desktop
:wq test.txt
```



### 配置文件

`.vimrc`文件默认不存在，可自行在根目录创建`touch .vimrc`进行编辑设置

* 注释：使用`"`开头作为注释

  ```
  "   this is how a comment looks like in ~/.vimrc
  ```

* 基本设置

  ```

  ```

### 插件管理

使用`Vundle`管理Vim插件，安装方法:

**安装到根目录**

```
$ git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

**配置**

以下写在`.vimrc`配置前边

```
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" 写入插件开始

" 写入插件结束

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
```

**Vundle命令**

```
:PluginList       - lists configured plugins
:PluginInstall    - installs plugins; append `!` to update or just 
:PluginUpdate
:PluginSearch foo - searches for foo; append `!` to refresh local cache
:PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
```



### [bash设置成vim命令模式](http://blog.csdn.net/hjx5200/article/details/22329477)

略




### 可用Vim操作的软件

- chrome – vrome
- Firefox – Vimperator
- Visual Studio – ViEmu\VsVim
- Eclipse – viPlugin\Vrapper
- Netbeans – Jvi
- bash – 使用命令`set -o vi`
- Sublime Text – Vintage
- Emacs – evil




### 参考链接

#### 综合

* [安装配置MacVim全记录](http://wiki.11ten.net/Notes/%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AEmacvim%E5%85%A8%E8%AE%B0%E5%BD%95.html)

* [编辑器之神Vim](http://howiefh.github.io/2013/12/02/vim-is-the-god-of-all-editors/):基本命令及基本配置

* [强大的vim配置文件，让编程更随意](http://www.cnblogs.com/ma6174/archive/2011/12/10/2283393.html)：文章内有做着的配置[github地址](https://github.com/ma6174/vim)

* [vim中的杀手级插件: vundle](http://zuyunfei.com/2013/04/12/killer-plugin-of-vim-vundle/)

* [Emmet.vim 教程](https://www.zfanw.com/blog/zencoding-vim-tutorial-chinese.html)

  - [使用vundle安装vim插件emmet](http://ijs.me/archives/25.html):解决emmet使用误区

  > 生成基本的html结构，输入`!`，执行`C+y,`，注意`逗号`害死人

#### 配置

* [Mac开发利器之程序员编辑器MacVim学习总结](http://blog.csdn.net/eric_xjj/article/details/8932502)很详尽，需要再读


* [Vim配置](http://edyfox.codecarver.org/html/_vimrc_for_beginners.html):未仔细查询


* [像 IDE 一样使用 vim](https://github.com/yangyangwithgnu/use_vim_as_ide)
* [简明 Vim 练级攻略](http://coolshell.cn/articles/5426.html)
* [bash设置成vim命令模式](http://blog.csdn.net/hjx5200/article/details/22329477):bash的vim操作

#### 官网

* [VimAwesome](http://vimawesome.com/):vim插件集合
* [Vundle](https://github.com/VundleVim/Vundle.Vim)：Vim插件管理器
* [emmet-vim](https://github.com/mattn/emmet-vim#quick-tutorial):插件
* ​