(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{760:function(n,t,a){"use strict";a.r(t);var s=a(44),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("map 深度相等的条件：")]),n._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("、都为 nil\n"),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("2")]),n._v("、非空、长度相等，指向同一个 map 实体对象\n"),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("3")]),n._v("、相应的 key 指向的 value “深度”相等\n")])])]),a("p",[n._v("直接将使用 map1 == map2 是错误的。这种写法只能比较 map 是否为 nil。")]),n._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('package main\n\nimport "fmt"\n\nfunc main() {\n\tvar m map[string]int\n\tvar n map[string]int\n\n\tfmt.Println(m == nil)\n\tfmt.Println(n == nil)\n\n\t// 不能通过编译\n\t//fmt.Println(m == n)\n}\n')])])]),a("p",[n._v("输出结果：")]),n._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("true\ntrue\n")])])]),a("p",[n._v("因此只能是遍历map 的每个元素，比较元素是否都是深度相等。")])])}),[],!1,null,null,null);t.default=e.exports}}]);