# 快速了解

## 项目简介

**AMS-Vue**是一款基于SpringBoot+Vue的前后端分离极速后台开发框架。

**AMS-Vue**是一个 Java EE 企业级快速开发平台，基于经典技术组合（Spring Boot、Spring  Security、MyBatis、Jwt、Vue），内置模块如：部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、日志管理、代码生成等。在线定时任务配置；支持集群，支持多数据源。

## 主要特性

- 完全响应式布局（支持电脑、平板、手机等所有主流设备）
- 强大的一键生成功能（包括控制器、模型、视图、菜单等）
- 支持多数据源，简单配置即可实现切换。
- 支持按钮及数据权限，可自定义部门数据权限。
- 对常用js插件进行二次封装，使js代码变得简洁，更加易维护
- 完善的XSS防范及脚本过滤，彻底杜绝XSS攻击
- Maven多项目依赖，模块及插件分项目，尽量松耦合，方便模块升级、增减模块。
- 国际化支持，服务端及客户端支持
- 完善的日志记录体系简单注解即可实现

## 技术选型

**1、系统环境**

- Java EE 8
- Servlet 3.0
- Apache Maven 3

**2、主框架**

- Spring Boot 2.1
- Spring Framework 5.1
- Spring Security 5.1

**3、持久层**

- Apache MyBatis 3.4
- Hibernate Validation 6.0
- Alibaba Druid 1.1

**4、视图层**

- Vue 2.6
- Axios 0.18
- Element UI 2.11

## 内置功能

- 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
- 部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
- 岗位管理：配置系统用户所属担任职务。
- 菜单管理：配置系统菜单，操作权限，按钮权限标识等。
- 角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
- 字典管理：对系统中经常使用的一些较为固定的数据进行维护。
- 参数管理：对系统动态配置常用参数。
- 通知公告：系统通知公告信息发布维护。
- 操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
- 登录日志：系统登录日志记录查询包含登录异常。
- 在线用户：当前系统中活跃用户状态监控。
- 定时任务：在线（添加、修改、删除)任务调度包含执行结果日志。
- 代码生成：前后端代码的生成（java、html、xml、sql)支持CRUD下载 。
- 系统接口：根据业务代码自动生成相关的api接口文档。
- 服务监控：监视当前系统CPU、内存、磁盘、堆栈等相关信息。
- 在线构建器：拖动表单元素生成相应的HTML代码。
- 连接池监视：监视当期系统数据库连接池状态，可进行分析SQL找出系统性能瓶颈。

# 环境部署

## 准备工作

```bash
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.5.0 (推荐5.7版本)
Redis >= 3.0
Maven >= 3.0
Node >= 10
```

> **提示：**
>
> 前端安装完node后，最好设置下淘宝的镜像源，不建议使用cnpm（可能会出现奇怪的问题）

## 运行系统 

 ### 后端运行

1、导入ams到Eclipse，菜单 File -> Import，然后选择 Maven -> Existing Maven  Projects，点击 Next> 按钮，选择工作目录，然后点击 Finish  按钮，即可成功导入Eclipse会自动加载Maven依赖包，初次加载会比较慢（根据自身网络情况而定）
 2、创建数据库ams-vue并导入数据脚本ams.sql，quartz.sql
 3、打开运行`com.zzjs.AmsApplication.java`

### 前端运行

```bash
# 进入项目目录
cd ams-ui

# 安装依赖
npm install

# 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev
```

4、打开浏览器，输入：http://localhost:80 （默认账户 `admin/admin123`）
 若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功

## 必要配置

1. 修改数据库连接
    `编辑resources目录下的application-druid.yml`
    `url: 服务器地址`
    `username: 账号`
    `password: 密码`
2. 开发环境配置
    `编辑resources目录下的application.yml`
    `port: 端口`
    `context-path: 部署路径`

## 部署系统

> **提示**
>
> 因为本项目是前后端分离的，所以需要前后端都启动好，才能进行访问

### 后端部署

`bin/package.bat` 在项目的目录下执行
 然后会在项目下生成 `target`文件夹包含 `war` 或`jar` （多模块生成在ams-admin）

1、jar部署方式
 使用命令行执行：`java –jar ams.jar` 或者执行脚本：`bin/run.bat`

2、war部署方式
 pom.xml packaging修改为`war` 放入tomcat服务器webapps

> **提示**
>
>  SpringBoot去除内嵌tomcat

```xml
<!-- 多模块排除内置tomcat -->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
	<exclusions>
		<exclusion>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
		</exclusion>
	</exclusions>
</dependency>
		
<!-- 单应用排除内置tomcat -->		
<exclusions>
	<exclusion>
		<artifactId>spring-boot-starter-tomcat</artifactId>
		<groupId>org.springframework.boot</groupId>
	</exclusion>
</exclusions>
```

### 前端部署

当项目开发完毕，只需要运行一行命令就可以打包你的应用

```bash
# 打包正式环境
npm run build:prod

# 打包预发布环境
npm run build:stage
```

构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `***.js` 、`***.css`、`index.html` 等静态文件。

通常情况下 `dist` 文件夹的静态文件发布到你的 nginx 或者静态服务器即可，其中的 `index.html` 是后台服务的入口页面。

> **outputDir 提示:** 
>
> 如果需要自定义构建，比如指定 `dist` 目录等，则需要通过 config 的 `outputDir` 进行配置。

> **publicPath 提示:** 
>
> 部署时改变页面js 和 css 静态引入路径 ,只需修改 `vue.config.js` 文件资源路径即可。

```js
publicPath: './' //请根据自己路径来配置更改
```

```js
export default new Router({
  mode: 'hash', // hash模式
})
```

## 环境变量

所有测试环境或者正式环境变量的配置都在 .env.development等 `.env.xxxx`文件中。

它们都会通过 `webpack.DefinePlugin` 插件注入到全局。

> 注意！！！
>
> 环境变量必须以`VUE_APP_`为开头。如:`VUE_APP_API`、`VUE_APP_TITLE`
>
> 你在代码中可以通过如下方式获取:
>
> ```js
> console.log(process.env.VUE_APP_xxxx)
> ```

## Tomcat配置

修改`server.xml`，Host节点下添加

```xml
<Context docBase="" path="/" reloadable="true" source=""/>
```

dist目录的文件夹下新建WEB-INF文件夹，并在里面添加web.xml文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
        http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
        version="3.1" metadata-complete="true">
     <display-name>AMS for Tomcat</display-name>
     <error-page>
        <error-code>404</error-code>
        <location>/index.html</location>
    </error-page>
