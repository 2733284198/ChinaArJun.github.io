(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{1011:function(a,t,s){"use strict";s.r(t);var n=s(44),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("最近在公司的测试环境搭了一套 canal 用以同步 mysql 的 binlog。环境搭建步骤如下，和官方文档无异，权作记录")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("在 "),s("a",{attrs:{href:"https://github.com/alibaba/canal/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/alibaba/canal/releases"),s("OutboundLink")],1),a._v(" 中选择最新的安装包进行下载")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -L 表示 follow redirect")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -OL https://github.com/alibaba/canal/releases/download/canal-1.1.3/canal.deployer-1.1.3.tar.gz\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /usr/local/canal\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -C 表示解压路径")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf canal.deployer-1.1.3.tar.gz -C /usr/local/canal\n")])])]),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),s("p",[a._v("修改数据库以及如何与Topic对应的配置")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/canal/\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" conf/example/instance.properties\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\ncanal.instance.master.address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.20:3306\ncanal.instance.dbUsername "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" canal\ncanal.instance.dbPassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" canal\n\ncanal.mq.topic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("example\ncanal.mq.dynamicTopic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mytest,.*,mytest.user,mytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("*,.*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("*\n")])])]),s("p",[a._v("修改 kafka 的配置")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /usr/local/canal/conf/canal.properties\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\ncanal.serverMode "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" kafka\ncanal.mq.servers "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:9092\n")])])]),s("p",[a._v("更多详细内容参考官方文档 "),s("a",{attrs:{href:"https://github.com/alibaba/canal/wiki/Canal-Kafka-RocketMQ-QuickStart",target:"_blank",rel:"noopener noreferrer"}},[a._v("Canal Kafka RocketMQ QuickStart"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);