(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{865:function(t,a,s){"use strict";s.r(a);var e=s(44),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"k8s-存储：pv-与-pvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k8s-存储：pv-与-pvc"}},[t._v("#")]),t._v(" k8s 存储：PV 与 PVC")]),t._v(" "),s("p",[t._v("在 Docker 的容器中，使用 volumes 作为存储，但是它仅仅只是本地存储系统中的一个目录，且没有生命周期的管理。")]),t._v(" "),s("p",[t._v("在 k8s 中通过使用 PV 及 PVC 来对 volume 做进一步抽象。")]),t._v(" "),s("h2",{attrs:{id:"pv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pv"}},[t._v("#")]),t._v(" PV")]),t._v(" "),s("p",[s("code",[t._v("PV")]),t._v(" 是 k8s 集群中提供存储能力的资源，类似于 "),s("code",[t._v("node")]),t._v("。由运维人员 (administrator) 调配，也可以通过 "),s("code",[t._v("storage class")]),t._v(" 来自动调配。通常可以由 "),s("code",[t._v("nfs")]),t._v(" 等云存储资源提供实现")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolume\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" local\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storageClassName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("storage\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("capacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10Gi\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteOnce\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/mnt/k8s-data/redis"')]),t._v("\n")])])]),s("h2",{attrs:{id:"pvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pvc"}},[t._v("#")]),t._v(" PVC")]),t._v(" "),s("p",[s("code",[t._v("PVC")]),t._v(" 由用户请求 "),s("code",[t._v("PV")]),t._v(" 指定大小资源及模式 ("),s("code",[t._v("ReadWriteOnce")]),t._v(" 或)，如同 "),s("code",[t._v("pod")]),t._v(" 向 "),s("code",[t._v("node")]),t._v(" 请求 cpu/memory 资源。")]),t._v(" "),s("h2",{attrs:{id:"hostpath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hostpath"}},[t._v("#")]),t._v(" Hostpath")]),t._v(" "),s("ol",[s("li",[t._v("指定当前 Host 下的磁盘")]),t._v(" "),s("li",[t._v("没法自动调配，每次需要手动申明 PV，并指定 storageClassName")]),t._v(" "),s("li",[t._v("每一个 PV 只能够关联一个 PVC")]),t._v(" "),s("li",[t._v("当pod退出之后，pv/pvc 的清理也挺头疼")])])])}),[],!1,null,null,null);a.default=n.exports}}]);