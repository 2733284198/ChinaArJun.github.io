(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{492:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"四、consul"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、consul"}},[t._v("#")]),t._v(" 四、Consul")]),t._v(" "),n("p",[n("strong",[t._v("为什么要学习consul服务发现？")])]),t._v(" "),n("p",[t._v("因为一套微服务架构中有很多个服务需要管理，也就是说会有很多对grpc。")]),t._v(" "),n("p",[t._v("如果一一对应的进行管理会很繁琐所以我们需要有一个管理发现的机制")]),t._v(" "),n("h2",{attrs:{id:"consul的介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consul的介绍"}},[t._v("#")]),t._v(" Consul的介绍")]),t._v(" "),n("h3",{attrs:{id:"consul是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consul是什么"}},[t._v("#")]),t._v(" Consul是什么")]),t._v(" "),n("p",[t._v("​\tConsul是HashiCorp公司推出的开源工具，用于实现分布式系统的服务发现与配置。 Consul是分布式的、高可用的、可横向扩展的。它具备以下特性 :")]),t._v(" "),n("p",[t._v("​\t服务发现：consul通过DNS或者HTTP接口使服务注册和服务发现变的很容易，一些外部服务，例如saas提供的也可以一样注册。")]),t._v(" "),n("p",[t._v("​\t健康检查：健康检测使consul可以快速的告警在集群中的操作。和服务发现的集成，可以防止服务转发到故障的服务上面。")]),t._v(" "),n("p",[t._v("​\t键/值存储：一个用来存储动态配置的系统。提供简单的HTTP接口，可以在任何地方操作。")]),t._v(" "),n("p",[t._v("​\t多数据中心：无需复杂的配置，即可支持任意数量的区域。")]),t._v(" "),n("h3",{attrs:{id:"consul的安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consul的安装"}},[t._v("#")]),t._v(" Consul的安装")]),t._v(" "),n("p",[t._v("​\tConsul用Golang实现，因此具有天然可移植性 (支持 Linux、windows和macOS)。安装包仅包含一个可执行文件。 Consul安装非常简单，只需要下载对应系统的软件包并解压后就可使用。")]),t._v(" "),n("h4",{attrs:{id:"下载安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[t._v("#")]),t._v(" 下载安装")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里以 Linux系统为例：")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://releases.hashicorp.com/consul/1.4.2/consul_1.4.2_linux_amd64.zip\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" consul_1.4.2_linux_amd64.zip\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" consul /usr/local/bin/\n")])])]),n("p",[t._v("其它系统版本可在这里下载： https://www.consul.io/downloads.html")]),t._v(" "),n("h4",{attrs:{id:"验证安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证安装"}},[t._v("#")]),t._v(" 验证安装")]),t._v(" "),n("p",[t._v("安装 Consul后，通过执行 consul命令，你可以看到命令列表的输出")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ consul\n")])])]),n("p",[n("img",{attrs:{src:"assets/1538380442745.png",alt:"1538380442745"}})]),t._v(" "),n("p",[t._v("就证明成功了")]),t._v(" "),n("h3",{attrs:{id:"consul-的角色"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consul-的角色"}},[t._v("#")]),t._v(" Consul 的角色")]),t._v(" "),n("p",[n("strong",[t._v("client")]),t._v(": 客户端, 无状态, 将 HTTP 和 DNS 接口请求转发给局域网内的服务端集群.")]),t._v(" "),n("p",[n("strong",[t._v("server")]),t._v(": 服务端, 保存配置信息, 高可用集群, 在局域网内与本地客户端通讯, 通过广域网与其他数据中心通讯. 每个数据中心的 server 数量推荐为 3 个或是 5 个.")]),t._v(" "),n("h3",{attrs:{id:"运行-consul代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行-consul代理"}},[t._v("#")]),t._v(" 运行 Consul代理")]),t._v(" "),n("p",[t._v("​\tConsul是典型的 C/S架构，可以运行服务模式或客户模式。每一个数据中心必须有至少一个服务节点， 3到5个服务节点最好。非常不建议只运行一个服务节点，因为在节点失效的情况下数据有极大的丢失风险。")]),t._v(" "),n("h4",{attrs:{id:"运行agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行agent"}},[t._v("#")]),t._v(" 运行Agent")]),t._v(" "),n("p",[t._v("​\t完成Consul的安装后,必须运行agent. agent可以运行为server或client模式.每个数据中心至少必须拥有一台server . 建议在一个集群中有3或者5个server.部署单一的server,在出现失败时会不可避免的造成数据丢失.")]),t._v(" "),n("p",[t._v("​\t其他的agent运行为client模式.一个client是一个非常轻量级的进程.用于注册服务,运行健康检查和转发对server的查询.agent必须在集群中的每个主机上运行.")]),t._v(" "),n("h4",{attrs:{id:"启动-consul-server"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-consul-server"}},[t._v("#")]),t._v(" 启动 Consul Server")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#node1:")]),t._v("\n$ consul agent -server -bootstrap-expect "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -data-dir /tmp/consul -node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n1 -bind"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155 -ui  -config-dir /etc/consul.d -rejoin -join "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155 -client "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#运行cosnul agent以server模式")]),t._v("\n-server ： 定义agent运行在server模式\n-bootstrap-expect ：在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定sever数目的时候才会引导整个集群，该标记不能和bootstrap共用\n-data-dir：提供一个目录用来存放agent的状态，所有的agent允许都需要该目录，该目录必须是稳定的，系统重启后都继续存在\n-node：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名\n-bind：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0\n-ui： 启动web界面\n-config-dir：：配置文件目录，里面所有以.json结尾的文件都会被加载\n-rejoin：使consul忽略先前的离开，在再次启动后仍旧尝试加入集群中。\n-client：consul服务侦听地址，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1所以不对外提供服务，如果你要对外提供服务改成0.0.0.0\n\n")])])]),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#node2:")]),t._v("\n$ consul agent -server -bootstrap-expect "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" -data-dir /tmp/consul -node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n2 -bind"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.169 -ui  -rejoin -join "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155\n\n-server ： 定义agent运行在server模式\n-bootstrap-expect ：在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定sever数目的时候才会引导整个集群，该标记不能和bootstrap共用\n-bind：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0\n-node：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名\n-ui： 启动web界面\n-rejoin：使consul忽略先前的离开，在再次启动后仍旧尝试加入集群中。\n-config-dir：：配置文件目录，里面所有以.json结尾的文件都会被加载\n-client：consul服务侦听地址，这个地址提供HTTP、DNS、RPC等服务，默认是127.0.0.1所以不对外提供服务，如果你要对外提供服务改成0.0.0.0\n-join "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.121 ： 启动时加入这个集群\n")])])]),n("h4",{attrs:{id:"启动-consul-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动-consul-client"}},[t._v("#")]),t._v(" 启动 Consul Client")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#node3：")]),t._v("\n$ consul agent  -data-dir /tmp/consul -node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("n3 -bind"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.157 -config-dir /etc/consul.d -rejoin -join "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.155\n\n运行cosnul agent以client模式，-join 加入到已有的集群中去。\n")])])]),n("h4",{attrs:{id:"查看集群成员"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看集群成员"}},[t._v("#")]),t._v(" 查看集群成员")]),t._v(" "),n("p",[t._v("新开一个终端窗口运行consul members, 你可以看到Consul集群的成员.")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ consul members\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#节点  网络地址               状态     类型     版本   协议       数据中心  分管部分 ")]),t._v("\nNode  Address               Status  Type    Build  Protocol  DC   Segment\n\nn1    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.7:8301    alive   server  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".0  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         dc1  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("all"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nn2    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.121:8301  alive   server  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".0  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         dc1  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("all"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nn3    "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".110.122:8301  alive   client  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(".0  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("         dc1  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("default"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h4",{attrs:{id:"停止agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#停止agent"}},[t._v("#")]),t._v(" 停止Agent")]),t._v(" "),n("p",[t._v("​\t你可以使用Ctrl-C 优雅的关闭Agent. 中断Agent之后你可以看到他离开了集群并关闭.")]),t._v(" "),n("p",[t._v("​\t在退出中,Consul提醒其他集群成员,这个节点离开了.如果你强行杀掉进程.集群的其他成员应该能检测到这个节点失效了.当一个成员离开,他的服务和检测也会从目录中移除.当一个成员失效了,他的健康状况被简单的标记为危险,但是不会从目录中移除.Consul会自动尝试对失效的节点进行重连.允许他从某些网络条件下恢复过来.离开的节点则不会再继续联系.")]),t._v(" "),n("p",[t._v("​\t此外,如果一个agent作为一个服务器,一个优雅的离开是很重要的,可以避免引起潜在的可用性故障影响达成一致性协议.\nconsul优雅的退出")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ consul leave\n")])])]),n("h4",{attrs:{id:"注册服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册服务"}},[t._v("#")]),t._v(" 注册服务")]),t._v(" "),n("p",[t._v("​\t搭建好conusl集群后，用户或者程序就能到consul中去查询或者注册服务。可以通过提供服务定义文件或者调用HTTP API来注册一个服务.")]),t._v(" "),n("p",[t._v("​\t首先,为Consul配置创建一个目录.Consul会载入配置文件夹里的所有配置文件.在Unix系统中通常类似 /etc/consul.d (.d 后缀意思是这个路径包含了一组配置文件).")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/consul.d\n")])])]),n("p",[t._v("​\t然后,我们将编写服务定义配置文件.假设我们有一个名叫web的服务运行在 10000端口.另外,我们将给他设置一个标签.这样我们可以使用他作为额外的查询方式:")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"service"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#服务")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"web"')]),t._v(",\t\t\t\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#名称")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tags"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",                            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#标记")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"address"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v(",\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ip")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(",\t\t\t\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#端口")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"checks"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t     "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:10000/health"')]),t._v(",\n\t     "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"interval"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10s"')]),t._v("\t\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#检查时间")]),t._v("\n\t   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"测试程序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试程序"}},[t._v("#")]),t._v(" 测试程序")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello Web3! This is n3或者n2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Fprintf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Web3! This is n3或者n2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("healthHandler")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"health check! n3或者n2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\thttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\thttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandleFunc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/health"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" healthHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\thttp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ListenAndServe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('":10000"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"consul架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consul架构"}},[t._v("#")]),t._v(" Consul架构")]),t._v(" "),n("p",[n("img",{attrs:{src:"assets/1538379657844.png",alt:"1538379657844"}})]),t._v(" "),n("p",[t._v("​\t我们只看数据中心1，可以看出consul的集群是由N个SERVER，加上M个CLIENT组成的。而不管是SERVER还是CLIENT，都是consul的一个节点，所有的服务都可以注册到这些节点上，正是通过这些节点实现服务注册信息的共享。除了这两个，还有一些小细节，一一简单介绍。\n​\t"),n("strong",[t._v("CLIENT")]),t._v("\n​\tCLIENT表示consul的client模式，就是客户端模式。是consul节点的一种模式，这种模式下，所有注册到当前节点的服务会被转发到SERVER【通过HTTP和DNS接口请求server】，本身是"),n("strong",[t._v("不持久化")]),t._v("这些信息。\n​\t"),n("strong",[t._v("SERVER")]),t._v("\n​\tSERVER表示consul的server模式，表明这个consul是个server，这种模式下，功能和CLIENT都一样，唯一不同的是，它会把所有的信息持久化的本地，这样遇到故障，信息是可以被保留的\n​\t"),n("strong",[t._v("SERVER-LEADER")]),t._v("\n​\t中间那个SERVER下面有LEADER的字眼，表明这个SERVER是它们的老大，它和其它SERVER不一样的一点是，它需要负责同步注册的信息给其它的SERVER，同时也要负责各个节点的健康监测。")]),t._v(" "),n("h4",{attrs:{id:"consul的client-mode把请求转向server，那么client的作用是什么？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consul的client-mode把请求转向server，那么client的作用是什么？"}},[t._v("#")]),t._v(" Consul的client mode把请求转向server，那么client的作用是什么？")]),t._v(" "),n("p",[t._v("​\tconsul可以用来实现分布式系统的服务发现与配置。client把服务请求传递给server，server负责提供服务以及和其他数据中心交互。题主的问题是，既然server端提供了所有服务，那为何还需要多此一举地用client端来接收一次服务请求。我想，采用这种架构有以下几种理由：")]),t._v(" "),n("p",[t._v("​\t首先server端的网络连接资源有限。对于一个分布式系统，一般情况下访问量是很大的。如果用户能不通过client直接地访问数据中心，那么数据中心必然要为每个用户提供一个单独的连接资源(线程，端口号等等)，那么server端的负担会非常大。所以很有必要用大量的client端来分散用户的连接请求，在client端先统一整合用户的服务请求，然后一次性地通过一个单一的链接发送大量的请求给server端，能够大量减少server端的网络负担。")]),t._v(" "),n("p",[t._v("​\t其次，在client端可以对用户的请求进行一些处理来提高服务的效率，比如将相同的请求合并成同一个查询，再比如将之前的查询通过cookie的形式缓存下来。但是这些功能都需要消耗不少的计算和存储资源。如果在server端提供这些功能，必然加重server端的负担，使得server端更加不稳定。而通过client端来进行这些服务就没有这些问题了，因为client端不提供实际服务，有很充足的计算资源来进行这些处理这些工作。")]),t._v(" "),n("p",[t._v("​\t最后还有一点，consul规定只要接入一个client就能将自己注册到一个服务网络当中。这种架构使得系统的可扩展性非常的强，网络的拓扑变化可以特别的灵活。这也是依赖于client—server结构的。如果系统中只有几个数据中心存在，那网络的扩张也无从谈起了。")]),t._v(" "),n("p",[t._v("Consul资料：http://www.liangxiansen.cn/2017/04/06/consul\nhttps://blog.csdn.net/yuanyuanispeak/article/details/54880743")])])}),[],!1,null,null,null);s.default=e.exports}}]);