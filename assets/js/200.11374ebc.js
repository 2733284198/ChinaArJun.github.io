(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{619:function(e,t,n){"use strict";n.r(t);var a=n(44),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"gin搭建blog-api-s-（三）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gin搭建blog-api-s-（三）"}},[e._v("#")]),e._v(" Gin搭建Blog API's （三）")]),e._v(" "),n("p",[e._v("项目地址：https://github.com/EDDYCJY/go-gin-example")]),e._v(" "),n("h2",{attrs:{id:"涉及知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#涉及知识点"}},[e._v("#")]),e._v(" 涉及知识点")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/gin-gonic/gin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gin"),n("OutboundLink")],1),e._v("：Golang的一个微框架，性能极佳。")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/astaxie/beego/tree/master/validation",target:"_blank",rel:"noopener noreferrer"}},[e._v("beego-validation"),n("OutboundLink")],1),e._v("：本节采用的beego的表单验证库，"),n("a",{attrs:{href:"https://beego.me/docs/mvc/controller/validation.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文文档"),n("OutboundLink")],1),e._v("。")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/jinzhu/gorm",target:"_blank",rel:"noopener noreferrer"}},[e._v("gorm"),n("OutboundLink")],1),e._v("，对开发人员友好的ORM框架，"),n("a",{attrs:{href:"http://gorm.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文文档"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Unknwon/com",target:"_blank",rel:"noopener noreferrer"}},[e._v("com"),n("OutboundLink")],1),e._v("，一个小而美的工具包。")])]),e._v(" "),n("h2",{attrs:{id:"本文目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本文目标"}},[e._v("#")]),e._v(" 本文目标")]),e._v(" "),n("ul",[n("li",[e._v("完成博客的文章类接口定义和编写")])]),e._v(" "),n("h2",{attrs:{id:"定义接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义接口"}},[e._v("#")]),e._v(" 定义接口")]),e._v(" "),n("p",[e._v("本节编写文章的逻辑，我们定义一下接口吧！")]),e._v(" "),n("ul",[n("li",[e._v('获取文章列表：GET("/articles")')]),e._v(" "),n("li",[e._v('获取指定文章：POST("/articles/:id")')]),e._v(" "),n("li",[e._v('新建文章：POST("/articles")')]),e._v(" "),n("li",[e._v('更新指定文章：PUT("/articles/:id")')]),e._v(" "),n("li",[e._v('删除指定文章：DELETE("/articles/:id")')])]),e._v(" "),n("h2",{attrs:{id:"编写路由逻辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写路由逻辑"}},[e._v("#")]),e._v(" 编写路由逻辑")]),e._v(" "),n("p",[e._v("在"),n("code",[e._v("routers")]),e._v("的v1版本下，新建"),n("code",[e._v("article.go")]),e._v("文件，写入内容：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package v1\n\nimport (\n\t"github.com/gin-gonic/gin"\n)\n\n//获取单个文章\nfunc GetArticle(c *gin.Context) {\n}\n\n//获取多个文章\nfunc GetArticles(c *gin.Context) {\n}\n\n//新增文章\nfunc AddArticle(c *gin.Context) {\n}\n\n//修改文章\nfunc EditArticle(c *gin.Context) {\n}\n\n//删除文章\nfunc DeleteArticle(c *gin.Context) {\n}\n')])])]),n("p",[e._v("我们打开"),n("code",[e._v("routers")]),e._v("下的"),n("code",[e._v("router.go")]),e._v("文件，修改文件内容为：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package routers\n\nimport (\n    "github.com/gin-gonic/gin"\n    \n    "github.com/EDDYCJY/go-gin-example/routers/api/v1"\n    "github.com/EDDYCJY/go-gin-example/pkg/setting"\n)\n\nfunc InitRouter() *gin.Engine {\n    ...\n    apiv1 := r.Group("/api/v1")\n    {\n        ...\n        //获取文章列表\n        apiv1.GET("/articles", v1.GetArticles)\n        //获取指定文章\n        apiv1.GET("/articles/:id", v1.GetArticle)\n        //新建文章\n        apiv1.POST("/articles", v1.AddArticle)\n        //更新指定文章\n        apiv1.PUT("/articles/:id", v1.EditArticle)\n        //删除指定文章\n        apiv1.DELETE("/articles/:id", v1.DeleteArticle)\n    }\n\n    return r\n}\n')])])]),n("p",[e._v("当前目录结构：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("go-gin-example/\n├── conf\n│   └── app.ini\n├── main.go\n├── middleware\n├── models\n│   ├── models.go\n│   └── tag.go\n├── pkg\n│   ├── e\n│   │   ├── code.go\n│   │   └── msg.go\n│   ├── setting\n│   │   └── setting.go\n│   └── util\n│       └── pagination.go\n├── routers\n│   ├── api\n│   │   └── v1\n│   │       ├── article.go\n│   │       └── tag.go\n│   └── router.go\n├── runtime\n\n")])])]),n("p",[e._v("在基础的路由规则配置结束后，我们"),n("strong",[e._v("开始编写我们的接口")]),e._v("吧！")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("##编写models逻辑\n创建"),n("code",[e._v("models")]),e._v("目录下的"),n("code",[e._v("article.go")]),e._v("，写入文件内容：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package models\n\nimport (\n\t"github.com/jinzhu/gorm"\n\n\t"time"\n)\n\ntype Article struct {\n\tModel\n\n\tTagID int `json:"tag_id" gorm:"index"`\n\tTag   Tag `json:"tag"`\n\n\tTitle string `json:"title"`\n\tDesc string `json:"desc"`\n\tContent string `json:"content"`\n\tCreatedBy string `json:"created_by"`\n\tModifiedBy string `json:"modified_by"`\n\tState int `json:"state"`\n}\n\n\nfunc (article *Article) BeforeCreate(scope *gorm.Scope) error {\n    scope.SetColumn("CreatedOn", time.Now().Unix())\n\n    return nil\n}\n\nfunc (article *Article) BeforeUpdate(scope *gorm.Scope) error {\n\tscope.SetColumn("ModifiedOn", time.Now().Unix())\n\n\treturn nil\n}\n')])])]),n("p",[e._v("我们创建了一个"),n("code",[e._v("Article struct {}")]),e._v("，与"),n("code",[e._v("Tag")]),e._v("不同的是，"),n("code",[e._v("Article")]),e._v("多了几项，如下：")]),e._v(" "),n("ol",[n("li",[n("code",[e._v("gorm:index")]),e._v("，用于声明这个字段为索引，如果你使用了自动迁移功能则会有所影响，在不使用则无影响")]),e._v(" "),n("li",[n("code",[e._v("Tag")]),e._v("字段，实际是一个嵌套的"),n("code",[e._v("struct")]),e._v("，它利用"),n("code",[e._v("TagID")]),e._v("与"),n("code",[e._v("Tag")]),e._v("模型相互关联，在执行查询的时候，能够达到"),n("code",[e._v("Article")]),e._v("、"),n("code",[e._v("Tag")]),e._v("关联查询的功能")]),e._v(" "),n("li",[n("code",[e._v("time.Now().Unix()")]),e._v(" 返回当前的时间戳")])]),e._v(" "),n("p",[e._v("接下来，请确保已对上一章节的内容通读且了解，由于逻辑偏差不会太远，我们本节直接编写这五个接口")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("打开"),n("code",[e._v("models")]),e._v("目录下的"),n("code",[e._v("article.go")]),e._v("，修改文件内容：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package models\n\nimport (\n\t"time"\n\n\t"github.com/jinzhu/gorm"\n)\n\ntype Article struct {\n\tModel\n\n\tTagID int `json:"tag_id" gorm:"index"`\n\tTag   Tag `json:"tag"`\n\n\tTitle string `json:"title"`\n\tDesc string `json:"desc"`\n\tContent string `json:"content"`\n\tCreatedBy string `json:"created_by"`\n\tModifiedBy string `json:"modified_by"`\n\tState int `json:"state"`\n}\n\n\nfunc ExistArticleByID(id int) bool {\n\tvar article Article\n\tdb.Select("id").Where("id = ?", id).First(&article)\n\n\tif article.ID > 0 {\n\t\treturn true\n\t}\n\n\treturn false\n}\n\nfunc GetArticleTotal(maps interface {}) (count int){\n\tdb.Model(&Article{}).Where(maps).Count(&count)\n\n\treturn\n}\n\nfunc GetArticles(pageNum int, pageSize int, maps interface {}) (articles []Article) {\n\tdb.Preload("Tag").Where(maps).Offset(pageNum).Limit(pageSize).Find(&articles)\n\n\treturn\n}\n\nfunc GetArticle(id int) (article Article) {\n\tdb.Where("id = ?", id).First(&article)\n\tdb.Model(&article).Related(&article.Tag)\n\n\treturn \n}\n\nfunc EditArticle(id int, data interface {}) bool {\n\tdb.Model(&Article{}).Where("id = ?", id).Updates(data)\n\n\treturn true\n}\n\nfunc AddArticle(data map[string]interface {}) bool {\n\tdb.Create(&Article {\n\t\tTagID : data["tag_id"].(int),\n\t\tTitle : data["title"].(string),\n\t\tDesc : data["desc"].(string),\n\t\tContent : data["content"].(string),\n\t\tCreatedBy : data["created_by"].(string),\n\t\tState : data["state"].(int),\n\t})\n\n\treturn true\n}\n\nfunc DeleteArticle(id int) bool {\n\tdb.Where("id = ?", id).Delete(Article{})\n\n\treturn true\n}\n\nfunc (article *Article) BeforeCreate(scope *gorm.Scope) error {\n    scope.SetColumn("CreatedOn", time.Now().Unix())\n\n    return nil\n}\n\nfunc (article *Article) BeforeUpdate(scope *gorm.Scope) error {\n\tscope.SetColumn("ModifiedOn", time.Now().Unix())\n\n\treturn nil\n}\n')])])]),n("p",[e._v("在这里，我们拿出三点不同来讲，如下：")]),e._v(" "),n("p",[n("strong",[e._v("1、 我们的"),n("code",[e._v("Article")]),e._v("是如何关联到"),n("code",[e._v("Tag")]),e._v("？")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('func GetArticle(id int) (article Article) {\n\tdb.Where("id = ?", id).First(&article)\n\tdb.Model(&article).Related(&article.Tag)\n\n\treturn \n}\n')])])]),n("p",[e._v("能够达到关联，首先是"),n("code",[e._v("gorm")]),e._v("本身做了大量的约定俗成")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("Article")]),e._v("有一个结构体成员是"),n("code",[e._v("TagID")]),e._v("，就是外键。"),n("code",[e._v("gorm")]),e._v("会通过类名+ID的方式去找到这两个类之间的关联关系")]),e._v(" "),n("li",[n("code",[e._v("Article")]),e._v("有一个结构体成员是"),n("code",[e._v("Tag")]),e._v("，就是我们嵌套在"),n("code",[e._v("Article")]),e._v("里的"),n("code",[e._v("Tag")]),e._v("结构体，我们可以通过"),n("code",[e._v("Related")]),e._v("进行关联查询")])]),e._v(" "),n("p",[n("strong",[e._v("2、 "),n("code",[e._v("Preload")]),e._v("是什么东西，为什么查询可以得出每一项的关联"),n("code",[e._v("Tag")]),e._v("？")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('func GetArticles(pageNum int, pageSize int, maps interface {}) (articles []Article) {\n\tdb.Preload("Tag").Where(maps).Offset(pageNum).Limit(pageSize).Find(&articles)\n\n\treturn\n}\n')])])]),n("p",[n("code",[e._v("Preload")]),e._v("就是一个预加载器，它会执行两条SQL，分别是"),n("code",[e._v("SELECT * FROM blog_articles;")]),e._v("和"),n("code",[e._v("SELECT * FROM blog_tag WHERE id IN (1,2,3,4);")]),e._v("，那么在查询出结构后，"),n("code",[e._v("gorm")]),e._v("内部处理对应的映射逻辑，将其填充到"),n("code",[e._v("Article")]),e._v("的"),n("code",[e._v("Tag")]),e._v("中，会特别方便，并且避免了循环查询")]),e._v(" "),n("p",[e._v("那么有没有别的办法呢，大致是两种")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("gorm")]),e._v("的"),n("code",[e._v("Join")])]),e._v(" "),n("li",[e._v("循环"),n("code",[e._v("Related")])])]),e._v(" "),n("p",[e._v("综合之下，还是"),n("code",[e._v("Preload")]),e._v("更好，如果你有更优的方案，欢迎说一下 😃")]),e._v(" "),n("p",[n("strong",[e._v("3、 "),n("code",[e._v("v.(I)")]),e._v(" 是什么？")])]),e._v(" "),n("p",[n("code",[e._v("v")]),e._v("表示一个接口值，"),n("code",[e._v("I")]),e._v("表示接口类型。这个实际就是Golang中的"),n("strong",[e._v("类型断言")]),e._v("，用于判断一个接口值的实际类型是否为某个类型，或一个非接口值的类型是否实现了某个接口类型")]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("打开"),n("code",[e._v("routers")]),e._v("目录下v1版本的"),n("code",[e._v("article.go")]),e._v("文件，修改文件内容：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package v1\n\nimport (\n\t"net/http"\n\t"log"\n\n\t"github.com/gin-gonic/gin"\n\t"github.com/astaxie/beego/validation"\n\t"github.com/unknwon/com"\n\n\t"github.com/EDDYCJY/go-gin-example/models"\n\t"github.com/EDDYCJY/go-gin-example/pkg/e"\n\t"github.com/EDDYCJY/go-gin-example/pkg/setting"\n\t"github.com/EDDYCJY/go-gin-example/pkg/util"\n)\n\n//获取单个文章\nfunc GetArticle(c *gin.Context) {\n    id := com.StrTo(c.Param("id")).MustInt()\n\n    valid := validation.Validation{}\n    valid.Min(id, 1, "id").Message("ID必须大于0")\n\n    code := e.INVALID_PARAMS\n    var data interface {}\n    if ! valid.HasErrors() {\n        if models.ExistArticleByID(id) {\n            data = models.GetArticle(id)\n            code = e.SUCCESS\n        } else {\n            code = e.ERROR_NOT_EXIST_ARTICLE\n        }\n    } else {\n        for _, err := range valid.Errors {\n            log.Printf("err.key: %s, err.message: %s", err.Key, err.Message)\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : data,\n    })\n}\n\n//获取多个文章\nfunc GetArticles(c *gin.Context) {\n    data := make(map[string]interface{})\n    maps := make(map[string]interface{})\n    valid := validation.Validation{}\n\n    var state int = -1\n    if arg := c.Query("state"); arg != "" {\n        state = com.StrTo(arg).MustInt()\n        maps["state"] = state\n\n        valid.Range(state, 0, 1, "state").Message("状态只允许0或1")\n    }\n\n    var tagId int = -1\n    if arg := c.Query("tag_id"); arg != "" {\n        tagId = com.StrTo(arg).MustInt()\n        maps["tag_id"] = tagId\n\n        valid.Min(tagId, 1, "tag_id").Message("标签ID必须大于0")\n    } \n\n    code := e.INVALID_PARAMS\n    if ! valid.HasErrors() {\n        code = e.SUCCESS\n\n        data["lists"] = models.GetArticles(util.GetPage(c), setting.PageSize, maps)\n        data["total"] = models.GetArticleTotal(maps)\n\n    } else {\n        for _, err := range valid.Errors {\n            log.Printf("err.key: %s, err.message: %s", err.Key, err.Message)\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : data,\n    })\n}\n\n//新增文章\nfunc AddArticle(c *gin.Context) {\n    tagId := com.StrTo(c.Query("tag_id")).MustInt()\n    title := c.Query("title")\n    desc := c.Query("desc")\n    content := c.Query("content")\n    createdBy := c.Query("created_by")\n    state := com.StrTo(c.DefaultQuery("state", "0")).MustInt()\n\n    valid := validation.Validation{}\n    valid.Min(tagId, 1, "tag_id").Message("标签ID必须大于0")\n    valid.Required(title, "title").Message("标题不能为空")\n    valid.Required(desc, "desc").Message("简述不能为空")\n    valid.Required(content, "content").Message("内容不能为空")\n    valid.Required(createdBy, "created_by").Message("创建人不能为空")\n    valid.Range(state, 0, 1, "state").Message("状态只允许0或1")\n\n    code := e.INVALID_PARAMS\n    if ! valid.HasErrors() {\n        if models.ExistTagByID(tagId) {\n            data := make(map[string]interface {})\n            data["tag_id"] = tagId\n            data["title"] = title\n            data["desc"] = desc\n            data["content"] = content\n            data["created_by"] = createdBy\n            data["state"] = state\n            \n            models.AddArticle(data)\n            code = e.SUCCESS\n        } else {\n            code = e.ERROR_NOT_EXIST_TAG\n        }\n    } else {\n        for _, err := range valid.Errors {\n            log.Printf("err.key: %s, err.message: %s", err.Key, err.Message)\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : make(map[string]interface{}),\n    })\n}\n\n//修改文章\nfunc EditArticle(c *gin.Context) {\n    valid := validation.Validation{}\n\n    id := com.StrTo(c.Param("id")).MustInt()\n    tagId := com.StrTo(c.Query("tag_id")).MustInt()\n    title := c.Query("title")\n    desc := c.Query("desc")\n    content := c.Query("content")\n    modifiedBy := c.Query("modified_by")\n\n    var state int = -1\n    if arg := c.Query("state"); arg != "" {\n        state = com.StrTo(arg).MustInt()\n        valid.Range(state, 0, 1, "state").Message("状态只允许0或1")\n    }\n\n    valid.Min(id, 1, "id").Message("ID必须大于0")\n    valid.MaxSize(title, 100, "title").Message("标题最长为100字符")\n    valid.MaxSize(desc, 255, "desc").Message("简述最长为255字符")\n    valid.MaxSize(content, 65535, "content").Message("内容最长为65535字符")\n    valid.Required(modifiedBy, "modified_by").Message("修改人不能为空")\n    valid.MaxSize(modifiedBy, 100, "modified_by").Message("修改人最长为100字符")\n\n    code := e.INVALID_PARAMS\n    if ! valid.HasErrors() {\n        if models.ExistArticleByID(id) {\n            if models.ExistTagByID(tagId) {\n                data := make(map[string]interface {})\n                if tagId > 0 {\n                    data["tag_id"] = tagId\n                }\n                if title != "" {\n                    data["title"] = title\n                }\n                if desc != "" {\n                    data["desc"] = desc\n                }\n                if content != "" {\n                    data["content"] = content\n                }\n\n                data["modified_by"] = modifiedBy\n\n                models.EditArticle(id, data)\n                code = e.SUCCESS\n            } else {\n                code = e.ERROR_NOT_EXIST_TAG\n            }\n        } else {\n            code = e.ERROR_NOT_EXIST_ARTICLE\n        }\n    } else {\n        for _, err := range valid.Errors {\n            log.Printf("err.key: %s, err.message: %s", err.Key, err.Message)\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : make(map[string]string),\n    })\n}\n\n//删除文章\nfunc DeleteArticle(c *gin.Context) {\n    id := com.StrTo(c.Param("id")).MustInt()\n\n    valid := validation.Validation{}\n    valid.Min(id, 1, "id").Message("ID必须大于0")\n\n    code := e.INVALID_PARAMS\n    if ! valid.HasErrors() {\n        if models.ExistArticleByID(id) {\n            models.DeleteArticle(id)\n            code = e.SUCCESS\n        } else {\n            code = e.ERROR_NOT_EXIST_ARTICLE\n        }\n    } else {\n        for _, err := range valid.Errors {\n            log.Printf("err.key: %s, err.message: %s", err.Key, err.Message)\n        }\n    }\n\n    c.JSON(http.StatusOK, gin.H{\n        "code" : code,\n        "msg" : e.GetMsg(code),\n        "data" : make(map[string]string),\n    })\n}\n')])])]),n("p",[e._v("当前目录结构：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("go-gin-example/\n├── conf\n│   └── app.ini\n├── main.go\n├── middleware\n├── models\n│   ├── article.go\n│   ├── models.go\n│   └── tag.go\n├── pkg\n│   ├── e\n│   │   ├── code.go\n│   │   └── msg.go\n│   ├── setting\n│   │   └── setting.go\n│   └── util\n│       └── pagination.go\n├── routers\n│   ├── api\n│   │   └── v1\n│   │       ├── article.go\n│   │       └── tag.go\n│   └── router.go\n├── runtime\n")])])]),n("h2",{attrs:{id:"验证功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证功能"}},[e._v("#")]),e._v(" 验证功能")]),e._v(" "),n("p",[e._v("我们重启服务，执行"),n("code",[e._v("go run main.go")]),e._v("，检查控制台输出结果")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ go run main.go \n[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.\n - using env:\texport GIN_MODE=release\n - using code:\tgin.SetMode(gin.ReleaseMode)\n\n[GIN-debug] GET    /api/v1/tags              --\x3e gin-blog/routers/api/v1.GetTags (3 handlers)\n[GIN-debug] POST   /api/v1/tags              --\x3e gin-blog/routers/api/v1.AddTag (3 handlers)\n[GIN-debug] PUT    /api/v1/tags/:id          --\x3e gin-blog/routers/api/v1.EditTag (3 handlers)\n[GIN-debug] DELETE /api/v1/tags/:id          --\x3e gin-blog/routers/api/v1.DeleteTag (3 handlers)\n[GIN-debug] GET    /api/v1/articles          --\x3e gin-blog/routers/api/v1.GetArticles (3 handlers)\n[GIN-debug] GET    /api/v1/articles/:id      --\x3e gin-blog/routers/api/v1.GetArticle (3 handlers)\n[GIN-debug] POST   /api/v1/articles          --\x3e gin-blog/routers/api/v1.AddArticle (3 handlers)\n[GIN-debug] PUT    /api/v1/articles/:id      --\x3e gin-blog/routers/api/v1.EditArticle (3 handlers)\n[GIN-debug] DELETE /api/v1/articles/:id      --\x3e gin-blog/routers/api/v1.DeleteArticle (3 handlers)\n')])])]),n("p",[e._v("使用"),n("code",[e._v("Postman")]),e._v("检验接口是否正常，在这里大家可以选用合适的参数传递方式，此处为了方便展示我选用了 GET/Param 传参的方式，而后期会改为 POST。")]),e._v(" "),n("ul",[n("li",[e._v("POST：http://127.0.0.1:8000/api/v1/articles?tag_id=1&title=test1&desc=test-desc&content=test-content&created_by=test-created&state=1")]),e._v(" "),n("li",[e._v("GET：http://127.0.0.1:8000/api/v1/articles")]),e._v(" "),n("li",[e._v("GET：http://127.0.0.1:8000/api/v1/articles/1")]),e._v(" "),n("li",[e._v("PUT：http://127.0.0.1:8000/api/v1/articles/1?tag_id=1&title=test-edit1&desc=test-desc-edit&content=test-content-edit&modified_by=test-created-edit&state=0")]),e._v(" "),n("li",[e._v("DELETE：http://127.0.0.1:8000/api/v1/articles/1")])]),e._v(" "),n("p",[e._v("至此，我们的API's编写就到这里，下一节我们将介绍另外的一些技巧！")]),e._v(" "),n("h2",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),n("h3",{attrs:{id:"本系列示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本系列示例代码"}},[e._v("#")]),e._v(" 本系列示例代码")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/EDDYCJY/go-gin-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("go-gin-example"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"关于"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[e._v("#")]),e._v(" 关于")]),e._v(" "),n("h3",{attrs:{id:"修改记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改记录"}},[e._v("#")]),e._v(" 修改记录")]),e._v(" "),n("ul",[n("li",[e._v("第一版：2018年02月16日发布文章")]),e._v(" "),n("li",[e._v("第二版：2019年10月01日修改文章")])]),e._v(" "),n("h2",{attrs:{id:"？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#？"}},[e._v("#")]),e._v(" ？")]),e._v(" "),n("p",[e._v("如果有任何疑问或错误，欢迎在 "),n("a",{attrs:{href:"https://github.com/EDDYCJY/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),n("OutboundLink")],1),e._v(" 进行提问或给予修正意见，如果喜欢或对你有所帮助，欢迎 Star，对作者是一种鼓励和推进。")]),e._v(" "),n("h3",{attrs:{id:"我的公众号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[e._v("#")]),e._v(" 我的公众号")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://image.eddycjy.com/8d0b0c3a11e74efd5fdfd7910257e70b.jpg",alt:"image"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);