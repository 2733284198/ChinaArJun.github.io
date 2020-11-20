(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{1065:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Traefik 与 nginx 一样，是一款反向代理的工具，至于使用他原因基于以下几点")]),t._v(" "),a("ul",[a("li",[t._v("漂亮的 dashboard 界面")]),t._v(" "),a("li",[t._v("可基于容器 label 进行配置")]),t._v(" "),a("li",[t._v("新添服务简单，不用像 nginx 一样复杂配置，并且不用频繁重启")]),t._v(" "),a("li",[t._v("对 prometheus 和 k8s 的集成")]),t._v(" "),a("li",[t._v("尝试一下...")])]),t._v(" "),a("p",[t._v("接下来讲一下它的基本功能以及文件配置")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("下载二进制文件，指定配置文件，直接执行可以启动。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("./traefik -c traefik.toml\n")])])]),a("p",[t._v("当然，你也可以通过 docker 启动，参考 "),a("a",{attrs:{href:"https://docs.traefik.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traefik Get Started"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("另外，如果需要使用 docker 启动，需要所有的服务都在一个 network 中，或者设置 traefik 的 network 为 host。")]),t._v(" "),a("p",[t._v("启动成功后，可以访问 "),a("code",[t._v("localhost:8080")]),t._v(" 访问 Dashboard 页面。")]),t._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),a("ul",[a("li",[t._v("每当有配置改动需要重启时，只能杀了进程，然后启动，导致服务有短暂的暂停\n"),a("ul",[a("li",[t._v("补充一下，每当使用 docker 新添一个服务时，不需要更改配置，或者更改部分配置时，如 file provider，traefik 会监听配置文件变化并自动重启。但是需要修改 https 的证书或者日志的路径时，需要手动重启。所以需要手动重启的时候并不是很多。")])])]),t._v(" "),a("li",[t._v("当配置文件修改后，会有语法错误，无法向 "),a("code",[t._v("nginx -t")]),t._v(" 一样检查是否配置文件有问题")])]),t._v(" "),a("h2",{attrs:{id:"日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[t._v("#")]),t._v(" 日志")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("accessLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Sets the file path for the access log. If not specified, stdout will be used.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Intermediate directories are created if necessary.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Default: os.Stdout")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("filePath")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./traefik-access.json"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Format is either "json" or "common".')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Default: "common"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("format")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v("\n")])])]),a("p",[t._v("日志文件配置为 "),a("code",[t._v("json")]),t._v(" 格式，方便调试。同时，强烈推荐 "),a("a",{attrs:{href:"https://github.com/stedolan/jq",target:"_blank",rel:"noopener noreferrer"}},[t._v("jq"),a("OutboundLink")],1),t._v("，一款 linux 下解析 json 的工具。")]),t._v(" "),a("p",[t._v("以下是两个常用的命令，统计某个站点的请求以及响应时间。不过最好建议有专门的日志系统去处理，可以获取更完善的，更定制化的信息。另外，traefik 无法查看请求的 body。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 筛选特定站点的请求")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" traefik-access.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'select(.["RequestHost"] == "shici.xiange.tech") | {RequestPath, RequestHost, DownstreamStatus, "request_User-Agent", OriginDuration}\'')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 筛选大于 300ms 的接口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" traefik-access.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'select(.["RequestHost"] == "shici.xiange.tech" and .OriginDuration > 300000000) | {RequestPath, RequestHost, DownstreamStatus,\n"request_User-Agent", OriginDuration, DownstreamContentSize}\'')]),t._v("\n")])])]),a("h2",{attrs:{id:"prometheus-grafana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-grafana"}},[t._v("#")]),t._v(" prometheus + grafana")]),t._v(" "),a("p",[a("code",[t._v("jq")]),t._v(" 虽然可以分析日志，但是适合做日志的统计以及更细化的分析。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus"),a("OutboundLink")],1),t._v(" 作为时序数据库，可以用来监控 traefik 的日志，支持更加灵活的查询，报警以及可视化。traefik 默认设置 prometheus 作为日志收集工具。另外可以使用 grafana 做为 prometheus 的可视化工具。")]),t._v(" "),a("h3",{attrs:{id:"某个服务的平均响应时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#某个服务的平均响应时间"}},[t._v("#")]),t._v(" 某个服务的平均响应时间")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/ChinaArJun/blog/master/Articles/Traefik/graf.png",alt:"Screencast One"}})]),t._v(" "),a("p",[t._v("PromQL 为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('sum(traefik_backend_request_duration_seconds_sum{backend="$backend"}) / sum(traefik_backend_requests_total{backend="$backend"}) * 1000\n')])])]),a("h3",{attrs:{id:"某个服务响应时长大于-300ms-的请求的个数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#某个服务响应时长大于-300ms-的请求的个数"}},[t._v("#")]),t._v(" 某个服务响应时长大于 300ms 的请求的个数")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h3",{attrs:{id:"统计请求数大于-10000-的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计请求数大于-10000-的服务"}},[t._v("#")]),t._v(" 统计请求数大于 10000 的服务")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"entrypoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[t._v("#")]),t._v(" entryPoint")]),t._v(" "),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" http")]),t._v(" "),a("p",[t._v("http 配置在 "),a("code",[t._v("entryPoints")]),t._v(" 中，暴露出80端口。开启 "),a("code",[t._v("gzip")]),t._v(" 压缩，使用 "),a("code",[t._v("compress = true")]),t._v(" 来配置。")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints.http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":80"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("compress")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果配置了此项，会使用 307 跳转到 https ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints.http.redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("entryPoint")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https"')]),t._v("\n")])])]),a("p",[t._v("考虑到隐私以及安全，不对外公开的服务可以配置 "),a("code",[t._v("Basic Auth")]),t._v("，"),a("code",[t._v("Digest Auth")]),t._v(" 或者 "),a("code",[t._v("WhiteList")]),t._v("，或者直接搭建 VPN，在内网内进行访问。如在我服务器上 "),a("code",[t._v("xiange.tech")]),t._v(" 对外公开，"),a("code",[t._v("xiange.me")]),t._v(" 只能通过VPN访问。")]),t._v(" "),a("p",[t._v("更多文档查看 "),a("a",{attrs:{href:"https://docs.traefik.io/configuration/entrypoints/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traefik entrypoints"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" https")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("Let's Encrypt")]),t._v(" 安装证书后，在 "),a("code",[t._v("entryPoints.https.tls.certificats")]),t._v(" 中指定证书位置。")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints.https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":443"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("compress")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints.https.tls.certificates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("certFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/letsencrypt/live/xiange.tech/fullchain.pem"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("keyFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/letsencrypt/live/xiange.tech/privkey.pem"')]),t._v("\n")])])]),a("p",[t._v("另外，traefik 默认开启 http2。")]),t._v(" "),a("h3",{attrs:{id:"other"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" other")]),t._v(" "),a("p",[t._v("另外，如果需要暴露其它的端口出去，如 consul 的 8500，类似于 nginx 的 listen 指令。")]),t._v(" "),a("p",[t._v("可以设置")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("entryPoints.consul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("address")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8500"')]),t._v("\n")])])]),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("p",[t._v("traefik 会监听 "),a("code",[t._v("docker.sock")]),t._v("，根据容器的 label 进行配置。容器的端口号需要暴露出来，但是不需要映射到 Host。因为 traefik 可以通过 "),a("code",[t._v("docker.sock")]),t._v(" 找到 container 的 IP 地址以及端口号，无需使用 "),a("code",[t._v("docker-proxy")]),t._v(" 转发到 Host。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("frontend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:frontend.xiange.tech"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同域配置， /api 走server")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:frontend.xiange.tech;PathPrefix:/api"')]),t._v("\n")])])]),a("h3",{attrs:{id:"如何给一个服务配置多个域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何给一个服务配置多个域名"}},[t._v("#")]),t._v(" 如何给一个服务配置多个域名")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.prod.frontend.rule=Host:whoami.xiange.tech"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.another.frontend.rule=Host:who.xiange.tech"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.dev.frontend.rule=Host:whoami.xiange.me"')]),t._v("\n")])])]),a("h3",{attrs:{id:"如何把前端和后端配置在统一域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何把前端和后端配置在统一域名"}},[t._v("#")]),t._v(" 如何把前端和后端配置在统一域名")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("frontend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frontend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:frontend.xiange.tech"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" your"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("image\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("expose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:frontend.xiange.tech;PathPrefix:/api"')]),t._v("\n")])])]),a("h3",{attrs:{id:"部署时，如果项目代码有更新，如何当新服务-start-后，再去-drop-掉旧服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署时，如果项目代码有更新，如何当新服务-start-后，再去-drop-掉旧服务"}},[t._v("#")]),t._v(" 部署时，如果项目代码有更新，如何当新服务 start 后，再去 drop 掉旧服务")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[t._v("#")]),t._v(" 负载均衡")]),t._v(" "),a("p",[t._v("如果使用docker，对一个容器进行扩展后，traefik 会自动做负载均衡，而 nginx 需要手动干预。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("whoami")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" emilevauge/whoami\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:whoami.xiange.tech"')]),t._v("\n")])])]),a("p",[t._v("手动扩展为3个实例，可以自动实现负载均衡。实现效果可以直接访问 "),a("a",{attrs:{href:"https://whoami.xiange.tech",target:"_blank",rel:"noopener noreferrer"}},[t._v("whoami.xiange.tech"),a("OutboundLink")],1),t._v("，每次通过 WRR 策略分配到不同的容器处理，可以通过 Hostname 和 IP 字段看出。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("docker-compose up whoami=3\n")])])]),a("h2",{attrs:{id:"手动配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动配置"}},[t._v("#")]),t._v(" 手动配置")]),t._v(" "),a("p",[t._v("当然，以上反向代理配置都是基于 docker，那如何像 nginx 一样配置呢。如把 "),a("code",[t._v("consul.xiange.me")]),t._v(" 转发到 8500 这个端口。可以利用 traefik 的 file provider。")]),t._v(" "),a("div",{staticClass:"language-toml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("backends")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# consul 是服务的名字，也可以叫张三，也可以叫李四")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("backends.consul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("backends.consul.servers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("backends.consul.servers.website")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("url")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://0.0.0.0:8500"')]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("weight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("frontends")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("frontends.consul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("entryPoints")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("backend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consul"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("frontends.consul.routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# website 是路由的名字，也可以叫阿猫，也可以叫阿狗")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("frontends.consul.routes.website")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("rule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Host:consul.xiange.me"')]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以配置多个域名")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("frontends.consul.routes.website2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token key property"}},[t._v("rule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Host:config.xiange.me"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);