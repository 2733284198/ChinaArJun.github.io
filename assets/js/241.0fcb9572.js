(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{660:function(t,a,s){"use strict";s.r(a);var n=s(44),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"微信红包的架构设计-demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信红包的架构设计-demo"}},[t._v("#")]),t._v(" 微信红包的架构设计 & Demo")]),t._v(" "),s("h3",{attrs:{id:"_1-微信的金额什么时候算？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-微信的金额什么时候算？"}},[t._v("#")]),t._v(" 1. 微信的金额什么时候算？")]),t._v(" "),s("p",[t._v("答：微信金额是拆的时候实时算出来，不是预先分配的，采用的是纯内存计算，不需要预算空间存储。采取实时计算金额的考虑：预算需要占存储，实时效率很高，预算才效率低。")]),t._v(" "),s("h3",{attrs:{id:"_2-实时性：为什么明明抢到红包，点开后发现没有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实时性：为什么明明抢到红包，点开后发现没有？"}},[t._v("#")]),t._v(" 2. 实时性：为什么明明抢到红包，点开后发现没有？")]),t._v(" "),s("p",[t._v("答：2014 年的红包一点开就知道金额，分两次操作，先抢到金额，然后再转账。\n2015 年的红包的拆和抢是分离的，需要点两次，因此会出现抢到红包了，但点开后告知红包已经被领完的状况。进入到第一个页面不代表抢到，只表示当时红包还有。")]),t._v(" "),s("h3",{attrs:{id:"_3-分配：红包里的金额怎么算？为什么出现各个红包金额相差很大？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-分配：红包里的金额怎么算？为什么出现各个红包金额相差很大？"}},[t._v("#")]),t._v(" 3. 分配：红包里的金额怎么算？为什么出现各个红包金额相差很大？")]),t._v(" "),s("p",[t._v("答：随机，额度在 0.01 和剩余平均值 *2 之间。\n例如：发 100 块钱，总共 10 个红包，那么平均值是 10 块钱一个，那么发出来的红包的额度在 0.01元～20元 之间波动。\n当前面3个红包总共被领了 40 块钱时，剩下 60 块钱，总共 7 个红包，那么这 7 个红包的额度在：0.01～（60/7*2）=17.14 之间。\n注意：这里的算法是每被抢一个后，剩下的会再次执行上面的这样的算法。")]),t._v(" "),s("p",[t._v("这样算下去，会超过最开始的全部金额，因此到了最后面如果不够这么算，那么会采取如下算法：保证剩余用户能拿到最低 1 分钱即可。")]),t._v(" "),s("p",[t._v("如果前面的人手气不好，那么后面的余额越多，红包额度也就越多，因此实际概率一样的。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("Demo")])])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"math/rand"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最少1分钱")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MinAmount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 总金额100元(转为最小分单位)，发10个红包")]),t._v("\n\tcount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),t._v("\n\n\tremain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" amount\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CalculateEnvelop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tremain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" x\n\t\tres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("float64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CalculateEnvelop 计算随机红包序列")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// count - 红包数量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// amount - 总金额(单位：分)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CalculateEnvelop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" amount "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" amount\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2倍均值范围，避免分散过大")]),t._v("\n\tmaxAvailable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("MinAmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fmt.Println(maxAvailable)")]),t._v("\n\n\trand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Seed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UnixNano")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Int63n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxAvailable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" MinAmount\n\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("blockquote",[s("p",[t._v("运行结果："),s("br"),t._v("\n[18.63 4.3 4.37 0.89 19.92 11.11 7.33 7.66 20.06 5.73]"),s("br"),t._v("\n[15.58 5.94 11.12 14.19 12.39 6.02 10.71 14.95 1.96 7.14]"),s("br"),t._v("\n[7.98 10.51 13.59 2.47 6.97 6.78 24.2 2.22 2.27 23.01]"),s("br"),t._v("\n[6.27 6.71 15.48 3.24 21.55 9.69 11.77 5.79 3.05 16.45]"),s("br"),t._v("\n[5.98 13.95 9.98 17.06 3.8 0.33 2.06 19.64 26.4 0.8]")])]),t._v(" "),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("方案优化？（之后将带来多种优化方案）"),s("br"),t._v("\n比较先抢、后抢的公平性；"),s("br"),t._v("\n性能测试比较；"),s("br"),t._v("\n先计算红包序列，还是抢的时候再计算？")])]),t._v(" "),s("h3",{attrs:{id:"_4-红包的设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-红包的设计"}},[t._v("#")]),t._v(" 4. 红包的设计")]),t._v(" "),s("p",[t._v("答：微信从财付通拉取金额数据过来，生成个数/红包类型/金额放到 "),s("code",[t._v("redis")]),t._v(" 集群里，"),s("code",[t._v("app")]),t._v(" 端将红包 "),s("code",[t._v("ID")]),t._v(" 的请求放入请求队列中，如果发现超过红包的个数，直接返回。根据红包的裸祭处理成功得到令牌请求，则由财付通进行一致性调用，通过像比特币一样，两边保存交易记录，交易后交给第三方服务审计，如果交易过程中出现不一致就强制回归。")]),t._v(" "),s("h3",{attrs:{id:"_5-并发性处理：红包如何计算被抢完？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-并发性处理：红包如何计算被抢完？"}},[t._v("#")]),t._v(" 5. 并发性处理：红包如何计算被抢完？")]),t._v(" "),s("p",[t._v("答："),s("code",[t._v("cache")]),t._v(" 会抵抗无效请求，将无效的请求过滤掉，实际进入到后台的量不大。"),s("code",[t._v("cache")]),t._v(" 记录红包个数，原子操作进行个数递减，到 0 表示被抢光。财付通按照 "),s("code",[t._v("20万")]),t._v(" 笔每秒入账准备，但实际还不到 "),s("code",[t._v("8万")]),t._v(" 每秒。")]),t._v(" "),s("h3",{attrs:{id:"_6-通如何保持-8w-每秒的写入？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-通如何保持-8w-每秒的写入？"}},[t._v("#")]),t._v(" 6. 通如何保持 "),s("code",[t._v("8w")]),t._v(" 每秒的写入？")]),t._v(" "),s("p",[t._v("答：多主 "),s("code",[t._v("sharding")]),t._v("，水平扩展机器。")]),t._v(" "),s("h3",{attrs:{id:"_7-数据容量多少？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据容量多少？"}},[t._v("#")]),t._v(" 7. 数据容量多少？")]),t._v(" "),s("p",[t._v("答：一个红包只占一条记录，有效期只有几天，因此不需要太多空间。")]),t._v(" "),s("h3",{attrs:{id:"_8-轮询红包分配，压力大不？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-轮询红包分配，压力大不？"}},[t._v("#")]),t._v(" 8. 轮询红包分配，压力大不？")]),t._v(" "),s("p",[t._v("答：抢到红包的人数和红包都在一条 "),s("code",[t._v("cache")]),t._v(" 记录上，没有太大的查询压力。")]),t._v(" "),s("h3",{attrs:{id:"_9-一个红包一个队列？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-一个红包一个队列？"}},[t._v("#")]),t._v(" 9. 一个红包一个队列？")]),t._v(" "),s("p",[t._v("答：没有队列，一个红包一条数据，数据上有一个计数器字段。")]),t._v(" "),s("h3",{attrs:{id:"_10-有没有从数据上证明每个红包的概率是不是均等？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-有没有从数据上证明每个红包的概率是不是均等？"}},[t._v("#")]),t._v(" 10. 有没有从数据上证明每个红包的概率是不是均等？")]),t._v(" "),s("p",[t._v("答：不是绝对均等，就是一个简单的拍脑袋算法。")]),t._v(" "),s("h3",{attrs:{id:"_11-拍脑袋算法，会不会出现两个最佳？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-拍脑袋算法，会不会出现两个最佳？"}},[t._v("#")]),t._v(" 11. 拍脑袋算法，会不会出现两个最佳？")]),t._v(" "),s("p",[t._v("答：会出现金额一样的，但是手气最佳只有一个，先抢到的那个最佳。")]),t._v(" "),s("h3",{attrs:{id:"_12-每领一个红包就更新数据么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-每领一个红包就更新数据么？"}},[t._v("#")]),t._v(" 12. 每领一个红包就更新数据么？")]),t._v(" "),s("p",[t._v("答：每抢到一个红包，就 "),s("code",[t._v("cas(compare and swap)")]),t._v(" 更新剩余金额和红包个数。")]),t._v(" "),s("h3",{attrs:{id:"_13-红包如何入库入账？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-红包如何入库入账？"}},[t._v("#")]),t._v(" 13. 红包如何入库入账？")]),t._v(" "),s("p",[t._v("数据库会累加已经领取的个数与金额，插入一条领取记录。入账则是后台异步操作（调用财付通实现）。")]),t._v(" "),s("h3",{attrs:{id:"_14-入帐出错怎么办？比如红包个数没了，但余额还有？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-入帐出错怎么办？比如红包个数没了，但余额还有？"}},[t._v("#")]),t._v(" 14. 入帐出错怎么办？比如红包个数没了，但余额还有？")]),t._v(" "),s("p",[t._v("答：最后会有一个 "),s("code",[t._v("take all")]),t._v(" 操作。另外还有一个对账来保障。")]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("@来源："),s("a",{attrs:{href:"https://www.zybuluo.com/yulin718/note/93148",target:"_blank",rel:"noopener noreferrer"}},[t._v("QCon某高可用架构群整理"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);