<template>
  <md-preview :value="text"  title="我的api文档" :isShowTree="true"/>
</template>

<script>
import MdPreview from "@/components/MdPreview";
import ResizeMixin from '@/layout/mixin/ResizeHandler'

const text = `::: tip
  你可以点击 toolbar 中的 tip 来快速插入
:::

::: warning
  这是一段警告
:::

::: danger
这是一个危险警告
:::

::: tip 自定义标题
  你也可以自定义块中的标题
:::

::: danger STOP
  危险区域，禁止通行
:::
`;

const text_long = `
<h1 align="center">接口服务平台开发人员手册</h1>

<p align="center">
  <a href="https://npmcharts.com/compare/@kangc/v-md-editor?minimal=true"><img src="https://img.shields.io/npm/dm/@kangc/v-md-editor.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/v/@kangc/v-md-editor.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@kangc/v-md-editor"><img src="https://img.shields.io/npm/l/@kangc/v-md-editor.svg?sanitize=true" alt="License"></a>
</p>

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

\`\`\`bash
JDK >= 1.8 (推荐1.8版本)
Mysql >= 5.5.0 (推荐5.7版本)
Redis >= 3.0
Maven >= 3.0
Node >= 10
\`\`\`

::: tip
  前端安装完node后，最好设置下淘宝的镜像源，不建议使用cnpm（可能会出现奇怪的问题）
:::

## 运行系统 

 ### 后端运行

1、导入ams到Eclipse，菜单 File -> Import，然后选择 Maven -> Existing Maven  Projects，点击 Next> 按钮，选择工作目录，然后点击 Finish  按钮，即可成功导入Eclipse会自动加载Maven依赖包，初次加载会比较慢（根据自身网络情况而定）
 2、创建数据库ams-vue并导入数据脚本ams.sql，quartz.sql
 3、打开运行\`com.zzjs.AmsApplication.java\`

### 前端运行

\`\`\`bash
# 进入项目目录
cd ams-ui

# 安装依赖
npm install

# 强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev
\`\`\`

4、打开浏览器，输入：http://localhost:80 （默认账户 \`admin/admin123\`）
 若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功

## 必要配置

1. 修改数据库连接
   \`编辑resources目录下的application-druid.yml\`
   \`url: 服务器地址\`
   \`username: 账号\`
   \`password: 密码\`
2. 开发环境配置
   \`编辑resources目录下的application.yml\`
   \`port: 端口\`
   \`context-path: 部署路径\`

## 部署系统

::: tip
  因为本项目是前后端分离的，所以需要前后端都启动好，才能进行访问
:::

### 后端部署

\`bin/package.bat\` 在项目的目录下执行
 然后会在项目下生成 \`target\`文件夹包含 \`war\` 或\`jar\` （多模块生成在ams-admin）

1、jar部署方式
 使用命令行执行：\`java –jar ams.jar\` 或者执行脚本：\`bin/run.bat\`

2、war部署方式
 pom.xml packaging修改为\`war\` 放入tomcat服务器webapps

::: tip
  SpringBoot去除内嵌tomcat
:::


### 前端部署

当项目开发完毕，只需要运行一行命令就可以打包你的应用

\`\`\`bash
# 打包正式环境
npm run build:prod

# 打包预发布环境
npm run build:stage
\`\`\`

构建打包成功之后，会在根目录生成 \`dist\` 文件夹，里面就是构建打包好的文件，通常是 \`***.js\` 、\`***.css\`、\`index.html\` 等静态文件。

通常情况下 \`dist\` 文件夹的静态文件发布到你的 nginx 或者静态服务器即可，其中的 \`index.html\` 是后台服务的入口页面。

::: tip outputDir 提示
  如果需要自定义构建，比如指定 \`dist\` 目录等，则需要通过 config 的 \`outputDir\` 进行配置。
:::

::: tip publicPath 提示
  部署时改变页面js 和 css 静态引入路径 ,只需修改 \`vue.config.js\` 文件资源路径即可。
:::

\`\`\`js
publicPath: './' //请根据自己路径来配置更改
\`\`\`

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

`;


export default {
  name: "MdPreviewTest",
  components: { 
    MdPreview
  },
  mixins: [ResizeMixin],
  data() {
    return {
      text: text_long
    };
  }
};
</script>

<style lang="scss" scoped>
  @import "~@/assets/styles/mixin.scss";
  @import "~@/assets/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>