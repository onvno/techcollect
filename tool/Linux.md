# Linux

#### linux下查看服务器CPU 内存硬件信息

```
# 查看内存大小
cat /proc/meminfo |grep MemTotal

# 查看cpu信息
cat /proc/cpuinfo
```



一些命令

```
uname -a               # 查看内核/操作系统/CPU信息的linux系统信息命令
head -n 1 /etc/issue   # 查看操作系统版本，是数字1不是字母L
cat /proc/cpuinfo      # 查看CPU信息的linux系统信息命令
hostname               # 查看计算机名的linux系统信息命令
lspci -tv              # 列出所有PCI设备
lsusb -tv              # 列出所有USB设备的linux系统信息命令
lsmod                  # 列出加载的内核模块
env                    # 查看环境变量资源
free -m                # 查看内存使用量和交换区使用量
df -h                  # 查看各分区使用情况
du -sh         # 查看指定目录的大小
grep MemTotal /proc/meminfo   # 查看内存总量
grep MemFree /proc/meminfo    # 查看空闲内存量
uptime                 # 查看系统运行时间、用户数、负载
cat /proc/loadavg      # 查看系统负载磁盘和分区
mount | column -t      # 查看挂接的分区状态
fdisk -l               # 查看所有分区
swapon -s              # 查看所有交换分区
hdparm -i /dev/hda     # 查看磁盘参数(仅适用于IDE设备)
dmesg | grep IDE       # 查看启动时IDE设备检测状况网络
ifconfig               # 查看所有网络接口的属性
iptables -L            # 查看防火墙设置
route -n               # 查看路由表
netstat -lntp          # 查看所有监听端口
netstat -antp          # 查看所有已经建立的连接
netstat -s             # 查看网络统计信息进程
ps -ef                 # 查看所有进程
top                    # 实时显示进程状态用户
w                      # 查看活动用户
id             # 查看指定用户信息
last                   # 查看用户登录日志
cut -d: -f1 /etc/passwd   # 查看系统所有用户
cut -d: -f1 /etc/group    # 查看系统所有组
crontab -l             # 查看当前用户的计划任务服务
chkconfig –list       # 列出所有系统服务
chkconfig –list | grep on    # 列出所有启动的系统服务程序
rpm -qa                # 查看所有安装的软件包
cat /proc/cpuinfo ：查看CPU相关参数的linux系统命令
cat /proc/partitions ：查看linux硬盘和分区信息的系统信息命令
cat /proc/meminfo ：查看linux系统内存信息的linux系统命令
cat /proc/version ：查看版本，类似uname -r
cat /proc/ioports ：查看设备io端口
cat /proc/interrupts ：查看中断
cat /proc/pci ：查看pci设备的信息
cat /proc/swaps ：查看所有swap分区的信息
```



* 远程服务器和本地文件传递


The syntax for `scp` is:

If you are on the computer from which you want to send file to a remote computer:

```
scp /file/to/send username@remote:/where/to/put

```

Here the `remote` can be a FQDN or an IP address.

On the other hand if you are on the computer wanting to receive file from a remote computer:

```
scp username@remote:/file/to/send /where/to/put

```

`scp` can also send files between two remote hosts:

```
scp username@remote_1:/file/to/send username@remote_2:/where/to/put

```

So the basic syntax is:

```
scp username@source:/location/to/file username@destination:/where/to/put

```

You can read [`man scp`](http://linux.die.net/man/1/scp) to get more ideas on this.



#### 开启外网访问端口,[连接](http://blog.csdn.net/hzw2312/article/details/**50247511)

```
开启允许对外访问的网络端口
/sbin/iptables -I INPUT -p tcp --dport 8000 -j ACCEPT #开启8000端口 
```



#### 查看在监听的端口,[连接](http://askubuntu.com/questions/166068/port-seems-to-be-open-but-connection-refused)

```
netstat -an | grep "LISTEN "
```

