(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{625:function(e,t,r){"use strict";r.r(t);var a=r(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"_4-5-基于-ca-的-tls-证书认证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-基于-ca-的-tls-证书认证"}},[e._v("#")]),e._v(" 4.5 基于 CA 的 TLS 证书认证")]),e._v(" "),r("p",[e._v("项目地址：https://github.com/EDDYCJY/go-grpc-example")]),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("在上一章节中，我们提出了一个问题。就是如何保证证书的可靠性和有效性？你如何确定你 Server、Client 的证书是对的呢？")]),e._v(" "),r("h2",{attrs:{id:"ca"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ca"}},[e._v("#")]),e._v(" CA")]),e._v(" "),r("p",[e._v("为了保证证书的可靠性和有效性，在这里可引入 CA 颁发的根证书的概念。其遵守 X.509 标准")]),e._v(" "),r("h3",{attrs:{id:"根证书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根证书"}},[e._v("#")]),e._v(" 根证书")]),e._v(" "),r("p",[e._v("根证书（root certificate）是属于根证书颁发机构（CA）的公钥证书。我们可以通过验证 CA 的签名从而信任 CA ，任何人都可以得到 CA 的证书（含公钥），用以验证它所签发的证书（客户端、服务端）")]),e._v(" "),r("p",[e._v("它包含的文件如下：")]),e._v(" "),r("ul",[r("li",[e._v("公钥")]),e._v(" "),r("li",[e._v("密钥")])]),e._v(" "),r("h3",{attrs:{id:"生成-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成-key"}},[e._v("#")]),e._v(" 生成 Key")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("openssl genrsa -out ca.key 2048\n")])])]),r("h3",{attrs:{id:"生成密钥"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥"}},[e._v("#")]),e._v(" 生成密钥")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("openssl req -new -x509 -days 7200 -key ca.key -out ca.pem\n")])])]),r("h4",{attrs:{id:"填写信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#填写信息"}},[e._v("#")]),e._v(" 填写信息")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Country Name (2 letter code) []:\nState or Province Name (full name) []:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) []:\nOrganizational Unit Name (eg, section) []:\nCommon Name (eg, fully qualified host name) []:go-grpc-example\nEmail Address []:\n")])])]),r("h3",{attrs:{id:"server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[e._v("#")]),e._v(" Server")]),e._v(" "),r("h4",{attrs:{id:"生成-csr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成-csr"}},[e._v("#")]),e._v(" 生成 CSR")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("openssl req -new -key server.key -out server.csr\n")])])]),r("h5",{attrs:{id:"填写信息-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#填写信息-2"}},[e._v("#")]),e._v(" 填写信息")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Country Name (2 letter code) []:\nState or Province Name (full name) []:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) []:\nOrganizational Unit Name (eg, section) []:\nCommon Name (eg, fully qualified host name) []:go-grpc-example\nEmail Address []:\n\nPlease enter the following 'extra' attributes\nto be sent with your certificate request\nA challenge password []:\n")])])]),r("p",[e._v("CSR 是 Cerificate Signing Request 的英文缩写，为证书请求文件。主要作用是 CA 会利用 CSR 文件进行签名使得攻击者无法伪装或篡改原有证书")]),e._v(" "),r("h4",{attrs:{id:"基于-ca-签发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于-ca-签发"}},[e._v("#")]),e._v(" 基于 CA 签发")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("openssl x509 -req -sha256 -CA ca.pem -CAkey ca.key -CAcreateserial -days 3650 -in server.csr -out server.pem\n")])])]),r("h3",{attrs:{id:"client"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")]),e._v(" "),r("h3",{attrs:{id:"生成-key-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成-key-2"}},[e._v("#")]),e._v(" 生成 Key")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("openssl ecparam -genkey -name secp384r1 -out client.key\n")])])]),r("h3",{attrs:{id:"生成-csr-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生成-csr-2"}},[e._v("#")]),e._v(" 生成 CSR")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("openssl req -new -key client.key -out client.csr\n")])])]),r("h4",{attrs:{id:"基于-ca-签发-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基于-ca-签发-2"}},[e._v("#")]),e._v(" 基于 CA 签发")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("openssl x509 -req -sha256 -CA ca.pem -CAkey ca.key -CAcreateserial -days 3650 -in client.csr -out client.pem\n")])])]),r("h3",{attrs:{id:"整理目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#整理目录"}},[e._v("#")]),e._v(" 整理目录")]),e._v(" "),r("p",[e._v("至此我们生成了一堆文件，请按照以下目录结构存放：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ tree conf \nconf\n├── ca.key\n├── ca.pem\n├── ca.srl\n├── client\n│   ├── client.csr\n│   ├── client.key\n│   └── client.pem\n└── server\n    ├── server.csr\n    ├── server.key\n    └── server.pem\n")])])]),r("p",[e._v("另外有一些文件是不应该出现在仓库内，应当保密或删除的。但为了真实演示所以保留着（敲黑板）")]),e._v(" "),r("h2",{attrs:{id:"grpc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),r("p",[e._v("接下来将正式开始针对 gRPC 进行编码，改造上一章节的代码。目标是基于 CA 进行 TLS 认证 🤫")]),e._v(" "),r("h3",{attrs:{id:"server-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-2"}},[e._v("#")]),e._v(" Server")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package main\n\nimport (\n\t"context"\n\t"log"\n\t"net"\n\t"crypto/tls"\n\t"crypto/x509"\n\t"io/ioutil"\n\n\t"google.golang.org/grpc"\n\t"google.golang.org/grpc/credentials"\n\n\tpb "github.com/EDDYCJY/go-grpc-example/proto"\n)\n\n...\n\nconst PORT = "9001"\n\nfunc main() {\n\tcert, err := tls.LoadX509KeyPair("../../conf/server/server.pem", "../../conf/server/server.key")\n\tif err != nil {\n\t\tlog.Fatalf("tls.LoadX509KeyPair err: %v", err)\n\t}\n\n\tcertPool := x509.NewCertPool()\n\tca, err := ioutil.ReadFile("../../conf/ca.pem")\n\tif err != nil {\n\t\tlog.Fatalf("ioutil.ReadFile err: %v", err)\n\t}\n\n\tif ok := certPool.AppendCertsFromPEM(ca); !ok {\n\t\tlog.Fatalf("certPool.AppendCertsFromPEM err")\n\t}\n\n\tc := credentials.NewTLS(&tls.Config{\n\t\tCertificates: []tls.Certificate{cert},\n\t\tClientAuth:   tls.RequireAndVerifyClientCert,\n\t\tClientCAs:    certPool,\n\t})\n\n\tserver := grpc.NewServer(grpc.Creds(c))\n\tpb.RegisterSearchServiceServer(server, &SearchService{})\n\n\tlis, err := net.Listen("tcp", ":"+PORT)\n\tif err != nil {\n\t\tlog.Fatalf("net.Listen err: %v", err)\n\t}\n\n\tserver.Serve(lis)\n}\n')])])]),r("ul",[r("li",[e._v("tls.LoadX509KeyPair()：从证书相关文件中"),r("strong",[e._v("读取")]),e._v("和"),r("strong",[e._v("解析")]),e._v("信息，得到证书公钥、密钥对")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("func LoadX509KeyPair(certFile, keyFile string) (Certificate, error) {\n\tcertPEMBlock, err := ioutil.ReadFile(certFile)\n\tif err != nil {\n\t\treturn Certificate{}, err\n\t}\n\tkeyPEMBlock, err := ioutil.ReadFile(keyFile)\n\tif err != nil {\n\t\treturn Certificate{}, err\n\t}\n\treturn X509KeyPair(certPEMBlock, keyPEMBlock)\n}\n")])])]),r("ul",[r("li",[e._v("x509.NewCertPool()：创建一个新的、空的 CertPool")]),e._v(" "),r("li",[e._v("certPool.AppendCertsFromPEM()：尝试解析所传入的 PEM 编码的证书。如果解析成功会将其加到 CertPool 中，便于后面的使用")]),e._v(" "),r("li",[e._v("credentials.NewTLS：构建基于 TLS 的 TransportCredentials 选项")]),e._v(" "),r("li",[e._v("tls.Config：Config 结构用于配置 TLS 客户端或服务器")])]),e._v(" "),r("p",[e._v("在 Server，共使用了三个 Config 配置项：")]),e._v(" "),r("p",[e._v("（1）Certificates：设置证书链，允许包含一个或多个")]),e._v(" "),r("p",[e._v("（2）ClientAuth：要求必须校验客户端的证书。可以根据实际情况选用以下参数：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const (\n\tNoClientCert ClientAuthType = iota\n\tRequestClientCert\n\tRequireAnyClientCert\n\tVerifyClientCertIfGiven\n\tRequireAndVerifyClientCert\n)\n")])])]),r("p",[e._v("（3）ClientCAs：设置根证书的集合，校验方式使用 ClientAuth 中设定的模式")]),e._v(" "),r("h3",{attrs:{id:"client-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client-2"}},[e._v("#")]),e._v(" Client")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('package main\n\nimport (\n\t"context"\n\t"crypto/tls"\n\t"crypto/x509"\n\t"io/ioutil"\n\t"log"\n\n\t"google.golang.org/grpc"\n\t"google.golang.org/grpc/credentials"\n\n\tpb "github.com/EDDYCJY/go-grpc-example/proto"\n)\n\nconst PORT = "9001"\n\nfunc main() {\n\tcert, err := tls.LoadX509KeyPair("../../conf/client/client.pem", "../../conf/client/client.key")\n\tif err != nil {\n\t\tlog.Fatalf("tls.LoadX509KeyPair err: %v", err)\n\t}\n\n\tcertPool := x509.NewCertPool()\n\tca, err := ioutil.ReadFile("../../conf/ca.pem")\n\tif err != nil {\n\t\tlog.Fatalf("ioutil.ReadFile err: %v", err)\n\t}\n\n\tif ok := certPool.AppendCertsFromPEM(ca); !ok {\n\t\tlog.Fatalf("certPool.AppendCertsFromPEM err")\n\t}\n\n\tc := credentials.NewTLS(&tls.Config{\n\t\tCertificates: []tls.Certificate{cert},\n\t\tServerName:   "go-grpc-example",\n\t\tRootCAs:      certPool,\n\t})\n\n\tconn, err := grpc.Dial(":"+PORT, grpc.WithTransportCredentials(c))\n\tif err != nil {\n\t\tlog.Fatalf("grpc.Dial err: %v", err)\n\t}\n\tdefer conn.Close()\n\n\tclient := pb.NewSearchServiceClient(conn)\n\tresp, err := client.Search(context.Background(), &pb.SearchRequest{\n\t\tRequest: "gRPC",\n\t})\n\tif err != nil {\n\t\tlog.Fatalf("client.Search err: %v", err)\n\t}\n\n\tlog.Printf("resp: %s", resp.GetResponse())\n}\n')])])]),r("p",[e._v("在 Client 中绝大部分与 Server 一致，不同点的地方是，在 Client 请求 Server 端时，Client 端会使用根证书和 ServerName 去对 Server 端进行校验")]),e._v(" "),r("p",[e._v("简单流程大致如下：")]),e._v(" "),r("ol",[r("li",[e._v("Client 通过请求得到 Server 端的证书")]),e._v(" "),r("li",[e._v("使用 CA 认证的根证书对 Server 端的证书进行可靠性、有效性等校验")]),e._v(" "),r("li",[e._v("校验 ServerName 是否可用、有效")])]),e._v(" "),r("p",[e._v("当然了，在设置了 "),r("code",[e._v("tls.RequireAndVerifyClientCert")]),e._v(" 模式的情况下，Server 也会使用 CA 认证的根证书对 Client 端的证书进行可靠性、有效性等校验。也就是两边都会进行校验，极大的保证了安全性 👍")]),e._v(" "),r("h3",{attrs:{id:"验证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[e._v("#")]),e._v(" 验证")]),e._v(" "),r("p",[e._v("重新启动 server.go 和执行 client.go，查看响应结果是否正常")]),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("在本章节，我们使用 CA 颁发的根证书对客户端、服务端的证书进行了签发。进一步的提高了两者的通讯安全")]),e._v(" "),r("p",[e._v("这回是真的大功告成了！")]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("h3",{attrs:{id:"本系列示例代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[e._v("#")]),e._v(" 本系列示例代码")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/EDDYCJY/go-grpc-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-grpc-example"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);