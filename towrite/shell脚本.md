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

  **if判断条件注意`[]`内变量需要与括号有空格，判断等于否，只需要一个`=`号即可**

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
  [Shell脚本IF条件判断和判断条件总结](http://www.jb51.net/article/56553.htm)

  ```shell
  #!/bin/sh
  SYSTEM=`uname -s`    #获取操作系统类型，我本地是linux
  if [ $SYSTEM = "Linux" ] ; then     #如果是linux的话打印linux字符串
  echo "Linux" 
  elif [ $SYSTEM = "FreeBSD" ] ; then   
  echo "FreeBSD" 
  elif [ $SYSTEM = "Solaris" ] ; then 
  echo "Solaris" 
  else 
  echo "What?" 
  fi     #ifend
  ```

  ​

  ​

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


### 获取文件名及后缀名 [实例](http://blog.sina.com.cn/s/blog_69b31b1d0101dhni.html)

```bash
file=”thisfile.txt”
echo “filename: ${file%.*}”
echo “extension: ${file##*.}”
输出：
filename: thisfile
extension: txt
```



### 字符串

* 字符串连接，无需“+”，直接`"$name/test.html"


* 替换文件中的字符串

  资料`sed -i -- 's/foo/bar/g' *`方法报错[SO链接](http://unix.stackexchange.com/questions/112023/how-can-i-replace-a-string-in-a-files)，目前使用如下

  ```
  $sed -ig 's/tatic/static/' a.txt
  ```
  测试另外一种方法可行，但是目前都会生成一个冗余文件，需要解决.[链接](http://unix.stackexchange.com/questions/159367/using-sed-to-find-and-replace)

  ```
  sed -i -e 's/foo/bar/g' filename
  # -e option indicates a command to run.
  # s is used to replace the found expression "foo" with "bar"
  # -i option is used to edit in place on filename.
  ```


* 替换字符串中的部分内容,链接[Replace a string in shell script using a variable](http://stackoverflow.com/questions/3306007/replace-a-string-in-shell-script-using-a-variable)

  ```
  pax> export replace=987654321
  pax> echo X123456789X | sed "s/123456789/${replace}/"
  X987654321X
  pax> _
  ```

  以上方法，无法在shell脚本中获取值，只能echo到屏幕上。

* 替换字符串中部分内容：链接[Replace one substring for another string in shell script](http://stackoverflow.com/questions/13210880/replace-one-substring-for-another-string-in-shell-script)

  ```
  var="${baseStr/<%Replace%>/1234}"
  echo $var
  # 如需要全部替换，可采用以下方法，多一条`/`
  $ var="12345678abc"
  $ replace="test"
  $ echo ${var//12345678/$replace}
  testabc
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

 

### 逐行读取数据复制到变量中

简单的读取文件复制到变量中：

```
nameStr=$(cat name.txt)
```

保存的内容没有换行。

以下目的是确保输出保存的内容有换行,[参考链接SO](http://stackoverflow.com/questions/10929453/read-a-file-line-by-line-assigning-the-value-to-a-variable)

```shell
#!/bin/bash
while IFS='' read -r line || [[ -n "$line" ]]; do
    echo "Text read from file: $line"
done < "$1"
```

- `IFS=''` (or `IFS=`) prevents leading/trailing whitespace from being trimmed.
- `-r` prevents backslash escapes from being interpreted.
- `|| [[ -n $line ]]` prevents the last line from being ignored if it doesn't end with a `\n` (since `read` returns a non-zero exit code when it encounters EOF).

实际使用如下：

```shell
basePath="src/public/base.html"
baseStr=""

while IFS='' read -r line || [[ -n "$line" ]]; do
	baseStr="$baseStr\n$line"
done < "$basePath"
echo $baseStr
```

另外一种方法测试过程发现最后一行只有一个标点符号，会存在问题

```shell
#!/usr/bin/bash
# 有点问题
filename="$1"
while read -r line
do
    name="$line"
    echo "Name read from file - $name"
done < "$filename"
```

同样的方法，也会存在标点读取不到:[链接](http://stackoverflow.com/questions/1521462/looping-through-the-content-of-a-file-in-bash)

```shell
while read p; do
  echo $p
done <peptides.txt
```







### 清空文件几种方法

```
> file
cat /dev/null > file
echo "" > filename
```



### 写入文件

注意`echo`不能少.链接[Open and write data on text file by bash/shell scripting](http://stackoverflow.com/questions/11162406/open-and-write-data-on-text-file-by-bash-shell-scripting)

```
echo "some data for the file" >> fileName //字符串覆盖
$ cat file > copy_file //完全替换覆盖内容
$ cat file >> copy_file //添加内容，不覆盖原有
```





### Shell常用

* 在shell 中 单括号里面，可以是：命令语句。 如`$(cat base.html)`

* shell中定义函数

  ```
  function sumNum()
  {
  	echo $1,$2
  	return $(($1+$2))
  }

  sumNum 5 7
  total=$(sumNum 3 2)
  echo $total,$?

  -------------
  # 以下为返回结果
  5,7
  3,2,5
  ```

  [参考链接](http://www.cnblogs.com/chengmo/archive/2010/10/17/1853356.html)以上说明：

  * total=$(fSum 3 2);  通过这种调用方法，我们清楚知道，在shell 中 单括号里面，可以是：命令语句。 因此，我们可以将shell中函数，看作是定义一个新的命令，它是命令，因此 各个输入参数直接用 空格分隔。 一次，命令里面获得参数方法可以通过：$0…$n得到。 $0代表函数本身
  * 函数返回值，只能通过**$?** 系统变量获得，直接通过=,获得是空值。其实，我们按照上面一条理解，知道函数是一个命令，在shell获得命令返回值，都需要通过$?获得。

* 函数中定义局部变量

  ```
  local num=10;
  ```

* 获取操作系统

  ```
  `uname -s`
  `uname`
  ```

  ​



### 字符串替换



**参考**

* [sh脚本语法_基础](http://blog.csdn.net/missshirly/article/details/7496809)

```
[ -f "somefile" ] ：判断是否是一个文件
[ -x "/bin/ls" ] ：判断/bin/ls是否存在并有可执行权限
[ -n "$var" ] ：判断$var变量是否有值
[ "$a" = "$b" ] ：判断$a和$b是否相等
```

* [Shell脚本编程30分钟入门](https://github.com/qinjx/30min_guides/blob/master/shell.md)




**拓展阅读**

* [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/)，非常详细，非常易读，大量example，既可以当入门教材，也可以当做工具书查阅
* [Unix Shell Programming](http://www.tutorialspoint.com/unix/unix-shell.htm)
* [Linux Shell Scripting Tutorial - A Beginner's handbook](http://bash.cyberciti.biz/guide/Main_Page)



**文章**

* [linux shell 自定义函数(定义、返回值、变量作用域）介绍](http://www.cnblogs.com/chengmo/archive/2010/10/17/1853356.html)

* [Looping through the content of a file in Bash?](http://stackoverflow.com/questions/1521462/looping-through-the-content-of-a-file-in-bash)