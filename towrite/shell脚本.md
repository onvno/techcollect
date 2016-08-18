## shell脚本

###[Shell 变量](http://www.runoob.com/linux/linux-shell-variable.html)
* 定义变量时，变量名不加美元符号（$，PHP语言中变量需要）
* 使用一个定义过的变量，只要在变量名前面加美元符号即可


```
your_name="qinjx"
echo $your_name
echo ${your_name}
```



### [shell中的循环语句、判断语句实例](http://www.jb51.net/article/52893.htm)

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

  ​



参考

* [sh脚本语法_基础](http://blog.csdn.net/missshirly/article/details/7496809)

```
[ -f "somefile" ] ：判断是否是一个文件
[ -x "/bin/ls" ] ：判断/bin/ls是否存在并有可执行权限
[ -n "$var" ] ：判断$var变量是否有值
[ "$a" = "$b" ] ：判断$a和$b是否相等
```

