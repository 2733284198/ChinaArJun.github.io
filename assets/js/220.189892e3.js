(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{639:function(e,t,r){"use strict";r.r(t);var n=r(44),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_6-2-深入理解-go-defer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-深入理解-go-defer"}},[e._v("#")]),e._v(" 6.2 深入理解 Go defer")]),e._v(" "),r("p",[e._v("在上一章节 "),r("a",{attrs:{href:"https://book.eddycjy.com/golang/panic/panic-and-recover.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《深入理解 Go panic and recover》"),r("OutboundLink")],1),e._v(" 中，我们发现了 "),r("code",[e._v("defer")]),e._v(" 与其关联性极大，还是觉得非常有必要深入一下。希望通过本章节大家可以对 "),r("code",[e._v("defer")]),e._v(" 关键字有一个深刻的理解，那么我们开始吧。你先等等，请排好队，我们这儿采取后进先出 LIFO 的出站方式...")]),e._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[e._v("#")]),e._v(" 特性")]),e._v(" "),r("p",[e._v("我们简单的过一下 "),r("code",[e._v("defer")]),e._v(" 关键字的基础使用，让大家先有一个基础的认知")]),e._v(" "),r("h3",{attrs:{id:"一、延迟调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、延迟调用"}},[e._v("#")]),e._v(" 一、延迟调用")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('func main() {\n\tdefer log.Println("EDDYCJY.")\n\n\tlog.Println("end.")\n}\n')])])]),r("p",[e._v("输出结果：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ go run main.go            \n2019/05/19 21:15:02 end.\n2019/05/19 21:15:02 EDDYCJY.\n")])])]),r("h3",{attrs:{id:"二、后进先出"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、后进先出"}},[e._v("#")]),e._v(" 二、后进先出")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('func main() {\n\tfor i := 0; i < 6; i++ {\n\t\tdefer log.Println("EDDYCJY" + strconv.Itoa(i) + ".")\n\t}\n\n\n\tlog.Println("end.")\n}\n')])])]),r("p",[e._v("输出结果：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ go run main.go\n2019/05/19 21:19:17 end.\n2019/05/19 21:19:17 EDDYCJY5.\n2019/05/19 21:19:17 EDDYCJY4.\n2019/05/19 21:19:17 EDDYCJY3.\n2019/05/19 21:19:17 EDDYCJY2.\n2019/05/19 21:19:17 EDDYCJY1.\n2019/05/19 21:19:17 EDDYCJY0.\n")])])]),r("h3",{attrs:{id:"三、运行时间点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、运行时间点"}},[e._v("#")]),e._v(" 三、运行时间点")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('func main() {\n\tfunc() {\n\t\t defer log.Println("defer.EDDYCJY.")\n\t}()\n\n\tlog.Println("main.EDDYCJY.")\n}\n')])])]),r("p",[e._v("输出结果：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ go run main.go \n2019/05/22 23:30:27 defer.EDDYCJY.\n2019/05/22 23:30:27 main.EDDYCJY.\n")])])]),r("h3",{attrs:{id:"四、异常处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、异常处理"}},[e._v("#")]),e._v(" 四、异常处理")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('func main() {\n\tdefer func() {\n\t\tif e := recover(); e != nil {\n\t\t\tlog.Println("EDDYCJY.")\n\t\t}\n\t}()\n\n\tpanic("end.")\n}\n')])])]),r("p",[e._v("输出结果：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ go run main.go \n2019/05/20 22:22:57 EDDYCJY.\n")])])]),r("h2",{attrs:{id:"源码剖析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源码剖析"}},[e._v("#")]),e._v(" 源码剖析")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('$ go tool compile -S main.go \n"".main STEXT size=163 args=0x0 locals=0x40\n\t...\n\t0x0059 00089 (main.go:6)\tMOVQ\tAX, 16(SP)\n\t0x005e 00094 (main.go:6)\tMOVQ\t$1, 24(SP)\n\t0x0067 00103 (main.go:6)\tMOVQ\t$1, 32(SP)\n\t0x0070 00112 (main.go:6)\tCALL\truntime.deferproc(SB)\n\t0x0075 00117 (main.go:6)\tTESTL\tAX, AX\n\t0x0077 00119 (main.go:6)\tJNE\t137\n\t0x0079 00121 (main.go:7)\tXCHGL\tAX, AX\n\t0x007a 00122 (main.go:7)\tCALL\truntime.deferreturn(SB)\n\t0x007f 00127 (main.go:7)\tMOVQ\t56(SP), BP\n\t0x0084 00132 (main.go:7)\tADDQ\t$64, SP\n\t0x0088 00136 (main.go:7)\tRET\n\t0x0089 00137 (main.go:6)\tXCHGL\tAX, AX\n\t0x008a 00138 (main.go:6)\tCALL\truntime.deferreturn(SB)\n\t0x008f 00143 (main.go:6)\tMOVQ\t56(SP), BP\n\t0x0094 00148 (main.go:6)\tADDQ\t$64, SP\n\t0x0098 00152 (main.go:6)\tRET\n\t...\n')])])]),r("p",[e._v("首先我们需要找到它，找到它实际对应什么执行代码。通过汇编代码，可得知涉及如下方法：")]),e._v(" "),r("ul",[r("li",[e._v("runtime.deferproc")]),e._v(" "),r("li",[e._v("runtime.deferreturn")])]),e._v(" "),r("p",[e._v("很显然是运行时的方法，是对的人。我们继续往下走看看都分别承担了什么行为")]),e._v(" "),r("h3",{attrs:{id:"数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[e._v("#")]),e._v(" 数据结构")]),e._v(" "),r("p",[e._v("在开始前我们需要先介绍一下 "),r("code",[e._v("defer")]),e._v(" 的基础单元 "),r("code",[e._v("_defer")]),e._v(" 结构体，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("type _defer struct {\n\tsiz     int32\n\tstarted bool\n\tsp      uintptr // sp at time of defer\n\tpc      uintptr\n\tfn      *funcval\n\t_panic  *_panic // panic that is running defer\n\tlink    *_defer\n}\n\n...\ntype funcval struct {\n\tfn uintptr\n\t// variable-size, fn-specific data here\n}\n")])])]),r("ul",[r("li",[e._v("siz：所有传入参数的总大小")]),e._v(" "),r("li",[e._v("started：该 "),r("code",[e._v("defer")]),e._v(" 是否已经执行过")]),e._v(" "),r("li",[e._v("sp：函数栈指针寄存器，一般指向当前函数栈的栈顶")]),e._v(" "),r("li",[e._v("pc：程序计数器，有时称为指令指针(IP)，线程利用它来跟踪下一个要执行的指令。在大多数处理器中，PC指向的是下一条指令，而不是当前指令")]),e._v(" "),r("li",[e._v("fn：指向传入的函数地址和参数")]),e._v(" "),r("li",[e._v("_panic：指向 "),r("code",[e._v("_panic")]),e._v(" 链表")]),e._v(" "),r("li",[e._v("link：指向 "),r("code",[e._v("_defer")]),e._v(" 链表")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/f2KghN9.png",alt:"image"}})]),e._v(" "),r("h3",{attrs:{id:"deferproc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deferproc"}},[e._v("#")]),e._v(" deferproc")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("func deferproc(siz int32, fn *funcval) {\n    ...\n\tsp := getcallersp()\n\targp := uintptr(unsafe.Pointer(&fn)) + unsafe.Sizeof(fn)\n\tcallerpc := getcallerpc()\n\n\td := newdefer(siz)\n    ...\n\td.fn = fn\n\td.pc = callerpc\n\td.sp = sp\n\tswitch siz {\n\tcase 0:\n\t\t// Do nothing.\n\tcase sys.PtrSize:\n\t\t*(*uintptr)(deferArgs(d)) = *(*uintptr)(unsafe.Pointer(argp))\n\tdefault:\n\t\tmemmove(deferArgs(d), unsafe.Pointer(argp), uintptr(siz))\n\t}\n\n\treturn0()\n}\n")])])]),r("ul",[r("li",[e._v("获取调用 "),r("code",[e._v("defer")]),e._v(" 函数的函数栈指针、传入函数的参数具体地址以及PC （程序计数器），也就是下一个要执行的指令。这些相当于是预备参数，便于后续的流转控制")]),e._v(" "),r("li",[e._v("创建一个新的 "),r("code",[e._v("defer")]),e._v(" 最小单元 "),r("code",[e._v("_defer")]),e._v("，填入先前准备的参数")]),e._v(" "),r("li",[e._v("调用 "),r("code",[e._v("memmove")]),e._v(" 将传入的参数存储到新 "),r("code",[e._v("_defer")]),e._v(" （当前使用）中去，便于后续的使用")]),e._v(" "),r("li",[e._v("最后调用 "),r("code",[e._v("return0")]),e._v(" 进行返回，这个函数非常重要。能够避免在 "),r("code",[e._v("deferproc")]),e._v(" 中又因为返回 "),r("code",[e._v("return")]),e._v("，而诱发 "),r("code",[e._v("deferreturn")]),e._v(" 方法的调用。其根本原因是一个停止 "),r("code",[e._v("panic")]),e._v(" 的延迟方法会使 "),r("code",[e._v("deferproc")]),e._v(" 返回 1，但在机制中如果 "),r("code",[e._v("deferproc")]),e._v(" 返回不等于 0，将会总是检查返回值并跳转到函数的末尾。而 "),r("code",[e._v("return0")]),e._v(" 返回的就是 0，因此可以防止重复调用")])]),e._v(" "),r("h4",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),r("p",[e._v("在"),r("strong",[e._v("这个函数中会为新的 "),r("code",[e._v("_defer")]),e._v(" 设置一些基础属性，并将调用函数的参数集传入。最后通过特殊的返回方法结束函数调用")]),e._v("。另外这一块与先前 "),r("a",{attrs:{href:"https://segmentfault.com/a/1190000019251478#articleHeader9",target:"_blank",rel:"noopener noreferrer"}},[e._v("《深入理解 Go panic and recover》"),r("OutboundLink")],1),e._v(" 的处理逻辑有一定关联性，其实就是 "),r("code",[e._v("gp.sched.ret")]),e._v(" 返回 0 还是 1 会分流至不同处理方式")]),e._v(" "),r("h3",{attrs:{id:"newdefer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#newdefer"}},[e._v("#")]),e._v(" newdefer")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("func newdefer(siz int32) *_defer {\n\tvar d *_defer\n\tsc := deferclass(uintptr(siz))\n\tgp := getg()\n\tif sc < uintptr(len(p{}.deferpool)) {\n\t\tpp := gp.m.p.ptr()\n\t\tif len(pp.deferpool[sc]) == 0 && sched.deferpool[sc] != nil {\n\t\t\t...\n\t\t\tlock(&sched.deferlock)\n\t\t\td := sched.deferpool[sc]\n\t\t\tunlock(&sched.deferlock)\n\t\t}\n\t\t...\n\t}\n\tif d == nil {\n\t\tsystemstack(func() {\n\t\t\ttotal := roundupsize(totaldefersize(uintptr(siz)))\n\t\t\td = (*_defer)(mallocgc(total, deferType, true))\n\t\t})\n\t\t...\n\t}\n\td.siz = siz\n\td.link = gp._defer\n\tgp._defer = d\n\treturn d\n}\n")])])]),r("ul",[r("li",[e._v("从池中获取可以使用的 "),r("code",[e._v("_defer")]),e._v("，则复用作为新的基础单元")]),e._v(" "),r("li",[e._v("若在池中没有获取到可用的，则调用 "),r("code",[e._v("mallocgc")]),e._v(" 重新申请一个新的")]),e._v(" "),r("li",[e._v("设置 "),r("code",[e._v("defer")]),e._v(" 的基础属性，最后修改当前 "),r("code",[e._v("Goroutine")]),e._v(" 的 "),r("code",[e._v("_defer")]),e._v(" 指向")])]),e._v(" "),r("p",[e._v("通过这个方法我们可以注意到两点，如下：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("defer")]),e._v(" 与 "),r("code",[e._v("Goroutine(g)")]),e._v(" 有直接关系，所以讨论 "),r("code",[e._v("defer")]),e._v(" 时基本离不开 "),r("code",[e._v("g")]),e._v(" 的关联")]),e._v(" "),r("li",[e._v("新的 "),r("code",[e._v("defer")]),e._v(" 总是会在现有的链表中的最前面，也就是 "),r("code",[e._v("defer")]),e._v(" 的特性后进先出")])]),e._v(" "),r("h4",{attrs:{id:"小结-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结-2"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),r("p",[e._v("这个函数主要承担了获取新的 "),r("code",[e._v("_defer")]),e._v(" 的作用，它有可能是从 "),r("code",[e._v("deferpool")]),e._v(" 中获取的，也有可能是重新申请的")]),e._v(" "),r("h3",{attrs:{id:"deferreturn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deferreturn"}},[e._v("#")]),e._v(" deferreturn")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("func deferreturn(arg0 uintptr) {\n\tgp := getg()\n\td := gp._defer\n\tif d == nil {\n\t\treturn\n\t}\n\tsp := getcallersp()\n\tif d.sp != sp {\n\t\treturn\n\t}\n\n\tswitch d.siz {\n\tcase 0:\n\t\t// Do nothing.\n\tcase sys.PtrSize:\n\t\t*(*uintptr)(unsafe.Pointer(&arg0)) = *(*uintptr)(deferArgs(d))\n\tdefault:\n\t\tmemmove(unsafe.Pointer(&arg0), deferArgs(d), uintptr(d.siz))\n\t}\n\tfn := d.fn\n\td.fn = nil\n\tgp._defer = d.link\n\tfreedefer(d)\n\tjmpdefer(fn, uintptr(unsafe.Pointer(&arg0)))\n}\n")])])]),r("p",[e._v("如果在一个方法中调用过 "),r("code",[e._v("defer")]),e._v(" 关键字，那么编译器将会在结尾处插入 "),r("code",[e._v("deferreturn")]),e._v(" 方法的调用。而该方法中主要做了如下事项：")]),e._v(" "),r("ul",[r("li",[e._v("清空当前节点 "),r("code",[e._v("_defer")]),e._v(" 被调用的函数调用信息")]),e._v(" "),r("li",[e._v("释放当前节点的 "),r("code",[e._v("_defer")]),e._v(" 的存储信息并放回池中（便于复用）")]),e._v(" "),r("li",[e._v("跳转到调用 "),r("code",[e._v("defer")]),e._v(" 关键字的调用函数处")])]),e._v(" "),r("p",[e._v("在这段代码中，跳转方法 "),r("code",[e._v("jmpdefer")]),e._v(" 格外重要。因为它显式的控制了流转，代码如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// asm_amd64.s\nTEXT runtime·jmpdefer(SB), NOSPLIT, $0-16\n\tMOVQ\tfv+0(FP), DX\t// fn\n\tMOVQ\targp+8(FP), BX\t// caller sp\n\tLEAQ\t-8(BX), SP\t// caller sp after CALL\n\tMOVQ\t-8(SP), BP\t// restore BP as if deferreturn returned (harmless if framepointers not in use)\n\tSUBQ\t$5, (SP)\t// return to CALL again\n\tMOVQ\t0(DX), BX\n\tJMP\tBX\t// but first run the deferred function\n")])])]),r("p",[e._v("通过源码的分析，我们发现它做了两个很 “奇怪” 又很重要的事，如下：")]),e._v(" "),r("ul",[r("li",[e._v("MOVQ\t-8(SP), BP："),r("code",[e._v("-8(BX)")]),e._v(" 这个位置保存的是 "),r("code",[e._v("deferreturn")]),e._v(" 执行完毕后的地址")]),e._v(" "),r("li",[e._v("SUBQ\t$5, (SP)："),r("code",[e._v("SP")]),e._v(" 的地址减 5 ，其减掉的长度就恰好是 "),r("code",[e._v("runtime.deferreturn")]),e._v(" 的长度")])]),e._v(" "),r("p",[e._v("你可能会问，为什么是 5？好吧。翻了半天最后看了一下汇编代码...嗯，相减的确是 5 没毛病，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\t0x007a 00122 (main.go:7)\tCALL\truntime.deferreturn(SB)\n\t0x007f 00127 (main.go:7)\tMOVQ\t56(SP), BP\n")])])]),r("p",[e._v("我们整理一下思绪，照上述逻辑的话，那 "),r("code",[e._v("deferreturn")]),e._v(" 就是一个 “递归” 了哦。每次都会重新回到 "),r("code",[e._v("deferreturn")]),e._v(" 函数，那它在什么时候才会结束呢，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("func deferreturn(arg0 uintptr) {\n\tgp := getg()\n\td := gp._defer\n\tif d == nil {\n\t\treturn\n\t}\n\t...\n}\n")])])]),r("p",[e._v("也就是会不断地进入 "),r("code",[e._v("deferreturn")]),e._v(" 函数，判断链表中是否还存着 "),r("code",[e._v("_defer")]),e._v("。若已经不存在了，则返回，结束掉它。简单来讲，就是处理完全部 "),r("code",[e._v("defer")]),e._v(" 才允许你真的离开它。果真如此吗？我们再看看上面的汇编代码，如下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("    。..\n\t0x0070 00112 (main.go:6)\tCALL\truntime.deferproc(SB)\n\t0x0075 00117 (main.go:6)\tTESTL\tAX, AX\n\t0x0077 00119 (main.go:6)\tJNE\t137\n\t0x0079 00121 (main.go:7)\tXCHGL\tAX, AX\n\t0x007a 00122 (main.go:7)\tCALL\truntime.deferreturn(SB)\n\t0x007f 00127 (main.go:7)\tMOVQ\t56(SP), BP\n\t0x0084 00132 (main.go:7)\tADDQ\t$64, SP\n\t0x0088 00136 (main.go:7)\tRET\n\t0x0089 00137 (main.go:6)\tXCHGL\tAX, AX\n\t0x008a 00138 (main.go:6)\tCALL\truntime.deferreturn(SB)\n\t...\n")])])]),r("p",[e._v("的确如上述流程所分析一致，验证完毕")]),e._v(" "),r("h4",{attrs:{id:"小结-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结-3"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),r("p",[e._v("这个函数主要承担了清空已使用的 "),r("code",[e._v("defer")]),e._v(" 和跳转到调用 "),r("code",[e._v("defer")]),e._v(" 关键字的函数处，非常重要")]),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("我们有提到 "),r("code",[e._v("defer")]),e._v(" 关键字涉及两个核心的函数，分别是 "),r("code",[e._v("deferproc")]),e._v(" 和 "),r("code",[e._v("deferreturn")]),e._v(" 函数。而 "),r("code",[e._v("deferreturn")]),e._v(" 函数比较特殊，是当应用函数调用 "),r("code",[e._v("defer")]),e._v(" 关键字时，编译器会在其结尾处插入 "),r("code",[e._v("deferreturn")]),e._v(" 的调用，它们俩一般都是成对出现的")]),e._v(" "),r("p",[e._v("但是当一个 "),r("code",[e._v("Goroutine")]),e._v(" 上存在着多次 "),r("code",[e._v("defer")]),e._v(" 行为（也就是多个 "),r("code",[e._v("_defer")]),e._v("）时，编译器会进行利用一些小技巧， 重新回到 "),r("code",[e._v("deferreturn")]),e._v(" 函数去消耗 "),r("code",[e._v("_defer")]),e._v(" 链表，直到一个不剩才允许真正的结束")]),e._v(" "),r("p",[e._v("而新增的基础单元 "),r("code",[e._v("_defer")]),e._v("，有可能是被复用的，也有可能是全新申请的。它最后都会被追加到 "),r("code",[e._v("_defer")]),e._v(" 链表的表头，从而设定了后进先出的调用特性")]),e._v(" "),r("h2",{attrs:{id:"关联"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关联"}},[e._v("#")]),e._v(" 关联")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/EDDYCJY/blog/blob/master/golang/pkg/2019-05-18-%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Go-panic-and-recover.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解 Go panic and recover"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.ardanlabs.com/blog/2018/08/scheduling-in-go-part1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scheduling In Go"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://hustcat.github.io/dive-into-stack-defer-panic-recover-in-go/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dive into stack and defer/panic/recover in go"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/cch123/golang-notes/blob/master/defer.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("golang-notes"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);