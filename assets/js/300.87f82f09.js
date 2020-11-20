(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{721:function(t,n,e){"use strict";e.r(n);var c=e(44),l=Object(c.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("关闭某个 channel，会执行函数 "),e("code",[t._v("closechan")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-golang extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('func closechan(c *hchan) {\n\t// 关闭一个 nil channel，panic\n\tif c == nil {\n\t\tpanic(plainError("close of nil channel"))\n\t}\n\n\t// 上锁\n\tlock(&c.lock)\n\t// 如果 channel 已经关闭\n\tif c.closed != 0 {\n\t\tunlock(&c.lock)\n\t\t// panic\n\t\tpanic(plainError("close of closed channel"))\n\t}\n\n\t// …………\n\n\t// 修改关闭状态\n\tc.closed = 1\n\n\tvar glist *g\n\n\t// 将 channel 所有等待接收队列的里 sudog 释放\n\tfor {\n\t\t// 从接收队列里出队一个 sudog\n\t\tsg := c.recvq.dequeue()\n\t\t// 出队完毕，跳出循环\n\t\tif sg == nil {\n\t\t\tbreak\n\t\t}\n\n\t\t// 如果 elem 不为空，说明此 receiver 未忽略接收数据\n\t\t// 给它赋一个相应类型的零值\n\t\tif sg.elem != nil {\n\t\t\ttypedmemclr(c.elemtype, sg.elem)\n\t\t\tsg.elem = nil\n\t\t}\n\t\tif sg.releasetime != 0 {\n\t\t\tsg.releasetime = cputicks()\n\t\t}\n\t\t// 取出 goroutine\n\t\tgp := sg.g\n\t\tgp.param = nil\n\t\tif raceenabled {\n\t\t\traceacquireg(gp, unsafe.Pointer(c))\n\t\t}\n\t\t// 相连，形成链表\n\t\tgp.schedlink.set(glist)\n\t\tglist = gp\n\t}\n\n\t// 将 channel 等待发送队列里的 sudog 释放\n\t// 如果存在，这些 goroutine 将会 panic\n\tfor {\n\t\t// 从发送队列里出队一个 sudog\n\t\tsg := c.sendq.dequeue()\n\t\tif sg == nil {\n\t\t\tbreak\n\t\t}\n\n\t\t// 发送者会 panic\n\t\tsg.elem = nil\n\t\tif sg.releasetime != 0 {\n\t\t\tsg.releasetime = cputicks()\n\t\t}\n\t\tgp := sg.g\n\t\tgp.param = nil\n\t\tif raceenabled {\n\t\t\traceacquireg(gp, unsafe.Pointer(c))\n\t\t}\n\t\t// 形成链表\n\t\tgp.schedlink.set(glist)\n\t\tglist = gp\n\t}\n\t// 解锁\n\tunlock(&c.lock)\n\n\t// Ready all Gs now that we\'ve dropped the channel lock.\n\t// 遍历链表\n\tfor glist != nil {\n\t\t// 取最后一个\n\t\tgp := glist\n\t\t// 向前走一步，下一个唤醒的 g\n\t\tglist = glist.schedlink.ptr()\n\t\tgp.schedlink = 0\n\t\t// 唤醒相应 goroutine\n\t\tgoready(gp, 3)\n\t}\n}\n')])])]),e("p",[t._v("close 逻辑比较简单，对于一个 channel，recvq 和 sendq 中分别保存了阻塞的发送者和接收者。关闭 channel 后，对于等待接收者而言，会收到一个相应类型的零值。对于等待发送者，会直接 panic。所以，在不了解 channel 还有没有接收者的情况下，不能贸然关闭 channel。")]),t._v(" "),e("p",[t._v("close 函数先上一把大锁，接着把所有挂在这个 channel 上的 sender 和 receiver 全都连成一个 sudog 链表，再解锁。最后，再将所有的 sudog 全都唤醒。")]),t._v(" "),e("p",[t._v("唤醒之后，该干嘛干嘛。sender 会继续执行 chansend 函数里 goparkunlock 函数之后的代码，很不幸，检测到 channel 已经关闭了，panic。receiver 则比较幸运，进行一些扫尾工作后，返回。这里，selected 返回 true，而返回值 received 则要根据 channel 是否关闭，返回不同的值。如果 channel 关闭，received 为 false，否则为 true。这我们分析的这种情况下，received 返回 false。")])])}),[],!1,null,null,null);n.default=l.exports}}]);