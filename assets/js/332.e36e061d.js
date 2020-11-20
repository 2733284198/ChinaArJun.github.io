(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{753:function(t,e,a){"use strict";a.r(e);var n=a(44),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"什么是-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-map"}},[t._v("#")]),t._v(" 什么是 map")]),t._v(" "),a("p",[t._v("维基百科里这样定义 map：")]),t._v(" "),a("blockquote",[a("p",[t._v("In computer science, an associative array, map, symbol table, or dictionary is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears at most once in the collection.")])]),t._v(" "),a("p",[t._v("简单说明一下：在计算机科学里，被称为相关数组、map、符号表或者字典，是由一组 "),a("code",[t._v("<key, value>")]),t._v(" 对组成的抽象数据结构，，并且同一个 key 只会出现一次。")]),t._v(" "),a("p",[t._v("有两个关键点：map 是由 "),a("code",[t._v("key-value")]),t._v(" 对组成的；"),a("code",[t._v("key")]),t._v(" 只会出现一次。")]),t._v(" "),a("p",[t._v("和 map 相关的操作主要是：")]),t._v(" "),a("ol",[a("li",[t._v("增加一个 k-v 对 —— Add or insert；")]),t._v(" "),a("li",[t._v("删除一个 k-v 对 —— Remove or delete；")]),t._v(" "),a("li",[t._v("修改某个 k 对应的 v —— Reassign；")]),t._v(" "),a("li",[t._v("查询某个 k 对应的 v —— Lookup；")])]),t._v(" "),a("p",[t._v("简单说就是最基本的 "),a("code",[t._v("增删查改")]),t._v("。")]),t._v(" "),a("p",[t._v("map 的设计也被称为 “The dictionary problem”，它的任务是设计一种数据结构用来维护一个集合的数据，并且可以同时对集合进行增删查改的操作。最主要的数据结构有两种："),a("code",[t._v("哈希查找表（Hash table）")]),t._v("、"),a("code",[t._v("搜索树（Search tree）")]),t._v("。")]),t._v(" "),a("p",[t._v("哈希查找表用一个哈希函数将 key 分配到不同的桶（bucket，也就是数组的不同 index）。这样，开销主要在哈希函数的计算以及数组的常数访问时间。在很多场景下，哈希查找表的性能很高。")]),t._v(" "),a("p",[t._v("哈希查找表一般会存在“碰撞”的问题，就是说不同的 key 被哈希到了同一个 bucket。一般有两种应对方法："),a("code",[t._v("链表法")]),t._v("和"),a("code",[t._v("开放地址法")]),t._v("。"),a("code",[t._v("链表法")]),t._v("将一个 bucket 实现成一个链表，落在同一个 bucket 中的 key 都会插入这个链表。"),a("code",[t._v("开放地址法")]),t._v("则是碰撞发生后，通过一定的规律，在数组的后面挑选“空位”，用来放置新的 key。")]),t._v(" "),a("p",[t._v("搜索树法一般采用自平衡搜索树，包括：AVL 树，红黑树。面试时经常会被问到，甚至被要求手写红黑树代码，很多时候，面试官自己都写不上来，非常过分。")]),t._v(" "),a("p",[t._v("自平衡搜索树法的最差搜索效率是 O(logN)，而哈希查找表最差是 O(N)。当然，哈希查找表的平均查找效率是 O(1)，如果哈希函数设计的很好，最坏的情况基本不会出现。还有一点，遍历自平衡搜索树，返回的 key 序列，一般会按照从小到大的顺序；而哈希查找表则是乱序的。")]),t._v(" "),a("h1",{attrs:{id:"map-的底层如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-的底层如何实现"}},[t._v("#")]),t._v(" map 的底层如何实现")]),t._v(" "),a("p",[t._v("首先声明我用的 Go 版本：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("go version go1.9.2 darwin/amd64\n")])])]),a("p",[t._v("前面说了 map 实现的几种方案，Go 语言采用的是哈希查找表，并且使用链表解决哈希冲突。")]),t._v(" "),a("p",[t._v("接下来我们要探索 map 的核心原理，一窥它的内部结构。")]),t._v(" "),a("h2",{attrs:{id:"map-内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-内存模型"}},[t._v("#")]),t._v(" map 内存模型")]),t._v(" "),a("p",[t._v("在源码中，表示 map 的结构体是 hmap，它是 hashmap 的“缩写”：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// A header for a Go map.\ntype hmap struct {\n    // 元素个数，调用 len(map) 时，直接返回此值\n\tcount     int\n\tflags     uint8\n\t// buckets 的对数 log_2\n\tB         uint8\n\t// overflow 的 bucket 近似数\n\tnoverflow uint16\n\t// 计算 key 的哈希的时候会传入哈希函数\n\thash0     uint32\n    // 指向 buckets 数组，大小为 2^B\n    // 如果元素个数为0，就为 nil\n\tbuckets    unsafe.Pointer\n\t// 扩容的时候，buckets 长度会是 oldbuckets 的两倍\n\toldbuckets unsafe.Pointer\n\t// 指示扩容进度，小于此地址的 buckets 迁移完成\n\tnevacuate  uintptr\n\textra *mapextra // optional fields\n}\n")])])]),a("p",[t._v("说明一下，"),a("code",[t._v("B")]),t._v(" 是 buckets 数组的长度的对数，也就是说 buckets 数组的长度就是 2^B。bucket 里面存储了 key 和 value，后面会再讲。")]),t._v(" "),a("p",[t._v("buckets 是一个指针，最终它指向的是一个结构体：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("type bmap struct {\n\ttophash [bucketCnt]uint8\n}\n")])])]),a("p",[t._v("但这只是表面(src/runtime/hashmap.go)的结构，编译期间会给它加料，动态地创建一个新的结构：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("type bmap struct {\n    topbits  [8]uint8\n    keys     [8]keytype\n    values   [8]valuetype\n    pad      uintptr\n    overflow uintptr\n}\n")])])]),a("p",[a("code",[t._v("bmap")]),t._v(" 就是我们常说的“桶”，桶里面会最多装 8 个 key，这些 key 之所以会落入同一个桶，是因为它们经过哈希计算后，哈希结果是“一类”的。在桶内，又会根据 key 计算出来的 hash 值的高 8 位来决定 key 到底落入桶内的哪个位置（一个桶内最多有8个位置）。")]),t._v(" "),a("p",[t._v("来一个整体的图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/57576986-acd87600-749f-11e9-8710-75e423c7efdb.png",alt:"hashmap bmap"}})]),t._v(" "),a("p",[t._v("当 map 的 key 和 value 都不是指针，并且 size 都小于 128 字节的情况下，会把 bmap 标记为不含指针，这样可以避免 gc 时扫描整个 hmap。但是，我们看 bmap 其实有一个 overflow 的字段，是指针类型的，破坏了 bmap 不含指针的设想，这时会把 overflow 移动到 extra 字段来。")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("type mapextra struct {\n\t// overflow[0] contains overflow buckets for hmap.buckets.\n\t// overflow[1] contains overflow buckets for hmap.oldbuckets.\n\toverflow [2]*[]*bmap\n\n\t// nextOverflow 包含空闲的 overflow bucket，这是预分配的 bucket\n\tnextOverflow *bmap\n}\n")])])]),a("p",[t._v("bmap 是存放 k-v 的地方，我们把视角拉近，仔细看 bmap 的内部组成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/57577391-f88f1d80-74a7-11e9-893c-4783dc4fb35e.png",alt:"bmap struct"}})]),t._v(" "),a("p",[t._v("上图就是 bucket 的内存模型，"),a("code",[t._v("HOB Hash")]),t._v(" 指的就是 top hash。 注意到 key 和 value 是各自放在一起的，并不是 "),a("code",[t._v("key/value/key/value/...")]),t._v(" 这样的形式。源码里说明这样的好处是在某些情况下可以省略掉 padding 字段，节省内存空间。")]),t._v(" "),a("p",[t._v("例如，有这样一个类型的 map：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("map[int64]int8\n")])])]),a("p",[t._v("如果按照 "),a("code",[t._v("key/value/key/value/...")]),t._v(" 这样的模式存储，那在每一个 key/value 对之后都要额外 padding 7 个字节；而将所有的 key，value 分别绑定到一起，这种形式 "),a("code",[t._v("key/key/.../value/value/...")]),t._v("，则只需要在最后添加 padding。")]),t._v(" "),a("p",[t._v("每个 bucket 设计成最多只能放 8 个 key-value 对，如果有第 9 个 key-value 落入当前的 bucket，那就需要再构建一个 bucket ，通过 "),a("code",[t._v("overflow")]),t._v(" 指针连接起来。")]),t._v(" "),a("h2",{attrs:{id:"创建-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-map"}},[t._v("#")]),t._v(" 创建 map")]),t._v(" "),a("p",[t._v("从语法层面上来说，创建 map 很简单：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ageMp := make(map[string]int)\n// 指定 map 长度\nageMp := make(map[string]int, 8)\n\n// ageMp 为 nil，不能向其添加元素，会直接panic\nvar ageMp map[string]int\n")])])]),a("p",[t._v("通过汇编语言可以看到，实际上底层调用的是 "),a("code",[t._v("makemap")]),t._v(" 函数，主要做的工作就是初始化 "),a("code",[t._v("hmap")]),t._v(" 结构体的各种字段，例如计算 B 的大小，设置哈希种子 hash0 等等。")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func makemap(t *maptype, hint int64, h *hmap, bucket unsafe.Pointer) *hmap {\n\t// 省略各种条件检查...\n\n\t// 找到一个 B，使得 map 的装载因子在正常范围内\n\tB := uint8(0)\n\tfor ; overLoadFactor(hint, B); B++ {\n\t}\n\n\t// 初始化 hash table\n\t// 如果 B 等于 0，那么 buckets 就会在赋值的时候再分配\n\t// 如果长度比较大，分配内存会花费长一点\n\tbuckets := bucket\n\tvar extra *mapextra\n\tif B != 0 {\n\t\tvar nextOverflow *bmap\n\t\tbuckets, nextOverflow = makeBucketArray(t, B)\n\t\tif nextOverflow != nil {\n\t\t\textra = new(mapextra)\n\t\t\textra.nextOverflow = nextOverflow\n\t\t}\n\t}\n\n\t// 初始化 hamp\n\tif h == nil {\n\t\th = (*hmap)(newobject(t.hmap))\n\t}\n\th.count = 0\n\th.B = B\n\th.extra = extra\n\th.flags = 0\n\th.hash0 = fastrand()\n\th.buckets = buckets\n\th.oldbuckets = nil\n\th.nevacuate = 0\n\th.noverflow = 0\n\n\treturn h\n}\n")])])]),a("p",[t._v("【引申1】slice 和 map 分别作为函数参数时有什么区别？")]),t._v(" "),a("p",[t._v("注意，这个函数返回的结果："),a("code",[t._v("*hmap")]),t._v("，它是一个指针，而我们之前讲过的 "),a("code",[t._v("makeslice")]),t._v(" 函数返回的是 "),a("code",[t._v("Slice")]),t._v(" 结构体：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func makeslice(et *_type, len, cap int) slice\n")])])]),a("p",[t._v("回顾一下 slice 的结构体定义：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// runtime/slice.go\ntype slice struct {\n    array unsafe.Pointer // 元素指针\n    len   int // 长度 \n    cap   int // 容量\n}\n")])])]),a("p",[t._v("结构体内部包含底层的数据指针。")]),t._v(" "),a("p",[t._v("makemap 和 makeslice 的区别，带来一个不同点：当 map 和 slice 作为函数参数时，在函数参数内部对 map 的操作会影响 map 自身；而对 slice 却不会（之前讲 slice 的文章里有讲过）。")]),t._v(" "),a("p",[t._v("主要原因：一个是指针（"),a("code",[t._v("*hmap")]),t._v("），一个是结构体（"),a("code",[t._v("slice")]),t._v("）。Go 语言中的函数传参都是值传递，在函数内部，参数会被 copy 到本地。"),a("code",[t._v("*hmap")]),t._v("指针 copy 完之后，仍然指向同一个 map，因此函数内部对 map 的操作会影响实参。而 slice 被 copy 后，会成为一个新的 slice，对它进行的操作不会影响到实参。")]),t._v(" "),a("h2",{attrs:{id:"哈希函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哈希函数"}},[t._v("#")]),t._v(" 哈希函数")]),t._v(" "),a("p",[t._v("map 的一个关键点在于，哈希函数的选择。在程序启动时，会检测 cpu 是否支持 aes，如果支持，则使用 aes hash，否则使用 memhash。这是在函数 "),a("code",[t._v("alginit()")]),t._v(" 中完成，位于路径："),a("code",[t._v("src/runtime/alg.go")]),t._v(" 下。")]),t._v(" "),a("blockquote",[a("p",[t._v("hash 函数，有加密型和非加密型。\n加密型的一般用于加密数据、数字摘要等，典型代表就是 md5、sha1、sha256、aes256 这种；\n非加密型的一般就是查找。在 map 的应用场景中，用的是查找。\n选择 hash 函数主要考察的是两点：性能、碰撞概率。")])]),t._v(" "),a("p",[t._v("之前我们讲过，表示类型的结构体：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("type _type struct {\n\tsize       uintptr\n\tptrdata    uintptr // size of memory prefix holding all pointers\n\thash       uint32\n\ttflag      tflag\n\talign      uint8\n\tfieldalign uint8\n\tkind       uint8\n\talg        *typeAlg\n\tgcdata    *byte\n\tstr       nameOff\n\tptrToThis typeOff\n}\n")])])]),a("p",[t._v("其中 "),a("code",[t._v("alg")]),t._v(" 字段就和哈希相关，它是指向如下结构体的指针：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// src/runtime/alg.go\ntype typeAlg struct {\n\t// (ptr to object, seed) -> hash\n\thash func(unsafe.Pointer, uintptr) uintptr\n\t// (ptr to object A, ptr to object B) -> ==?\n\tequal func(unsafe.Pointer, unsafe.Pointer) bool\n}\n")])])]),a("p",[t._v("typeAlg 包含两个函数，hash 函数计算类型的哈希值，而 equal 函数则计算两个类型是否“哈希相等”。")]),t._v(" "),a("p",[t._v("对于 string 类型，它的 hash、equal 函数如下：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func strhash(a unsafe.Pointer, h uintptr) uintptr {\n\tx := (*stringStruct)(a)\n\treturn memhash(x.str, h, uintptr(x.len))\n}\n\nfunc strequal(p, q unsafe.Pointer) bool {\n\treturn *(*string)(p) == *(*string)(q)\n}\n")])])]),a("p",[t._v("根据 key 的类型，_type 结构体的 alg 字段会被设置对应类型的 hash 和 equal 函数。")]),t._v(" "),a("h2",{attrs:{id:"key-定位过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-定位过程"}},[t._v("#")]),t._v(" key 定位过程")]),t._v(" "),a("p",[t._v("key 经过哈希计算后得到哈希值，共 64 个 bit 位（64位机，32位机就不讨论了，现在主流都是64位机），计算它到底要落在哪个桶时，只会用到最后 B 个 bit 位。还记得前面提到过的 B 吗？如果 B = 5，那么桶的数量，也就是 buckets 数组的长度是 2^5 = 32。")]),t._v(" "),a("p",[t._v("例如，现在有一个 key 经过哈希函数计算后，得到的哈希结果是：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10010111")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 000011110110110010001111001010100010010110010101010 │ 01010\n")])])]),a("p",[t._v("用最后的 5 个 bit 位，也就是 "),a("code",[t._v("01010")]),t._v("，值为 10，也就是 10 号桶。这个操作实际上就是取余操作，但是取余开销太大，所以代码实现上用的位操作代替。")]),t._v(" "),a("p",[t._v("再用哈希值的高 8 位，找到此 key 在 bucket 中的位置，这是在寻找已有的 key。最开始桶内还没有 key，新加入的 key 会找到第一个空位，放入。")]),t._v(" "),a("p",[t._v("buckets 编号就是桶编号，当两个不同的 key 落在同一个桶中，也就是发生了哈希冲突。冲突的解决手段是用链表法：在 bucket 中，从前往后找到第一个空位。这样，在查找某个 key 时，先找到对应的桶，再去遍历 bucket 中的 key。")]),t._v(" "),a("p",[t._v("这里参考曹大 github 博客里的一张图，原图是 ascii 图，geek 味十足，可以从参考资料找到曹大的博客，推荐大家去看看。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/57577721-faf57580-74af-11e9-8826-aacdb34a1d2b.png",alt:"mapacess"}})]),t._v(" "),a("p",[t._v("上图中，假定 B = 5，所以 bucket 总数就是 2^5 = 32。首先计算出待查找 key 的哈希，使用低 5 位 "),a("code",[t._v("00110")]),t._v("，找到对应的 6 号 bucket，使用高 8 位 "),a("code",[t._v("10010111")]),t._v("，对应十进制 151，在 6 号 bucket 中寻找 tophash 值（HOB hash）为 151 的 key，找到了 2 号槽位，这样整个查找过程就结束了。")]),t._v(" "),a("p",[t._v("如果在 bucket 中没找到，并且 overflow 不为空，还要继续去 overflow bucket 中寻找，直到找到或是所有的 key 槽位都找遍了，包括所有的 overflow bucket。")]),t._v(" "),a("p",[t._v("我们来看下源码吧，哈哈！通过汇编语言可以看到，查找某个 key 的底层函数是 "),a("code",[t._v("mapacess")]),t._v(" 系列函数，函数的作用类似，区别在下一节会讲到。这里我们直接看 "),a("code",[t._v("mapacess1")]),t._v(" 函数：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('func mapaccess1(t *maptype, h *hmap, key unsafe.Pointer) unsafe.Pointer {\n\t// ……\n\t\n\t// 如果 h 什么都没有，返回零值\n\tif h == nil || h.count == 0 {\n\t\treturn unsafe.Pointer(&zeroVal[0])\n\t}\n\t\n\t// 写和读冲突\n\tif h.flags&hashWriting != 0 {\n\t\tthrow("concurrent map read and map write")\n\t}\n\t\n\t// 不同类型 key 使用的 hash 算法在编译期确定\n\talg := t.key.alg\n\t\n\t// 计算哈希值，并且加入 hash0 引入随机性\n\thash := alg.hash(key, uintptr(h.hash0))\n\t\n\t// 比如 B=5，那 m 就是31，二进制是全 1\n\t// 求 bucket num 时，将 hash 与 m 相与，\n\t// 达到 bucket num 由 hash 的低 8 位决定的效果\n\tm := uintptr(1)<<h.B - 1\n\t\n\t// b 就是 bucket 的地址\n\tb := (*bmap)(add(h.buckets, (hash&m)*uintptr(t.bucketsize)))\n\t\n\t// oldbuckets 不为 nil，说明发生了扩容\n\tif c := h.oldbuckets; c != nil {\n\t    // 如果不是同 size 扩容（看后面扩容的内容）\n\t    // 对应条件 1 的解决方案\n\t\tif !h.sameSizeGrow() {\n\t\t\t// 新 bucket 数量是老的 2 倍\n\t\t\tm >>= 1\n\t\t}\n\t\t\n\t\t// 求出 key 在老的 map 中的 bucket 位置\n\t\toldb := (*bmap)(add(c, (hash&m)*uintptr(t.bucketsize)))\n\t\t\n\t\t// 如果 oldb 没有搬迁到新的 bucket\n\t\t// 那就在老的 bucket 中寻找\n\t\tif !evacuated(oldb) {\n\t\t\tb = oldb\n\t\t}\n\t}\n\t\n\t// 计算出高 8 位的 hash\n\t// 相当于右移 56 位，只取高8位\n\ttop := uint8(hash >> (sys.PtrSize*8 - 8))\n\t\n\t// 增加一个 minTopHash\n\tif top < minTopHash {\n\t\ttop += minTopHash\n\t}\n\tfor {\n\t    // 遍历 8 个 bucket\n\t\tfor i := uintptr(0); i < bucketCnt; i++ {\n\t\t    // tophash 不匹配，继续\n\t\t\tif b.tophash[i] != top {\n\t\t\t\tcontinue\n\t\t\t}\n\t\t\t// tophash 匹配，定位到 key 的位置\n\t\t\tk := add(unsafe.Pointer(b), dataOffset+i*uintptr(t.keysize))\n\t\t\t// key 是指针\n\t\t\tif t.indirectkey {\n\t\t\t    // 解引用\n\t\t\t\tk = *((*unsafe.Pointer)(k))\n\t\t\t}\n\t\t\t// 如果 key 相等\n\t\t\tif alg.equal(key, k) {\n\t\t\t    // 定位到 value 的位置\n\t\t\t\tv := add(unsafe.Pointer(b), dataOffset+bucketCnt*uintptr(t.keysize)+i*uintptr(t.valuesize))\n\t\t\t\t// value 解引用\n\t\t\t\tif t.indirectvalue {\n\t\t\t\t\tv = *((*unsafe.Pointer)(v))\n\t\t\t\t}\n\t\t\t\treturn v\n\t\t\t}\n\t\t}\n\t\t\n\t\t// bucket 找完（还没找到），继续到 overflow bucket 里找\n\t\tb = b.overflow(t)\n\t\t// overflow bucket 也找完了，说明没有目标 key\n\t\t// 返回零值\n\t\tif b == nil {\n\t\t\treturn unsafe.Pointer(&zeroVal[0])\n\t\t}\n\t}\n}\n')])])]),a("p",[t._v("函数返回 h[key] 的指针，如果 h 中没有此 key，那就会返回一个 key 相应类型的零值，不会返回 nil。")]),t._v(" "),a("p",[t._v("代码整体比较直接，没什么难懂的地方。跟着上面的注释一步步理解就好了。")]),t._v(" "),a("p",[t._v("这里，说一下定位 key 和 value 的方法以及整个循环的写法。")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// key 定位公式\nk := add(unsafe.Pointer(b), dataOffset+i*uintptr(t.keysize))\n\n// value 定位公式\nv := add(unsafe.Pointer(b), dataOffset+bucketCnt*uintptr(t.keysize)+i*uintptr(t.valuesize))\n")])])]),a("p",[t._v("b 是 bmap 的地址，这里 bmap 还是源码里定义的结构体，只包含一个 tophash 数组，经编译器扩充之后的结构体才包含 key，value，overflow 这些字段。dataOffset 是 key 相对于 bmap 起始地址的偏移：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dataOffset = unsafe.Offsetof(struct {\n\t\tb bmap\n\t\tv int64\n\t}{}.v)\n")])])]),a("p",[t._v("因此 bucket 里 key 的起始地址就是 unsafe.Pointer(b)+dataOffset。第 i 个 key 的地址就要在此基础上跨过 i 个 key 的大小；而我们又知道，value 的地址是在所有 key 之后，因此第 i 个 value 的地址还需要加上所有 key 的偏移。理解了这些，上面 key 和 value 的定位公式就很好理解了。")]),t._v(" "),a("p",[t._v("再说整个大循环的写法，最外层是一个无限循环，通过")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("b = b.overflow(t)\n")])])]),a("p",[t._v("遍历所有的 bucket，这相当于是一个 bucket 链表。")]),t._v(" "),a("p",[t._v("当定位到一个具体的 bucket 时，里层循环就是遍历这个 bucket 里所有的 cell，或者说所有的槽位，也就是 bucketCnt=8 个槽位。整个循环过程：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/7698088/57581783-fe5c2180-74ee-11e9-99c9-5a226216e1af.png",alt:"mapacess loop"}})]),t._v(" "),a("p",[t._v("再说一下 minTopHash，当一个 cell 的 tophash 值小于 minTopHash 时，标志这个 cell 的迁移状态。因为这个状态值是放在 tophash 数组里，为了和正常的哈希值区分开，会给 key 计算出来的哈希值一个增量：minTopHash。这样就能区分正常的 top hash 值和表示状态的哈希值。")]),t._v(" "),a("p",[t._v("下面的这几种状态就表征了 bucket 的情况：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 空的 cell，也是初始时 bucket 的状态\nempty          = 0\n// 空的 cell，表示 cell 已经被迁移到新的 bucket\nevacuatedEmpty = 1\n// key,value 已经搬迁完毕，但是 key 都在新 bucket 前半部分，\n// 后面扩容部分会再讲到。\nevacuatedX     = 2\n// 同上，key 在后半部分\nevacuatedY     = 3\n// tophash 的最小正常值\nminTopHash     = 4\n")])])]),a("p",[t._v("源码里判断这个 bucket 是否已经搬迁完毕，用到的函数：")]),t._v(" "),a("div",{staticClass:"language-golang extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("func evacuated(b *bmap) bool {\n\th := b.tophash[0]\n\treturn h > empty && h < minTopHash\n}\n")])])]),a("p",[t._v("只取了 tophash 数组的第一个值，判断它是否在 0-4 之间。对比上面的常量，当 top hash 是 "),a("code",[t._v("evacuatedEmpty")]),t._v("、"),a("code",[t._v("evacuatedX")]),t._v("、"),a("code",[t._v("evacuatedY")]),t._v(" 这三个值之一，说明此 bucket 中的 key 全部被搬迁到了新 bucket。")])])}),[],!1,null,null,null);e.default=s.exports}}]);