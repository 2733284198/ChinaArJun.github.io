(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1075:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"requests-源码阅读-day3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requests-源码阅读-day3"}},[t._v("#")]),t._v(" Requests 源码阅读-Day3")]),t._v(" "),a("p",[t._v("[toc]")]),t._v(" "),a("h2",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" hooks")]),t._v(" "),a("h3",{attrs:{id:"hooks初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks初始化"}},[t._v("#")]),t._v(" hooks初始化")]),t._v(" "),a("p",[t._v("继续前面的分析，来到了hook这部分")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Session")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SessionRedirectMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    __attrs__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'headers'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookies'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'proxies'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hooks'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'params'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'verify'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cert'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefetch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'adapters'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stream'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'trust_env'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'max_redirects'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: A case-insensitive dictionary of headers to be sent on each")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: :class:`Request <Request>` sent from this")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: :class:`Session <Session>`.")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" default_headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"headers="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: Default Authentication tuple or object to attach to")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: :class:`Request <Request>`.")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: Dictionary mapping protocol or protocol and host to the URL of the proxy")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: (e.g. {'http': 'foo.bar:3128', 'http://host.name': 'foo.bar:4012'}) to")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: be used on each :class:`Request <Request>`.")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: Event-handling hooks.")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" default_hooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n")])])]),a("p",[t._v("看到调用的是default_hook方法，然后到文件开头可以看到是导入了hooks.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" default_hooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch_hook\n")])])]),a("p",[t._v("到hooks.py这个文件查看：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\nrequests.hooks\n~~~~~~~~~~~~~~\n\nThis module provides the capabilities for the Requests hooks system.\n\nAvailable hooks:\n\n``response``:\n    The response generated from a Request.\n"""')]),t._v("\nHOOKS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'response'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("default_hooks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" event "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" HOOKS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[t._v("就写了一句话，这是什么意思呢？")]),t._v(" "),a("p",[t._v("通过注释我们知道"),a("strong",[t._v("hooks意为事件挂钩，可以用来操控部分请求过程或者信号事件处理。")])]),t._v(" "),a("p",[t._v("requests有一个钩子系统，在请求产生的响应response前，做一些想做的事情。")]),t._v(" "),a("p",[t._v("上述源代码中default_hooks()方法用了字典解析，最后返回{'response':[]}。")]),t._v(" "),a("h3",{attrs:{id:"hooks使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks使用"}},[t._v("#")]),t._v(" hooks使用")]),t._v(" "),a("p",[t._v("下面我们简单描述一下hooks是如何使用的。")]),t._v(" "),a("p",[t._v("首先我们需要传递一个字典{hook_name:callback_function}给参数hooks。")]),t._v(" "),a("p",[t._v('hook_name为钩子名，也就是 "response",callback_function为钩子方法，在目标事件发生时回调该方法。')]),t._v(" "),a("p",[t._v("callback_function会接受一个数据块作为它的第一个参数，")]),t._v(" "),a("p",[t._v("定义如下def callback_function(r, *args, **kwargs)。")]),t._v(" "),a("p",[t._v("从default_hooks()方法返回的hooks默认参数{'response':[]}")]),t._v(" "),a("p",[t._v('可知，键"response"所对应的值为一个列表')]),t._v(" "),a("p",[t._v("换句话说，对于一个钩子事件，可以有多个钩子方法。")]),t._v(" "),a("p",[t._v("下面我们写个例子演示一下。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hooks1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks1 url="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hooks2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks2 encoding="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" hooks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hooks1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hooks2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://httpbin.org"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hooks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhooks1 url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("httpbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nhooks2 encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Response "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[t._v("#")]),t._v(" cookies")]),t._v(" "),a("p",[t._v("继续往下分析看看cookies初始化：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: A CookieJar containing all currently outstanding cookies set on this")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: session. By default it is a")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: :class:`RequestsCookieJar <requests.cookies.RequestsCookieJar>`, but")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#: may be any other ``cookielib.CookieJar`` compatible object.")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cookiejar_from_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n")])])]),a("p",[t._v("这里面的cookiejar_from_dict 到文件开头看是导入cookies.py：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookiejar_from_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extract_cookies_to_jar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("进入cookies.py查看到这个方法：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cookiejar_from_dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookie_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cookiejar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" overwrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Returns a CookieJar from a key/value dictionary.\n\n    :param cookie_dict: Dict of key/values to insert into CookieJar.\n    :param cookiejar: (optional) A cookiejar to add the cookies to.\n    :param overwrite: (optional) If False, will not replace cookies\n        already in the jar with new ones.\n    :rtype: CookieJar\n    """')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cookiejar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cookiejar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RequestsCookieJar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" cookie_dict "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        names_from_jar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" cookie "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" cookiejar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" cookie_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" overwrite "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" names_from_jar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                cookiejar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("create_cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cookie_dict"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cookiejar\n")])])]),a("p",[t._v("这里面的RequestsCookieJar()是什么东西?")]),t._v(" "),a("p",[t._v("定位到该文件里面的RequestsCookieJar方法")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestsCookieJar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cookielib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CookieJar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MutableMapping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("可以看到这又用到了多继承，继承了cookielib.CookieJar和MutableMapping类，")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("p",[a("code",[t._v("1.继承这两个类是做什么用呢？")])]),t._v(" "),a("p",[a("code",[t._v("2.前面的cookiejar = RequestsCookieJar() 究竟执行了什么操作？")])]),t._v(" "),a("p",[t._v("分别进行解答：\n1.继承这两个类是为了下面调用里面的方法，MutableMapping这个在前面的章节已经分析过了，这里就不在说明")]),t._v(" "),a("p",[t._v("2.RequestsCookieJar() 其实调用了cookielib.CookieJar里面的"),a("code",[t._v("__init__")]),t._v("方法")]),t._v(" "),a("p",[t._v("cookies.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cookielib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" urlparse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" urlunparse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Morsel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MutableMapping\n")])])]),a("p",[t._v("->调用了compat.py里面cookielib ， 继续分析调用了http模块里面的cookiejar")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" is_py3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" urlparse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" urlunparse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" urljoin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" urlsplit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" urlencode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unquote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" quote_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unquote_plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" urldefrag\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" parse_http_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getproxies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxy_bypass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proxy_bypass_environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getproxies_environment\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cookiejar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" cookielib\n    \n")])])]),a("p",[t._v("然后到http模块里面查看这个cookiejar")]),t._v(" "),a("p",[t._v("http/cookiejar.py 里面")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CookieJar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Collection of HTTP cookies.\n\n    You may not need to know about this class: try\n    urllib.request.build_opener(HTTPCookieProcessor).open(url).\n    """')]),t._v("\n\n    non_word_re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"\\W"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    quote_re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"([\\"\\\\])"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    strict_domain_re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"\\.?[^.]*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    domain_re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"[^.]*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    dots_re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"^\\.+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    magic_re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"^\\#LWP-Cookies-(\\d+\\.\\d+)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ASCII"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" policy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("通读了下 大概知道这个模块的作用是管理HTTP的cookie值，存储HTTP请求生成的cookie，向传出的HTTP请求添加cookie的对象")]),t._v(" "),a("p",[t._v("cookies初始化方法cookiejar_from_dict(cookie_dict, cookiejar=None, overwrite=True)的作用是将字典类型的cookies插入到cookiejar中，返回cookiejar。")]),t._v(" "),a("p",[t._v("整个cookie都存储在内存中，CookieJar实例销毁后cookie也将丢失。")])])}),[],!1,null,null,null);s.default=e.exports}}]);