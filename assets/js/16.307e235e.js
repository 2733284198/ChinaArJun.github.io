(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{357:function(r,e,s){r.exports=s.p+"assets/img/p1_12.9fa41d46.png"},483:function(r,e,s){"use strict";s.r(e);var v=s(44),_=Object(v.a)({},(function(){var r=this,e=r.$createElement,v=r._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[v("h1",{attrs:{id:"redis"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[r._v("#")]),r._v(" redis")]),r._v(" "),v("h3",{attrs:{id:"redis下载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis下载"}},[r._v("#")]),r._v(" redis下载")]),r._v(" "),v("ol",[v("li",[r._v("当前下载的版本为稳定版3.2版本"),v("br"),r._v(" "),v("code",[r._v("sudo wget http://download.redis.io/releases/redis-3.2.8.tar.gz")])]),r._v(" "),v("li",[r._v("解压"),v("br"),r._v(" "),v("code",[r._v("tar -zxvf redis-3.2.8.tar.gz")])]),r._v(" "),v("li",[r._v("放到/usr/local目录下"),v("br"),r._v(" "),v("code",[r._v("sudo mv ./redissudo mv ./redis")])]),r._v(" "),v("li",[r._v("进入redis目录"),v("br"),r._v(" "),v("code",[r._v("cd /usr/local/redis/")])]),r._v(" "),v("li",[r._v("生成"),v("br"),r._v(" "),v("code",[r._v("sudo make")])]),r._v(" "),v("li",[r._v("测试,这段运行时间会较长"),v("br"),r._v(" "),v("code",[r._v("sudo make intall")])]),r._v(" "),v("li",[r._v("安装,将redis的命令安装到/usr/local/bin/⽬录"),v("br"),r._v(" "),v("code",[r._v("sudo make install")])]),r._v(" "),v("li",[r._v("安装完成后，我们进入目录/usr/local/bin中查看"),v("br"),r._v(" "),v("code",[r._v("cd /usr/local/bin")]),v("br"),r._v(" "),v("code",[r._v("ls -all")]),v("br"),r._v(" "),v("img",{attrs:{src:s(357),alt:"image"}}),r._v(" "),v("blockquote",[v("p",[r._v("redis-server redis服务器"),v("br"),r._v("\nredis-cli redis命令行客户端"),v("br"),r._v("\nredis-benchmark redis性能测试工具"),v("br"),r._v("\nredis-check-aof AOF文件修复工具"),v("br"),r._v("\nredis-check-rdb RDB文件检索工具")])])]),r._v(" "),v("li",[r._v("配置⽂件，移动到/etc/⽬录下"),v("br"),r._v("\n配置⽂件⽬录为/usr/local/redis/redis.conf\n"),v("blockquote",[v("p",[r._v("sudo cp /usr/local/redis/redis.conf /etc/redis/")])])])]),r._v(" "),v("hr"),r._v(" "),v("h3",{attrs:{id:"下载过程中可能出现的错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#下载过程中可能出现的错误"}},[r._v("#")]),r._v(" 下载过程中可能出现的错误")]),r._v(" "),v("ul",[v("li",[r._v("安装redis时遇到You need tcl 8.5 or newer in order to run the Redis test"),v("br"),r._v("\n下载安装tcl：")])]),r._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[r._v("1. sudo wget http://downloads.sourceforge.net/tcl/tcl8.6.8-src.tar.gz   \n2. sudo tar xzvf tcl8.6.8-src.tar.gz （解压到usr/local/下的)  \n3. cd  /usr/local/tcl8.6.8/unix/  \n4. sudo ./configure  \n5. sudo make  \n6. sudo make install  \n- 由于tcl下载的服务器在外国,可能下载不了,可以使用我翻墙下载好的包[tcl8.6.1-src.tar.gz](https://pan.baidu.com/s/1NkK7VbeNBrbTPUeTxcYD6A),然后继续执行2-6步 \n")])])]),v("h3",{attrs:{id:"redis配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis配置"}},[r._v("#")]),r._v(" redis配置")]),r._v(" "),v("ul",[v("li",[v("p",[r._v("redis配置信息在/etc/redis/redis.conf下"),v("br"),r._v(" "),v("code",[r._v("sudo vi /etc/redis/redis.conf")])])]),r._v(" "),v("li",[v("p",[r._v("绑定ip：如果需要远程访问，可将此⾏注释，或绑定⼀个真实ip"),v("br"),r._v(" "),v("code",[r._v("bind 127.0.0.1")])])]),r._v(" "),v("li",[v("p",[r._v("端⼝，默认为6379"),v("br"),r._v(" "),v("code",[r._v("port 6379")])])]),r._v(" "),v("li",[v("p",[r._v("是否以守护进程运⾏")])]),r._v(" "),v("li",[v("p",[r._v("如果以守护进程运⾏，则不会在命令⾏阻塞，类似于服务\n如果以⾮守护进程运⾏，则当前终端被阻塞\n设置为yes表示守护进程，设置为no表示⾮守护进程\n推荐设置为yes"),v("br"),r._v(" "),v("code",[r._v("daemonize yes")])])]),r._v(" "),v("li",[v("p",[r._v("数据⽂件"),v("br"),r._v(" "),v("code",[r._v("dbfilename dump.rdb")])])]),r._v(" "),v("li",[v("p",[r._v("数据⽂件存储路径"),v("br"),r._v(" "),v("code",[r._v("dir /var/lib/redis")])])]),r._v(" "),v("li",[v("p",[r._v("⽇志⽂件"),v("br"),r._v(" "),v("code",[r._v("logfile /var/log/redis/redis-server.log")])])]),r._v(" "),v("li",[v("p",[r._v("数据库，默认有16个"),v("br"),r._v(" "),v("code",[r._v("database 16")])])]),r._v(" "),v("li",[v("p",[r._v("主从复制，类似于双机备份"),v("br"),r._v(" "),v("code",[r._v("slaveof")])])]),r._v(" "),v("li",[v("p",[r._v("redis配置信息参考信息"),v("br"),r._v(" "),v("a",{attrs:{href:"http://blog.csdn.net/ljphilp/article/details/52934933",target:"_blank",rel:"noopener noreferrer"}},[r._v("redis配置信息参考"),v("OutboundLink")],1)])]),r._v(" "),v("li",[v("p",[r._v("当前项目"),v("a",{attrs:{href:"./conf/redis.conf"}},[r._v("redis配置文件")])])])]),r._v(" "),v("h3",{attrs:{id:"redis操作命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis操作命令"}},[r._v("#")]),r._v(" redis操作命令")]),r._v(" "),v("ul",[v("li",[v("h4",{attrs:{id:"服务器端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务器端"}},[r._v("#")]),r._v(" 服务器端")]),r._v(" "),v("ul",[v("li",[v("p",[r._v("服务器端的命令为"),v("br"),r._v(" "),v("code",[r._v("redis-server")])])]),r._v(" "),v("li",[v("p",[r._v("可以使⽤help查看帮助⽂档"),v("br"),r._v(" "),v("code",[r._v("redis-server --help")])])]),r._v(" "),v("li",[v("p",[r._v("推荐使⽤服务的⽅式管理redis服务"),v("br"),r._v(" "),v("code",[r._v("启动: sudo service redis start")]),v("br"),r._v(" "),v("code",[r._v("停⽌:sudo service redis stop")]),v("br"),r._v(" "),v("code",[r._v("重启 sudo service redis restart")])])]),r._v(" "),v("li",[v("p",[r._v("其他"),v("br"),r._v(" "),v("code",[r._v("ps -ef|grep redis 查看redis服务器进程")]),v("br"),r._v(" "),v("code",[r._v("sudo kill -9 pid 杀死redis服务器")]),v("br"),r._v(" "),v("code",[r._v("sudo redis-server /etc/redis/redis.conf 指定加载的配置文件")])])])])]),r._v(" "),v("li",[v("h4",{attrs:{id:"客户端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[r._v("#")]),r._v(" 客户端")]),r._v(" "),v("ul",[v("li",[v("p",[r._v("客户端的命令为redis-cli")])]),r._v(" "),v("li",[v("p",[r._v("可以使⽤help查看帮助⽂档"),v("br"),r._v(" "),v("code",[r._v("redis-cli --help")])])]),r._v(" "),v("li",[v("p",[r._v("连接redis"),v("br"),r._v(" "),v("code",[r._v("redis-cli")])])]),r._v(" "),v("li",[v("p",[r._v("切换数据库"),v("br"),r._v("\n数据库没有名称，默认有16个，通过0-15来标识，连接redis默认选择第一个数据库"),v("br"),r._v(" "),v("code",[r._v("select n")])])])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);