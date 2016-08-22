## shell脚本

> 工作中写generate-uui的shell脚本，以下为心得

### Shell脚本初始

头部添加`#!/bin/sh`,用于指定脚本解释器.

“#!”是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行。

```
#!/bin/sh
```

如下，其他语言会有类似

```
#!/bin/bash
#!/usr/bin/php
```



### Shell脚本执行

```
sh fetch.sh
./fetch.sh  //需要加./,表示当前路径，否则因为路径不在环境变量中，linux不识别
```



###[Shell 变量](http://www.runoob.com/linux/linux-shell-variable.html)

* 定义变量时，变量名不加美元符号（$，PHP语言中变量需要）
* 使用一个定义过的变量，只要在变量名前面加美元符号即可
* 变量名和等号之间不能有空格


```
your_name="qinjx"
echo $your_name
echo ${your_name}
```



### Shell字符串

* 单引号

  ```
  str='this is a string'
  ```

  * 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的
  * 单引号字串中不能出现单引号（对单引号使用转义符后也不行

* 双引号

  ```
  your_name='lee'
  str="Hello, I know your are \"$your_name\"! \n"
  ```

  * 双引号里可以有变量
  * 双引号里可以出现转义字符




### 循环

* shell的循环主要有3种，for，while，until
  shell的分支判断主要有2种，if，case

  ```
  if [ -d "$moduleDir" ]
    then
      echo "存在$moduleDir"
      for package in `ls node_modules`
      do
        if [ $package = 'kero-adapter' ]
        then
          echo "卸载旧版${package}"
          cnpm uninstall kero-adapter
          echo "安装新版${package}"
          cnpm install kero-adapter
          echo "${package}已安装"
        fi
      done
  else
      cnpm install
  fi
  ```

* for循环

  ```
  for var in item1 item2 ... itemN
  do
      command1
      command2
      ...
      commandN
  done
  ```

  或者C风格

  ```
  for (( EXP1; EXP2; EXP3 ))
  do
      command1
      command2
      command3
  done
  ```

  写成一行命令行输入

  ```
  for var in item1 item2 ... itemN; do command1; command2… done;
  ```

  ​


### 数组

* 声明数组

  ```
  # 直接赋值
  array[0]=”Zero” array[1]=”One” array[2]=”Two”

  # 小括号空格
  array=(Zero One Two)

  # 引号空格
  array=”Zero One Two”
  ```

* 数组长度

  ```
  echo ${#array[@]}
  # 或者
  echo ${#array[*]}
  ```

* 删除数组元素

  ```
  # 删除元素
  unset array[0]

  # 删除数组
  unset array
  ```

* 切片

  ```
  # 从第0个元素开始，截取两个
  echo ${array[@]:0:2}
  Zero One
  ```

* 遍历

  ```
  # for循环
  for(( i=0;i<${#array[@]};i++)) do echo ${array[i]}; done;

  # for...in
  for i in ${array[@]};do echo $i ;done
  ```

  ​



### [判断文件是否存在的shell脚本代码](http://www.jb51.net/article/34330.htm)

```
#!/bin/sh
# 判断文件是否存在
# link：www.jb51.net
# date：2013/2/28

myPath="/var/log/httpd/"
myFile="/var /log/httpd/access.log"

# 这里的-x 参数判断$myPath是否存在并且是否具有可执行权限
if [ ! -x "$myPath"]; then
 mkdir "$myPath"
fi
# 这里的-d 参数判断$myPath是否存在
if [ ! -d "$myPath"]; then
 mkdir "$myPath"
fi

# 这里的-f参数判断$myFile是否存在
if [ ! -f "$myFile" ]; then
 touch "$myFile"
fi
# 其他参数还有-n,-n是判断一个变量是否是否有值
if [ ! -n "$myVar" ]; then
 echo "$myVar is empty"
 exit 0
fi

# 两个变量判断是否相等
if [ "$var1" = "$var2" ]; then
 echo '$var1 eq $var2'
else
 echo '$var1 not eq $var2'
fi
```



### [[转\]linux shell 获取当前正在执行脚本的绝对路径](http://www.cnblogs.com/FlyFive/p/3640267.html)

```
basepath=$(cd `dirname $0`; pwd)
```



### shell返回值:get shell return value

* [returning value from called function in shell script](http://stackoverflow.com/questions/8742783/returning-value-from-called-function-in-shell-script)

* linux shell中如何接收程序返回值

  $?
  $?就是表示上一次脚本或者命令退出时的返回值。通常，0代表成功；非0代表出现错误。
  类似的一些符号如$0 $1 $2 $@ $# 。

* [从shell脚本返回内容提取想要的字符串数据？](http://bbs.chinaunix.net/thread-4170442-1-1.html)


  ```
  查看链接示例
  ```

 

### 完整例子

```
#!/bin/sh

cdir=`pwd`

prodName=(
  "neoui-tree"
  "neoui-grid"
)

# 安装依赖包 && 最新kero-adapter包
modulePre="$cdir/node_modules/"
moduleName=(
  "kero-adapter"
  "neoui-polyfill"
  )

if [ -d "$modulePre" ]
then
  for name in ${moduleName[@]}
  do
    modulePath="${modulePre}${name}"
    if [ -d $modulePath ]
    then
      echo "卸载旧版$name"
      npm uninstall $name
      echo "安装新版$name"
      npm install $name
      echo "已安装成功新版$name"
    else
      echo "安装新版$name"
      npm install $name
      echo "已安装成功新版$name"
    fi
  done
else
    npm install
fi

# 更新下载
for name in ${prodName[@]}
do
  prodDir="$cdir/$name"
  remoteDir="git@github.com:iuap-design/${name}.git"

  if [ ! -d $prodDir ]
  then
    echo "--- 开始下载${name} ---"
    git clone ${remoteDir}
  	echo "--- ${name}下载完成~~! ---"
  fi
done

# 分支切换到 release
for name in ${prodName[@]}
do
	cd ${name}
  echo "--- ${name}进行分支切换和代码更新 ---"
  git checkout release
  git pull origin release
  cd ..
  echo "--- 分支切换和代码更新完成 ---"
done
```

 



参考

* [sh脚本语法_基础](http://blog.csdn.net/missshirly/article/details/7496809)

```
[ -f "somefile" ] ：判断是否是一个文件
[ -x "/bin/ls" ] ：判断/bin/ls是否存在并有可执行权限
[ -n "$var" ] ：判断$var变量是否有值
[ "$a" = "$b" ] ：判断$a和$b是否相等
```

* [Shell脚本编程30分钟入门](https://github.com/qinjx/30min_guides/blob/master/shell.md)



拓展阅读

* [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/)，非常详细，非常易读，大量example，既可以当入门教材，也可以当做工具书查阅
* [Unix Shell Programming](http://www.tutorialspoint.com/unix/unix-shell.htm)
* [Linux Shell Scripting Tutorial - A Beginner's handbook](http://bash.cyberciti.biz/guide/Main_Page)