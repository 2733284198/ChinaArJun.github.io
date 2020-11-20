(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1008:function(t,s,a){"use strict";a.r(s);var e=a(44),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("最近接触新业务较多，关于了解新业务有一点感想，总结如下")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("比了解新业务代码更重要的是要了解新业务，比了解新业务更重要的是业务意识")]),t._v(" "),a("li",[t._v("如果是业务开发，毕业前三年更应该关注于技术以及技术细节，三到五年技术业务并重，五年以后业务为主")])])]),t._v(" "),a("p",[t._v("以下是关于如何快速熟悉新业务的一些经验之谈")]),t._v(" "),a("blockquote",[a("p",[t._v("本文链接: "),a("a",{attrs:{href:"https://blog.zhequtao.com/post/business-get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.zhequtao.com/post/business-get-started"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),a("blockquote",[a("p",[t._v("工欲善其事，必先利其器。")])]),t._v(" "),a("h3",{attrs:{id:"chrome-多用户模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chrome-多用户模式"}},[t._v("#")]),t._v(" Chrome 多用户模式")]),t._v(" "),a("p",[t._v("方便多个 (大于两个) 用户切换 (管理员/用户/各种角色)")]),t._v(" "),a("h3",{attrs:{id:"业务数据库权限-生产环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务数据库权限-生产环境"}},[t._v("#")]),t._v(" 业务数据库权限 (生产环境)")]),t._v(" "),a("blockquote",[a("p",[t._v("最好能够拥有线上数据库权限，拥有最真实的数据，人往往会对不合理假数据本能排斥。")])]),t._v(" "),a("p",[t._v("数据库是了解业务最快的方式")]),t._v(" "),a("h3",{attrs:{id:"日志系统-或者-apm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志系统-或者-apm"}},[t._v("#")]),t._v(" 日志系统 (或者 APM)")]),t._v(" "),a("p",[t._v("在需要了解某个业务细节时，可以利用日志系统")]),t._v(" "),a("ol",[a("li",[t._v("在前端进行页面交互，找出关键请求")]),t._v(" "),a("li",[t._v("找出关键请求的 requestId (sessionId/transactionId/logId/trackId 等各种名字)")]),t._v(" "),a("li",[t._v("根据 requestId 在日志系统(或者 APM) 中找到对应的 SQL/redis-command/requests (主要是 SQL)")])]),t._v(" "),a("p",[t._v("至于如何在全链路设置 "),a("code",[t._v("requestId")]),t._v("，可以参考我的这篇文章: "),a("a",{attrs:{href:"https://blog.zhequtao.com/post/requestid-and-tracing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 requestId 标记全链路日志"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果没有 "),a("code",[t._v("requestId")]),t._v(" 怎么办？")]),t._v(" "),a("p",[a("strong",[t._v("那只能仔细去看代码了")])]),t._v(" "),a("h3",{attrs:{id:"代码仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码仓库"}},[t._v("#")]),t._v(" 代码仓库")]),t._v(" "),a("blockquote",[a("p",[t._v("孙子兵法云: 上兵伐谋，其次伐交，其次伐兵，其下攻城。")])]),t._v(" "),a("p",[t._v("在熟悉新业务时，最上者点来点去熟悉系统，其次与他人交流，其次点页面查 SQL，最下看代码。")]),t._v(" "),a("p",[t._v("代码以服务器端代码为主，快速浏览以下文件:")]),t._v(" "),a("ol",[a("li",[t._v("router: 用以定位业务细节的具体逻辑")]),t._v(" "),a("li",[t._v("业务逻辑层: 根据 router 点进来后的具体业务逻辑，由于层层嵌套，可能需要点上几十次。 "),a("strong",[t._v("了解代码的具体组织结构，当有需要时再去深入了解")])]),t._v(" "),a("li",[t._v("constant: "),a("strong",[t._v("了解业务中各种资源的类型，状态，状态机，以及与数据库字段的对应 (数据库可能存储为 enum, 也有可能是 int)。其中代表的数据比这些数据在编码中怎么用更为重要，当然两者紧密相连")])])]),t._v(" "),a("blockquote",[a("p",[t._v("关于 constant，最好使用 enum 而非数字维护，参考我的这篇文章: "),a("a",{attrs:{href:"https://blog.zhequtao.com/post/constant-db-to-client/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从数据库到前端，使用 enum 代替 constant number"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"了解业务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解业务"}},[t._v("#")]),t._v(" 了解业务")]),t._v(" "),a("h3",{attrs:{id:"了解业务类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解业务类型"}},[t._v("#")]),t._v(" 了解业务类型")]),t._v(" "),a("blockquote",[a("p",[t._v("你现在负责的业务的用户是谁？")])]),t._v(" "),a("ul",[a("li",[t._v("有可能是面向各个离散的无相互关联的C端用户")]),t._v(" "),a("li",[t._v("也有可能是服务于各大企业 (组织/机构) 的 B 端用户。")]),t._v(" "),a("li",[t._v("也有可能是服务于广大公司内同事，比如给运维使用的运维平台，给销售使用的 CRM，给 QA 的测试平台，还有 MIS，OA 等等此类")]),t._v(" "),a("li",[t._v("还有可能是用户服务，订单服务，数据服务，商品服务等")])]),t._v(" "),a("p",[a("strong",[t._v("不同的业务类型就有不同的工作重心，比如 toB 庄重，toC 活泼，对内能看就行...")])]),t._v(" "),a("blockquote",[a("p",[t._v("你现在负责的业务如何来钱")])]),t._v(" "),a("p",[t._v("这也是一个关键问题")]),t._v(" "),a("h3",{attrs:{id:"了解系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解系统"}},[t._v("#")]),t._v(" 了解系统")]),t._v(" "),a("p",[t._v("了解该业务所涉及到的核心系统，与业务类型相关。我简单分为两类")]),t._v(" "),a("ul",[a("li",[t._v("前台系统：面向用户，toC 面向广大用户，toB 面向企业与企业员工，toB 面向使用者")]),t._v(" "),a("li",[t._v("后台系统：面向管理员，就是常说的后台管理系统")])]),t._v(" "),a("h3",{attrs:{id:"熟悉系统主要流程并实操"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#熟悉系统主要流程并实操"}},[t._v("#")]),t._v(" 熟悉系统主要流程并实操")]),t._v(" "),a("p",[t._v("了解用户的高频操作，主要途径点点点和不懂就问。有些高频操作，需要后台管理员以及各个角色配合， "),a("strong",[t._v("这时可以在多用户的 Chrome 中进行操作")])]),t._v(" "),a("ul",[a("li",[t._v("比如知乎的提问，答题，评论，点赞到后台的帖子管理封禁等")]),t._v(" "),a("li",[t._v("OA 系统的流程发起，以及各个角色的审批")]),t._v(" "),a("li",[t._v("CRM 的商机，订单，工单操作")])]),t._v(" "),a("h3",{attrs:{id:"了解系统边界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解系统边界"}},[t._v("#")]),t._v(" 了解系统边界")]),t._v(" "),a("p",[t._v("由于微服务的流行，新业务的所有数据有可能来自于基础服务。在熟悉业务过程中，有必要了解哪些数据自己维护，哪些维护在公有服务")]),t._v(" "),a("ul",[a("li",[t._v("用户数据由业务内维护还是用户服务")]),t._v(" "),a("li",[t._v("订单数据由业务内维护还是订单服务")]),t._v(" "),a("li",[t._v("诸如此类")])]),t._v(" "),a("h3",{attrs:{id:"了解边界系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解边界系统"}},[t._v("#")]),t._v(" 了解边界系统")]),t._v(" "),a("p",[t._v("即以上所述的用户服务系统或者订单服务系统。了解常用的表，有必要时可以申请数据库权限")]),t._v(" "),a("h3",{attrs:{id:"了解用户以及权限-用户-管理员-角色-企业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解用户以及权限-用户-管理员-角色-企业"}},[t._v("#")]),t._v(" 了解用户以及权限 (用户/管理员/角色/企业)")]),t._v(" "),a("p",[t._v("了解业务内有什么权限，以及每个权限组成的角色。")]),t._v(" "),a("p",[t._v("可以模糊分为以下几个表，需要重点关注")]),t._v(" "),a("ol",[a("li",[t._v("permission: 权限表")]),t._v(" "),a("li",[t._v("role: 角色表")]),t._v(" "),a("li",[t._v("user: 用户表")]),t._v(" "),a("li",[t._v("organization: 企业/机构表")])]),t._v(" "),a("p",[t._v("另外还需要了解用户登录以及注册过程，有没有第三方登录，以及 toB 方的自家用户系统的接入")]),t._v(" "),a("h3",{attrs:{id:"了解数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解数据"}},[t._v("#")]),t._v(" 了解数据")]),t._v(" "),a("blockquote",[a("p",[t._v("比如何查 SQL 更重要的是数据本身，有必要时可以记住，比如")]),t._v(" "),a("ol",[a("li",[t._v("大客户 id 以及 name")]),t._v(" "),a("li",[t._v("深度用户的 id 以及 name")]),t._v(" "),a("li",[t._v("主要资源/内容的 id")]),t._v(" "),a("li",[t._v("主要资源/内容的 status/type (参照 enum/constant 文件)")])])]),t._v(" "),a("p",[t._v("以下是常见的一些数据以及 SQL 操作，主要针对一些常量与主要业务")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 了解用户量，必要时可以记住...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" users wehre is_deleted "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 了解某项业务的字段")]),t._v("\n\\d business\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" business "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 了解目前为止该业务有多少量数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" business\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 了解某项业务的各个状态，以及分布")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" business "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 了解某项业务的各个类型，以及分布")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" business "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v("\n")])])]),a("h3",{attrs:{id:"数据系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据系统"}},[t._v("#")]),t._v(" 数据系统")]),t._v(" "),a("p",[t._v("如果对系统接入了 GA/神策/GrowingIO 等数据统计系统，进入系统了解并记住重要数据，了解用户对系统的使用深度以及常见业务的使用情况。")]),t._v(" "),a("blockquote",[a("p",[t._v("如果没有接入数据系统怎么办?\n参考上一条，手动查 SQL")])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("欢迎关注我的公众号"),a("strong",[t._v("中关村程序员")]),t._v("，在这里记录着我的技术成长，欢迎交流")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog.zhequtao.com/qrcode.jpg",alt:"欢迎关注公众号中关村程序员，在这里记录我的技术成长，欢迎交流"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);