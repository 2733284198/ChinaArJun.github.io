(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{757:function(a,t,n){"use strict";n.r(t);var e=n(44),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("无法对 map 的 key 或 value 进行取址。以下代码不能通过编译：")]),a._v(" "),n("div",{staticClass:"language-golang extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('package main\n\nimport "fmt"\n\nfunc main() {\n\tm := make(map[string]int)\n\n\tfmt.Println(&m["qcrao"])\n}\n')])])]),n("p",[a._v("编译报错：")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("./main.go:8:14: cannot take the address of m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"qcrao"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),n("p",[a._v("如果通过其他 hack 的方式，例如 unsafe.Pointer 等获取到了 key 或 value 的地址，也不能长期持有，因为一旦发生扩容，key 和 value 的位置就会改变，之前保存的地址也就失效了。")])])}),[],!1,null,null,null);t.default=s.exports}}]);