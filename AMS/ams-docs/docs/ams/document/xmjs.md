# 项目介绍

## 文件结构

### 后端结构

~~~
com.zzjs     
├── common             // 工具类
│       └── constant                      // 通用常量
│       └── core                          // 核心控制
│       └── enums                         // 通用枚举
│       └── exception                     // 通用异常
│       └── utils                         // 通用类处理
│       └── xss                           // XSS过滤处理
├── framework          // 框架核心
│       └── aspectj                       // 注解实现
│       └── config                        // 系统配置
│       └── datasource                    // 数据权限
│       └── manager                       // 异步处理
│       └── redis                         // 缓存处理
│       └── security                      // 权限控制
│       └── web                           // 前端控制
├── project            // 系统模块
│       └── common                        // 通用处理
│       └── monitor                       // 系统监控
│       └── system                        // 系统管理
│       └── tool                          // 系统工具
├── AmsAdminApplication   // 启动程序
~~~

### 前端结构

~~~
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
├── babel.config.js            // babel.config.js
├── package.json               // package.json
└── vue.config.js              // vue.config.js
~~~

## 配置文件

通用配置 `application.yml` 

```yml
# 项目相关配置
ams:
  # 名称
  name: AMS
  # 版本
  version: 3.2.0
  # 版权年份
  copyrightYear: 2020
  # 实例演示开关
  demoEnabled: true
  # 文件路径 示例（ Windows配置C:/ams/uploadPath，Linux配置 /home/ams/uploadPath）
  profile: C:/ams/uploadPath
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
    typeAliasesPackage: com.zzjs.project.**.domain
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
                url: jdbc:mysql://localhost:3306/ry?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
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
  packageName: com.zzjs.ifsp
  # 自动去除表前缀，默认是true
  autoRemovePre: true
  # 表前缀(类名不会包含表前缀)
  tablePrefix: ifsp_
```

## 核心技术

::: tip
* 前端技术栈 ES6、vue、vuex、vue-router、vue-cli、axios、element-ui
* 后端技术栈 SpringBoot、MyBatis、Spring Security、Jwt
:::

### 后端技术

#### SpringBoot框架

1、介绍  
Spring Boot是一款开箱即用框架，提供各种默认配置来简化项目配置。让我们的Spring应用变的更轻量化、更快的入门。
在主程序执行main函数就可以运行。你也可以打包你的应用为jar并通过使用java -jar来运行你的Web应用。它遵循"约定优先于配置"的原则，
使用SpringBoot只需很少的配置，大部分的时候直接使用默认的配置即可。可以与Spring Cloud的微服务无缝结合。  
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
Authorization： 认证，就是用户登录  
Authentication： 授权，判断用户拥有什么权限，可以访问什么资源  
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

* npm：node.js的包管理工具，用于同一管理我们前端项目中需要用到的包、插件、工具、命令等，便于开发和维护。
* ES6：Javascript的新版本，ECMAScript6的简称。利用ES6我们可以简化我们的JS代码，同时利用其提供的强大功能来快速实现JS逻辑。
* vue-cli：Vue的脚手架工具，用于自动生成Vue项目的目录及文件。
* vue-router： Vue提供的前端路由工具，利用其我们实现页面的路由控制，局部刷新及按需加载，构建单页应用，实现前后端分离。
* vuex：Vue提供的状态管理工具，用于同一管理我们项目中各种数据的交互和重用，存储我们需要用到数据对象。
* element-ui：基于MVVM框架Vue开源出来的一套前端ui组件。