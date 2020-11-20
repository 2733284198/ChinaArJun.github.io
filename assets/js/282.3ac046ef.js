(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{702:function(v,_,t){"use strict";t.r(_);var r=t(44),s=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"浅谈虚拟化和容器技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浅谈虚拟化和容器技术"}},[v._v("#")]),v._v(" 浅谈虚拟化和容器技术")]),v._v(" "),t("p",[v._v("相信所有对 Docker 有所耳闻的朋友都知道，它是一款以"),t("strong",[v._v("容器虚拟化")]),v._v("技术为基础的软件，因此在了解有关 Docker 的概念知识和使用方法之前，虚拟化和容器技术是我们不可或缺的基础知识。在本小册的第一个小节里，我们就先来尝一尝这道有关虚拟化和容器技术的开胃菜吧。")]),v._v(" "),t("h2",{attrs:{id:"虚拟化技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟化技术"}},[v._v("#")]),v._v(" 虚拟化技术")]),v._v(" "),t("p",[v._v("如果要用简单的语句来阐述虚拟化技术的话，那么可以这么解释：")]),v._v(" "),t("blockquote",[t("p",[v._v("虚拟化技术是一种将计算机物理资源进行抽象、转换为虚拟的计算机资源提供给程序使用的技术。")])]),v._v(" "),t("p",[v._v("这里所指的计算机资源，就包括了 CPU 提供的"),t("strong",[v._v("运算控制资源")]),v._v("，硬盘提供的"),t("strong",[v._v("数据存储资源")]),v._v("，网卡提供的"),t("strong",[v._v("网络传输资源")]),v._v("等。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/30/165885f15326d070?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),t("h3",{attrs:{id:"为程序跨平台兼容而生"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为程序跨平台兼容而生"}},[v._v("#")]),v._v(" 为程序跨平台兼容而生")]),v._v(" "),t("p",[v._v("虚拟化这个概念并不是什么新事物了，早在 20 世纪 60 年代，IBM 就用它来描述一套能够抽象硬件资源的实验性系统。")]),v._v(" "),t("p",[v._v("在计算机技术发展的早期，各类计算平台、计算资源所提供的接口、调用方式十分杂乱，没有像今天这样相对统一的标准。由于要适配不同的平台，写各种兼容代码，这无形给开发者带来了很多的困扰。这种混乱甚至都出现在 IBM 这一家公司下不同机型的机器上，所以 IBM 的工程师们创造了虚拟化技术，用来帮助程序快速适配不同平台的物理机器。")]),v._v(" "),t("p",[v._v("熟悉计算机原理的朋友应该知道，程序对计算机资源的调用主要依赖于操作系统所给出的接口。我们的程序通过操作系统提供的接口，向物理硬件发送指令。")]),v._v(" "),t("p",[v._v('![img](data:image/svg+xml;utf8,<?xml version="1.0"?>'),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"760",height:"230"}}),v._v(")")]),v._v(" "),t("p",[v._v("所以，要实现程序跨平台兼容的方法其实很简单，只要操作系统或者物理硬件所提供的接口调用方式一致，程序便不需要兼容不同硬件平台的接口，而只需要针对这一套统一的接口开发即可。虚拟化技术正是通过其本身适配不同平台的硬件，而加以抽象成统一的接口，来实现程序跨平台运行这一目的的。")]),v._v(" "),t("p",[v._v("时至今日，我们之所以关注和使用虚拟化技术，实现跨平台运行应用程序依然是很大一部分的原因。")]),v._v(" "),t("h3",{attrs:{id:"将虚拟化应用于资源管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将虚拟化应用于资源管理"}},[v._v("#")]),v._v(" 将虚拟化应用于资源管理")]),v._v(" "),t("p",[v._v("在虚拟化技术的发展过程中，人们逐渐发现了虚拟化的另一大用途，也就是将之应用于计算机资源的管理。")]),v._v(" "),t("p",[v._v("这其中的道理其实并不复杂，虚拟化技术本身就是抽象计算机的物理资源进而加工成虚拟的计算资源的，它自然很容易从中做“手脚”，来告诉应用程序一些虚假的资源数据。例如，我们只要告诉程序计算机只有 4GB 内存，那么不管真实的物理机是 8GB、16GB 还是 32GB，应用程序都会按照 4GB 这个虚假的值来处理它的逻辑。")]),v._v(" "),t("p",[v._v("通过虚拟化技术来管理计算机资源的方式，不但让我们对计算机资源的控制变得更加灵活，也大幅提高了计算机资源的使用率。")]),v._v(" "),t("p",[v._v("部分同学一直有一个误解：实现虚拟化的程序本身就要占用计算机的资源，而运转在其中的程序也不会降低它们对资源的消耗，怎么又会产生 1 + 1 < 2 的效果呢。")]),v._v(" "),t("p",[v._v("这里要注意了，我们所说的是"),t("strong",[v._v("提高计算机资源使用率")]),v._v("，而非"),t("strong",[v._v("减少程序资源的占用率")]),v._v("，这两者看似很相近，其实并非是同一个概念。虚拟化技术能够提高计算机资源的使用率，是指利用虚拟化，我们可以将原来程序用不到的一些资源拿出来，分享给另外一些程序，让计算机资源不被浪费。")]),v._v(" "),t("p",[v._v("例如，这里我们有一台运行 Nginx 的机器，由于 Nginx 运行对系统资源的消耗并不高，这就让系统几乎 95% 以上的资源处于闲置状态。这时候我们通过虚拟化技术，把其他的一些程序放到这台机器上来运行，它们就能够充分利用闲置的资源。这带来的好处就是我们不需要再为这些程序单独部署机器，从而节约不少的成本。")]),v._v(" "),t("p",[v._v('![img](data:image/svg+xml;utf8,<?xml version="1.0"?>'),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1055",height:"321"}}),v._v(")")]),v._v(" "),t("p",[v._v("部分读者读到这里就会产生疑惑了，我本身就可以在操作系统里安装这些程序并且同时运行，为什么还要把它们分别装到不同的虚拟环境中去呢？")]),v._v(" "),t("p",[v._v("其实道理很简单，虽然我们能够在操作系统里同时运行多个程序，但前提得是这些程序本身不存在冲突。这里的冲突体现在很多的方面，例如不同的程序同时使用了同一个端口；不同程序依赖于同一个工具库的不同版本；程序本身限制了同时开启的进程数等。虚拟化技术通过资源隔离的方式，无形地也可以把这些程序隔离在不同的虚拟环境中，既然虚拟环境不同，自然运行在不同环境中的程序就不会互相干扰或争抢资源了。")]),v._v(" "),t("h2",{attrs:{id:"虚拟化的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟化的分类"}},[v._v("#")]),v._v(" 虚拟化的分类")]),v._v(" "),t("p",[v._v("说完虚拟化的起源和应用，我们得说说虚拟化的分类了。所谓虚拟化的分类，其实主要指的是我们在实现虚拟化的方式上的区别。")]),v._v(" "),t("p",[v._v("对于虚拟化技术的分类，有很多种不同的方式，有的之间也有互相重合的部分，但总体来说可以区分为两大类："),t("strong",[v._v("硬件虚拟化")]),v._v("、"),t("strong",[v._v("软件虚拟化")]),v._v("。")]),v._v(" "),t("p",[v._v("所谓硬件虚拟化，指的是物理硬件本身就提供虚拟化的支持。举个例子来说，某个平台的 CPU，能够将另外一个平台的指令集转换为自身的指令集执行，并给程序完全运行在那个平台上的感觉。又或者说，CPU 能够自身模拟裂变，让程序或者操作系统认为存在多个 CPU，进而能够同时运行多个程序或者操作系统。这些都是硬件虚拟化的体现。")]),v._v(" "),t("p",[v._v("而软件虚拟化则指的是通过软件的方式来实现虚拟化中关键的指令转换部分。依然用 CPU 的例子来说话，在软件虚拟化实现中，通过一层夹杂在应用程序和硬件平台上的虚拟化实现软件来进行指令的转换。也就是说，虽然应用程序向操作系统或者物理硬件发出的指令不是当前硬件平台所支持的指令，这个实现虚拟化的软件也会将之转换为当前硬件平台所能识别的。")]),v._v(" "),t("p",[v._v("当然，在实际场景中，虚拟化还能进行更加细化的分类，例如：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("平台虚拟化")]),v._v("：在操作系统和硬件平台间搭建虚拟化设施，使得整个操作系统都运行在虚拟后的环境中。")]),v._v(" "),t("li",[t("strong",[v._v("应用程序虚拟化")]),v._v("：在操作系统和应用程序间实现虚拟化，只让应用程序运行在虚拟化环境中。")]),v._v(" "),t("li",[t("strong",[v._v("内存虚拟化")]),v._v("：将不相邻的内存区，甚至硬盘空间虚拟成统一连续的内存地址，即我们常说的虚拟内存。")]),v._v(" "),t("li",[t("strong",[v._v("桌面虚拟化")]),v._v("：让本地桌面程序利用远程计算机资源运行，达到控制远程计算机的目的。")]),v._v(" "),t("li",[v._v("……")])]),v._v(" "),t("p",[v._v("由于虚拟化的分类实在太多，且不是这本小册关注的重点，这里就不全部罗列了。总之，从实现上来说，皆是硬件虚拟化和软件虚拟化两个方案的相互组合、组装而得。")]),v._v(" "),t("h3",{attrs:{id:"虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机"}},[v._v("#")]),v._v(" 虚拟机")]),v._v(" "),t("p",[v._v("在这些虚拟化分类或者说是虚拟化实现中，我们要着重讲一下"),t("strong",[v._v("虚拟机 ( Virtual Machine )")]),v._v("。所谓虚拟机，通常来说就是通过一个"),t("strong",[v._v("虚拟机监视器 ( Virtual Machine Monitor )")]),v._v(" 的设施来隔离操作系统与硬件或者应用程序和操作系统，以此达到虚拟化的目的。这个夹在其中的虚拟机监视器，常常被称为 "),t("strong",[v._v("Hypervisor")]),v._v("。")]),v._v(" "),t("p",[v._v('![img](data:image/svg+xml;utf8,<?xml version="1.0"?>'),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"748",height:"634"}}),v._v(")")]),v._v(" "),t("p",[v._v("之所以我们在这里单独谈谈虚拟机，是因为它对于我们开发者来说是个再熟悉不过的概念了。从我们习惯用来搭建虚拟操作系统环境的 VMware Workstation、Xen 等软件，到 Java 虚拟机 JVM，PHP 虚拟机 HHVM 等等，都活跃在我们程序开发到程序运行的过程中。")]),v._v(" "),t("p",[v._v("这时候有的读者可能会眼前一亮，发现原来 JVM、HHVM 等特定语言运行环境中的核心部分，也是虚拟化的一种实实在在的实现。没错，只要大家仔细分析和思考一下就会发现，它们正是基于虚拟化的思想来实现的。它们通过隔离程序和操作系统，将程序的指令转换为当前所在操作系统平台所能执行的指令，达到了不用对程序进行任何修改即可执行的目的。也正是这个原因，这些语言的程序都具有非常强的跨平台性。")]),v._v(" "),t("p",[v._v("虽然虚拟机技术得益于 Hypervisor 的加持，使得应用程序或者操作系统可以在无任何修改的情况下运行在另一平台上，但大家很容易发现，其有一个致命的缺陷，就是所有的指令都必须经过虚拟机监视器的处理。这也就意味着，虚拟机的性能是低下的，例如运行在 ZendVM 或者 HHVM 中的 PHP 程序，所有代码虽然编译成了 Opcode 码，但其依然是通过虚拟机才最终转换为机器所能识别的机器码去执行。")]),v._v(" "),t("p",[v._v("这种效率的低下有时候是无法容忍的，为了解决这个问题，真实的虚拟机程序常常不完全遵循 Hypervisor 的设计结构，而是引入一些其他技术来解决效率问题。")]),v._v(" "),t("p",[v._v("例如，在 VMware Workstation、Xen 中我们能够看到硬件辅助虚拟化的使用，通过让指令直达支持虚拟化的硬件，以此避开了效率低下的 Hypervisor。而如 JRE、HPHP 中，除了基于 Hypervisor 实现的"),t("strong",[v._v("解释执行")]),v._v("机制外，还有"),t("strong",[v._v("即时编译 ( Just In Time )")]),v._v(" 运行机制，让程序代码在运行前编译成符合当前硬件平台的机器码，这种方式就已经不属于虚拟化的范畴了。")]),v._v(" "),t("h2",{attrs:{id:"容器技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器技术"}},[v._v("#")]),v._v(" 容器技术")]),v._v(" "),t("p",[v._v("容器技术是一种全新意义上的虚拟化技术，按分类或者实现方式来说，其应该属于操作系统虚拟化的范畴，也就是在由操作系统提供虚拟化的支持。")]),v._v(" "),t("p",[v._v("所谓容器技术，指的是操作系统自身支持一些接口，能够让应用程序间可以互不干扰的独立运行，并且能够对其在运行中所使用的资源进行干预。当然，目前来说容器技术还没有一个严格的定义，其实现方式也各有不同，所以这里只能算是我的一点小小总结归纳。")]),v._v(" "),t("p",[v._v("由于应用程序的运行被隔离在了一个独立的运行环境之中，这个独立的运行环境就好似一个容器，包裹住了应用程序，这就是容器技术名字的由来。")]),v._v(" "),t("p",[v._v('![img](data:image/svg+xml;utf8,<?xml version="1.0"?>'),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"485",height:"246"}}),v._v(")")]),v._v(" "),t("p",[v._v("容器技术近年来已经是一个火遍大江南北的概念了，其之所以能名声大噪，很重要的一个原因是其在运行性能上要远超虚拟机等其他虚拟化实现。更甚一步说，运行在容器虚拟化中的应用程序，在运行效率上与真实运行在物理平台上的应用程序不相上下。")]),v._v(" "),t("p",[v._v("为什么容器技术能够造就近乎完美的运行效率呢？这就得从容器技术如何实现应用程序的指令转换开始说起。下面这张图展示了容器技术如何进行指令转换的。")]),v._v(" "),t("p",[v._v("...")]),v._v(" "),t("p",[v._v("实在无奈，没有找到容器技术进行指令转换的图片，因为容器技术压根没有做指令转换。是的，你没有听错，有时候"),t("strong",[v._v("解决问题的最佳方法就是不解决它")]),v._v("。")]),v._v(" "),t("p",[v._v("由于没有指令转换，运行在容器中的应用程序自身必须支持在真实操作系统上运行，也就是必须遵循硬件平台的指令规则。")]),v._v(" "),t("p",[v._v("很多同学这时候就有疑问了，指令都不转换，也没有解决程序跨平台兼容的问题，这算哪门子虚拟化技术。")]),v._v(" "),t("p",[v._v("没错，正是这种原因，很多人并不认同容器技术属于虚拟化技术的范畴。不过另一派观点认为，容器技术提供了相对独立的应用程序运行的环境，也提供了资源控制的功能，所以我们依然可以归纳其为一种实现不完全的虚拟化技术。")]),v._v(" "),t("h3",{attrs:{id:"虚拟机-vs-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机-vs-容器"}},[v._v("#")]),v._v(" 虚拟机 VS 容器")]),v._v(" "),t("p",[v._v("这里我们直接通过虚拟机和容器技术的剖析图来分析，就更容易看出容器虚拟化是如何在效率上完胜虚拟机的。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/1/16592899b28d4181?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),v._v(" "),t("p",[v._v("由于没有了虚拟操作系统和虚拟机监视器这两个层次，大幅减少了应用程序运行带来的额外消耗。")]),v._v(" "),t("p",[v._v("更准确的来说，所有在容器中的应用程序其实完全运行在了宿主操作系统中，与其他真实运行在其中的应用程序在指令运行层面是完全没有任何区别的。")]),v._v(" "),t("h2",{attrs:{id:"留言互动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#留言互动"}},[v._v("#")]),v._v(" 留言互动")])])}),[],!1,null,null,null);_.default=s.exports}}]);