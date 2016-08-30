# 命令行工具-curl

官网[Using cURL to automate HTTP jobs](https://curl.haxx.se/docs/httpscripting.html):

## HTTP Scripting

#### See thr Protocol基本示例

```
curl --trace-ascii bai.txt http://www.baidu.com
```

以上命令现实curl通过send和receive获取到的EVERYTHING,保存到当前目录下的bad.txt文件（会自动创建）

如需要添加time,可通过:

```
curl --trace-ascii du.txt --trace-time http://www.baidu.com
```

默认情况curl的返回会是命令行的stdout，可以使用`-o`或`-O`来实现输出：

```
curl -o fileName  www.baidu.com
```



## URL

#### Spec

URL(Uniform Resource Locator)描述如何能在互联网中获取特定资源(how you specify the address of a particular resource on the Internet. ).比如例子：http://www.baidu.com

> And yeah, the formal name is not URL, it is URI.



## Fetch a page

#### GET

```
curl https://www.baidu.com
```

#### POST

```
curl --data name=curl http://www.baidu.com
```



## HTML forms

#### GET

```html
 <form method="GET" action="junk.cgi">
 <input type=text name="birthyear">
 <input type=submit name=press value="OK">
 </form>
```
If the original form was seen on the page "www.hotmail.com/when/birth.html", the second page you'll get will become "www.hotmail.com/when/junk.cgi?birthyear=1905&press=OK".
```
curl "http://www.hotmail.com/when/junk.cgi?birthyear=1905&press=OK"
```



#### POST

```html
 <form method="POST" action="junk.cgi">
 <input type=text name="birthyear">
 <input type=submit name=press value=" OK ">
 </form>
```

```
curl --data "birthyear=1905&press=%20OK%20"  http://www.example.com/when.cgi
```



#### File Upload POST

```
<form method="POST" enctype='multipart/form-data' action="upload.cgi">
 <input type=file name=upload>
 <input type=submit name=press value="OK">
</form>
```

```
curl --form upload=@localfilename --form press=OK [URL]
```



#### Hidden Fields

```
<form method="POST" action="foobar.cgi">
 <input type=text name="birthyear">
 <input type=hidden name="person" value="daniel">
 <input type=submit name="press" value="OK">
</form>
```

页面内已经有了隐藏字段，默认填了内容，可通过以下post:

```
curl --data "birthyear=1905&press=OK&person=daniel" [URL]
```



## HTTP upload

#### PUT

Put a file to a HTTP server with curl:

```
curl --upload-file uploadfile http://www.baidu.com
```



## HTTP Authentication认证

#### 基本认证 Basic Authentication

`curl`使用`user` and `password`作为认证

```
curl --user name:paddword http://www.example.com
```

#### 其他认证 Other Authentication

通过服务器头部返回，可得知需要的不同认证方法，通过`--ntml,--digest,--negotiate`... 选项认证

#### 代理认证 Proxy Authentication

有些HTTP仅允许通过代理进入，可以通过以下方法

```
curl --proxy-user proxyuser:proxypassword http://www.example.com
```



## More HTTP Headers

#### Referer

```
 curl --referer http://www.example.come http://www.example.com
```



#### User Agent

设置浏览器user-agent,告诉服务器在使用某种浏览器

```
# To make curl look like Internet Explorer 5 on a Windows 2000 box:
curl --user-agent "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)" [URL]

# Or why not look like you're using Netscape 4.73 on an old Linux box:
curl --user-agent "Mozilla/4.73 [en] (X11; U; Linux 2.2.15 i686)" [URL]
```



## Redirects

```
 curl --location http://www.example.com
```



## Cookies

发送一些cookies的基本方法

```
curl --cookie "name=Daniel" http:wwww.example.com
```

```
curl --dump-header headers_and_cookies http://www.example.com
```



## 相关工具

[wget](https://www.gnu.org/software/wget/)：wget downloads a site recursively, using FTP or HTTP

完整链表:[List Of Related Tools](https://curl.haxx.se/docs/relatedtools.html)

