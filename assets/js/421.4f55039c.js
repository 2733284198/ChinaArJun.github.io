(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{844:function(e,t,s){"use strict";s.r(t);var a=s(44),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"部署利器-helm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署利器-helm"}},[e._v("#")]),e._v(" 部署利器: helm")]),e._v(" "),s("p",[s("code",[e._v("helm")]),e._v(" 是基于 "),s("code",[e._v("kubernetes")]),e._v(" 的包管理器。它之于 "),s("code",[e._v("kubernetes")]),e._v(" 就如 "),s("code",[e._v("yum")]),e._v(" 之于 "),s("code",[e._v("centos")]),e._v("，"),s("code",[e._v("pip")]),e._v(" 之于 "),s("code",[e._v("python")]),e._v("，"),s("code",[e._v("npm")]),e._v(" 之于 "),s("code",[e._v("javascript")]),e._v("。")]),e._v(" "),s("p",[e._v("那 "),s("code",[e._v("helm")]),e._v(" 的引入对于管理集群有哪些帮助呢？可体现在基础运维建设及业务应用两方面")]),e._v(" "),s("ol",[s("li",[e._v("基础设施，更方便地部署与升级基础设施，如 "),s("code",[e._v("gitlab")]),e._v("，"),s("code",[e._v("prometheus")]),e._v("，"),s("code",[e._v("grafana")]),e._v("，"),s("code",[e._v("ES")]),e._v(" 等")]),e._v(" "),s("li",[e._v("业务应用，更方便地部署，管理与升级公司内部应用，为公司内部的项目配置 Chart，使用 "),s("code",[e._v("helm")]),e._v(" 结合 CI，在 k8s 中部署应用如一行命令般简单")])]),e._v(" "),s("p",[s("strong",[e._v("当然 "),s("code",[e._v("helm")]),e._v(" 更伟大的在于它的思想上："),s("code",[e._v("Separation of concerns")]),e._v("。使得运维人员与开发人员进一步职责分离")]),e._v("。")]),e._v(" "),s("p",[e._v("让开发人员写 "),s("code",[e._v("k8s")]),e._v(" 资源配置文件是不现实的")]),e._v(" "),s("ol",[s("li",[e._v("不是所有开发都了解k8s，或者说很少，不了解 k8s 很难写资源配置部署文件")]),e._v(" "),s("li",[e._v("开发的主要职能还是在业务上")])]),e._v(" "),s("p",[e._v("于是 "),s("code",[e._v("helm")]),e._v(" 应时而出，运维通过 "),s("code",[e._v("helm")]),e._v(" 配置好资源文件模板，然后交给开发填参数。")]),e._v(" "),s("p",[e._v("本篇文章主要介绍如何安装 helm 以及如何使用 helm 部署基础服务和业务")]),e._v(" "),s("ul",[s("li",[e._v("原文地址: "),s("a",{attrs:{href:"https://shanyue.tech/k8s/helm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("部署利器 helm 安装及使用指南"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("系列文章: "),s("a",{attrs:{href:"https://shanyue.tech/op/",target:"_blank",rel:"noopener noreferrer"}},[e._v("个人服务器运维指南"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"安装-helm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-helm"}},[e._v("#")]),e._v(" 安装 helm")]),e._v(" "),s("p",[e._v("这里参考官方文档 "),s("a",{attrs:{href:"https://helm.sh/docs/intro/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装 helm"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("code",[e._v("helm")]),e._v(" 此时已发布了 v3，本篇文章关于 "),s("code",[e._v("helm")]),e._v(" 安装及使用指南以 "),s("code",[e._v("helm v3")]),e._v(" 为基础。")]),e._v(" "),s("blockquote",[s("p",[s("code",[e._v("helm")]),e._v(" 在 helm v2 时分为客户端 (helm client，即命令行工具) 与服务端 (helm server) 两部分，在服务端又叫 "),s("code",[e._v("Tiller")]),e._v("，安装 "),s("code",[e._v("Tiller")]),e._v(" 时会在集群中部署一个 "),s("code",[e._v("Pod")]),e._v("，用以接替资源部署。")])]),e._v(" "),s("h3",{attrs:{id:"安装客户端-helm-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装客户端-helm-client"}},[e._v("#")]),e._v(" 安装客户端 (helm client)")]),e._v(" "),s("p",[e._v("helm client 需要安装在你可以访问 k8s 集群的任何服务器，如同 "),s("code",[e._v("kubectl")]),e._v("，不过通常来说，你需要安装在两个地方")]),e._v(" "),s("ol",[s("li",[e._v("k8s 集群的 master node")]),e._v(" "),s("li",[e._v("你自己的 PC/mac 上")])]),e._v(" "),s("blockquote",[s("p",[e._v("在 helm v3 中，只需要安装 helm client")])]),e._v(" "),s("p",[e._v("在 mac 上进行安装")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ brew "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" kubernetes-helm\n")])])]),s("p",[e._v("在 linux 上进行安装")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -LO https://git.io/get_helm.sh\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("700")]),e._v(" get_helm.sh\n$ ./get_helm.sh\n")])])]),s("p",[e._v("根据源码包进行安装，比较推荐(毕竟使用以上两种方案可能有网络问题)，至于如何使用 "),s("code",[e._v("rsync")]),e._v(" 见以下安装步骤")]),e._v(" "),s("blockquote",[s("p",[e._v("使用脚本安装在国内会出现网络问题，需要在代理节点安装并使用 "),s("code",[e._v("rsync")]),e._v(" 或者 "),s("code",[e._v("scp")]),e._v(" 移动到目标位置")])]),e._v(" "),s("p",[e._v("示例选择 "),s("code",[e._v("2.14.3")]),e._v(" 进行安装，"),s("code",[e._v("helm")]),e._v(" 的最新版本可以参考 "),s("a",{attrs:{href:"https://github.com/helm/helm/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("helm/helm Releases"),s("OutboundLink")],1),e._v("。")]),e._v(" "),s("blockquote",[s("p",[e._v("可以选择 3.0+ 版本的安装，目前最新版本是 "),s("code",[e._v("Helm v3.0.0-rc.1")]),e._v(" (2019/11/01)")])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 下载 MAC 上适用的软件包")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -L: 追踪重定向链接")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -O: 保存到本地")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# -S: 打印错误")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -SLO https://get.helm.sh/helm-v2.14.3-darwin-amd64.tar.gz \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 下载 CentOS 上适用的软件包")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -SLO https://get.helm.sh/helm-v2.14.3-linux-amd64.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果有网络问题，请在代理节点下载并 rsync 到目标节点，如果没有，跳过此步")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rsync")]),e._v(" -avhzP proxy:/root/helm-v2.14.3-linux-amd64.tar.gz "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果在 mac 上")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zxvf helm-v2.14.3-darwin-amd64.tar.gz \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果在 centos 上")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zxvf helm-v2.14.3-linux-amd64.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 进入相应目录，移至 /bin 目录")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" linux-amd64/helm /usr/local/bin/helm\n")])])]),s("h3",{attrs:{id:"安装-tiller-helm-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-tiller-helm-server"}},[e._v("#")]),e._v(" 安装 tiller (helm server)")]),e._v(" "),s("blockquote",[s("p",[e._v("如果使用了 Helm v3，则不用安装 tiller")])]),e._v(" "),s("h4",{attrs:{id:"_01-下载镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-下载镜像"}},[e._v("#")]),e._v(" 01 下载镜像")]),e._v(" "),s("p",[e._v("tiller 的镜像 "),s("code",[e._v("gcr.io/kubernetes-helm/tiller:v2.14.3")]),e._v(" 在 gcr.io 上，这意味着在国内网络需要先下载到代理节点，再移动到目标位置。具体步骤参照以前章节")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://shanyue.tech/k8s/install-master-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装主节点 - 准备离线镜像"),s("OutboundLink")],1)])]),e._v(" "),s("h4",{attrs:{id:"_02-安装-tiller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-安装-tiller"}},[e._v("#")]),e._v(" 02 安装 Tiller")]),e._v(" "),s("p",[e._v("当安装好 "),s("code",[e._v("helm")]),e._v(" 命令行工具后，使用 "),s("code",[e._v("helm init")]),e._v(" 安装 tiller。安装 "),s("code",[e._v("tiller")]),e._v(" 时会在 k8s 上部署一个 pod。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ helm init\nCreating /root/.helm\nCreating /root/.helm/repository\nCreating /root/.helm/repository/cache\nCreating /root/.helm/repository/local\nCreating /root/.helm/plugins\nCreating /root/.helm/starters\nCreating /root/.helm/cache/archive\nCreating /root/.helm/repository/repositories.yaml\nAdding stable repo with URL: https://kubernetes-charts.storage.googleapis.com\nAdding "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v(" repo with URL: http://127.0.0.1:8879/charts\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$HELM_HOME")]),e._v(" has been configured at /root/.helm.\n\nTiller "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("the Helm server-side component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" has been installed into your Kubernetes Cluster.\n\nPlease note: by default, Tiller is deployed with an insecure "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'allow unauthenticated users'")]),e._v(" policy.\nTo prevent this, run "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("helm init"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" with the --tiller-tls-verify flag.\nFor "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("more")]),e._v(" information on securing your installation see: https://docs.helm.sh/using_helm/"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#securing-your-helm-installation")]),e._v("\n")])])]),s("p",[e._v("根据提示此时已安装成功，校验 Pod 状态")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看 tiller 是否出在运行状态")]),e._v("\n$ kubectl get pods --all-namespaces\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看 helm 与 tiller 版本")]),e._v("\n$ helm version\nClient: "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("version.Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("SemVer:"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v2.14.3"')]),e._v(", GitCommit:"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0e7f3b6637f7af8fcfddb3d2941fcc7cbebb0085"')]),e._v(", GitTreeState:"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"clean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nServer: "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("version.Version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("SemVer:"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v2.14.3"')]),e._v(", GitCommit:"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0e7f3b6637f7af8fcfddb3d2941fcc7cbebb0085"')]),e._v(", GitTreeState:"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"clean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Chart")]),e._v(": 一系列 k8s 资源集合的命名，它包含一系列 k8s 资源配置文件的模板与参数，可供灵活配置")]),e._v(" "),s("li",[s("code",[e._v("release")]),e._v(": 当一个 Chart 部署后生成一个 release，chart/relase 类似于 docker 中 image/container")]),e._v(" "),s("li",[s("code",[e._v("repo")]),e._v(": 即 chart 的仓库，其中有很多个 chart 可供选择，如官方 "),s("a",{attrs:{href:"https://github.com/helm/charts",target:"_blank",rel:"noopener noreferrer"}},[e._v("helm/charts"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("helm create")]),e._v(" 创建一个 chart，了解简单 chart 的目录结构")]),e._v(" "),s("blockquote",[s("p",[e._v("关于如何安装 helm 参考下一小节")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建一个 chart")]),e._v("\n$ helm create todo\nCreating todo\n\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" todo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 打印 chart 目录，主要文件有 Chart.yaml 与 values.yaml")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# --dirsfirst 先打印文件夹名称")]),e._v("\n$ tree --dirsfirst\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n├── charts\n├── templates\n│   ├── tests\n│   │   └── test-connection.yaml\n│   ├── NOTES.txt\n│   ├── _helpers.tpl\n│   ├── deployment.yaml\n│   ├── ingress.yaml\n│   └── service.yaml\n├── Chart.yaml\n└── values.yaml\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v(" directories, "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v(" files\n")])])]),s("p",[e._v("查看主要的两个文件目录")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("templates/")]),e._v(": 这是运维大哥写的配置文件模板，示例是最简单应用的资源配置，但复杂应用还会有 pvc，role，service-acount 等等")]),e._v(" "),s("li",[s("code",[e._v("values.yaml")]),e._v(": 这是给开发小弟写的可选参数，但是大部分参数都被运维大哥给内置了")])]),e._v(" "),s("h2",{attrs:{id:"使用-helm-部署基础服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-helm-部署基础服务"}},[e._v("#")]),e._v(" 使用 helm 部署基础服务")]),e._v(" "),s("p",[e._v("真实案例可以参看我的系列文章其它章节")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://shanyue.tech/k8s/deploy-redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 helm 部署 redis"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://shanyue.tech/k8s/deploy-postgres",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 helm 部署 postgres"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://shanyue.tech/k8s/deploy-drone",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 helm 部署 drone"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("这里讲述一些关于部署基础服务的一般步骤。假设我们需要部署 redis")]),e._v(" "),s("blockquote",[s("p",[e._v("这里使用 helm v3，语法与 v2 可能略有出入")])]),e._v(" "),s("h3",{attrs:{id:"_01-查找相关-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-查找相关-chart"}},[e._v("#")]),e._v(" 01 查找相关 Chart")]),e._v(" "),s("p",[e._v("使用 "),s("code",[e._v("helm search hub")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ helm search hub redis\nURL                                                     CHART VERSION   APP VERSION     DESCRIPTION\nhttps://hub.helm.sh/charts/bitnami/redis                "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("9.5")]),e._v(".0           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5.0")]),e._v(".5           Open source, advanced key-value store. It is of"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nhttps://hub.helm.sh/charts/hephy/redis                  v2.4.0                          A Redis database "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" use inside a Kubernetes cl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nhttps://hub.helm.sh/charts/incubator/redis-cache        "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),e._v(".0           "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.0")]),e._v(".12-alpine   A pure in-memory redis cache, using statefulset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),s("h3",{attrs:{id:"_02-选定-chart，跟进-chart-的官方文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-选定-chart，跟进-chart-的官方文档"}},[e._v("#")]),e._v(" 02 选定 Chart，跟进 Chart 的官方文档")]),e._v(" "),s("p",[e._v("我们选定 "),s("a",{attrs:{href:"https://hub.helm.sh/charts/bitnami/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("stable/redis"),s("OutboundLink")],1),e._v(" 这个 chart。")]),e._v(" "),s("p",[e._v("跟踪官方文档，设置相关参数，存储为 "),s("code",[e._v("values-production.yaml")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Production configuration")]),e._v("\n$ helm "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" redis stable/redis --values values-production.yaml\n")])])]),s("p",[e._v("如何部署完成，可以查看安装某个 "),s("code",[e._v("Release")]),e._v(" 时的 "),s("code",[e._v("values")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ helm get values redis\n")])])]),s("p",[e._v("如果需要升级，使用 "),s("code",[e._v("helm upgrade")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ helm upgrade redis stable/redis --values values-production.yaml\n")])])]),s("p",[e._v("如果有必要时会添加 repo: "),s("code",[e._v("helm repo add")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# helm repo add stable https://kubernetes-charts.storage.googleapis.com/")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 列出所有 repo")]),e._v("\n$ helm repo list\nNAME            URL\nstable          https://kubernetes-charts.storage.googleapis.com/\napphub          https://apphub.aliyuncs.com\njetstack        https://charts.jetstack.io\n")])])]),s("h3",{attrs:{id:"_03-校验部署状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-校验部署状态"}},[e._v("#")]),e._v(" 03 校验部署状态")]),e._v(" "),s("p",[e._v("这与需要部署的资源有关，不过一般也就分为 "),s("code",[e._v("Service")]),e._v("，"),s("code",[e._v("Pod")]),e._v(" 和 "),s("code",[e._v("PVC")])])])}),[],!1,null,null,null);t.default=r.exports}}]);