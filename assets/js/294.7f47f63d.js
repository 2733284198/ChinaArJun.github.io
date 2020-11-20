(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{715:function(t,n,e){"use strict";e.r(n);var a=e(44),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),e("p",[t._v("底层数据结构需要看源码，版本为 go 1.9.2：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("type hchan struct {\n\t// chan 里元素数量\n\tqcount   uint\n\t// chan 底层循环数组的长度\n\tdataqsiz uint\n\t// 指向底层循环数组的指针\n\t// 只针对有缓冲的 channel\n\tbuf      unsafe.Pointer\n\t// chan 中元素大小\n\telemsize uint16\n\t// chan 是否被关闭的标志\n\tclosed   uint32\n\t// chan 中元素类型\n\telemtype *_type // element type\n\t// 已发送元素在循环数组中的索引\n\tsendx    uint   // send index\n\t// 已接收元素在循环数组中的索引\n\trecvx    uint   // receive index\n\t// 等待接收的 goroutine 队列\n\trecvq    waitq  // list of recv waiters\n\t// 等待发送的 goroutine 队列\n\tsendq    waitq  // list of send waiters\n\n\t// 保护 hchan 中所有字段\n\tlock mutex\n}\n")])])]),e("p",[t._v("关于字段的含义都写在注释里了，再来重点说几个字段：")]),t._v(" "),e("p",[e("code",[t._v("buf")]),t._v(" 指向底层循环数组，只有缓冲型的 channel 才有。")]),t._v(" "),e("p",[e("code",[t._v("sendx")]),t._v("，"),e("code",[t._v("recvx")]),t._v(" 均指向底层循环数组，表示当前可以发送和接收的元素位置索引值（相对于底层数组）。")]),t._v(" "),e("p",[e("code",[t._v("sendq")]),t._v("，"),e("code",[t._v("recvq")]),t._v(" 分别表示被阻塞的 goroutine，这些 goroutine 由于尝试读取 channel 或向 channel 发送数据而被阻塞。")]),t._v(" "),e("p",[e("code",[t._v("waitq")]),t._v(" 是 "),e("code",[t._v("sudog")]),t._v(" 的一个双向链表，而 "),e("code",[t._v("sudog")]),t._v(" 实际上是对 goroutine 的一个封装：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("type waitq struct {\n\tfirst *sudog\n\tlast  *sudog\n}\n")])])]),e("p",[e("code",[t._v("lock")]),t._v(" 用来保证每个读 channel 或写 channel 的操作都是原子的。")]),t._v(" "),e("p",[t._v("例如，创建一个容量为 6 的，元素为 int 型的 channel 数据结构如下 ：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/61179068-806ee080-a62d-11e9-818c-16af42025b1b.png",alt:"chan data structure"}})]),t._v(" "),e("h1",{attrs:{id:"创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),e("p",[t._v("我们知道，通道有两个方向，发送和接收。理论上来说，我们可以创建一个只发送或只接收的通道，但是这种通道创建出来后，怎么使用呢？一个只能发的通道，怎么接收呢？同样，一个只能收的通道，如何向其发送数据呢？")]),t._v(" "),e("p",[t._v("一般而言，使用 "),e("code",[t._v("make")]),t._v(" 创建一个能收能发的通道：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 无缓冲通道\nch1 := make(chan int)\n// 有缓冲通道\nch2 := make(chan int, 10)\n")])])]),e("p",[t._v("通过"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/obnnVkO2EiFnuXk_AIDHWw",target:"_blank",rel:"noopener noreferrer"}},[t._v("汇编"),e("OutboundLink")],1),t._v("分析，我们知道，最终创建 chan 的函数是 "),e("code",[t._v("makechan")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("func makechan(t *chantype, size int64) *hchan\n")])])]),e("p",[t._v("从函数原型来看，创建的 chan 是一个指针。所以我们能在函数间直接传递 channel，而不用传递 channel 的指针。")]),t._v(" "),e("p",[t._v("具体来看下代码：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('const hchanSize = unsafe.Sizeof(hchan{}) + uintptr(-int(unsafe.Sizeof(hchan{}))&(maxAlign-1))\n\nfunc makechan(t *chantype, size int64) *hchan {\n\telem := t.elem\n\n\t// 省略了检查 channel size，align 的代码\n\t// ……\n\n\tvar c *hchan\n\t// 如果元素类型不含指针 或者 size 大小为 0（无缓冲类型）\n\t// 只进行一次内存分配\n\tif elem.kind&kindNoPointers != 0 || size == 0 {\n\t\t// 如果 hchan 结构体中不含指针，GC 就不会扫描 chan 中的元素\n\t\t// 只分配 "hchan 结构体大小 + 元素大小*个数" 的内存\n\t\tc = (*hchan)(mallocgc(hchanSize+uintptr(size)*elem.size, nil, true))\n\t\t// 如果是缓冲型 channel 且元素大小不等于 0（大小等于 0的元素类型：struct{}）\n\t\tif size > 0 && elem.size != 0 {\n\t\t\tc.buf = add(unsafe.Pointer(c), hchanSize)\n\t\t} else {\n\t\t\t// race detector uses this location for synchronization\n\t\t\t// Also prevents us from pointing beyond the allocation (see issue 9401).\n\t\t\t// 1. 非缓冲型的，buf 没用，直接指向 chan 起始地址处\n\t\t\t// 2. 缓冲型的，能进入到这里，说明元素无指针且元素类型为 struct{}，也无影响\n\t\t\t// 因为只会用到接收和发送游标，不会真正拷贝东西到 c.buf 处（这会覆盖 chan的内容）\n\t\t\tc.buf = unsafe.Pointer(c)\n\t\t}\n\t} else {\n\t\t// 进行两次内存分配操作\n\t\tc = new(hchan)\n\t\tc.buf = newarray(elem, int(size))\n\t}\n\tc.elemsize = uint16(elem.size)\n\tc.elemtype = elem\n\t// 循环数组长度\n\tc.dataqsiz = uint(size)\n\n\t// 返回 hchan 指针\n\treturn c\n}\n')])])]),e("p",[t._v("新建一个 chan 后，内存在堆上分配，大概长这样：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/61337268-4d179600-a867-11e9-98ac-f979e3da00a6.png",alt:"make chan"}})]),t._v(" "),e("h1",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[t._v("【Kavya在Gopher Con 上关于 channel 的设计，非常好】https://speakerd.s3.amazonaws.com/presentations/10ac0b1d76a6463aa98ad6a9dec917a7/GopherCon_v10.0.pdf")])])}),[],!1,null,null,null);n.default=s.exports}}]);