(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{614:function(t,a,n){"use strict";n.r(a);var s=n(44),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_3-17-用nginx部署go应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-17-用nginx部署go应用"}},[t._v("#")]),t._v(" 3.17 用Nginx部署Go应用")]),t._v(" "),n("p",[t._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),t._v(" "),n("h2",{attrs:{id:"知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),n("ul",[n("li",[t._v("Nginx。")]),t._v(" "),n("li",[t._v("反向代理。")])]),t._v(" "),n("h2",{attrs:{id:"本文目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[t._v("#")]),t._v(" 本文目标")]),t._v(" "),n("p",[t._v("简单部署后端服务。")]),t._v(" "),n("h2",{attrs:{id:"做什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#做什么"}},[t._v("#")]),t._v(" 做什么")]),t._v(" "),n("p",[t._v("在本章节，我们将简单介绍 Nginx 以及使用 Nginx 来完成对 "),n("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gin-example"),n("OutboundLink")],1),t._v(" 的部署，会实现反向代理和简单负载均衡的功能。")]),t._v(" "),n("h2",{attrs:{id:"nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),n("h3",{attrs:{id:"是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么")]),t._v(" "),n("p",[t._v("Nginx 是一个 Web Server，可以用作反向代理、负载均衡、邮件代理、TCP / UDP、HTTP 服务器等等，它拥有很多吸引人的特性，例如：")]),t._v(" "),n("ul",[n("li",[t._v("以较低的内存占用率处理 10,000 多个并发连接（每10k非活动HTTP保持活动连接约2.5 MB ）")]),t._v(" "),n("li",[t._v("静态服务器（处理静态文件）")]),t._v(" "),n("li",[t._v("正向、反向代理")]),t._v(" "),n("li",[t._v("负载均衡")]),t._v(" "),n("li",[t._v("通过OpenSSL 对 TLS / SSL 与 SNI 和 OCSP 支持")]),t._v(" "),n("li",[t._v("FastCGI、SCGI、uWSGI 的支持")]),t._v(" "),n("li",[t._v("WebSockets、HTTP/1.1 的支持")]),t._v(" "),n("li",[t._v("Nginx + Lua")])]),t._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("p",[t._v("请右拐谷歌或百度，安装好 Nginx 以备接下来的使用")]),t._v(" "),n("h3",{attrs:{id:"简单讲解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单讲解"}},[t._v("#")]),t._v(" 简单讲解")]),t._v(" "),n("h4",{attrs:{id:"常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),n("ul",[n("li",[t._v("nginx：启动 Nginx")]),t._v(" "),n("li",[t._v("nginx -s stop：立刻停止 Nginx 服务")]),t._v(" "),n("li",[t._v("nginx -s reload：重新加载配置文件")]),t._v(" "),n("li",[t._v("nginx -s quit：平滑停止 Nginx 服务")]),t._v(" "),n("li",[t._v("nginx -t：测试配置文件是否正确")]),t._v(" "),n("li",[t._v("nginx -v：显示 Nginx 版本信息")]),t._v(" "),n("li",[t._v("nginx -V：显示 Nginx 版本信息、编译器和配置参数的信息")])]),t._v(" "),n("h4",{attrs:{id:"涉及配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#涉及配置"}},[t._v("#")]),t._v(" 涉及配置")]),t._v(" "),n("p",[t._v("1、 proxy_pass：配置"),n("strong",[t._v("反向代理的路径")]),t._v("。需要注意的是如果 proxy_pass 的 url 最后为\n/，则表示绝对路径。否则（不含变量下）表示相对路径，所有的路径都会被代理过去")]),t._v(" "),n("p",[t._v("2、 upstream：配置"),n("strong",[t._v("负载均衡")]),t._v("，upstream 默认是以轮询的方式进行负载，另外还支持"),n("strong",[t._v("四种模式")]),t._v("，分别是：")]),t._v(" "),n("p",[t._v("（1）weight：权重，指定轮询的概率，weight 与访问概率成正比")]),t._v(" "),n("p",[t._v("（2）ip_hash：按照访问 IP 的 hash 结果值分配")]),t._v(" "),n("p",[t._v("（3）fair：按后端服务器响应时间进行分配，响应时间越短优先级别越高")]),t._v(" "),n("p",[t._v("（4）url_hash：按照访问 URL 的 hash 结果值分配")]),t._v(" "),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),n("p",[t._v("在这里需要对 nginx.conf 进行配置，如果你不知道对应的配置文件是哪个，可执行 "),n("code",[t._v("nginx -t")]),t._v(" 看一下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ nginx -t\nnginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful\n")])])]),n("p",[t._v("显然，我的配置文件在 "),n("code",[t._v("/usr/local/etc/nginx/")]),t._v(" 目录下，并且测试通过")]),t._v(" "),n("h3",{attrs:{id:"反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),n("p",[t._v("反向代理是指以代理服务器来接受网络上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。（来自"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86/7793488?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("百科"),n("OutboundLink")],1),t._v("）")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/Gx6ctv7.png",alt:"image"}})]),t._v(" "),n("h4",{attrs:{id:"配置-hosts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-hosts"}},[t._v("#")]),t._v(" 配置 hosts")]),t._v(" "),n("p",[t._v("由于需要用本机作为演示，因此先把映射配上去，打开 "),n("code",[t._v("/etc/hosts")]),t._v("，增加内容：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("127.0.0.1       api.blog.com\n")])])]),n("h4",{attrs:{id:"配置-nginx-conf"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-conf"}},[t._v("#")]),t._v(" 配置 nginx.conf")]),t._v(" "),n("p",[t._v("打开 nginx 的配置文件 nginx.conf（我的是 /usr/local/etc/nginx/nginx.conf），我们做了如下事情：")]),t._v(" "),n("p",[t._v("增加 server 片段的内容，设置 server_name 为 api.blog.com 并且监听 8081 端口，将所有路径转发到 "),n("code",[t._v("http://127.0.0.1:8000/")]),t._v(" 下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("worker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n    keepalive_timeout  65;\n\n    server {\n        listen       8081;\n        server_name  api.blog.com;\n\n        location / {\n            proxy_pass http://127.0.0.1:8000/;\n        }\n    }\n}\n")])])]),n("h4",{attrs:{id:"验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),n("h5",{attrs:{id:"启动-go-gin-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-go-gin-example"}},[t._v("#")]),t._v(" 启动 go-gin-example")]),t._v(" "),n("p",[t._v("回到 "),n("a",{attrs:{href:"github.com/EDDYCJY/go-gin-example"}},[t._v("go-gin-example")]),t._v(" 的项目下，执行 make，再运行 ./go-gin-exmaple")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\ngithub.com/EDDYCJY/go-gin-example\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\nLICENSE        README.md      conf           go-gin-example middleware     pkg            runtime        vendor\nMakefile       README_ZH.md   docs           main.go        models         routers        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v("\n$ ./go-gin-example \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DELETE /api/v1/articles/:id      --"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" github.com/EDDYCJY/go-gin-example/routers/api/v1.DeleteArticle "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" handlers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" POST   /api/v1/articles/poster/generate --"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" github.com/EDDYCJY/go-gin-example/routers/api/v1.GenerateArticlePoster "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" handlers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nActual pid is "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("14672")]),t._v("\n")])])]),n("h5",{attrs:{id:"重启-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重启-nginx"}},[t._v("#")]),t._v(" 重启 nginx")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ nginx -t\nnginx: the configuration "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /usr/local/etc/nginx/nginx.conf syntax is ok\nnginx: configuration "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /usr/local/etc/nginx/nginx.conf "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" is successful\n$ nginx -s reload\n")])])]),n("h5",{attrs:{id:"访问接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问接口"}},[t._v("#")]),t._v(" 访问接口")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/3AD99W4.jpg",alt:"image"}})]),t._v(" "),n("p",[t._v("如此，就实现了一个简单的反向代理了，是不是很简单呢")]),t._v(" "),n("h3",{attrs:{id:"负载均衡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),n("p",[t._v("负载均衡，英文名称为Load Balance（常称 LB），其意思就是分摊到多个操作单元上进行执行（来自百科）")]),t._v(" "),n("p",[t._v("你能从运维口中经常听见，XXX 负载怎么突然那么高。 那么它到底是什么呢？")]),t._v(" "),n("p",[t._v("其背后一般有多台 server，系统会根据配置的策略（例如 Nginx 有提供四种选择）来进行动态调整，尽可能的达到各节点均衡，从而提高系统整体的吞吐量和快速响应")]),t._v(" "),n("h4",{attrs:{id:"如何演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何演示"}},[t._v("#")]),t._v(" 如何演示")]),t._v(" "),n("p",[t._v("前提条件为多个后端服务，那么势必需要多个 "),n("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gin-example"),n("OutboundLink")],1),t._v("，为了演示我们可以启动多个端口，达到模拟的效果")]),t._v(" "),n("p",[t._v("为了便于演示，分别在启动前将 conf/app.ini 的应用端口修改为 8001 和 8002（也可以做成传入参数的模式），达到启动 2 个监听 8001 和 8002 的后端服务")]),t._v(" "),n("h4",{attrs:{id:"配置-nginx-conf-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-conf-2"}},[t._v("#")]),t._v(" 配置 nginx.conf")]),t._v(" "),n("p",[t._v("回到 nginx.conf 的老地方，增加负载均衡所需的配置。新增 upstream 节点，设置其对应的 2 个后端服务，最后修改了 proxy_pass 指向（格式为 http:// + upstream 的节点名称）")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("worker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n    keepalive_timeout  65;\n\n    upstream api.blog.com {\n        server 127.0.0.1:8001;\n        server 127.0.0.1:8002;\n    }\n\n    server {\n        listen       8081;\n        server_name  api.blog.com;\n\n        location / {\n            proxy_pass http://api.blog.com/;\n        }\n    }\n}\n")])])]),n("h5",{attrs:{id:"重启-nginx-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重启-nginx-2"}},[t._v("#")]),t._v(" 重启 nginx")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("$ nginx -t\nnginx: the configuration "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /usr/local/etc/nginx/nginx.conf syntax is ok\nnginx: configuration "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" /usr/local/etc/nginx/nginx.conf "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" is successful\n$ nginx -s reload\n")])])]),n("h4",{attrs:{id:"验证-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证-2"}},[t._v("#")]),t._v(" 验证")]),t._v(" "),n("p",[t._v("再重复访问 "),n("code",[t._v("http://api.blog.com:8081/auth?username={USER_NAME}}&password={PASSWORD}")]),t._v("，多访问几次便于查看效果")]),t._v(" "),n("p",[t._v("目前 Nginx 没有进行特殊配置，那么它是轮询策略，而 go-gin-example 默认开着 debug 模式，看看请求 log 就明白了")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/L9IitGq.jpg",alt:"image"}})]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.imgur.com/Bv5dCn0.jpg",alt:"image"}})]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("在本章节，希望您能够简单习得日常使用的 Web Server 背后都是一些什么逻辑，Nginx 是什么？反向代理？负载均衡？")]),t._v(" "),n("p",[t._v("怎么简单部署，知道了吧。")]),t._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),n("h3",{attrs:{id:"本系列示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[t._v("#")]),t._v(" 本系列示例代码")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-gin-example"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"关于"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),n("h3",{attrs:{id:"修改记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[t._v("#")]),t._v(" 修改记录")]),t._v(" "),n("ul",[n("li",[t._v("第一版：2018年02月16日发布文章")]),t._v(" "),n("li",[t._v("第二版：2019年10月01日修改文章")])]),t._v(" "),n("h2",{attrs:{id:"？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[t._v("#")]),t._v(" ？")]),t._v(" "),n("p",[t._v("如果有任何疑问或错误，欢迎在 "),n("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),n("OutboundLink")],1),t._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),t._v(" "),n("h3",{attrs:{id:"我的公众号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[t._v("#")]),t._v(" 我的公众号")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);