</web-app>
```

## Nginx配置

```text
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

		location / {
            root   /home/ams/projects/ams-ui;
			try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
		
		location /prod-api/{
			proxy_set_header Host $http_host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header REMOTE-HOST $remote_addr;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://localhost:8080/;
		}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

## 常见问题

1. 如果使用`Mac` 需要修改`application.yml`文件路径`profile`
2. 如果使用`Linux` 提示表不存在，设置大小写敏感配置在/etc/my.cnf 添加lower_case_table_names=1，重启MYSQL服务
3. 如果提示当前权限不足，无法写入文件请检查`profile`是否可读可写，或者无法访问此目录

# 项目介绍

## 文件结构

### 后端结构

```text
com.zzjs     
├── ams-common            // 工具类
│       └── annotation                    // 自定义注解
│       └── config                        // 全局配置
│       └── constant                      // 通用常量
│       └── core                          // 核心控制
│       └── enums                         // 通用枚举
│       └── exception                     // 通用异常
│       └── filter                        // 过滤器处理
│       └── utils                         // 通用类处理
├── ams-framework         // 框架核心
│       └── aspectj                       // 注解实现
│       └── config                        // 系统配置
│       └── datasource                    // 动态数据源
│       └── interceptor                   // 拦截器
│       └── manager                       // 异步处理
│       └── security                      // 权限控制
│       └── web                           // 前端控制
├── ams-generator   // 代码生成（可移除）
├── ams-quartz      // 定时任务（可移除）
├── ams-system      // 系统模块-service、domain、mapper类与xml配置文件
					（参数配置、系统访问、通知公告、操作日志、岗位、角色和菜单关联、在线会话、用户和岗位关联、用户和角色关联）
├── ams-admin       // 后台服务（通用服务、监控服务、系统服务、接口服务平台-后台CURD服务）-消费者
├── ams-ifsp        // 接口服务平台模块--service、domain、mapper类与xml配置文件（预计按照需求来划分）
├── ams-net-api     // 对外提供接口服务（主要是查询服务，为前端网站提供接口，对外部是提供者但对于系统后台来说是消费者）
├── ams-xxxxxx      // 其他模块
```

### 前端结构

```text
├── build                      // 构建相关  
├── bin                        // 执行脚本
├── public                     // 公共文件
│   ├── favicon.ico            // favicon图标
│   └── index.html             // html模板
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── layout                 // 布局
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── utils                  // 全局公用方法
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   ├── permission.js          // 权限管理
│   └── settings.js            // 系统配置
├── .editorconfig              // 编码格式
├── .env.development           // 开发环境配置
├── .env.production            // 生产环境配置
├── .env.staging               // 测试环境配置
├── .eslintignore              // 忽略语法检查
├── .eslintrc.js               // eslint 配置项
├── .gitignore                 // git 忽略项
├── babel.config.js            // babel.config.js ES6转化ES5或更低版本的配置
├── package.json               // package.json 依赖包配置
└── vue.config.js              // vue.config.js vue-cli 脚手架配置
```

## 配置文件

通用配置 `application.yml`

```yml
# 项目相关配置
ams:
  # 名称
  name: AMS
  # 版本
  version: 1.0.0
  # 版权年份
  copyrightYear: 2020
  # 实例演示开关
  demoEnabled: true
  # 文件路径 示例（ Windows配置D:/ams/uploadPath，Linux配置 /home/ams/uploadPath）
  profile: D:/ams/uploadPath
  # 获取ip地址开关
  addressEnabled: true

# 开发环境配置
server:
  # 服务器的HTTP端口，默认为8080
  port: 8080
  servlet:
    # 应用的访问路径
    context-path: /
  tomcat:
    # tomcat的URI编码
    uri-encoding: UTF-8
    # tomcat最大线程数，默认为200
    max-threads: 800
    # Tomcat启动初始化的线程数，默认值25
    min-spare-threads: 30


# 日志配置
logging:
  level:
    com.zzjs: debug
    org.springframework: warn

# Spring配置
spring:
  # 资源信息
  messages:
    # 国际化资源文件路径
    basename: i18n/messages
  profiles: 
    active: druid
  # 文件上传
  servlet:
     multipart:
       # 单个文件大小
       max-file-size:  10MB
       # 设置总上传的文件大小
       max-request-size:  20MB
  # 服务模块
  devtools:
    restart:
      # 热部署开关
      enabled: true
  # redis 配置
  redis:
    # 地址
    host: localhost
    # 端口，默认为6379
    port: 6379
    # 连接超时时间
    timeout: 10s
    lettuce:
      pool:
        # 连接池中的最小空闲连接
        min-idle: 0
        # 连接池中的最大空闲连接
        max-idle: 8
        # 连接池的最大数据库连接数
        max-active: 8
        # #连接池最大阻塞等待时间（使用负值表示没有限制）
        max-wait: -1ms

# token配置
token:
    # 令牌自定义标识
    header: Authorization
    # 令牌秘钥
    secret: abcdefghijklmnopqrstuvwxyz
    # 令牌有效期（默认30分钟）
    expireTime: 30
  
# MyBatis配置
mybatis:
    # 搜索指定包别名
    typeAliasesPackage: com..project.**.domain
    # 配置mapper的扫描，找到所有的mapper.xml映射文件
    mapperLocations: classpath*:mybatis/**/*Mapper.xml
    # 加载全局的配置文件
    configLocation: classpath:mybatis/mybatis-config.xml

# PageHelper分页插件
pagehelper: 
  helperDialect: mysql
  reasonable: true
  supportMethodsArguments: true
  params: count=countSql 

# 防止XSS攻击
xss: 
  # 过滤开关
  enabled: true
  # 排除链接（多个用逗号分隔）
  excludes: /system/notice/*
  # 匹配链接
  urlPatterns: /system/*,/monitor/*,/tool/*
```

数据源配置  `application-druid.yml`

```yml
# 数据源配置
spring:
    datasource:
        type: com.alibaba.druid.pool.DruidDataSource
        driverClassName: com.mysql.cj.jdbc.Driver
        druid:
            # 主库数据源
            master:
                url: jdbc:mysql://localhost:3306/ams?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
                username: root
                password: password
            # 从库数据源
            slave:
                # 从数据源开关/默认关闭
                enabled: false
                url: 
                username: 
                password: 
            # 初始连接数
            initialSize: 5
            # 最小连接池数量
            minIdle: 10
            # 最大连接池数量
            maxActive: 20
            # 配置获取连接等待超时的时间
            maxWait: 60000
            # 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒
            timeBetweenEvictionRunsMillis: 60000
            # 配置一个连接在池中最小生存的时间，单位是毫秒
            minEvictableIdleTimeMillis: 300000
            # 配置一个连接在池中最大生存的时间，单位是毫秒
            maxEvictableIdleTimeMillis: 900000
            # 配置检测连接是否有效
            validationQuery: SELECT 1 FROM DUAL
            testWhileIdle: true
            testOnBorrow: false
            testOnReturn: false
            webStatFilter: 
                enabled: true
            statViewServlet:
                enabled: true
                # 设置白名单，不填则允许所有访问
                allow:
                url-pattern: /druid/*
                # 控制台管理用户名和密码
                login-username: 
                login-password: 
            filter:
                stat:
                    enabled: true
                    # 慢SQL记录
                    log-slow-sql: true
                    slow-sql-millis: 1000
                    merge-sql: true
                wall:
                    config:
                        multi-statement-allow: true
```

代码生成配置  `generator.yml`

```yml
# 代码生成
gen: 
  # 作者
  author: yangyc
  # 默认生成包路径 system 需改成自己的模块名称 如 system monitor tool
  packageName: com.zzjs.system
  # 自动去除表前缀，默认是true
  autoRemovePre: true
  # 表前缀(类名不会包含表前缀)
  tablePrefix: sys_
```

## 核心技术

> TIP
>
> - 前端技术栈 ES6、vue、vuex、vue-router、vue-cli、axios、element-ui
> - 后端技术栈 SpringBoot、MyBatis、Spring Security、Jwt

### 后端技术

#### SpringBoot框架

1、介绍
 Spring Boot是一款开箱即用框架，提供各种默认配置来简化项目配置。让我们的Spring应用变的更轻量化、更快的入门。 在主程序执行main函数就可以运行。你也可以打包你的应用为jar并通过使用java -jar来运行你的Web应用。它遵循"约定优先于配置"的原则， 使用SpringBoot只需很少的配置，大部分的时候直接使用默认的配置即可。可以与Spring Cloud的微服务无缝结合。
 `Spring Boot2.0 环境要求必须是jdk8或以上版本，Tomcat8或以上版本`

2、优点
 使编码变得简单： 推荐使用注解。
 使配置变得简单： 自动配置、快速构建项目、快速集成新技术能力 没有冗余代码生成和XML配置的要求
 使部署变得简单： 内嵌Tomcat、Jetty、Undertow等web容器，无需以war包形式部署
 使监控变得简单： 自带项目监控

#### Spring Security安全控制

1、介绍
 Spring Security是一个能够为基于Spring的企业应用系统提供声明式的安全访问控制解决方案的安全框架。

2、功能
 Authentication： 认证，就是用户登录
 Authorization：  授权，判断用户拥有什么权限，可以访问什么资源
 安全防护，跨站脚本攻击，session攻击等
 非常容易结合Spring进行使用

3、Spring Security 与 Shiro 的区别

> 相同点

1、认证功能
 2、授权功能
 3、加密功能
 4、会话管理
 5、缓存支持
 6、rememberMe功能
 ....

> 不同点

优点：

1、Spring Security基于Spring开发，项目如果使用Spring作为基础，配合Spring Security做权限更加方便。而Shiro需要和Spring进行整合开发
 2、Spring Security功能比Shiro更加丰富，例如安全防护方面
 3、Spring Security社区资源相对比Shiro更加丰富

缺点：

1）Shiro的配置和使用比较简单，Spring Security上手复杂些
 2）Shiro依赖性低，不需要依赖任何框架和容器，可以独立运行。Spring Security依赖Spring容器

### 前端技术

- npm：node.js的包管理工具，用于统一管理我们前端项目中需要用到的包、插件、工具、命令等，便于开发和维护。
- ES6：Javascript的新版本，ECMAScript6的简称。利用ES6我们可以简化我们的JS代码，同时利用其提供的强大功能来快速实现JS逻辑。
- vue-cli：Vue的脚手架工具，用于自动生成Vue项目的目录及文件。
- vue-router： Vue提供的前端路由工具，利用其我们实现页面的路由控制，局部刷新及按需加载，构建单页应用，实现前后端分离。
- vuex：Vue提供的状态管理工具，用于统一管理我们项目中各种数据的交互和重用，存储我们需要用到数据对象。
- element-ui：基于MVVM框架Vue开源出来的一套前端ui组件。

# 后台手册

## 分页实现

前端基于Element封装的分页组件 `Pagination`

后端分页组件使用Mybatis分页插件 `PageHelper`

> **提示:**
>
> 分页实现流程

### 前端调用实现

1、前端定义分页流程

```javascript
// 一般在查询参数中定义分页变量
queryParams: {
  pageNum: 1,
  pageSize: 10
},

// 页面添加分页组件，传入分页变量
<pagination
  v-show="total>0"
  :total="total"
  :page.sync="queryParams.pageNum"
  :limit.sync="queryParams.pageSize"
  @pagination="getList"
/>

// 调用后台方法，传入参数 获取结果
listUser(this.queryParams).then(response => {
    this.userList = response.rows;
    this.total = response.total;
  }
);
```

### 后台逻辑实现

```java
@PostMapping("/list")
@ResponseBody
public TableDataInfo list(User user)
{
    startPage();  // 此方法配合前端完成自动分页
    List<User> list = userService.selectUserList(user);
    return getDataTable(list);
}
```

常见坑点1：selectPostById莫名其妙的分页。例如下面这段代码

```java
startPage();
List<User> list;
if(user != null){
    list = userService.selectUserList(user);
} else {
    list = new ArrayList<User>();
}
Post post = postService.selectPostById(1L);
return getDataTable(list);
```

原因分析：这种情况下由于user存在null的情况，就会导致`PageHelper`生产了一个分页参数，但是没有被消费，这个参数就会一直保留在这个线程上。 当这个线程再次被使用时，就可能导致不该分页的方法去消费这个分页参数，这就产生了莫名其妙的分页。
 上面这个代码，应该写成下面这个样子才能保证安全。

```java
List<User> list;
if(user != null){
	startPage();
	list = userService.selectUserList(user);
} else {
	list = new ArrayList<User>();
}
Post post = postService.selectPostById(1L);
return getDataTable(list);
```

常见坑点2：添加了startPage方法。也没有正常分页。例如下面这段代码

```java
startPage();
Post post = postService.selectPostById(1L);
List<User> list = userService.selectUserList(user);
return getDataTable(list);
```

原因分析：只对该语句以后的第一个查询（Select）语句得到的数据进行分页。
 上面这个代码，应该写成下面这个样子才能正常分页。

```java
Post post = postService.selectPostById(1L);
startPage();
List<User> list = userService.selectUserList(user);
return getDataTable(list);
```

> **注意:**
>
> 如果改为其他数据库需修改配置`application.yml` `helperDialect=你的数据库`

## 导入导出

在实际开发中经常需要使用导入导出功能来加快数据的操作。在项目中可以使用注解来完成此项功能。 在需要被导入导出的实体类属性添加`@Excel`注解，目前支持参数如下：

| 参数             | 类型   | 默认值      | 描述                                           |
| ---------------- | ------ | ----------- | ---------------------------------------------- |
| name             | String | 空          | 导出到Excel中的名字                            |
| dateFormat       | String | 空          | 日期格式, 如: yyyy-MM-dd                       |
| readConverterExp | String | 空          | 读取内容转表达式 (如: 0=男,1=女,2=未知)        |
| columnType       | Enum   | Type.STRING | 导出类型（0数字 1字符串）                      |
| height           | String | 14          | 导出时在excel中每个列的高度 单位为字符         |
| width            | String | 16          | 导出时在excel中每个列的宽 单位为字符           |
| suffix           | String | 空          | 文字后缀,如% 90 变成90%                        |
| defaultValue     | String | 空          | 当值为空时,字段的默认值                        |
| prompt           | String | 空          | 提示信息                                       |
| combo            | String | Null        | 设置只能选择不能输入的列内容                   |
| targetAttr       | String | 空          | 另一个类中的属性名称,支持多级获取,以小数点隔开 |
| type             | Enum   | Type.ALL    | 字段类型（0：导出导入；1：仅导出；2：仅导入）  |

### 导出实现流程

前端调用方法（参考如下）

```javascript
// 查询参数 queryParams
queryParams: {
  pageNum: 1,
  pageSize: 10,
  userName: undefined
},

// 导出接口exportUser
import { exportUser } from "@/api/system/user";

/** 导出按钮操作 */
handleExport() {
  const queryParams = this.queryParams;
  this.$confirm('是否确认导出所有用户数据项?', "警告", {
	  confirmButtonText: "确定",
	  cancelButtonText: "取消",
	  type: "warning"
	}).then(function() {
	  return exportConfig(queryParams);
	}).then(response => {
	  this.download(response.msg);
	}).catch(function() {});
}
}
```

2、添加导出按钮事件

```html
<el-button
  type="warning"
  icon="el-icon-download"
  size="mini"
  @click="handleExport"
>导出</el-button>
```

3、在实体变量上添加@Excel注解

```java
@Excel(name = "用户序号", prompt = "用户编号")
private Long userId;

@Excel(name = "用户名称")
private String userName;
	
@Excel(name = "用户性别", readConverterExp = "0=男,1=女,2=未知")
private String sex;

@Excel(name = "最后登陆时间", width = 30, dateFormat = "yyyy-MM-dd HH:mm:ss")
private Date loginDate;
```

4、在Controller添加导出方法

```java
@Log(title = "用户管理", businessType = BusinessType.EXPORT)
@PreAuthorize("@ss.hasPermi('system:user:export')")
@GetMapping("/export")
public AjaxResult export(SysUser user)
{
	List<SysUser> list = userService.selectUserList(user);
	ExcelUtil<SysUser> util = new ExcelUtil<SysUser>(SysUser.class);
	return util.exportExcel(list, "用户数据");
}
```

### 导入实现流程

1、前端调用方法（参考如下）

```javascript
// 用户导入参数
upload: {
  // 是否显示弹出层（用户导入）
  open: false,
  // 弹出层标题（用户导入）
  title: "",
  // 是否禁用上传
  isUploading: false,
  // 是否更新已经存在的用户数据
  updateSupport: 0,
  // 设置上传的请求头部
  headers: { Authorization: "Bearer " + getToken() },
  // 上传的地址
  url: process.env.VUE_APP_BASE_API + "/system/user/importData"
},

// 导入模板接口importTemplate
import { importTemplate } from "@/api/system/user";

/** 导入按钮操作 */
handleImport() {
  this.upload.title = "用户导入";
  this.upload.open = true;
},
/** 下载模板操作 */
importTemplate() {
  importTemplate().then(response => {
	this.download(response.msg);
  });
},
// 文件上传中处理
handleFileUploadProgress(event, file, fileList) {
  this.upload.isUploading = true;
},
// 文件上传成功处理
handleFileSuccess(response, file, fileList) {
  this.upload.open = false;
  this.upload.isUploading = false;
  this.$refs.upload.clearFiles();
  this.$alert(response.msg, "导入结果", { dangerouslyUseHTMLString: true });
  this.getList();
},
// 提交上传文件
submitFileForm() {
  this.$refs.upload.submit();
}
```

2、添加导入按钮事件

```html
<el-button
  type="info"
  icon="el-icon-upload2"
  size="mini"
  @click="handleImport"
>导入</el-button>
```

3、添加导入前端代码

```html
<!-- 用户导入对话框 -->
<el-dialog :title="upload.title" :visible.sync="upload.open" width="400px">
  <el-upload
	ref="upload"
	:limit="1"
	accept=".xlsx, .xls"
	:headers="upload.headers"
	:action="upload.url + '?updateSupport=' + upload.updateSupport"
	:disabled="upload.isUploading"
	:on-progress="handleFileUploadProgress"
	:on-success="handleFileSuccess"
	:auto-upload="false"
	drag
  >
	<i class="el-icon-upload"></i>
	<div class="el-upload__text">
	  将文件拖到此处，或
	  <em>点击上传</em>
	</div>
	<div class="el-upload__tip" slot="tip">
	  <el-checkbox v-model="upload.updateSupport" />是否更新已经存在的用户数据
	  <el-link type="info" style="font-size:12px" @click="importTemplate">下载模板</el-link>
	</div>
	<div class="el-upload__tip" style="color:red" slot="tip">提示：仅允许导入“xls”或“xlsx”格式文件！</div>
  </el-upload>
  <div slot="footer" class="dialog-footer">
	<el-button type="primary" @click="submitFileForm">确 定</el-button>
	<el-button @click="upload.open = false">取 消</el-button>
  </div>
</el-dialog>
```

4、在实体变量上添加@Excel注解，默认为导出导入，也可以单独设置仅导入Type.IMPORT

```java
@Excel(name = "用户序号")
private Long id;

@Excel(name = "部门编号", type = Type.IMPORT)
private Long deptId;

@Excel(name = "用户名称")
private String userName;

/** 导出部门多个对象 */
@Excels({
	@Excel(name = "部门名称", targetAttr = "deptName", type = Type.EXPORT),
	@Excel(name = "部门负责人", targetAttr = "leader", type = Type.EXPORT)
})
private SysDept dept;

/** 导出部门单个对象 */
@Excel(name = "部门名称", targetAttr = "deptName", type = Type.EXPORT)
private SysDept dept;
```

5、在Controller添加导入方法，updateSupport属性为是否存在则覆盖（可选）

```java
@Log(title = "用户管理", businessType = BusinessType.IMPORT)
@PostMapping("/importData")
public AjaxResult importData(MultipartFile file, boolean updateSupport) throws Exception
{
	ExcelUtil<SysUser> util = new ExcelUtil<SysUser>(SysUser.class);
	List<SysUser> userList = util.importExcel(file.getInputStream());
	LoginUser loginUser = tokenService.getLoginUser(ServletUtils.getRequest());
	String operName = loginUser.getUsername();
	String message = userService.importUser(userList, updateSupport, operName);
	return AjaxResult.success(message);
}

@GetMapping("/importTemplate")
public AjaxResult importTemplate()
{
	ExcelUtil<SysUser> util = new ExcelUtil<SysUser>(SysUser.class);
	return util.importTemplateExcel("用户数据");
}
```

## 上传下载

首先创建一张上传文件的表，例如：

```sql
drop table if exists sys_file_info;
create table sys_file_info (
  file_id           int(11)          not null auto_increment       comment '文件id',
  file_name         varchar(50)      default ''                    comment '文件名称',
  file_path         varchar(255)     default ''                    comment '文件路径',
  primary key (file_id)
) engine=innodb auto_increment=1 default charset=utf8 comment = '文件信息表';
```

### 上传实现流程

```
el-input`修改成`el-upload
<el-upload
  ref="upload"
  :limit="1"
  accept=".jpg, .png"
  :action="upload.url"
  :headers="upload.headers"
  :file-list="upload.fileList"
  :on-progress="handleFileUploadProgress"
  :on-success="handleFileSuccess"
  :auto-upload="false">
  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
  <el-button style="margin-left: 10px;" size="small" type="success" :loading="upload.isUploading" @click="submitUpload">上传到服务器</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
```

2、引入获取token

```javascript
import { getToken } from "@/utils/auth";
```

3、`data`中添加属性

```javascript
// 上传参数
upload: {
  // 是否禁用上传
  isUploading: false,
  // 设置上传的请求头部
  headers: { Authorization: "Bearer " + getToken() },
  // 上传的地址
  url: process.env.VUE_APP_BASE_API + "/common/upload",
  // 上传的文件列表
  fileList: []
},
```

4、新增和修改操作对应处理`fileList`参数

```javascript
handleAdd() {
  ...
  this.upload.fileList = [];
}

handleUpdate(row) {
  ...
  this.upload.fileList = [{ name: this.form.fileName, url: this.form.filePath }];
}
```

5、添加对应事件

```javascript
// 文件提交处理
submitUpload() {
  this.$refs.upload.submit();
},
// 文件上传中处理
handleFileUploadProgress(event, file, fileList) {
  this.upload.isUploading = true;
},
// 文件上传成功处理
handleFileSuccess(response, file, fileList) {
  this.upload.isUploading = false;
  this.form.filePath = response.url;
  this.msgSuccess(response.msg);
}
```

### 下载实现流程

1. 添加对应按钮和事件

```vue
<el-button
  size="mini"
  type="text"
  icon="el-icon-edit"
  @click="handleDownload(scope.row)"
>下载</el-button>
```

2. 实现文件下载

```javascript
// 文件下载处理
handleDownload(row) {
  var name = row.fileName;
  var url = row.filePath;
  var suffix = url.substring(url.lastIndexOf("."), url.length);
  const a = document.createElement('a')
  a.setAttribute('download', name + suffix)
  a.setAttribute('target', '_blank')
  a.setAttribute('href', url)
  a.click()
}
```

## 权限注解

1. 数据权限示例。

```java
// 属于user角色
@PreAuthorize("@ss.hasRole('user')")

// 不属于user角色
@PreAuthorize("@ss.lacksRole('user')")

// 属于user或者admin之一
@PreAuthorize("@ss.hasAnyRoles('user,admin')")
```

2. 角色权限示例。

```java
// 符合system:user:list权限要求
@PreAuthorize("@ss.hasPermi('system:user:list')")

// 不符合system:user:list权限要求
@PreAuthorize("@ss.lacksPermi('system:user:list')")

// 符合system:user:add或system:user:edit权限要求即可
@PreAuthorize("@ss.hasAnyPermi('system:user:add,system:user:edit')")
```

## 事务管理

新建的Spring  Boot项目中，一般都会引用spring-boot-starter或者spring-boot-starter-web，而这两个起步依赖中都已经包含了对于spring-boot-starter-jdbc或spring-boot-starter-data-jpa的依赖。 当我们使用了这两个依赖的时候，框架会自动默认分别注入DataSourceTransactionManager或JpaTransactionManager。 所以我们不需要任何额外配置就可以用`@Transactional`注解进行事务的使用。

> **提示：**
>
> @Transactional注解只能应用到public可见度的方法上，可以被应用于接口定义和接口方法，方法会覆盖类上面声明的事务。

例如用户新增需要插入用户表、用户与岗位关联表、用户与角色关联表，如果插入成功，那么一起成功，如果中间有一条出现异常，那么回滚之前的所有操作， 这样可以防止出现脏数据，就可以使用事务让它实现回退。
 做法非常简单，我们只需要在方法或类添加`@Transactional`注解即可。

```java
@Transactional
public int insertUser(User user)
{
	// 新增用户信息
	int rows = userMapper.insertUser(user);
	// 新增用户岗位关联
	insertUserPost(user);
	// 新增用户与角色管理
	insertUserRole(user);
	return rows;
}
```

常见坑点1：遇到检查异常时，事务开启，也无法回滚。 例如下面这段代码，用户依旧增加成功，并没有因为后面遇到检查异常而回滚！！

```java
@Transactional
public int insertUser(User user) throws Exception
{
	// 新增用户信息
	int rows = userMapper.insertUser(user);
	// 新增用户岗位关联
	insertUserPost(user);
	// 新增用户与角色管理
	insertUserRole(user);
	// 模拟抛出SQLException异常
	boolean flag = true;
	if (flag)
	{
		throw new SQLException("发生异常了..");
	}
	return rows;
}
```

原因分析：因为Spring的默认的事务规则是遇到运行异常（RuntimeException）和程序错误（Error）才会回滚。如果想针对检查异常进行事务回滚，可以在@Transactional 注解里使用 rollbackFor 属性明确指定异常。
 例如下面这样，就可以正常回滚：

```java
@Transactional(rollbackFor = Exception.class)
public int insertUser(User user) throws Exception
{
	// 新增用户信息
	int rows = userMapper.insertUser(user);
	// 新增用户岗位关联
	insertUserPost(user);
	// 新增用户与角色管理
	insertUserRole(user);
	// 模拟抛出SQLException异常
	boolean flag = true;
	if (flag)
	{
		throw new SQLException("发生异常了..");
	}
	return rows;
}
```

常见坑点2： 在业务层捕捉异常后，发现事务不生效。 这是许多新手都会犯的一个错误，在业务层手工捕捉并处理了异常，你都把异常“吃”掉了，Spring自然不知道这里有错，更不会主动去回滚数据。
 例如：下面这段代码直接导致用户新增的事务回滚没有生效。

```java
@Transactional
public int insertUser(User user) throws Exception
{
	// 新增用户信息
	int rows = userMapper.insertUser(user);
	// 新增用户岗位关联
	insertUserPost(user);
	// 新增用户与角色管理
	insertUserRole(user);
	// 模拟抛出SQLException异常
	boolean flag = true;
	if (flag)
	{
		try
		{
			// 谨慎：尽量不要在业务层捕捉异常并处理
			throw new SQLException("发生异常了..");
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	return rows;
}
```

推荐做法：在业务层统一抛出异常，然后在控制层统一处理。

```java
@Transactional
public int insertUser(User user) throws Exception
{
	// 新增用户信息
	int rows = userMapper.insertUser(user);
	// 新增用户岗位关联
	insertUserPost(user);
	// 新增用户与角色管理
	insertUserRole(user);
	// 模拟抛出SQLException异常
	boolean flag = true;
	if (flag)
	{
		throw new RuntimeException("发生异常了..");
	}
	return rows;
}
```

Transactional注解的常用属性表：

| 属性          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| propagation   | 事务的传播行为，默认值为 REQUIRED。                          |
| isolation     | 事务的隔离度，默认值采用 DEFAULT                             |
| timeout       | 事务的超时时间，默认值为-1，不超时。如果设置了超时时间(单位秒)，那么如果超过该时间限制了但事务还没有完成，则自动回滚事务。 |
| read-only     | 指定事务是否为只读事务，默认值为 false；为了忽略那些不需要事务的方法，比如读取数据，可以设置 read-only 为 true。 |
| rollbackFor   | 用于指定能够触发事务回滚的异常类型，如果有多个异常类型需要指定，各类型之间可以通过逗号分隔。{xxx1.class, xxx2.class,……} |
| noRollbackFor | 抛出 no-rollback-for 指定的异常类型，不回滚事务。{xxx1.class, xxx2.class,……} |
| ....          |                                                              |

> **提示：**
>
> 事务的传播机制是指如果在开始当前事务之前，一个事务上下文已经存在，此时有若干选项可以指定一个事务性方法的执行行为。 即:在执行一个@Transactinal注解标注的方法时，开启了事务；当该方法还在执行中时，另一个人也触发了该方法；那么此时怎么算事务呢，这时就可以通过事务的传播机制来指定处理方式。

TransactionDefinition传播行为的常量：

| 常量                                            | 含义                                                         |
| ----------------------------------------------- | ------------------------------------------------------------ |
| TransactionDefinition.PROPAGATION_REQUIRED      | 如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。这是默认值。 |
| TransactionDefinition.PROPAGATION_REQUIRES_NEW  | 创建一个新的事务，如果当前存在事务，则把当前事务挂起。       |
| TransactionDefinition.PROPAGATION_SUPPORTS      | 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。 |
| TransactionDefinition.PROPAGATION_NOT_SUPPORTED | 以非事务方式运行，如果当前存在事务，则把当前事务挂起。       |
| TransactionDefinition.PROPAGATION_NEVER         | 以非事务方式运行，如果当前存在事务，则抛出异常。             |
| TransactionDefinition.PROPAGATION_MANDATORY     | 如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。 |
| TransactionDefinition.PROPAGATION_NESTED        | 如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于TransactionDefinition.PROPAGATION_REQUIRED。 |

## 异常处理

通常一个web框架中，有大量需要处理的异常。比如业务异常，权限不足等等。前端通过弹出提示信息的方式告诉用户出了什么错误。 通常情况下我们用try.....catch.... 对异常进行捕捉处理，但是在实际项目中对业务模块进行异常捕捉，会造成代码重复和繁杂， 我们希望代码中只有业务相关的操作，所有的异常我们单独设立一个类来处理它。全局异常就是对框架所有异常进行统一管理。 我们在可能发生异常的方法里throw抛给控制器。然后由全局异常处理器对异常进行统一处理。 如此，我们的`Controller`中的方法就可以很简洁了。

所谓全局异常处理器就是使用`@ControllerAdvice`注解。示例如下：

1、统一返回实体定义

```java
package com.zzjs.common.core.domain;

import java.util.HashMap;

/**
 * 操作消息提醒
 * 
 * @author yangyc
 */
public class AjaxResult extends HashMap<String, Object>
{
    private static final long serialVersionUID = 1L;

    /**
     * 返回错误消息
     * 
     * @param code 错误码
     * @param msg 内容
     * @return 错误消息
     */
    public static AjaxResult error(String msg)
    {
        AjaxResult json = new AjaxResult();
        json.put("msg", msg);
        json.put("code", 500);
        return json;
    }

    /**
     * 返回成功消息
     * 
     * @param msg 内容
     * @return 成功消息
     */
    public static AjaxResult success(String msg)
    {
        AjaxResult json = new AjaxResult();
        json.put("msg", msg);
        json.put("code", 0);
        return json;
    }
}
```

2、定义登录异常定义

```java
package com.zzjs.common.exception;

/**
 * 登录异常
 * 
 * @author yangyc
 */
public class LoginException extends RuntimeException
{
    private static final long serialVersionUID = 1L;

    protected final String message;

    public LoginException(String message)
    {
        this.message = message;
    }

    @Override
    public String getMessage()
    {
        return message;
    }
}
```

3、基于@ControllerAdvice注解的Controller层的全局异常统一处理

```java
package com.zzjs.framework.web.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.zzjs.common.core.domain.AjaxResult;
import com.zzjs.common.exception.LoginException;

/**
 * 全局异常处理器
 * 
 * @author yangyc
 */
@RestControllerAdvice
public class GlobalExceptionHandler
{
    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);
	
	/**
     * 登录异常
     */
    @ExceptionHandler(LoginException.class)
    public AjaxResult loginException(LoginException e)
    {
        log.error(e.getMessage(), e);
        return AjaxResult.error(e.getMessage());
    }
}
```

4、测试访问请求

```java
@Controller
public class SysIndexController 
{
    /**
     * 首页方法
     */
    @GetMapping("/index")
    public String index(ModelMap mmap)
    {
        /**
         * 模拟用户未登录，抛出业务逻辑异常
         */
        SysUser user = ShiroUtils.getSysUser();
        if (StringUtils.isNull(user))
		{
            throw new LoginException("用户未登录，无法访问请求。");
        }
		mmap.put("user", user);
        return "index";
    }
}
```

根据上面代码含义，当我们未登录访问/index时就会发生LoginException业务逻辑异常，按照我们之前的全局异常配置以及统一返回实体实例化，访问后会出现AjaxResult格式JSON数据， 下面我们运行项目访问查看效果。
 界面输出内容如下所示：

```json
{
    "msg": "用户未登录，无法访问请求。",
    "code": 500
}
```

`对于一些特殊情况，如接口需要返回json，页面请求返回html可以使用如下方法`：

```java
@ExceptionHandler(LoginException.class)
public Object loginException(HttpServletRequest request, LoginException e)
{
	log.error(e.getMessage(), e);

	if (ServletUtils.isAjaxRequest(request))
	{
		return AjaxResult.error(e.getMessage());
	}
	else
	{
		return new ModelAndView("/error/500");
	}
}
```

AMS系统的全局异常处理器`GlobalExceptionHandler`
 注意：如果全部异常处理返回`json`，那么可以使用`@RestControllerAdvice`代替`@ControllerAdvice`，这样在方法上就可以不需要添加`@ResponseBody`。

## 系统日志

在实际开发中，对于某些关键业务，我们通常需要记录该操作的内容，一个操作调一次记录方法，每次还得去收集参数等等，会造成大量代码重复。 我们希望代码中只有业务相关的操作，在项目中使用注解来完成此项功能。

在需要被记录日志的`controller`方法上添加@Log注解，使用方法如下：

```java
@Log(title = "用户管理", businessType = BusinessType.INSERT) 
```

支持参数如下：

| 参数              | 类型         | 默认值 | 描述                                                         |
| ----------------- | ------------ | ------ | ------------------------------------------------------------ |
| title             | String       | 空     | 操作模块                                                     |
| businessType      | BusinessType | OTHER  | 操作功能（OTHER其他 INSERT新增 UPDATE修改 DELETE删除 GRANT授权 EXPORT导出 IMPORT导入 FORCE强退 GENCODE生成代码 CLEAN清空数据） |
| operatorType      | OperatorType | MANAGE | 操作人类别（OTHER其他 MANAGE后台用户 MOBILE手机端用户）      |
| isSaveRequestData | boolean      | true   | 是否保存请求的参数                                           |

> **提示:**
>
> 关于自定义操作功能使用流程

1、在`BusinessType`中新增业务操作类型如:

```java
/**
 * 测试
 */
TEST,
```

2、在`sys_dict_data`字典数据表中初始化操作业务类型

```sql
insert into sys_dict_data values(25, 10, '测试',     '10', 'sys_oper_type',       '',   'primary', 'N', '0', 'admin', '2018-03-16 11-33-00', 'ams', '2018-03-16 11-33-00', '测试操作');
```

3、在`Controller`中使用注解

```java
@Log(title = "测试标题", businessType = BusinessType.TEST)
```

逻辑实现代码 `com.zzjs.framework.aspectj.LogAspect`
查询操作详细记录可以登录系统（系统管理-操作日志）

## 数据权限

在实际开发中，需要设置用户只能查看哪些部门的数据，这种情况一般称为数据权限。
例如对于销售，财务的数据，它们是非常敏感的，因此要求对数据权限进行控制， 对于基于集团性的应用系统而言，就更多需要控制好各自公司的数据了。如设置只能看本公司、或者本部门的数据，对于特殊的领导，可能需要跨部门的数据， 因此程序不能硬编码那个领导该访问哪些数据，需要进行后台的权限和数据权限的控制。

> 提示：
>
> 默认系统管理员`admin`拥有所有数据权限`（userId=1）`，默认角色拥有所有数据权限（如不需要数据权限不用设置数据权限操作）

> 提示：
>
> 关于数据权限使用流程

支持参数如下：

| 参数      | 类型   | 默认值 | 描述         |
| --------- | ------ | ------ | ------------ |
| deptAlias | String | 空     | 部门表的别名 |
| userAlias | String | 空     | 用户表的别名 |

1、在（系统管理-角色管理）设置需要数据权限的角色 目前支持以下几种权限

- 全部数据权限
- 自定数据权限
- 部门数据权限
- 部门及以下数据权限
- 仅本人数据权限

2、在需要数据权限控制方法上添加`@DataScope`注解，其中`d`和`u`用来表示表的别名

```java
// 部门数据权限注解
@DataScope(deptAlias = "u")
// 部门及用户权限注解
@DataScope(deptAlias = "d", userAlias = "u")
```

3、在`mybatis`查询底部标签添加数据范围过滤

```xml
<!-- 数据范围过滤 -->
${params.dataScope}
```

用户管理（未过滤数据权限的情况）：

```sql
select u.user_id, u.dept_id, u.login_name, u.user_name, u.email
	, u.phonenumber, u.password, u.sex, u.avatar, u.salt
	, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by
	, u.create_time, u.remark, d.dept_name
from sys_user u
	left join sys_dept d on u.dept_id = d.dept_id
where u.del_flag = '0'
```

用户管理（已过滤数据权限的情况）：

```sql
select u.user_id, u.dept_id, u.login_name, u.user_name, u.email
	, u.phonenumber, u.password, u.sex, u.avatar, u.salt
	, u.status, u.del_flag, u.login_ip, u.login_date, u.create_by
	, u.create_time, u.remark, d.dept_name
from sys_user u
	left join sys_dept d on u.dept_id = d.dept_id
where u.del_flag = '0'
	and u.dept_id in (
		select dept_id
		from sys_role_dept
		where role_id = 2
	)
```

结果很明显，我们多了如下语句。通过角色部门表（sys_role_dept）完成了数据权限过滤

```sql
and u.dept_id in (
	select dept_id
	from sys_role_dept
	where role_id = 2
)
```

逻辑实现代码 `com.zzjs.framework.aspectj.DataScopeAspect`

> 提示：
>
> 仅实体继承BaseEntity才会进行处理，SQL语句会存放到`BaseEntity`对象中的`params`属性中供xml参数`params.dataScope`获取。

## 多数据源

在实际开发中，经常可能遇到在一个应用中可能需要访问多个数据库的情况
 在需要切换数据源`Service`或`Mapper`方法上添加`@DataSource`注解
 @DataSource(value = DataSourceType.MASTER)，其中`value`用来表示数据源名称

提示

关于多数据源使用流程（如果有多个，可以参考slave添加）

支持参数如下：

| 参数  | 类型           | 默认值                | 描述 |
| ----- | -------------- | --------------------- | ---- |
| value | DataSourceType | DataSourceType.MASTER | 主库 |

1、在`application-druid.yml`配置从库数据源

```java
# 从库数据源
slave:
	# 从数据源开关/默认关闭
	enabled: true
	url: jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
	username: root
	password: password
```

2、在`DataSourceType`类添加数据源枚举

```java
/**
 * 从库
 */
SLAVE
```

3、在`DruidConfig`配置读取数据源

```java
@Bean
@ConfigurationProperties("spring.datasource.druid.slave")
@ConditionalOnProperty(prefix = "spring.datasource.druid.slave", name = "enabled", havingValue = "true")
public DataSource slaveDataSource(DruidProperties druidProperties)
{
	DruidDataSource dataSource = DruidDataSourceBuilder.create().build();
	return druidProperties.dataSource(dataSource);
}
```

4、在`DruidConfig`类`dataSource`方法添加数据源

```java
setDataSource(targetDataSources, DataSourceType.SLAVE.name(), "slaveDataSource");
```

5、在需要使用多数据源方法或类上添加`@DataSource`注解，其中`value`用来表示数据源

```java
@DataSource(value = DataSourceType.SLAVE)
public List<SysUser> selectUserList(SysUser user)
{
	return userMapper.selectUserList(user);
}
@Service
@DataSource(value = DataSourceType.SLAVE)
public class SysUserServiceImpl
```

对于特殊情况可以通过`DynamicDataSourceContextHolder`手动实现数据源切换

```java
public List<SysUser> selectUserList(SysUser user)
{
	DynamicDataSourceContextHolder.setDataSourceType(DataSourceType.SLAVE.name());
	List<SysUser> userList = userMapper.selectUserList(user);
	DynamicDataSourceContextHolder.clearDataSourceType();
	return userList;
}
```

逻辑实现代码 com.zzjs.framework.aspectj.DataSourceAspect

```
注意：目前配置了一个从库，默认关闭状态。如果不需要多数据源不用做任何配置。 另外可新增多个从库。支持不同数据源（Mysql、Oracle、SQLServer）
```

## 代码生成

大部分项目里其实有很多代码都是重复的，几乎每个基础模块的代码都有增删改查的功能，而这些功能都是大同小异， 如果这些功能都要自己去写，将会大大浪费我们的精力降低效率。所以这种重复性的代码可以使用代码生成。

> **提示:**
>
> 关于代码生成使用流程

1、修改代码生成配置
 单应用编辑`resources目录下的application.yml`
 多模块编辑`ams-generator`中的`resources`目录下的`generator.yml`
 `author`:          # 开发者姓名，生成到类注释上
 `packageName`:     # 默认生成包路径
 `autoRemovePre`:   # 是否自动去除表前缀
 `tablePrefix`:     # 表前缀

2、新建数据库表结构（单表）

```sql
drop table if exists sys_student;
create table sys_student (
  student_id           int(11)         auto_increment    comment '编号',
  student_name         varchar(30)     default ''        comment '学生名称',
  student_age          int(3)          default null      comment '年龄',
  student_hobby        varchar(30)     default ''        comment '爱好（0代码 1音乐 2电影）',
  student_sex          char(1)         default '0'       comment '性别（0男 1女 2未知）',
  student_status       char(1)         default '0'       comment '状态（0正常 1停用）',
  student_birthday     datetime                          comment '生日',
  primary key (student_id)
) engine=innodb auto_increment=1 comment = '学生信息表';
```

2、新建数据库表结构（树表）

```sql
drop table if exists sys_product;
create table sys_product (
  product_id        bigint(20)      not null auto_increment    comment '产品id',
  parent_id         bigint(20)      default 0                  comment '父产品id',
  product_name      varchar(30)     default ''                 comment '产品名称',
  order_num         int(4)          default 0                  comment '显示顺序',
  status            char(1)         default '0'                comment '产品状态（0正常 1停用）',
  primary key (product_id)
) engine=innodb auto_increment=1 comment = '产品表';
```

2、新建数据库表结构（主子表）

```sql
-- ----------------------------
-- 客户表
-- ----------------------------
drop table if exists sys_customer;
create table sys_customer (
  customer_id           bigint(20)      not null auto_increment    comment '客户id',
  customer_name         varchar(30)     default ''                 comment '客户姓名',
  phonenumber           varchar(11)     default ''                 comment '手机号码',
  sex                   varchar(20)     default null               comment '客户性别',
  birthday              datetime                                   comment '客户生日',
  remark                varchar(500)    default null               comment '客户描述',
  primary key (customer_id)
) engine=innodb auto_increment=1 comment = '客户表';


-- ----------------------------
-- 商品表
-- ----------------------------
drop table if exists sys_goods;
create table sys_goods (
  goods_id           bigint(20)      not null auto_increment    comment '商品id',
  customer_id        bigint(20)      not null                   comment '客户id',
  name               varchar(30)     default ''                 comment '商品名称',
  weight             int(5)          default null               comment '商品重量',
  price              decimal(6,2)    default null               comment '商品价格',
  date               datetime                                   comment '商品时间',
  type               char(1)         default null               comment '商品种类',
  primary key (goods_id)
) engine=innodb auto_increment=1 comment = '商品表';
```

3、登录系统（系统工具 -> 代码生成 -> 导入对应表）

4、代码生成列表中找到需要表（可预览、修改、删除生成配置）

5、点击生成代码会得到一个ams.zip  执行`sql`文件，按照包内目录结构复制到自己的项目中即可

多模块所有代码生成的相关业务逻辑代码在`ams-generator`模块，可以自行调整或剔除

## 定时任务

在实际项目开发中Web应用有一类不可缺少的，那就是定时任务。 定时任务的场景可以说非常广泛，比如某些视频网站，购买会员后，每天会给会员送成长值，每月会给会员送一些电影券； 比如在保证最终一致性的场景中，往往利用定时任务调度进行一些比对工作；比如一些定时需要生成的报表、邮件；比如一些需要定时清理数据的任务等。 所以我们提供方便友好的web界面，实现动态管理任务，可以达到动态控制定时任务启动、暂停、重启、删除、添加、修改等操作，极大地方便了开发过程。

> **提示:**
>
> 关于定时任务使用流程

1、后台添加定时任务处理类（支持Bean调用、Class类调用）
 `Bean调用示例`：需要添加对应Bean注解@Component或@Service。调用目标字符串：amsTask.amsParams('ams')
 `Class类调用示例`：添加类和方法指定包即可。调用目标字符串：com.zzjs.quartz.task.AmsTask.amsParams('ams')

```java
/**
 * 定时任务调度测试
 * 
 * @author yangyc
 */
@Component("amsTask")
public class AmsTask
{
    public void amsMultipleParams(String s, Boolean b, Long l, Double d, Integer i)
    {
        System.out.println(StringUtils.format("执行多参方法： 字符串类型{}，布尔类型{}，长整型{}，浮点型{}，整形{}", s, b, l, d, i));
    }

    public void amsParams(String params)
    {
        System.out.println("执行有参方法：" + params);
    }

    public void amsNoParams()
    {
        System.out.println("执行无参方法");
    }
}
```

2、前端新建定时任务信息（系统监控 -> 定时任务）
 任务名称：自定义，如：定时查询任务状态
 任务分组：根据字典sys_job_group配置
 调用目标字符串：设置后台任务方法名称参数
 执行表达式：可查询官方cron表达式介绍
 执行策略：定时任务自定义执行策略
 并发执行：是否需要多个任务间同时执行
 状态：是否启动定时任务
 备注：定时任务描述信息

3、点击执行一次，测试定时任务是否正常及调度日志是否正确记录，如正常执行表示任务配置成功。

执行策略详解：
 `立即执行`（所有misfire的任务会马上执行）打个比方，如果9点misfire了，在10：15系统恢复之后，9点，10点的misfire会马上执行
 `执行一次`（会合并部分的misfire，正常执行下一个周期的任务）假设9，10的任务都misfire了，系统在10：15分起来了。只会执行一次misfire，下次正点执行。
 `放弃执行`(所有的misfire不管，执行下一个周期的任务)

方法参数详解：
 `字符串`（需要单引号''标识 如：amsTask.amsParams(’ams)）
 `布尔类型`（需要true false标识 如：amsTask.amsParams(true)）
 `长整型`（需要L标识 如：amsTask.amsParams(2000L)）
 `浮点型`（需要D标识 如：amsTask.amsParams(316.50D)）
 `整型`（纯数字即可）

cron表达式语法:
 [秒] [分] [小时] [日] [月] [周] [年]

| 说明 | 必填 | 允许填写的值   | 允许的通配符  |
| ---- | ---- | -------------- | ------------- |
| 秒   | 是   | 0-59           | , - * /       |
| 分   | 是   | 0-59           | , - * /       |
| 时   | 是   | 0-23           | , - * /       |
| 日   | 是   | 1-31           | , - * /       |
| 月   | 是   | 1-12 / JAN-DEC | , - * ? / L W |
| 周   | 是   | 1-7 or SUN-SAT | , - * ? / L # |
| 年   | 是   | 1970-2099      | , - * /       |

通配符说明:
 `*` 表示所有值。 例如:在分的字段上设置 *,表示每一分钟都会触发
 `?` 表示不指定值。使用的场景为不需要关心当前设置这个字段的值。例如:要在每月的10号触发一个操作，但不关心是周几，所以需要周位置的那个字段设置为”?” 具体设置为 0 0 0 10 * ?
 `-` 表示区间。例如 在小时上设置 “10-12”,表示 10,11,12点都会触发
 `,` 表示指定多个值，例如在周字段上设置 “MON,WED,FRI” 表示周一，周三和周五触发
 `/` 用于递增触发。如在秒上面设置”5/15” 表示从5秒开始，每增15秒触发(5,20,35,50)。 在月字段上设置’1/3’所示每月1号开始，每隔三天触发一次
 `L` 表示最后的意思。在日字段设置上，表示当月的最后一天(依据当前月份，如果是二月还会依据是否是润年[leap]),  在周字段上表示星期六，相当于”7”或”SAT”。如果在”L”前加上数字，则表示该数据的最后一个。例如在周字段上设置”6L”这样的格式,则表示“本月最后一个星期五”
 `W` 表示离指定日期的最近那个工作日(周一至周五).  例如在日字段上置”15W”，表示离每月15号最近的那个工作日触发。如果15号正好是周六，则找最近的周五(14号)触发,  如果15号是周未，则找最近的下周一(16号)触发.如果15号正好在工作日(周一至周五)，则就在该天触发。如果指定格式为  “1W”,它则表示每月1号往后最近的工作日触发。如果1号正是周六，则将在3号下周一触发。(注，”W”前只能设置具体的数字,不允许区间”-“)
 `#`  序号(表示每月的第几个周几)，例如在周字段上设置”6#3”表示在每月的第三个周六.注意如果指定”#5”,正好第五周没有周六，则不会触发该配置(用在母亲节和父亲节再合适不过了) ；小提示：’L’和  ‘W’可以一组合使用。如果在日字段上设置”LW”,则表示在本月的最后一个工作日触发；周字段的设置，若使用英文字母是不区分大小写的，即MON与mon相同

常用表达式例子:

| 表达式                   | 说明                                                    |
| ------------------------ | ------------------------------------------------------- |
| 0 0 2 1 * ? *            | 表示在每月的1日的凌晨2点调整任务                        |
| 0 15 10 ? * MON-FRI      | 表示周一到周五每天上午10:15执行作业                     |
| 0 15 10 ? 6L 2002-2006   | 表示2002-2006年的每个月的最后一个星期五上午10:15执行作  |
| 0 0 10,14,16 * * ?       | 每天上午10点，下午2点，4点                              |
| 0 0/30 9-17 * * ?        | 朝九晚五工作时间内每半小时                              |
| 0 0 12 ? * WED           | 表示每个星期三中午12点                                  |
| 0 0 12 * * ?             | 每天中午12点触发                                        |
| 0 15 10 ? * *            | 每天上午10:15触发                                       |
| 0 15 10 * * ?            | 每天上午10:15触发                                       |
| 0 15 10 * * ? *          | 每天上午10:15触发                                       |
| 0 15 10 * * ? 2005       | 2005年的每天上午10:15触发                               |
| 0 * 14 * * ?             | 在每天下午2点到下午2:59期间的每1分钟触发                |
| 0 0/5 14 * * ?           | 在每天下午2点到下午2:55期间的每5分钟触发                |
| 0 0/5 14,18 * * ?        | 在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发 |
| 0 0-5 14 * * ?           | 在每天下午2点到下午2:05期间的每1分钟触发                |
| 0 10,44 14 ? 3 WED       | 每年三月的星期三的下午2:10和2:44触发                    |
| 0 15 10 ? * MON-FRI      | 周一至周五的上午10:15触发                               |
| 0 15 10 15 * ?           | 每月15日上午10:15触发                                   |
| 0 15 10 L * ?            | 每月最后一日的上午10:15触发                             |
| 0 15 10 ? * 6L           | 每月的最后一个星期五上午10:15触发                       |
| 0 15 10 ? * 6L 2002-2005 | 2002年至2005年的每月的最后一个星期五上午10:15触发       |
| 0 15 10 ? * 6#3          | 每月的第三个星期五上午10:15触发                         |

多模块所有定时任务的相关业务逻辑代码在`ams-quartz`模块，可以自行调整或剔除

```
注意：不同数据源定时任务都有对应脚本，Oracle、Mysql已经有了，其他的可自行下载执行
```

## 系统接口

在现在的开发过程中还有很大一部分公司都是以口口相传的方式来进行前后端的联调，而接口文档很大一部分都只停留在了说说而已的地步，或者写了代码再写文档。 还有一点就是文档的修改，定义好的接口并不是一成不变的，可能在开发过程中文档修改不止一次的变化，这个时候就会很难受了。 只要不是强制性要求，没人会愿意写这东西，而且在写的过程中，一个字母的错误就会导致联调时候的很大麻烦，但是通过Swagger，我们可以省略了这一步，而且文档出错率近乎于零， 只要你在写代码的时候，稍加几个注解，文档自动生成。

1、在控制层`Controller`中添加注解来描述接口信息如:

```java
@Api("参数配置")
@Controller
@RequestMapping("/system/config")
public class ConfigController
```

2、在方法中配置接口的标题信息

```sql
@ApiOperation("查询参数列表")
@ResponseBody
public TableDataInfo list(Config config)
{
	startPage();
	List<Config> list = configService.selectConfigList(config);
	return getDataTable(list);
}
```

3、在`系统工具-系统接口`测试相关接口

```
注意：SwaggerConfig可以指定根据注解或者包名扫描具体的API
```

API详细说明

| 作用范围           | API                | 使用位置                         |
| ------------------ | ------------------ | -------------------------------- |
| 协议集描述         | @Api               | 用于controller类上               |
| 对象属性           | @ApiModelProperty  | 用在出入参数对象的字段上         |
| 协议描述           | @ApiOperation      | 用在controller的方法上           |
| Response集         | @ApiResponses      | 用在controller的方法上           |
| Response           | @ApiResponse       | 用在 @ApiResponses里边           |
| 非对象参数集       | @ApiImplicitParams | 用在controller的方法上           |
| 非对象参数描述     | @ApiImplicitParam  | 用在@ApiImplicitParams的方法里边 |
| 描述返回对象的意义 | @ApiModel          | 用在返回对象类上                 |

`api`标记，用在类上，说明该类的作用。可以标记一个Controller类做为swagger 文档资源，使用方式：

```java
@Api(value = "/user", description = "用户管理")
```

与Controller注解并列使用。 属性配置：

| 属性名称       | 备注                                             |
| -------------- | ------------------------------------------------ |
| value          | url的路径值                                      |
| tags           | 如果设置这个值、value的值会被覆盖                |
| description    | 对api资源的描述                                  |
| basePath       | 基本路径可以不配置                               |
| position       | 如果配置多个Api 想改变显示的顺序位置             |
| produces       | For example, "application/json, application/xml" |
| consumes       | For example, "application/json, application/xml" |
| protocols      | Possible values: http, https, ws, wss.           |
| authorizations | 高级特性认证时配置                               |
| hidden         | 配置为true 将在文档中隐藏                        |

`ApiOperation`标记，用在方法上，说明方法的作用，每一个url资源的定义,使用方式：

```java
@ApiOperation("获取用户信息")
```

与Controller中的方法并列使用，属性配置：

| 属性名称          | 备注                                                         |
| ----------------- | ------------------------------------------------------------ |
| value             | url的路径值                                                  |
| tags              | 如果设置这个值、value的值会被覆盖                            |
| description       | 对api资源的描述                                              |
| basePath          | 基本路径可以不配置                                           |
| position          | 如果配置多个Api 想改变显示的顺序位置                         |
| produces          | For example, "application/json, application/xml"             |
| consumes          | For example, "application/json, application/xml"             |
| protocols         | Possible values: http, https, ws, wss.                       |
| authorizations    | 高级特性认证时配置                                           |
| hidden            | 配置为true将在文档中隐藏                                     |
| response          | 返回的对象                                                   |
| responseContainer | 这些对象是有效的 "List", "Set" or "Map".，其他无效           |
| httpMethod        | "GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS" and "PATCH" |
| code              | http的状态码 默认 200                                        |
| extensions        | 扩展属性                                                     |

`ApiParam`标记，请求属性，使用方式：

```java
public TableDataInfo list(@ApiParam(value = "查询用户列表", required = true)User user)
```

与Controller中的方法并列使用，属性配置：

| 属性名称        | 备注         |
| --------------- | ------------ |
| name            | 属性名称     |
| value           | 属性值       |
| defaultValue    | 默认属性值   |
| allowableValues | 可以不配置   |
| required        | 是否属性必填 |
| access          | 不过多描述   |
| allowMultiple   | 默认为false  |
| hidden          | 隐藏该属性   |
| example         | 举例子       |

`ApiResponse`标记，响应配置，使用方式：

```java
@ApiResponse(code = 400, message = "查询用户失败")
```

与Controller中的方法并列使用，属性配置：

| 属性名称          | 备注                             |
| ----------------- | -------------------------------- |
| code              | http的状态码                     |
| message           | 描述                             |
| response          | 默认响应类 Void                  |
| reference         | 参考ApiOperation中配置           |
| responseHeaders   | 参考 ResponseHeader 属性配置说明 |
| responseContainer | 参考ApiOperation中配置           |

`ApiResponses`标记，响应集配置，使用方式:

```java
@ApiResponses({ @ApiResponse(code = 400, message = "无效的用户") })
```

与Controller中的方法并列使用，属性配置：

| 属性名称 | 备注                |
| -------- | ------------------- |
| value    | 多个ApiResponse配置 |

`ResponseHeader`标记，响应头设置，使用方法

```java
@ResponseHeader(name="head",description="响应头设计")
```

与Controller中的方法并列使用，属性配置：

| 属性名称          | 备注                   |
| ----------------- | ---------------------- |
| name              | 响应头名称             |
| description       | 描述                   |
| response          | 默认响应类 void        |
| responseContainer | 参考ApiOperation中配置 |

## 国际化支持

在我们开发WEB项目的时候，项目可能涉及到在国外部署或者应用，也有可能会有国外的用户对项目进行访问，那么在这种项目中， 为客户展现的页面或者操作的信息就需要使用不同的语言，这就是我们所说的项目国际化。 目前项目已经支持多语言国际化，接下来我们介绍如何使用。

### 后台国际化流程

修改`I18nConfig`设置默认语言，如默认`中文`：

```java
// 默认语言，英文可以设置Locale.US
slr.setDefaultLocale(Locale.SIMPLIFIED_CHINESE);
```

2、修改配置`application.yml`中的`basename`国际化文件，默认是i18n路径下messages文件
 （比如现在国际化文件是xx_zh_CN.properties、xx_en_US.properties，那么`basename`配置应为是`i18n/xx`

```yml
spring:
  # 资源信息
  messages:
    # 国际化资源文件路径
    basename: static/i18n/messages
```

3、`i18n`目录文件下定义资源文件
 美式英语 messages_en_US.properties

```properties
user.login.username=User name
user.login.password=Password
user.login.code=Security code
user.login.remember=Remember me
user.login.submit=Sign In
```

中文简体 messages_zh_CN.properties

```properties
user.login.username=用户名
user.login.password=密码
user.login.code=验证码
user.login.remember=记住我
user.login.submit=登录
```

4、java代码使用MessageUtils获取国际化

```java
MessageUtils.message("user.login.username")
MessageUtils.message("user.login.password")
MessageUtils.message("user.login.code")
MessageUtils.message("user.login.remember")
MessageUtils.message("user.login.submit")
```

### 前端国际化流程

html使用国际化#{资源文件key}

```html
<form id="signupForm">
	<h4 class="no-margins">登录：</h4>
	<p class="m-t-md">你若不离不弃，我必生死相依</p>
	<input type="text"     name="username" class="form-control uname"  th:placeholder="#{user.login.username}"   />
	<input type="password" name="password" class="form-control pword"  th:placeholder="#{user.login.password}"   />
	<div class="row m-t" th:if="${captchaEnabled==true}">
		<div class="col-xs-6">
			<input type="text" name="validateCode" class="form-control code" th:placeholder="#{user.login.code}" maxlength="5" autocomplete="off">
		</div>
		<div class="col-xs-6">
			<a href="javascript:void(0);" title="点击更换验证码">
				<img th:src="@{captcha/captchaImage(type=${captchaType})}" class="imgcode" width="85%"/>
			</a>
		</div>
	</div>
	<div class="checkbox-custom" th:classappend="${captchaEnabled==false} ? 'm-t'">
		<input type="checkbox" id="rememberme" name="rememberme"> <label for="rememberme" th:text="#{user.login.remember}">记住我</label>
	</div>
	<button class="btn btn-success btn-block" id="btnSubmit" data-loading="正在验证登录，请稍后..." th:text="#{user.login.submit}">登录</button>
</form>
```

2、js使用国际化 首先在文件引入jquery-i18n-properties依赖，然后在初始化后即可通过JS函数获取对应国际化文件的内容。

```javascript
<!--jQuery国际化插件-->
<script src="../static/js/jquery.i18n.properties.min.js" th:src="@{/js/jquery.i18n.properties.min.js}"></script>

<script th:inline="javascript">
	//获取应用路径
	var ROOT = [[${#servletContext.contextPath}]];

	//获取默认语言
	var LANG_COUNTRY = [[${#locale.language+'_'+#locale.country}]];

	//初始化i18n插件
	$.i18n.properties({
		path: ROOT + '/i18n/',//这里表示访问路径
		name: 'messages',//文件名开头
		language: LANG_COUNTRY,//文件名语言 例如en_US
		mode: 'map'//默认值
	});

	//初始化i18n函数
	function i18n(msgKey) {
		try {
			return $.i18n.prop(msgKey);
		} catch (e) {
			return msgKey;
		}
	}

	//获取国际化翻译值
	console.log(i18n('user.login.username'));
	console.log(i18n('user.login.password'));
	console.log(i18n('user.login.code'));
	console.log(i18n('user.login.remember'));
	console.log(i18n('user.login.submit'));
</script>
```

3、界面定义切换语言

```html
<a href="?lang=en_US"> 英语 </a>  
<a href="?lang=zh_CN"> 中文 </a>  
```

## 新建子模块

Maven多模块下新建子模块流程案例。

1、新建业务模块目录，例如：`ams-test`。

2、在`ams-test`业务模块下新建`pom.xml`文件以及`src\main\java`，`src\main\resources`目录。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>ams</artifactId>
        <groupId>com.zzjs</groupId>
        <version>x.x.x</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>

    <artifactId>ams-test</artifactId>

    <description>
        test系统模块
    </description>

    <dependencies>

        <!-- 通用工具-->
        <dependency>
            <groupId>com.zzjs</groupId>
            <artifactId>ams-common</artifactId>
        </dependency>

    </dependencies>

</project>
```

3、根目录`pom.xml`依赖声明节点dependencies中添加依赖

```xml
<!-- 测试模块-->
<dependency>
    <groupId>com.zzjs</groupId>
    <artifactId>ams-test</artifactId>
    <version>${ams.version}</version>
</dependency>
```

4、根目录`pom.xml`模块节点modules添加业务模块

```xml
<module>ams-test</module>
```

5、`ams-admin`目录`pom.xml`添加模块依赖

```xml
<!-- 测试模块-->
<dependency>
    <groupId>com.zzjs</groupId>
    <artifactId>ams-test</artifactId>
</dependency>
```

6、测试模块

在`ams-test`业务模块添加`com.zzjs.test`包，新建`TestService.java`

```java
public class TestService
{
    public String helloTest()
    {
        return "hello";
    }
}
```

在`ams-admin`新建测试类，调用`helloTest`成功返回`hello`代表成功。

# 前端手册

## 开发规范

### 新增view

在 @/views文件下 创建对应的文件夹，一般性一个路由对应一个文件， 该模块下的功能就建议在本文件夹下创建一个新文件夹，各个功能模块维护自己的`utils`或`components`组件。

### 新增api

在 @/api文件夹下创建本模块对应的 api 服务。

### 新增组件

在全局的 @/components 写一些全局的组件，如富文本，各种搜索组件，封装的分页组件等等能被公用的组件。 每个页面或者模块特定的业务组件则会写在当前@/views下面。
 如：`@/views/system/user/components/xxx.vue`。这样拆分大大减轻了维护成本。

### 新增样式

页面的样式和组件是一个道理，全局的 @/style放置一下全局公用的样式，每一个页面的样式就写在当前 `views`下面，请记住加上`scoped` 就只会作用在当前组件内了，避免造成全局的样式污染。

```css
/* 编译前 */
.example {
  color: red;
}

/* 编译后 */
.example[_v-f3f3eg9] {
  color: red;
}
```

## 请求流程

### 交互流程

一个完整的前端 UI 交互到服务端处理流程是这样的：

1. UI 组件交互操作；
2. 调用统一管理的 api service 请求函数；
3. 使用封装的 request.js 发送请求；
4. 获取服务端返回；
5. 更新 data；

为了方便管理维护，统一的请求处理都放在 `@/src/api` 文件夹中，并且一般按照 model 纬度进行拆分文件，如：

```text
api/
  system/
    user.js
    role.js
  monitor/
    operlog.js
	logininfor.js
  ...
```

> **提示:**
>
> 其中，@/src/utils/request.js 是基于 axios 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。 它封装了全局 request拦截器、response拦截器、统一的错误处理、统一做了超时处理、baseURL设置等。

### 请求示例

```js
// api/system/user.js
import request from '@/utils/request'

// 查询用户列表
export function listUser(query) {
  return request({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}

// views/system/user/index.vue
import { listUser } from "@/api/system/user";

export default {
  data() {
    userList: null,
    loading: true
  },
  methods: {
    getList() {
      this.loading = true
      listUser().then(response => {
        this.userList = response.rows
        this.loading = false
      })
    }
  }
}
```

## 引入依赖

除了 element-ui 组件以及脚手架内置的业务组件，有时我们还需要引入其他外部组件，这里以引入 [vue-count-to](https://github.com/PanJiaChen/vue-countTo) 为例进行介绍。

在终端输入下面的命令完成安装：

```bash
$ npm install vue-count-to --save
```

> 加上 `--save` 参数会自动添加依赖到 package.json 中去。

## 注册组件

vue 注册组件的两种方式

### 局部注册

在对应页使用components注册组件。

```html
<template>
  <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  components: { countTo },
  data () {
    return {
      startVal: 0,
      endVal: 2020
    }
  }
}
</script>
```

### 全局注册

在 @/main.js文件下注册组件。

```js
import countTo from 'vue-count-to'
Vue.component('countTo', countTo)
<template>
  <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
</template>
```

## 权限使用

封装了一个指令权限，能简单快速的实现按钮级别的权限判断。v-permission

**使用权限字符串 v-hasPermi**

```html
// 单个
<el-button v-hasPermi="['system:user:add']">存在权限字符串才能看到</el-button>
// 多个
<el-button v-hasPermi="['system:user:add', 'system:user:edit']">包含权限字符串才能看到</el-button>
```

**使用角色字符串 v-hasRole**

```html
// 单个
<el-button v-hasRole="['admin']">管理员才能看到</el-button>
// 多个
<el-button v-hasRole="['role1', 'role2']">包含角色才能看到</el-button>
```

> **提示:**
>
> 在某些情况下，它是不适合使用v-hasPermi，如元素标签组件，只能通过手动设置v-if。 可以使用全局权限判断函数，用法和指令 v-hasPermi 类似。

```html
<template>
  <el-tabs>
    <el-tab-pane v-if="checkPermi(['system:user:add'])" label="用户管理" name="user">用户管理</el-tab-pane>
    <el-tab-pane v-if="checkPermi(['system:user:add', 'system:user:edit'])" label="参数管理" name="menu">参数管理</el-tab-pane>
    <el-tab-pane v-if="checkRole(['admin'])" label="角色管理" name="role">角色管理</el-tab-pane>
    <el-tab-pane v-if="checkRole(['admin','common'])" label="定时任务" name="job">定时任务</el-tab-pane>
   </el-tabs>
</template>

<script>
import { checkPermi, checkRole } from "@/utils/permission"; // 权限判断函数

export default{
   methods: {
    checkPermi,
    checkRole
  }
}
</script>
```

## 多级目录

如果你的路由是多级目录，有三级路由嵌套的情况下，还需要要手动在二级目录的根文件下添加一个 `<router-view>`。

如：@/views/system/log/index.vue，原则上有多少级路由嵌套就需要多少个`<router-view>`。

## 页签缓存

由于目前 `keep-alive` 和 `router-view` 是强耦合的，而且查看文档和源码不难发现 `keep-alive` 的 [include](https://cn.vuejs.org/v2/api/#keep-alive) 默认是优先匹配组件的 **name** ，所以在编写路由 router 和路由对应的 view component 的时候一定要确保 两者的 name 是完全一致的。(切记 name 命名时候尽量保证唯一性 切记不要和某些组件的命名重复了，不然会递归引用最后内存溢出等问题)

**DEMO:**

```js
//router 路由声明
{
  path: 'config',
  component: ()=>import('@/views/system/config/index'),
  name: 'Config',
  meta: { title: '参数设置', icon: 'edit' }
}
//路由对应的view  system/config/index
export default {
  name: 'Config'
}
```

一定要保证两着的名字相同，切记写重或者写错。默认如果不写 name 就不会被缓存，详情见[issue](https://github.com/vuejs/vue/issues/6938#issuecomment-345728620)。

## 使用图标

全局 Svg Icon 图标组件。

默认在 @/icons/index.js中注册到全局中，可以在项目中任意地方使用。所以图标均可在 @/icons/svg。可自行添加或者删除图标，所以图标都会被自动导入，无需手动操作。

### 使用方式

```html
<!-- icon-class 为 icon 的名字; class-name 为 icon 自定义 class-->
<svg-icon icon-class="password"  class-name='custom-class' />
```

### 改变颜色

`svg-icon` 默认会读取其父级的 color `fill: currentColor;`

你可以改变父级的`color`或者直接改变`fill`的颜色即可。

> **提示:**
>
> 如果你是从 [iconfont](https://www.iconfont.cn/)下载的图标，记得使用如 Sketch 等工具规范一下图标的大小问题，不然可能会造成项目中的图标大小尺寸不统一的问题。 本项目中使用的图标都是 128*128 大小规格的。

## 使用字典

字典管理是用来维护数据类型的数据，如下拉框、单选按钮、复选框、树选择的数据，方便系统管理员维护。主要功能包括：字典分类管理、字典数据管理

1、main.js中引入全局变量和方法（已有）

```js
import { getDicts } from "@/api/system/dict/data";
Vue.prototype.getDicts = getDicts
```

2、页面使用数据字典

```js
this.getDicts("字典类型").then(response => {
  this.xxxxx = response.data;
});
```

## 使用参数

参数设置是提供开发人员、实施人员的动态系统配置参数，不需要去频繁修改后台配置文件，也无需重启服务器即可生效。

1、main.js中引入全局变量和方法（已有）

```js
import { getConfigKey } from "@/api/system/config";
Vue.prototype.getConfigKey = getConfigKey
```

2、页面使用参数

```js
this.getConfigKey("参数键名").then(response => {
  this.xxxxx = response.msg;
});
```

## 异常处理

`@/utils/request.js` 是基于 `axios` 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。它封装了全局 `request拦截器`、`response拦截器`、`统一的错误处理`、`统一做了超时处理`、`baseURL设置等`。 如果有自定义错误码可以在`errorCode.js`中设置对应`key` `value`值。

```js
import axios from 'axios'
import { Notification, MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import errorCode from '@/utils/errorCode'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000
})
// request拦截器
service.interceptors.request.use(config => {
  // 是否需要设置 token
  const isToken = (config.headers || {}).isToken === false
  if (getToken() && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 401) {
      MessageBox.confirm('登录状态已过期，您可以继续留在该页面，或者重新登录', '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          location.href = '/index';
        })
      })
    } else if (code === 500) {
      Message({
        message: msg,
        type: 'error'
      })
      return Promise.reject(new Error(msg))
    } else if (code !== 200) {
      Notification.error({
        title: msg
      })
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    }
    else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
