(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{508:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用docker-compose进行单机集群启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用docker-compose进行单机集群启动"}},[t._v("#")]),t._v(" 使用docker-compose进行单机集群启动")]),t._v(" "),a("h2",{attrs:{id:"docker的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker的安装"}},[t._v("#")]),t._v(" docker的安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装基本软件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$apt")]),t._v("-get update\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$apt")]),t._v("-get "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" software-properties-common lrzsz -y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用阿里云的源{推荐}")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' stable"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#软件源升级")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装docker")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce -y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#测试docker")]),t._v("\ndocker version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#加速器配置")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://get.daocloud.io/daotools/set_mirror.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -s http://f1361db2.m.daocloud.io\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改配置文件")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/docker/daemon.json\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#文件内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://f1361db2.m.daocloud.io"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insecure-registries"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果还没有 docker group 就添加一个：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将用户加入该 group 内。然后退出并重新登录就生效啦。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sudo")]),t._v(" gpasswd -a "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),t._v("}")]),t._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启 docker 服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$systemctl")]),t._v(" restart docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换当前会话到新 group 或者重启 X 会话")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$newgrp")]),t._v(" - docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注意:最后一步是必须的，否则因为 groups 命令获取到的是缓存的组信息，刚添加的组信息未能生效，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#所以 docker images 执行时同样有错。")]),t._v("\n")])])]),a("h2",{attrs:{id:"docker-compose的安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose的安装"}},[t._v("#")]),t._v(" docker-compose的安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装依赖工具")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-pip -y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装编排工具")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-compose\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看编排工具版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" docker-compose version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看命令帮助")]),t._v("\ndocker-compose --help\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用pip安装依赖包时默认访问https://pypi.python.org/simple/，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#但是经常出现不稳定以及访问速度非常慢的情况，国内厂商提供的pipy镜像目前可用的有：")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在当前用户目录下创建.pip文件夹")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/.pip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#然后在该目录下创建pip.conf文件填写：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntrusted-host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mirrors.aliyun.com\nindex-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://mirrors.aliyun.com/pypi/simple/\n")])])]),a("h2",{attrs:{id:"部署前的项目修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署前的项目修改"}},[t._v("#")]),t._v(" 部署前的项目修改")]),t._v(" "),a("h3",{attrs:{id:"代码的修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码的修改"}},[t._v("#")]),t._v(" 代码的修改")]),t._v(" "),a("p",[t._v("将所有读取conf文件夹内容部的程序的绝对路径修改为相对路径")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fastdfs中的读取client.conf")]),t._v("\nfdfs_client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewFdfsClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./conf/client.conf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//utils中读取app.conf")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ini"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./conf/app.conf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("将conf文件复制到各个微服务项目文件夹中")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#仅将所需要的配置文件进行拷贝就可以了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n├── app.conf\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#项目配置信息")]),t._v("\n└── client.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#fastdfs客户端配置信息")]),t._v("\n")])])]),a("h2",{attrs:{id:"项目的编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目的编译"}},[t._v("#")]),t._v(" 项目的编译")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#二进制编译")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux  /usr/local/go/bin/go build -a -installsuffix cgo -ldflags "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-w'")]),t._v(" -i -o homeweb-web main.go\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#编译需要在root账户下进行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指明cgo工具是否可用的标识在这里表示禁用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#目标平台（编译后的目标平台）的操作系统（darwin、freebsd、linux、windows）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("linux  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#由于没有在root下安装go所以我们需要使用go的绝对路径进行使用")]),t._v("\n/usr/local/go/bin/go build \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#强制重新编译所有涉及的go语言代码包")]),t._v("\n-a \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为了使当前的输出目录与默认的编译输出目录分离，可以使用这个标记。此标记的值会作为结果文件的父目录名称的后缀。")]),t._v("\n-installsuffix \n\ncgo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 给 cgo指定命令 ")]),t._v("\n-ldflags \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭所有警告信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-w'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#标志安装目标的依赖包。")]),t._v("\n-i \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#命名")]),t._v("\n-o ihomeweb \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#编译的main.go地址")]),t._v("\n./main.go\n")])])]),a("h2",{attrs:{id:"服务容器化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务容器化"}},[t._v("#")]),t._v(" 服务容器化")]),t._v(" "),a("p",[t._v("web")]),t._v(" "),a("div",{staticClass:"language-Dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" alpine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3.2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拷贝文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" conf /conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拷贝文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" html /html\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#拷贝二进制")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" ihomeweb /ihomeweb\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENTRYPOINT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ihomeweb"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 8999\n")])])]),a("p",[t._v("srv")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('FROM alpine:3.2\nADD conf /conf\n\nADD getarea-srv /getarea-srv\nENTRYPOINT [ "/getarea-srv" ]\n')])])]),a("h2",{attrs:{id:"compose编排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compose编排"}},[t._v("#")]),t._v(" Compose编排")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("consul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#覆盖启动后的执行命令")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" agent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bootstrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("expect=1  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node=node1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("client 0.0.0.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ui "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bind=0.0.0.0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("join 127.0.0.2\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#command: agent -server -bootstrap -rejoin -ui")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#镜像：镜像名称:版本号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" consul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#主机名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#暴露端口")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8300:8300"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8400:8400"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8500:8500"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8600:53/udp"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#web主页")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#覆盖启动后的执行命令")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry_address=registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8500 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_interval=5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_ttl=10 web\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#镜像构建的dockerfile文件地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./ihomeweb\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" consul\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8999:8999"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#获取地区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("getarea")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#覆盖启动后的执行命令")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry_address=registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8500 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_interval=5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_ttl=10 srv\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#镜像构建的dockerfile文件地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./getarea\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" consul\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注册三部曲")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("getimagecd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#覆盖启动后的执行命令")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry_address=registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8500 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_interval=5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_ttl=10 srv\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#镜像构建的dockerfile文件地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./getimagecd\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" consul\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("getsmscd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#覆盖启动后的执行命令")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry_address=registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8500 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_interval=5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_ttl=10 srv\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#镜像构建的dockerfile文件地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./getsmscd\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" consul\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#覆盖启动后的执行命令")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("registry_address=registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8500 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_interval=5 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("register_ttl=10 srv\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#镜像构建的dockerfile文件地址")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./postret\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" consul\n\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker-compose scale "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("getarea")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);