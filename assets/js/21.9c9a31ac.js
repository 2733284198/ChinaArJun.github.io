(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{414:function(t,e,s){t.exports=s.p+"assets/img/node_modules.31feb183.jpg"},948:function(t,e,s){"use strict";s.r(e);var n=s(44),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用-docker-高效部署前端应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-高效部署前端应用"}},[t._v("#")]),t._v(" 使用 docker 高效部署前端应用")]),t._v(" "),n("p",[t._v("docker 变得越来越流行，它可以轻便灵活地隔离环境，进行扩容，方便运维管理。对开发者也更方便开发，测试与部署。")]),t._v(" "),n("p",[t._v("最重要的是，"),n("strong",[t._v("当你面对一个陌生的项目，你可以照着 Dockerfile，甚至不看文档(文档也不一定全，全也不一定对)就可以很快让它在本地跑起来。")])]),t._v(" "),n("p",[t._v("现在很强调 "),n("code",[t._v("devops")]),t._v(" 的理念，我把 devops 六个大字贴在电脑屏幕上，格物致知了一天。豁然开朗："),n("code",[t._v("devops")]),t._v(" 的意思就是写一个 Dockerfile 去跑应用")]),t._v(" "),n("p",[t._v("这里将介绍如何使用 Docker 部署前端应用。")]),t._v(" "),n("p",[t._v("千里之行，始于足下。始于足下的意思就是，先让它能够跑起来。")]),t._v(" "),n("ul",[n("li",[t._v("原文地址: "),n("a",{attrs:{href:"https://blog.zhequtao.com/op/deploy-fe-with-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何使用 docker 高效部署前端"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("系列文章: "),n("a",{attrs:{href:"https://blog.zhequtao.com/op",target:"_blank",rel:"noopener noreferrer"}},[t._v("当我有一台云服务器时我做了什么"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"先让它跑起来"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#先让它跑起来"}},[t._v("#")]),t._v(" 先让它跑起来")]),t._v(" "),n("p",[t._v("首先，简单介绍一下一个典型的前端应用部署流程")]),t._v(" "),n("ol",[n("li",[n("code",[t._v("npm install")]),t._v(", 安装依赖")]),t._v(" "),n("li",[n("code",[t._v("npm run build")]),t._v("，编译，打包，生成静态资源")]),t._v(" "),n("li",[t._v("服务化静态资源")])]),t._v(" "),n("p",[t._v("介绍完部署流程后，简单写一个 Dockerfile")]),t._v(" "),n("div",{staticClass:"language-docker extra-class"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代表生产环境")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PROJECT_ENV production\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 许多 package 会根据此环境变量，做出不同的行为")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 另外，在 webpack 中打包也会根据此环境变量做出优化，但是 create-react-app 在打包时会写死该环境变量")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install && npm run build && npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("g http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 80\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server ./public "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 80\n")])])]),n("p",[t._v("现在这个前端服务已经跑起来了，接下来你可以完成部署的其它阶段了。")]),t._v(" "),n("p",[t._v("一般情况下，以下就成了运维的工作了，不过，拓展自己的知识边界总是没错的。其它阶段介绍如下")]),t._v(" "),n("ul",[n("li",[t._v("使用 "),n("code",[t._v("nginx")]),t._v(" 或者 "),n("code",[t._v("traefik")]),t._v(" 做反向代理。在我内部集群中使用了 "),n("code",[t._v("traefik")]),t._v("，详见 "),n("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/traefik.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("traefik 简易入门"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("使用 "),n("code",[t._v("kubernetes")]),t._v(" 或者 "),n("code",[t._v("docker compose")]),t._v(" 做容器编排。在我内部集群中使用了 "),n("code",[t._v("compose")]),t._v("，详见 "),n("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/traefik-compose.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker compose 简易入门"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("使用 "),n("code",[t._v("gitlab ci")]),t._v("，"),n("code",[t._v("drone ci")]),t._v(" 或者 "),n("code",[t._v("github actions")]),t._v(" 等做 CI/CD。在我内部集群中使用了 "),n("code",[t._v("github actions")]),t._v("，详见 "),n("a",{attrs:{href:"https://github.com/ChinaArJun/op-note/blob/master/github-action-guide.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("github actions 简易入门"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("这时镜像存在两个问题，导致每次部署时间过长，不利于产品的快速交付，没有快速交付，也就没有敏捷开发 (Agile)")]),t._v(" "),n("ul",[n("li",[t._v("构建镜像时间过长")]),t._v(" "),n("li",[t._v("构建镜像大小过大，多时甚至 1G+")])]),t._v(" "),n("h2",{attrs:{id:"从-dependencies-和-devdependencies-下手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从-dependencies-和-devdependencies-下手"}},[t._v("#")]),t._v(" 从 dependencies 和 devDependencies 下手")]),t._v(" "),n("blockquote",[n("p",[t._v("一个前端程序员若是每天工作八个小时，至少有两个小时是白白浪费了的：一个小时用来 "),n("code",[t._v("npm install")]),t._v("，另一个小时用来 "),n("code",[t._v("npm run build")]),t._v("。")])]),t._v(" "),n("p",[t._v("对于每次部署，如果能够减少无用包的下载，便能够节省很多镜像构建时间。"),n("code",[t._v("eslint")]),t._v("，"),n("code",[t._v("mocha")]),t._v("，"),n("code",[t._v("chai")]),t._v(" 等代码风格测试模块可以放到 "),n("code",[t._v("devDependencies")]),t._v(" 中。在生产环境中使用 "),n("code",[t._v("npm install --production")]),t._v(" 装包。")]),t._v(" "),n("div",{staticClass:"language-docker extra-class"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PROJECT_ENV production\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("production && npm run build && npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("g http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 80\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server ./public "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 80\n")])])]),n("p",[t._v("好像是快了那么一点点。")]),t._v(" "),n("p",[t._v("我们注意到，相对于项目的源文件来讲，"),n("code",[t._v("package.json")]),t._v(" 是相对稳定的。如果没有新的安装包需要下载，则再次构建镜像时，无需重新装包。则可以在 npm install 上节省一半的时间。")]),t._v(" "),n("h2",{attrs:{id:"利用镜像缓存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用镜像缓存"}},[t._v("#")]),t._v(" 利用镜像缓存")]),t._v(" "),n("p",[t._v("对于 "),n("code",[t._v("ADD")]),t._v(" 来讲，如果需要添加的文件内容的 "),n("code",[t._v("checksum")]),t._v(" 没有发生变化，则可以利用缓存。把 "),n("code",[t._v("package.json")]),t._v(" 与源文件分隔开写入镜像是一个很好的选择。目前，如果没有新的安装包更新的话，可以节省一半时间")]),t._v(" "),n("div",{staticClass:"language-docker extra-class"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PROJECT_ENV production\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http-server 不变动也可以利用缓存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("g http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" package.json /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("production\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPOSE")]),t._v(" 80\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server ./public "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("p 80\n")])])]),n("p",[t._v("关于利用缓存有更多细节，需要特别注意一下。如 "),n("code",[t._v("RUN git clone <repo>")]),t._v("，如果命令字符串没有更新，则将使用缓存，当命令是非幂等性时，这将有可能导致问题")]),t._v(" "),n("blockquote",[n("p",[t._v("参考官方文档 "),n("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dockerfile 最佳实践"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"多阶段构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多阶段构建"}},[t._v("#")]),t._v(" 多阶段构建")]),t._v(" "),n("p",[t._v("得益于缓存，现在镜像构建时间已经快了不少。但是，此时镜像的体积依旧过于庞大，这也将会导致部署时间的加长。原因如下")]),t._v(" "),n("p",[t._v("考虑下每次 CI/CD 部署的流程")]),t._v(" "),n("ol",[n("li",[t._v("在构建服务器构建镜像")]),t._v(" "),n("li",[t._v("把镜像推至镜像仓库服务器")]),t._v(" "),n("li",[t._v("在生产服务器拉取镜像，启动容器")])]),t._v(" "),n("p",[t._v("显而易见，镜像体积过大会造成传输效率低下，增加每次部署的延时")]),t._v(" "),n("p",[t._v("即使，构建服务器与生产服务器在同一节点下，没有延时的问题。减少镜像体积也能够节省磁盘空间")]),t._v(" "),n("p",[t._v("关于镜像体积的过大，很大一部分是因为node_modules 臭名昭著的体积")]),t._v(" "),n("p",[n("img",{attrs:{src:s(414),alt:"node_modules的体积"}})]),t._v(" "),n("p",[t._v("但最后我们只需要 public 文件夹下的内容，对于源文件以及 "),n("code",[t._v("node_modules")]),t._v(" 下文件，占用体积过大且不必要，造成浪费。")]),t._v(" "),n("p",[t._v("此时可以利用 Docker 的多阶段构建，仅来提取编译后文件")]),t._v(" "),n("blockquote",[n("p",[t._v("参考官方文档 "),n("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/multistage-build/",target:"_blank",rel:"noopener noreferrer"}},[t._v("多阶段构建"),n("OutboundLink")],1)])]),t._v(" "),n("div",{staticClass:"language-docker extra-class"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine as builder\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PROJECT_ENV production\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http-server 不变动也可以利用缓存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" package.json /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("production\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择更小体积的基础镜像")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=builder /code/public /usr/share/nginx/html\n")])])]),n("p",[t._v("此时，镜像体积从 1G+ 变成了 50M+")]),t._v(" "),n("h2",{attrs:{id:"使用文件存储服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用文件存储服务"}},[t._v("#")]),t._v(" 使用文件存储服务")]),t._v(" "),n("p",[t._v("分析一下 50M+ 的镜像体积，"),n("code",[t._v("nginx:10-alpine")]),t._v(" 的镜像是16M，剩下的40M是静态资源。")]),t._v(" "),n("p",[n("strong",[t._v("如果把静态资源给上传到文件存储服务，即OSS，并使用 CDN 对 OSS 进行加速。则没有必要打入镜像了")]),t._v("，此时镜像大小会控制在 20M 以下")]),t._v(" "),n("p",[t._v("关于静态资源，可以分类成两部分")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("/static")]),t._v("，此类文件在项目中直接引用根路径，打包时复制进 /public 下，需要被打入镜像")]),t._v(" "),n("li",[n("code",[t._v("/build")]),t._v("，此类文件需要 require/import 引用，会被 webpack 打包并加 hash 值，并通过 publicPath 修改资源地址。可以把此类文件上传至 oss，并加上永久缓存，不需要打入镜像")])]),t._v(" "),n("div",{staticClass:"language-docker extra-class"},[n("pre",{pre:!0,attrs:{class:"language-docker"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine as builder\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" PROJECT_ENV production\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENV")]),t._v(" NODE_ENV production\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http-server 不变动也可以利用缓存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /code\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" package.json /code\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("production\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ADD")]),t._v(" . /code\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run uploadOss 是把静态资源上传至 oss 上的脚本文件")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build && npm run uploadOss\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择更小体积的基础镜像")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("alpine\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=builder code/public/index.html code/public/favicon.ico /usr/share/nginx/html/\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("from=builder code/public/static /usr/share/nginx/html/static\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);