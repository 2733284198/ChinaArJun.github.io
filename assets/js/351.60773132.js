(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{772:function(t,e,n){"use strict";n.r(e);var a=n(44),c=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("type valueCtx struct {\n\tContext\n\tkey, val interface{}\n}\n")])])]),n("p",[t._v("它实现了两个方法：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func (c *valueCtx) String() string {\n\treturn fmt.Sprintf("%v.WithValue(%#v, %#v)", c.Context, c.key, c.val)\n}\n\nfunc (c *valueCtx) Value(key interface{}) interface{} {\n\tif c.key == key {\n\t\treturn c.val\n\t}\n\treturn c.Context.Value(key)\n}\n')])])]),n("p",[t._v("由于它直接将 Context 作为匿名字段，因此仅管它只实现了 2 个方法，其他方法继承自父 context。但它仍然是一个 Context，这是 Go 语言的一个特点。")]),t._v(" "),n("p",[t._v("创建 valueCtx 的函数：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func WithValue(parent Context, key, val interface{}) Context {\n\tif key == nil {\n\t\tpanic("nil key")\n\t}\n\tif !reflect.TypeOf(key).Comparable() {\n\t\tpanic("key is not comparable")\n\t}\n\treturn &valueCtx{parent, key, val}\n}\n')])])]),n("p",[t._v("对 key 的要求是可比较，因为之后需要通过 key 取出 context 中的值，可比较是必须的。")]),t._v(" "),n("p",[t._v("通过层层传递 context，最终形成这样一棵树：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/59154893-5e72c300-8aaf-11e9-9b78-3c34b5e73a45.png",alt:"valueCtx"}})]),t._v(" "),n("p",[t._v("和链表有点像，只是它的方向相反：Context 指向它的父节点，链表则指向下一个节点。通过 WithValue 函数，可以创建层层的 valueCtx，存储 goroutine 间可以共享的变量。")]),t._v(" "),n("p",[t._v("取值的过程，实际上是一个递归查找的过程：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func (c *valueCtx) Value(key interface{}) interface{} {\n\tif c.key == key {\n\t\treturn c.val\n\t}\n\treturn c.Context.Value(key)\n}\n")])])]),n("p",[t._v("它会顺着链路一直往上找，比较当前节点的 key\n是否是要找的 key，如果是，则直接返回 value。否则，一直顺着 context 往前，最终找到根节点（一般是 emptyCtx），直接返回一个 nil。所以用 Value 方法的时候要判断结果是否为 nil。")]),t._v(" "),n("p",[t._v("因为查找方向是往上走的，所以，父节点没法获取子节点存储的值，子节点却可以获取父节点的值。")]),t._v(" "),n("p",[n("code",[t._v("WithValue")]),t._v(" 创建 context 节点的过程实际上就是创建链表节点的过程。两个节点的 key 值是可以相等的，但它们是两个不同的 context 节点。查找的时候，会向上查找到最后一个挂载的 context 节点，也就是离得比较近的一个父节点 context。所以，整体上而言，用 "),n("code",[t._v("WithValue")]),t._v(" 构造的其实是一个低效率的链表。")]),t._v(" "),n("p",[t._v("如果你接手过项目，肯定经历过这样的窘境：在一个处理过程中，有若干子函数、子协程。各种不同的地方会向 context 里塞入各种不同的 k-v 对，最后在某个地方使用。")]),t._v(" "),n("p",[t._v("你根本就不知道什么时候什么地方传了什么值？这些值会不会被“覆盖”（底层是两个不同的 context 节点，查找的时候，只会返回一个结果）？你肯定会崩溃的。")]),t._v(" "),n("p",[t._v("而这也是 "),n("code",[t._v("context.Value")]),t._v(" 最受争议的地方。很多人建议尽量不要通过 context 传值。")])])}),[],!1,null,null,null);e.default=c.exports}}]);