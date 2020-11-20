(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{676:function(t,_,r){"use strict";r.r(_);var a=r(44),v=Object(a.a)({},(function(){var t=this,_=t.$createElement,r=t._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_02开篇：什么是微服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_02开篇：什么是微服务架构"}},[t._v("#")]),t._v(" 02开篇：什么是微服务架构")]),t._v(" "),r("p",[t._v("在网络协议的 RPC 协议部分，我们已经简单介绍了微服务诞生的原因，以及底层 RPC 框架的运行原理，今天开始，我们正式开始微服务架构分享之旅，在此之前，我们需要明确微服务架构的概念。")]),t._v(" "),r("h3",{attrs:{id:"微服务-vs-服务化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务-vs-服务化"}},[t._v("#")]),t._v(" 微服务 vs 服务化")]),t._v(" "),r("p",[t._v("其实在微服务之前，还有服务化的概念，主要应用在 Java 项目中，把传统单机应用通过 JAR 包依赖产生的本地方法调用，改造成通过 RPC 接口产生的远程方法调用，不同的功能模块拆分成独立的服务模块单独部署，以 RPC 接口的形式对外提供服务，这些拆分后的服务模块也是单独开发、测试、部署和运维的。看起来服务化已经解决了单体应用的问题，为什么还会出现微服务呢？")]),t._v(" "),r("p",[t._v("微服务其实是服务化的延伸，从 2014 年开始，得益于以 Docker 为代表的容器化技术的成熟以及 DevOps 文化的兴起，服务化的思想进一步演化，演变为今天我们所熟知的微服务。")]),t._v(" "),r("p",[t._v("那么微服务相比于服务化又有什么不同呢？大体可以总结为以下四点：")]),t._v(" "),r("ul",[r("li",[t._v("服务拆分粒度更细：微服务可以说是更细维度的服务化，小到一个子模块，只要该模块依赖的资源与其他模块都没有关系，那么就可以拆分为一个微服务；")]),t._v(" "),r("li",[t._v("服务独立部署：每个微服务都严格遵循独立打包部署的准则，互不影响，比如一台物理机上可以部署多个 Docker 实例，每个 Docker 实例可以部署一个微服务的代码；")]),t._v(" "),r("li",[t._v("服务独立维护：每个微服务都可以交由一个小团队甚至个人来开发、测试、发布和运维，并对整个生命周期负责；")]),t._v(" "),r("li",[t._v("服务治理能力要求高：因为拆分为微服务之后，服务的数量变多，因此需要有统一的服务治理平台，来对各个服务进行管理。")])]),t._v(" "),r("h3",{attrs:{id:"微服务架构的定义"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构的定义"}},[t._v("#")]),t._v(" 微服务架构的定义")]),t._v(" "),r("p",[t._v("其实从业界的讨论来看，微服务本身并没有一个严格的定义。不过，ThoughtWorks 的首席科学家 Martin Flowler 的描述更加通俗易懂：")]),t._v(" "),r("blockquote",[r("p",[t._v("微服务架构是一种架构模式，它提倡将单一应用程序划分成一组小的服务，服务之间互相协调、互相配合，为用户提供最终价值。每个服务运行在其独立的进程中，服务和服务间采用轻量级的通信机制互相沟通（通常是基于 HTTP 的 RESTful API）。每个服务都围绕着具体业务进行构建，并且能够被独立地部署到生产环境、类生产环境等。另外，应尽量避免统一的、集中式的服务管理机制，对具体的一个服务而言，应根据业务上下 文，选择合适的语言、工具对其进行构建。")])]),t._v(" "),r("blockquote",[r("p",[t._v("—— 摘自"),r("a",{attrs:{href:"http://martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马丁·福勒先生的博客"),r("OutboundLink")],1),t._v("，微服务的概念最早即来源于此。")])]),t._v(" "),r("h3",{attrs:{id:"微服务架构的特征"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构的特征"}},[t._v("#")]),t._v(" 微服务架构的特征")]),t._v(" "),r("h4",{attrs:{id:"_1、多微才够微"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、多微才够微"}},[t._v("#")]),t._v(" 1、多微才够微")]),t._v(" "),r("p",[t._v("微服务架构通过对特定业务领域的分析与建模，将复杂的应用分解成小而专一、耦合度低并 且高度自治的一组服务，每个服务都是很小的应用。")]),t._v(" "),r("p",[t._v("微服务的「微」并不是一个真正可衡量、看得见、摸得着的微。这个「微」所表达的，是一种设计思想和指导方针，是需要团队或者组织共同努力找到一个平衡点。所以，微服务到底有多微，是个仁者见仁，智者见智的问题，最重要的是团队觉得合适。但注意，如果达成「团队觉得合适」的结论，至少还应遵循以下两个基本前提：")]),t._v(" "),r("ul",[r("li",[t._v("业务独立性：首先，应保证微服务是具有业务独立性的单元，并不能只是为了微而微；")]),t._v(" "),r("li",[t._v("团队自主性：其次，考虑到团队的沟通及协作成本，一般不建议超过10人。当团队超过10人，在沟通，协作上锁耗费的成本会显著增加，这也是大部分敏捷实践里提倡的。")])]),t._v(" "),r("h4",{attrs:{id:"_2、单一职责"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、单一职责"}},[t._v("#")]),t._v(" 2、单一职责")]),t._v(" "),r("p",[t._v("所谓高内聚，是一个模块内各个元素彼此结合的紧密程度高。低耦合，是指对于一个完整的系统，模块与模块之间，尽可能独立存在。")]),t._v(" "),r("p",[t._v("在面向对象的设计中，更是有放之四海而皆准的「SOLID原则」。SOLID 原则中的 S 表示的是 SRP（Single Responsibility Principle，"),r("a",{attrs:{href:"https://laravelacademy.org/post/9719",target:"_blank",rel:"noopener noreferrer"}},[t._v("单一职责原则"),r("OutboundLink")],1),t._v("）：即一个对象应该只有一个发生变化的原因，如果一个对象可被多个原因改变，那么就说明这个对象承担了多个职责。")]),t._v(" "),r("p",[t._v("对于每个服务而言，我们希望它处理的业务逻辑能够单一，在服务架构层面遵循单一职责原则。也就是说，微服务架构中的每个服务，都是具有业务逻辑的，符合高内聚、低耦合原则以及单一职责原则的单元，不同的服务通过「管道」的方式灵活组合，从而构建出庞大的系统。")]),t._v(" "),r("h4",{attrs:{id:"_3、轻量级通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、轻量级通信"}},[t._v("#")]),t._v(" 3、轻量级通信")]),t._v(" "),r("p",[t._v("服务之间应通过轻量级的通信机制，实现彼此之间的互通互联，互相协作。所谓轻量级通信机制，通常指语言无关、平台无关的交互方式。")]),t._v(" "),r("p",[t._v("对于轻量级通信格式而言，我们熟悉的 XML 或者 JSON ，它们的解析和使用基本与语言无关、平台无关。对于轻量级通信协议而言，通常基于HTTP，能让服务间的通信变得标准化并且无状态化。 "),r("a",{attrs:{href:"https://laravelacademy.org/post/19638",target:"_blank",rel:"noopener noreferrer"}},[t._v("REST"),r("OutboundLink")],1),t._v("（Representational State Transfer，表现层状态转化），是实现服务之间互相协作的轻量级通信机制之一。")]),t._v(" "),r("p",[t._v("对于微服务而言通过使用语言无关、平台无关的轻量级通信机制，使服务与服务之间的协作变得更加标准化，也就意味着在保持服务外部通信机制轻量级的情况下，团队可以选择更适合的语言、工具或者平台来开发服务本身。")]),t._v(" "),r("h4",{attrs:{id:"_4、独立性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4、独立性"}},[t._v("#")]),t._v(" 4、独立性")]),t._v(" "),r("p",[t._v("独立性是指在应用的交付过程中，开发、测试以及部署的独立。")]),t._v(" "),r("p",[t._v("在传统的单体架构应用中，所有功能都存在于同一个代码库中。当修改了代码库中的某个功能，很容易出现功能之间相互影响的情况。尤其是随着代码量、功能的不断增加，风险也会逐渐增加。")]),t._v(" "),r("p",[t._v("除此之外，当多个特性被不同小组实现完毕，需要经过集成、回归测试，团队才有足够的信心，保证功能相互配合、正常工作并且互不影响。因此，测试过程不是一个独立的过程。")]),t._v(" "),r("p",[t._v("当所有测试验证完毕，单体架构应用将被构建成一个部署包，并标记相应的版本。在部署过程中，单体架构部署包将被部署到生产环境，如果其中某个特性存在缺陷，则有可能导致整个部署过程的失败或回滚。、")]),t._v(" "),r("p",[t._v("单体应用开发、测试、构建、部署流程图如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"/Users/arjun/AJ%E7%9A%84%E4%B8%AA%E4%BA%BA%E8%B5%84%E6%96%99%E7%9B%B8%E5%85%B3/myblog/go-project/GoMicro%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/assets/image-1571759612950.png",alt:"单体应用开发、测试、部署流程"}})]),t._v(" "),r("p",[t._v("在微服务架构中，每个服务都是一个独立的业务单元，当对某个服务进行改变时，对其他的服务不会产生影响。换句话说，服务和服务之间是独立的。对于每个服务，都有独立的代码库。当对当前服务的代码进行修改后，并不会影响其他服务。从代码库的层面而言，服务与服务是隔离的。")]),t._v(" "),r("p",[t._v("对于每个服务，都有独立的测试机制，并不担心破坏其他功能而需要建立大范围的回归测试。由于构建包是独立的，部署流程也就能够独立，因此服务能够运行在不同的进程中。")]),t._v(" "),r("p",[t._v("微服务开发、测试、构建、部署流程图如下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"/Users/arjun/AJ%E7%9A%84%E4%B8%AA%E4%BA%BA%E8%B5%84%E6%96%99%E7%9B%B8%E5%85%B3/myblog/go-project/GoMicro%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/assets/image-1571759652678.png",alt:"微服务开发、测试、部署流程"}})]),t._v(" "),r("h4",{attrs:{id:"_5、进程隔离"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5、进程隔离"}},[t._v("#")]),t._v(" 5、进程隔离")]),t._v(" "),r("p",[t._v("所有功能运行在同一个进程中，也就意味着，当对应用进行部署时，必须停掉当前正在运行的应用，部署完成后，再重新启动进程，无法做到独立部署。如果当前某应用中包含定时任务的功能，则要考虑在什么时间窗口适合部署，是否先停掉消息队列或者切断与数据源的联系，以防止数据被读入应用程序内存，但还未处理完，应用就被停止而导致的数据不一致性。")]),t._v(" "),r("p",[t._v("为了提高代码的重用以及可维护性，在应用开发中，我们有时也会将重复的代码提取出来，封装成组件（比如 PHP 中的 Composer 扩展包）。在传统的单体架构应用中，当应用程序在运行期时，所有的组件最终也会被加载到同一个进程中运行。")]),t._v(" "),r("p",[t._v("在微服务架构中，应用程序由多个服务组成，每个服务都是一个具有高度自治的独立业务实体。通常情况下，每个服务都能运行在一个独立的操作系统进程中，这就意味着不同的服务能非常容易的被部署到不同的主机上。作为运行微服务的环境，我们希望它能够保持高度自治性和隔离型。如果多个服务运行在同一个服务器节点上，虽然省去了节点的开销，但是增加了部署和扩展的复杂度。")]),t._v(" "),r("p",[t._v("总而言之，微服务架构其实是将单一的应用程序划分成一组小的服务，每个服务都是具有业务属性的独立单元，同时能够被独立开发、独立运行、独立测试以及独立部署。")])])}),[],!1,null,null,null);_.default=v.exports}}]);