```

> **提示:**
>
> 如果有些不需要传递token的请求，可以设置`headers`中的属性`isToken`为`false`
>
> ```js
> export function login(username, password, code, uuid) {
>   return request({
>     url: 'xxxx',
>     headers: {
>       isToken: false,
>       // 可以自定义 Authorization
> 	  // 'Authorization': 'Basic d2ViOg=='
>     },
>     method: 'get'
>   })
> }
> ```

## 应用路径

有些特殊情况需要部署到子路径下，例如：`https://www.xxx.com/admin`，可以按照下面流程修改。

1、修改`vue.config.js`中的`publicPath`属性

```js
publicPath: process.env.NODE_ENV === "production" ? "/admin/" : "/admin/",
```

2、修改`router/index.js`，添加一行`base`属性

```js
export default new Router({
  base: "/admin",
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
```

3、修改`layout/components/Navbar.vue`中的`location.href`

```js
location.href = this.$router.options.base + '/index';
```

4、修改`nginx`配置

```text
location /admin {
	alias   /home/ams/projects/ams-ui;
	try_files $uri $uri/ /index.html =404;
	index  index.html index.htm;
}
```

打开浏览器，输入：`https://www.xxxx.com/admin` 能正常访问和刷新表示成功。

# 组件文档 

系统使用到的相关组件

## 基础框架组件

[element-ui](https://github.com/ElemeFE/element)

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

## 树形选择组件

[vue-treeselect](https://github.com/riophae/vue-treeselect)

## 富文本编辑器

[quill](https://github.com/quilljs/quill)

## 表格分页组件

[pagination](http://localhost/ams-ui/src/components/Pagination/index.vue)

## 富文本组件

[editor](https://localhost/ams-ui/src/components/Editor/index.vue)

## 工具栏右侧组件

[right-toolbar](http://localhost/ams-ui/src/components/RightToolbar/index.vue)

## 表单设计组件

[form-generator](https://github.com/JakHuang/form-generator)