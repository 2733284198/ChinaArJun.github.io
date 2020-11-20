(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{1026:function(t,e,s){"use strict";s.r(e);var a=s(44),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"如果-http-响应头中-etag-值改变了，是否意味着文件内容一定已经更改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果-http-响应头中-etag-值改变了，是否意味着文件内容一定已经更改"}},[t._v("#")]),t._v(" 如果 http 响应头中 ETag 值改变了，是否意味着文件内容一定已经更改")]),t._v(" "),s("blockquote",[s("p",[t._v("本篇文章由我的 "),s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question",target:"_blank",rel:"noopener noreferrer"}},[t._v("一日一题"),s("OutboundLink")],1),t._v(" 中的四个 "),s("code",[t._v("Issue")]),t._v(" 组合而成")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question/issues/112",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Q111】http 响应头中的 ETag 值是如何生成的"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question/issues/113",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Q112】如果 http 响应头中 ETag 值改变了，是否意味着文件内容一定已经更改"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question/issues/116",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Q115】文件系统中 mtime 和 ctime 指什么，都有什么不同"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question/issues/117",target:"_blank",rel:"noopener noreferrer"}},[t._v("【Q116】http 服务中静态文件的 Last-Modified 是根据什么生成的"),s("OutboundLink")],1)])])]),t._v(" "),s("p",[t._v("不一定，由服务器中 "),s("code",[t._v("ETag")]),t._v(" 的生成算法决定。详见 "),s("a",{attrs:{href:"https://github.com/ChinaArJun/Daily-Question/issues/112",target:"_blank",rel:"noopener noreferrer"}},[t._v("#112"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("比如 "),s("code",[t._v("nginx")]),t._v(" 中的 "),s("code",[t._v("etag")]),t._v(" 由 "),s("code",[t._v("last_modified")]),t._v(" 与 "),s("code",[t._v("content_length")]),t._v(" 组成，而 "),s("code",[t._v("last_modified")]),t._v(" 又由 "),s("code",[t._v("mtime")]),t._v(" 组成")]),t._v(" "),s("p",[t._v("当编辑文件却未更改文件内容时，"),s("code",[t._v("mtime")]),t._v(" 也会改变，此时 "),s("code",[t._v("etag")]),t._v(" 改变，但是文件内容没有更改。")]),t._v(" "),s("h2",{attrs:{id:"http-服务中静态文件的-last-modified-根据什么生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-服务中静态文件的-last-modified-根据什么生成"}},[t._v("#")]),t._v(" http 服务中静态文件的 Last-Modified 根据什么生成")]),t._v(" "),s("p",[t._v("一般会选文件的 "),s("code",[t._v("mtime")]),t._v("，表示文件内容的修改时间")]),t._v(" "),s("p",[s("code",[t._v("nginx")]),t._v(" 也是这样处理的，源码见: "),s("a",{attrs:{href:"https://github.com/nginx/nginx/blob/4bf4650f2f10f7bbacfe7a33da744f18951d416d/src/http/modules/ngx_http_static_module.c#L217",target:"_blank",rel:"noopener noreferrer"}},[t._v("ngx_http_static_module.c"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("    r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("headers_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NGX_HTTP_OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("headers_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content_length_n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" of"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("headers_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last_modified_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" of"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("那为什么使用 "),s("code",[t._v("mtime")]),t._v(" 而非 "),s("code",[t._v("ctime")])])]),t._v(" "),s("h2",{attrs:{id:"文件系统中-mtime-和-ctime-指什么，都有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件系统中-mtime-和-ctime-指什么，都有什么不同"}},[t._v("#")]),t._v(" 文件系统中 mtime 和 ctime 指什么，都有什么不同")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("linux")]),t._v(" 中，")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("mtime")]),t._v("："),s("code",[t._v("modified time")]),t._v(" 指文件内容改变的时间戳")]),t._v(" "),s("li",[s("code",[t._v("ctime")]),t._v("："),s("code",[t._v("change time")]),t._v(" 指文件属性改变的时间戳，属性包括 "),s("code",[t._v("mtime")]),t._v("。而在 windows 上，它表示的是 "),s("code",[t._v("creation time")])])]),t._v(" "),s("p",[t._v("所以 "),s("code",[t._v("ctime")]),t._v(" 会比 "),s("code",[t._v("mtime")]),t._v(" 要大一些，使用 "),s("code",[t._v("stat")]),t._v(" 查看文件属性如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stat")]),t._v(" hello.txt\n  File: ‘hello.txt’\n  Size: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("              Blocks: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("          IO Block: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("   regular "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\nDevice: fd01h/64769d    Inode: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("917526")]),t._v("      Links: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nAccess: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0644/-rw-r--r--"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  Uid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/    root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   Gid: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("/    root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAccess: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-10 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":15:55.253325208 +0800\nModify: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-10 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":15:52.740653330 +0800\nChange: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-12-10 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":15:52.742653069 +0800\n Birth: -\n")])])]),s("p",[t._v("而 http 服务选择 "),s("code",[t._v("Last_Modified")]),t._v(" 时一般会选择 "),s("code",[t._v("mtime")])])])}),[],!1,null,null,null);e.default=n.exports}}]);