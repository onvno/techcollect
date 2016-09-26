# Server启动多种方式

这里罗列了所有的方式[**web-servers.md**](https://gist.github.com/willurd/5720255),以下罗列目前自己常用到的：

#### Python2 & 3 shell脚本（.sh）

```shell
#!/usr/bin/env bash

PY_VERSION=`python -c 'import sys; print("%i" % (sys.hexversion<0x03000000))'`
if [ $PY_VERSION -eq 0 ]; then
    python -m http.server
else
    python -m SimpleHTTPServer
fi
```



#### Python 2.x

```
$ python -m SimpleHTTPServer 8000
```

#### Python 3.x

```
$ python -m http.server 8000
```

#### Ruby

```
$ ruby -run -ehttpd . -p8000
```

#### Node http-server

```
$ npm install -g http-server   # install dependency
$ http-server -p 8000
```

#### Node node-static

```
$ npm install -g node-static   # install dependency
$ static -p 8000
```

#### PHP

```
$ php -S 127.0.0.1:8000
```

