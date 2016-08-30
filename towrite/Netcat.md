# Netcat

[linux nc 命令传输文件](http://blog.sina.com.cn/s/blog_502c8cc4010111wv.html)

目的主机监听

nc -l 监听端口<未使用端口>  > 要接收的文件名

nc -l 4444 > cache.tar.gz

 

源主机发起请求

nc  目的主机ip    目的端口 < 要发送的文件

nc  192.168.0.85  4444 < /root/cache.tar.gz



