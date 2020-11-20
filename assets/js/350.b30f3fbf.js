(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{771:function(t,e,n){"use strict";n.r(e);var a=n(44),c=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("Go 常用来写后台服务，通常只需要几行代码，就可以搭建一个 http server。")]),t._v(" "),n("p",[t._v("在 Go 的 server 里，通常每来一个请求都会启动若干个 goroutine 同时工作：有些去数据库拿数据，有些调用下游接口获取相关数据……")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/59235934-643ee480-8c26-11e9-8931-456333900657.png",alt:"request"}})]),t._v(" "),n("p",[t._v("这些 goroutine 需要共享这个请求的基本数据，例如登陆的 token，处理请求的最大超时时间（如果超过此值再返回数据，请求方因为超时接收不到）等等。当请求被取消或是处理时间太长，这有可能是使用者关闭了浏览器或是已经超过了请求方规定的超时时间，请求方直接放弃了这次请求结果。这时，所有正在为这个请求工作的 goroutine 需要快速退出，因为它们的“工作成果”不再被需要了。在相关联的 goroutine 都退出后，系统就可以回收相关的资源。")]),t._v(" "),n("p",[t._v("再多说一点，Go 语言中的 server 实际上是一个“协程模型”，也就是说一个协程处理一个请求。例如在业务的高峰期，某个下游服务的响应变慢，而当前系统的请求又没有超时控制，或者超时时间设置地过大，那么等待下游服务返回数据的协程就会越来越多。而我们知道，协程是要消耗系统资源的，后果就是协程数激增，内存占用飙涨，甚至导致服务不可用。更严重的会导致雪崩效应，整个服务对外表现为不可用，这肯定是 P0 级别的事故。这时，肯定有人要背锅了。")]),t._v(" "),n("p",[t._v("其实前面描述的 P0 级别事故，通过设置“允许下游最长处理时间”就可以避免。例如，给下游设置的 timeout 是 50 ms，如果超过这个值还没有接收到返回数据，就直接向客户端返回一个默认值或者错误。例如，返回商品的一个默认库存数量。注意，这里设置的超时时间和创建一个 http client 设置的读写超时时间不一样，这里不详细展开。可以去看看参考资料"),n("code",[t._v("【Go 在今日头条的实践】")]),t._v("一文，有很精彩的论述。")]),t._v(" "),n("p",[t._v("context 包就是为了解决上面所说的这些问题而开发的：在 一组 goroutine 之间传递共享的值、取消信号、deadline……")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/59235969-a405cc00-8c26-11e9-9448-2c6c86e8263b.png",alt:"request with context"}})]),t._v(" "),n("p",[t._v("用简练一些的话来说，在Go 里，我们不能直接杀死协程，协程的关闭一般会用 "),n("code",[t._v("channel+select")]),t._v(" 方式来控制。但是在某些场景下，例如处理一个请求衍生了很多协程，这些协程之间是相互关联的：需要共享一些全局变量、有共同的 deadline 等，而且可以同时被关闭。再用 "),n("code",[t._v("channel+select")]),t._v(" 就会比较麻烦，这时就可以通过 context 来实现。")]),t._v(" "),n("p",[t._v("一句话：context 用来解决 goroutine 之间"),n("code",[t._v("退出通知")]),t._v("、"),n("code",[t._v("元数据传递")]),t._v("的功能。")]),t._v(" "),n("p",[t._v("【引申1】举例说明 context 在实际项目中如何使用。")]),t._v(" "),n("p",[t._v("context 使用起来非常方便。源码里对外提供了一个创建根节点 context 的函数：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func Background() Context\n")])])]),n("p",[t._v("background 是一个空的 context， 它不能被取消，没有值，也没有超时时间。")]),t._v(" "),n("p",[t._v("有了根节点 context，又提供了四个函数创建子节点 context：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func WithCancel(parent Context) (ctx Context, cancel CancelFunc)\nfunc WithDeadline(parent Context, deadline time.Time) (Context, CancelFunc)\nfunc WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)\nfunc WithValue(parent Context, key, val interface{}) Context\n")])])]),n("p",[t._v("context 会在函数传递间传递。只需要在适当的时间调用 cancel 函数向 goroutines 发出取消信号或者调用 Value 函数取出 context 中的值。")]),t._v(" "),n("p",[t._v("在官方博客里，对于使用 context 提出了几点建议：")]),t._v(" "),n("ol",[n("li",[t._v("Do not store Contexts inside a struct type; instead, pass a Context explicitly to each function that needs it. The Context should be the first parameter, typically named ctx.")]),t._v(" "),n("li",[t._v("Do not pass a nil Context, even if a function permits it. Pass context.TODO if you are unsure about which Context to use.")]),t._v(" "),n("li",[t._v("Use context Values only for request-scoped data that transits processes and APIs, not for passing optional parameters to functions.")]),t._v(" "),n("li",[t._v("The same Context may be passed to functions running in different goroutines; Contexts are safe for simultaneous use by multiple goroutines.")])]),t._v(" "),n("p",[t._v("我翻译一下：")]),t._v(" "),n("ol",[n("li",[t._v("不要将 Context 塞到结构体里。直接将 Context 类型作为函数的第一参数，而且一般都命名为 ctx。")]),t._v(" "),n("li",[t._v("不要向函数传入一个 nil 的 context，如果你实在不知道传什么，标准库给你准备好了一个 context：todo。")]),t._v(" "),n("li",[t._v("不要把本应该作为函数参数的类型塞到 context 中，context 存储的应该是一些共同的数据。例如：登陆的 session、cookie 等。")]),t._v(" "),n("li",[t._v("同一个 context 可能会被传递到多个 goroutine，别担心，context 是并发安全的。")])]),t._v(" "),n("h1",{attrs:{id:"传递共享的数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#传递共享的数据"}},[t._v("#")]),t._v(" 传递共享的数据")]),t._v(" "),n("p",[t._v("对于 Web 服务端开发，往往希望将一个请求处理的整个过程串起来，这就非常依赖于 Thread Local（对于 Go 可理解为单个协程所独有） 的变量，而在 Go 语言中并没有这个概念，因此需要在函数调用的时候传递 context。")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('package main\n\nimport (\n\t"context"\n\t"fmt"\n)\n\nfunc main() {\n\tctx := context.Background()\n\tprocess(ctx)\n\n\tctx = context.WithValue(ctx, "traceId", "qcrao-2019")\n\tprocess(ctx)\n}\n\nfunc process(ctx context.Context) {\n\ttraceId, ok := ctx.Value("traceId").(string)\n\tif ok {\n\t\tfmt.Printf("process over. trace_id=%s\\n", traceId)\n\t} else {\n\t\tfmt.Printf("process over. no trace_id\\n")\n\t}\n}\n')])])]),n("p",[t._v("运行结果：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("process over. no trace_id\nprocess over. "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("trace_id")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("qcrao-2019\n")])])]),n("p",[t._v("第一次调用 process 函数时，ctx 是一个空的 context，自然取不出来 traceId。第二次，通过 "),n("code",[t._v("WithValue")]),t._v(" 函数创建了一个 context，并赋上了 "),n("code",[t._v("traceId")]),t._v(" 这个 key，自然就能取出来传入的 value 值。")]),t._v(" "),n("p",[t._v("当然，现实场景中可能是从一个 HTTP 请求中获取到的 Request-ID。所以，下面这个样例可能更适合：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('const requestIDKey int = 0\n\nfunc WithRequestID(next http.Handler) http.Handler {\n\treturn http.HandlerFunc(\n\t\tfunc(rw http.ResponseWriter, req *http.Request) {\n\t\t\t// 从 header 中提取 request-id\n\t\t\treqID := req.Header.Get("X-Request-ID")\n\t\t\t// 创建 valueCtx。使用自定义的类型，不容易冲突\n\t\t\tctx := context.WithValue(\n\t\t\t\treq.Context(), requestIDKey, reqID)\n\t\t\t\n\t\t\t// 创建新的请求\n\t\t\treq = req.WithContext(ctx)\n\t\t\t\n\t\t\t// 调用 HTTP 处理函数\n\t\t\tnext.ServeHTTP(rw, req)\n\t\t}\n\t)\n}\n\n// 获取 request-id\nfunc GetRequestID(ctx context.Context) string {\n\tctx.Value(requestIDKey).(string)\n}\n\nfunc Handle(rw http.ResponseWriter, req *http.Request) {\n\t// 拿到 reqId，后面可以记录日志等等\n\treqID := GetRequestID(req.Context())\n\t...\n}\n\nfunc main() {\n\thandler := WithRequestID(http.HandlerFunc(Handle))\n\thttp.ListenAndServe("/", handler)\n}\n')])])]),n("h1",{attrs:{id:"取消-goroutine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#取消-goroutine"}},[t._v("#")]),t._v(" 取消 goroutine")]),t._v(" "),n("p",[t._v("我们先来设想一个场景：打开外卖的订单页，地图上显示外卖小哥的位置，而且是每秒更新 1 次。app 端向后台发起 websocket 连接（现实中可能是轮询）请求后，后台启动一个协程，每隔 1 秒计算 1 次小哥的位置，并发送给端。如果用户退出此页面，则后台需要“取消”此过程，退出 goroutine，系统回收资源。")]),t._v(" "),n("p",[t._v("后端可能的实现如下：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func Perform() {\n    for {\n        calculatePos()\n        sendResult()\n        time.Sleep(time.Second)\n    }\n}\n")])])]),n("p",[t._v("如果需要实现“取消”功能，并且在不了解 context 功能的前提下，可能会这样做：给函数增加一个指针型的 bool 变量，在 for 语句的开始处判断 bool 变量是发由 true 变为 false，如果改变，则退出循环。")]),t._v(" "),n("p",[t._v("上面给出的简单做法，可以实现想要的效果，没有问题，但是并不优雅，并且一旦协程数量多了之后，并且各种嵌套，就会很麻烦。优雅的做法，自然就要用到 context。")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func Perform(ctx context.Context) {\n    for {\n        calculatePos()\n        sendResult()\n\n        select {\n        case <-ctx.Done():\n            // 被取消，直接返回\n            return\n        case <-time.After(time.Second):\n            // block 1 秒钟 \n        }\n    }\n}\n")])])]),n("p",[t._v("主流程可能是这样的：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ctx, cancel := context.WithTimeout(context.Background(), time.Hour)\ngo Perform(ctx)\n\n// ……\n// app 端返回页面，调用cancel 函数\ncancel()\n")])])]),n("p",[t._v("注意一个细节，WithTimeOut 函数返回的 context 和 cancelFun 是分开的。context 本身并没有取消函数，这样做的原因是取消函数只能由外层函数调用，防止子节点 context 调用取消函数，从而严格控制信息的流向：由父节点 context 流向子节点 context。")]),t._v(" "),n("h1",{attrs:{id:"防止-goroutine-泄漏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#防止-goroutine-泄漏"}},[t._v("#")]),t._v(" 防止 goroutine 泄漏")]),t._v(" "),n("p",[t._v("前面那个例子里，goroutine 还是会自己执行完，最后返回，只不过会多浪费一些系统资源。这里改编一个“如果不用 context 取消，goroutine 就会泄漏的例子”，来自参考资料："),n("code",[t._v("【避免协程泄漏】")]),t._v("。")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func gen() <-chan int {\n\tch := make(chan int)\n\tgo func() {\n\t\tvar n int\n\t\tfor {\n\t\t\tch <- n\n\t\t\tn++\n\t\t\ttime.Sleep(time.Second)\n\t\t}\n\t}()\n\treturn ch\n}\n")])])]),n("p",[t._v("这是一个可以生成无限整数的协程，但如果我只需要它产生的前 5 个数，那么就会发生 goroutine 泄漏：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func main() {\n\tfor n := range gen() {\n\t\tfmt.Println(n)\n\t\tif n == 5 {\n\t\t\tbreak\n\t\t}\n\t}\n\t// ……\n}\n")])])]),n("p",[t._v("当 n == 5 的时候，直接 break 掉。那么 gen 函数的协程就会执行无限循环，永远不会停下来。发生了 goroutine 泄漏。")]),t._v(" "),n("p",[t._v("用 context 改进这个例子：")]),t._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("func gen(ctx context.Context) <-chan int {\n\tch := make(chan int)\n\tgo func() {\n\t\tvar n int\n\t\tfor {\n\t\t\tselect {\n\t\t\tcase <-ctx.Done():\n\t\t\t\treturn\n\t\t\tcase ch <- n:\n\t\t\t\tn++\n\t\t\t\ttime.Sleep(time.Second)\n\t\t\t}\n\t\t}\n\t}()\n\treturn ch\n}\n\nfunc main() {\n\tctx, cancel := context.WithCancel(context.Background())\n\tdefer cancel() // 避免其他地方忘记 cancel，且重复调用不影响\n\n\tfor n := range gen(ctx) {\n\t\tfmt.Println(n)\n\t\tif n == 5 {\n\t\t\tcancel()\n\t\t\tbreak\n\t\t}\n\t}\n\t// ……\n}\n")])])]),n("p",[t._v("增加一个 context，在 break 前调用 cancel 函数，取消 goroutine。gen 函数在接收到取消信号后，直接退出，系统回收资源。")])])}),[],!1,null,null,null);e.default=c.exports}}]);