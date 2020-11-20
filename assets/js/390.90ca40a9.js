(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{811:function(t,a,s){"use strict";s.r(a);var n=s(44),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"day08课上笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#day08课上笔记"}},[t._v("#")]),t._v(" day08课上笔记")]),t._v(" "),s("h1",{attrs:{id:"内容回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内容回顾"}},[t._v("#")]),t._v(" 内容回顾")]),t._v(" "),s("h2",{attrs:{id:"并发之goroutine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发之goroutine"}},[t._v("#")]),t._v(" 并发之goroutine")]),t._v(" "),s("h3",{attrs:{id:"并发和并行的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发和并行的区别"}},[t._v("#")]),t._v(" 并发和并行的区别")]),t._v(" "),s("h3",{attrs:{id:"goroutine的启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goroutine的启动"}},[t._v("#")]),t._v(" goroutine的启动")]),t._v(" "),s("p",[t._v("将要并发执行的任务包装成一个函数，调用函数的时候前面加上"),s("code",[t._v("go")]),t._v("关键字，就能够开启一个goroutine去执行该函数的任务。")]),t._v(" "),s("p",[t._v("goroutine对应的函数执行完，该goroutine就结束了。")]),t._v(" "),s("p",[t._v("程序启动的时候会自动的创建一个goroutine去执行main函数")]),t._v(" "),s("p",[t._v("main函数结束了，那么程序就结束了，由该程序启动的所有其他goroutine也都结束了。")]),t._v(" "),s("h3",{attrs:{id:"goroutine的本质"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goroutine的本质"}},[t._v("#")]),t._v(" goroutine的本质")]),t._v(" "),s("p",[t._v("goroutine的调度模型："),s("code",[t._v("GMP")])]),t._v(" "),s("p",[s("code",[t._v("M:N")]),t._v("：把m个goroutine分配给n个操作系统线程。")]),t._v(" "),s("h3",{attrs:{id:"goroutine与操作系统线程（os线程）的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goroutine与操作系统线程（os线程）的区别"}},[t._v("#")]),t._v(" goroutine与操作系统线程（OS线程）的区别")]),t._v(" "),s("p",[t._v("goroutine是用户态的线程，比内核态的线程更轻量级一点，初始时只占用2KB的栈空间。")]),t._v(" "),s("p",[t._v("可以轻松开启数十万的goroutine也不会崩内存。")]),t._v(" "),s("h3",{attrs:{id:"runtime-gomaxprocs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runtime-gomaxprocs"}},[t._v("#")]),t._v(" runtime.GOMAXPROCS")]),t._v(" "),s("p",[t._v("Go1.5之后默认就是操作系统的逻辑核心数，默认跑满CPU")]),t._v(" "),s("p",[s("code",[t._v("runtime.GOMAXPROCS(1)")]),t._v(":只占用一个核。")]),t._v(" "),s("h3",{attrs:{id:"work-pool模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#work-pool模式"}},[t._v("#")]),t._v(" work pool模式")]),t._v(" "),s("p",[t._v("开启一定数据的goroutine去干活。")]),t._v(" "),s("h3",{attrs:{id:"sync-waitgroup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-waitgroup"}},[t._v("#")]),t._v(" sync.WaitGroup")]),t._v(" "),s("p",[s("code",[t._v("var wg sync.WaitGroup")])]),t._v(" "),s("ul",[s("li",[t._v("wg.Add(1)  ：计数器+1")]),t._v(" "),s("li",[t._v("wg.Done()：计数器-1")]),t._v(" "),s("li",[t._v("wg.Wait()：等")])]),t._v(" "),s("h2",{attrs:{id:"channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" channel")]),t._v(" "),s("h3",{attrs:{id:"为什么需要channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要channel"}},[t._v("#")]),t._v(" 为什么需要channel?")]),t._v(" "),s("p",[t._v("通过channel实现多个goroutine之间的通信。")]),t._v(" "),s("p",[s("code",[t._v("CSP")]),t._v(":通过通信来共享内存。")]),t._v(" "),s("p",[t._v("channel是一种类型，一种引用类型。make函数初始化之后才能使用。（slice、map、channel）")]),t._v(" "),s("h3",{attrs:{id:"channel的声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channel的声明"}},[t._v("#")]),t._v(" channel的声明")]),t._v(" "),s("p",[s("code",[t._v("var ch chan 元素类型")])]),t._v(" "),s("h3",{attrs:{id:"channel的初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channel的初始化"}},[t._v("#")]),t._v(" channel的初始化")]),t._v(" "),s("p",[s("code",[t._v("ch = make(chan 元素类型, [缓冲区大小])")])]),t._v(" "),s("h3",{attrs:{id:"channel的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channel的操作"}},[t._v("#")]),t._v(" channel的操作")]),t._v(" "),s("ul",[s("li",[t._v("发送："),s("code",[t._v("ch <- 100")])]),t._v(" "),s("li",[t._v("接收："),s("code",[t._v("x := <- ch")])]),t._v(" "),s("li",[t._v("关闭: "),s("code",[t._v("close(ch)")])])]),t._v(" "),s("h3",{attrs:{id:"带缓冲区的通道和无缓冲区的通道："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带缓冲区的通道和无缓冲区的通道："}},[t._v("#")]),t._v(" 带缓冲区的通道和无缓冲区的通道：")]),t._v(" "),s("p",[t._v("快递员送快递的示例，有缓冲区就是有快递柜。")]),t._v(" "),s("h3",{attrs:{id:"从通道中取值："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从通道中取值："}},[t._v("#")]),t._v(" 从通道中取值：")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v("results\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ok "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 什么时候ok=false? results被关闭的时候")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" results "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"单项通道："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单项通道："}},[t._v("#")]),t._v(" 单项通道：")]),t._v(" "),s("p",[t._v("通常是用做函数的参数，只读通道"),s("code",[t._v("<-chan int")]),t._v("和只写通道"),s("code",[t._v("chan<- int")])]),t._v(" "),s("h3",{attrs:{id:"通道的各种考虑情况："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通道的各种考虑情况："}},[t._v("#")]),t._v(" 通道的各种考虑情况：")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/1566009364187.png",alt:"1566009364187"}})]),t._v(" "),s("h2",{attrs:{id:"select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[t._v("#")]),t._v(" select")]),t._v(" "),s("p",[t._v("同一时刻有多个通道要操作的场景下，使用select。")]),t._v(" "),s("p",[s("img",{attrs:{src:"assets/1566009690819.png",alt:"1566009690819"}})]),t._v(" "),s("h1",{attrs:{id:"今日内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#今日内容"}},[t._v("#")]),t._v(" 今日内容")]),t._v(" "),s("h2",{attrs:{id:"sync包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync包"}},[t._v("#")]),t._v(" sync包")]),t._v(" "),s("h3",{attrs:{id:"sync-mutex-互斥锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-mutex-互斥锁"}},[t._v("#")]),t._v(" sync.Mutex 互斥锁")]),t._v(" "),s("p",[t._v("适用于并发访问公共资源的场景。")]),t._v(" "),s("p",[t._v("声明互斥锁")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" lock sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Mutex\n")])])]),s("p",[t._v("使用互斥锁")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t\tlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\twg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"sync-rwmutex-读写互斥锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-rwmutex-读写互斥锁"}},[t._v("#")]),t._v(" sync.RWMutex 读写互斥锁")]),t._v(" "),s("p",[t._v("适用于读远远大于写的场景。")]),t._v(" "),s("p",[t._v("声明读写互斥锁")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" rwLock sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RWMutex\n")])])]),s("p",[t._v("使用读写互斥锁")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读操作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trwLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RLock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trwLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RUnlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写操作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" wg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trwLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Lock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Millisecond "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trwLock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unlock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"sync-once"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-once"}},[t._v("#")]),t._v(" sync.Once")]),t._v(" "),s("p",[t._v("适用于那些只执行一次的场景。")]),t._v(" "),s("p",[t._v("例如，只加载一次图片、只关闭一次channel")]),t._v(" "),s("h3",{attrs:{id:"sync-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sync-map"}},[t._v("#")]),t._v(" sync.Map")]),t._v(" "),s("p",[t._v("Go内置的map不是并发安全的。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// sync.Map 是一个开箱即用的并发安全的map")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\twg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" sync"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WaitGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\twg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tkey "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" strconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tm2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须使用sync.Map内置的Store方法设置键值对")]),t._v("\n\t\t\tvalue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" m2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Load")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须使用sync.Map提供的Load方法根据key取值")]),t._v("\n\t\t\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k=:%v,v:=%v\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\twg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Done")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\twg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Wait")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"atomic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#atomic"}},[t._v("#")]),t._v(" atomic")]),t._v(" "),s("h3",{attrs:{id:"网络编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络编程"}},[t._v("#")]),t._v(" 网络编程")]),t._v(" "),s("h3",{attrs:{id:"互联网协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#互联网协议"}},[t._v("#")]),t._v(" 互联网协议")]),t._v(" "),s("h3",{attrs:{id:"tcp客户端和服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp客户端和服务端"}},[t._v("#")]),t._v(" TCP客户端和服务端")]),t._v(" "),s("h3",{attrs:{id:"tcp黏包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp黏包"}},[t._v("#")]),t._v(" TCP黏包")]),t._v(" "),s("h3",{attrs:{id:"udp客户端和服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp客户端和服务端"}},[t._v("#")]),t._v(" UDP客户端和服务端")]),t._v(" "),s("p",[t._v("引申知识点:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/36149865",target:"_blank",rel:"noopener noreferrer"}},[t._v("大端和小端"),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"作业"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作业"}},[t._v("#")]),t._v(" 作业")]),t._v(" "),s("ol",[s("li",[t._v("写一个支持多客户端聊天的人工智能TCP的服务\n"),s("ol",[s("li",[t._v("把?换成!")]),t._v(" "),s("li",[t._v("把你换成我")]),t._v(" "),s("li",[t._v("把吗去掉")])])])]),t._v(" "),s("p",[t._v("问:你是机器人吗?")]),t._v(" "),s("p",[t._v("回:我是机器人")])])}),[],!1,null,null,null);a.default=r.exports}}]);