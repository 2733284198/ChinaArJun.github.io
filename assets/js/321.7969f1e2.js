(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{742:function(e,t,n){"use strict";n.r(t);var a=n(44),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),n("p",[e._v("方法能给用户自定义的类型添加新的行为。它和函数的区别在于方法有一个接收者，给一个函数添加一个接收者，那么它就变成了方法。接收者可以是"),n("code",[e._v("值接收者")]),e._v("，也可以是"),n("code",[e._v("指针接收者")]),e._v("。")]),e._v(" "),n("p",[e._v("在调用方法的时候，值类型既可以调用"),n("code",[e._v("值接收者")]),e._v("的方法，也可以调用"),n("code",[e._v("指针接收者")]),e._v("的方法；指针类型既可以调用"),n("code",[e._v("指针接收者")]),e._v("的方法，也可以调用"),n("code",[e._v("值接收者")]),e._v("的方法。")]),e._v(" "),n("p",[e._v("也就是说，不管方法的接收者是什么类型，该类型的值和指针都可以调用，不必严格符合接收者的类型。")]),e._v(" "),n("p",[e._v("来看个例子：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package main\n\nimport "fmt"\n\ntype Person struct {\n\tage int\n}\n\nfunc (p Person) howOld() int {\n\treturn p.age\n}\n\nfunc (p *Person) growUp() {\n\tp.age += 1\n}\n\nfunc main() {\n\t// qcrao 是值类型\n\tqcrao := Person{age: 18}\n\n\t// 值类型 调用接收者也是值类型的方法\n\tfmt.Println(qcrao.howOld())\n\n\t// 值类型 调用接收者是指针类型的方法\n\tqcrao.growUp()\n\tfmt.Println(qcrao.howOld())\n\n\t// ----------------------\n\n\t// stefno 是指针类型\n\tstefno := &Person{age: 100}\n\n\t// 指针类型 调用接收者是值类型的方法\n\tfmt.Println(stefno.howOld())\n\n\t// 指针类型 调用接收者也是指针类型的方法\n\tstefno.growUp()\n\tfmt.Println(stefno.howOld())\n}\n')])])]),n("p",[e._v("上例子的输出结果是：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("19")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("101")]),e._v("\n")])])]),n("p",[e._v("调用了 "),n("code",[e._v("growUp")]),e._v(" 函数后，不管调用者是值类型还是指针类型，它的 "),n("code",[e._v("Age")]),e._v(" 值都改变了。")]),e._v(" "),n("p",[e._v("实际上，当类型和方法的接收者类型不同时，其实是编译器在背后做了一些工作，用一个表格来呈现：")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("-")]),e._v(" "),n("th",[e._v("值接收者")]),e._v(" "),n("th",[e._v("指针接收者")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("值类型调用者")]),e._v(" "),n("td",[e._v("方法会使用调用者的一个副本，类似于“传值”")]),e._v(" "),n("td",[e._v("使用值的引用来调用方法，上例中，"),n("code",[e._v("qcrao.growUp()")]),e._v(" 实际上是 "),n("code",[e._v("(&qcrao).growUp()")])])]),e._v(" "),n("tr",[n("td",[e._v("指针类型调用者")]),e._v(" "),n("td",[e._v("指针被解引用为值，上例中，"),n("code",[e._v("stefno.howOld()")]),e._v(" 实际上是 "),n("code",[e._v("(*stefno).howOld()")])]),e._v(" "),n("td",[e._v("实际上也是“传值”，方法里的操作会影响到调用者，类似于指针传参，拷贝了一份指针")])])])]),e._v(" "),n("h1",{attrs:{id:"值接收者和指针接收者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#值接收者和指针接收者"}},[e._v("#")]),e._v(" 值接收者和指针接收者")]),e._v(" "),n("p",[e._v("前面说过，不管接收者类型是值类型还是指针类型，都可以通过值类型或指针类型调用，这里面实际上通过语法糖起作用的。")]),e._v(" "),n("p",[e._v("先说结论：实现了接收者是值类型的方法，相当于自动实现了接收者是指针类型的方法；而实现了接收者是指针类型的方法，不会自动生成对应接收者是值类型的方法。")]),e._v(" "),n("p",[e._v("来看一个例子，就会完全明白：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package main\n\nimport "fmt"\n\ntype coder interface {\n\tcode()\n\tdebug()\n}\n\ntype Gopher struct {\n\tlanguage string\n}\n\nfunc (p Gopher) code() {\n\tfmt.Printf("I am coding %s language\\n", p.language)\n}\n\nfunc (p *Gopher) debug() {\n\tfmt.Printf("I am debuging %s language\\n", p.language)\n}\n\nfunc main() {\n\tvar c coder = &Gopher{"Go"}\n\tc.code()\n\tc.debug()\n}\n')])])]),n("p",[e._v("上述代码里定义了一个接口 "),n("code",[e._v("coder")]),e._v("，接口定义了两个函数：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("code()\ndebug()\n")])])]),n("p",[e._v("接着定义了一个结构体 "),n("code",[e._v("Gopher")]),e._v("，它实现了两个方法，一个值接收者，一个指针接收者。")]),e._v(" "),n("p",[e._v("最后，我们在 "),n("code",[e._v("main")]),e._v(" 函数里通过接口类型的变量调用了定义的两个函数。")]),e._v(" "),n("p",[e._v("运行一下，结果：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("I am coding Go language\nI am debuging Go language\n")])])]),n("p",[e._v("但是如果我们把 "),n("code",[e._v("main")]),e._v(" 函数的第一条语句换一下：")]),e._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('func main() {\n\tvar c coder = Gopher{"Go"}\n\tc.code()\n\tc.debug()\n}\n')])])]),n("p",[e._v("运行一下，报错：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("src/main.go:23:6: cannot use Gopher literal "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("type Gopher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" as "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("type")]),e._v(" coder "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" assignment:\n\tGopher does not implement coder "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("debug method has pointer receiver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),n("p",[e._v("看出这两处代码的差别了吗？第一次是将 "),n("code",[e._v("&Gopher")]),e._v(" 赋给了 "),n("code",[e._v("coder")]),e._v("；第二次则是将 "),n("code",[e._v("Gopher")]),e._v(" 赋给了 "),n("code",[e._v("coder")]),e._v("。")]),e._v(" "),n("p",[e._v("第二次报错是说，"),n("code",[e._v("Gopher")]),e._v(" 没有实现 "),n("code",[e._v("coder")]),e._v("。很明显了吧，因为 "),n("code",[e._v("Gopher")]),e._v(" 类型并没有实现 "),n("code",[e._v("debug")]),e._v(" 方法；表面上看， "),n("code",[e._v("*Gopher")]),e._v(" 类型也没有实现 "),n("code",[e._v("code")]),e._v(" 方法，但是因为 "),n("code",[e._v("Gopher")]),e._v(" 类型实现了 "),n("code",[e._v("code")]),e._v(" 方法，所以让 "),n("code",[e._v("*Gopher")]),e._v(" 类型自动拥有了 "),n("code",[e._v("code")]),e._v(" 方法。")]),e._v(" "),n("p",[e._v("当然，上面的说法有一个简单的解释：接收者是指针类型的方法，很可能在方法中会对接收者的属性进行更改操作，从而影响接收者；而对于接收者是值类型的方法，在方法中不会对接收者本身产生影响。")]),e._v(" "),n("p",[e._v("所以，当实现了一个接收者是值类型的方法，就可以自动生成一个接收者是对应指针类型的方法，因为两者都不会影响接收者。但是，当实现了一个接收者是指针类型的方法，如果此时自动生成一个接收者是值类型的方法，原本期望对接收者的改变（通过指针实现），现在无法实现，因为值类型会产生一个拷贝，不会真正影响调用者。")]),e._v(" "),n("p",[e._v("最后，只要记住下面这点就可以了：")]),e._v(" "),n("blockquote",[n("p",[e._v("如果实现了接收者是值类型的方法，会隐含地也实现了接收者是指针类型的方法。")])]),e._v(" "),n("h1",{attrs:{id:"两者分别在何时使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#两者分别在何时使用"}},[e._v("#")]),e._v(" 两者分别在何时使用")]),e._v(" "),n("p",[e._v("如果方法的接收者是值类型，无论调用者是对象还是对象指针，修改的都是对象的副本，不影响调用者；如果方法的接收者是指针类型，则调用者修改的是指针指向的对象本身。")]),e._v(" "),n("p",[e._v("使用指针作为方法的接收者的理由：")]),e._v(" "),n("ul",[n("li",[e._v("方法能够修改接收者指向的值。")]),e._v(" "),n("li",[e._v("避免在每次调用方法时复制该值，在值的类型为大型结构体时，这样做会更加高效。")])]),e._v(" "),n("p",[e._v("是使用值接收者还是指针接收者，不是由该方法是否修改了调用者（也就是接收者）来决定，而是应该基于该类型的"),n("code",[e._v("本质")]),e._v("。")]),e._v(" "),n("p",[e._v("如果类型具备“原始的本质”，也就是说它的成员都是由 Go 语言里内置的原始类型，如字符串，整型值等，那就定义值接收者类型的方法。像内置的引用类型，如 slice，map，interface，channel，这些类型比较特殊，声明他们的时候，实际上是创建了一个 "),n("code",[e._v("header")]),e._v("， 对于他们也是直接定义值接收者类型的方法。这样，调用函数时，是直接 copy 了这些类型的 "),n("code",[e._v("header")]),e._v("，而 "),n("code",[e._v("header")]),e._v(" 本身就是为复制设计的。")]),e._v(" "),n("p",[e._v("如果类型具备非原始的本质，不能被安全地复制，这种类型总是应该被共享，那就定义指针接收者的方法。比如 go 源码里的文件结构体（struct File）就不应该被复制，应该只有一份"),n("code",[e._v("实体")]),e._v("。")]),e._v(" "),n("p",[e._v("这一段说的比较绕，大家可以去看《Go 语言实战》5.3 那一节。")]),e._v(" "),n("h1",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("p",[e._v("【飞雪无情 Go实战笔记】https://www.flysnow.org/2017/04/03/go-in-action-go-interface.html")]),e._v(" "),n("p",[e._v("【何时使用指针接收者】http://ironxu.com/711")]),e._v(" "),n("p",[e._v("【理解Go Interface】http://lanlingzi.cn/post/technical/2016/0803_go_interface/")]),e._v(" "),n("p",[e._v("【Go语言实战 类型的本置】 图书《Go In Action》")])])}),[],!1,null,null,null);t.default=v.exports}}]);