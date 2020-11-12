# 前端手册

## 开发规范

### 新增 view

在 `@/views` 文件下 创建对应的文件夹，一般性一个路由对应一个文件，
该模块下的功能就建议在本文件夹下创建一个新文件夹，各个功能模块维护自己的`utils`或`components`组件。

### 新增 api

在 `@/api` 文件夹下创建本模块对应的 api 服务。

### 新增组件

在全局的 `@/components` 写一些全局的组件，如富文本，各种搜索组件，封装的分页组件等等能被公用的组件。
每个页面或者模块特定的业务组件则会写在当前 `@/views` 下面。  
如：`@/views/system/user/components/xxx.vue`。这样拆分大大减轻了维护成本。

### 新增样式

页面的样式和组件是一个道理，全局的 `@/style` 放置一下全局公用的样式，每一个页面的样式就写在当前 `views`下面，请记住加上`scoped` 就只会作用在当前组件内了，避免造成全局的样式污染。

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

1.  UI 组件交互操作；
2.  调用统一管理的 api service 请求函数；
3.  使用封装的 request.js 发送请求；
4.  获取服务端返回；
5.  更新 data；

为了方便管理维护，统一的请求处理都放在 `@/src/api` 文件夹中，并且一般按照 model 纬度进行拆分文件，如：

```
api/
  system/
    user.js
    role.js
  monitor/
    operlog.js
	logininfor.js
  ...
```

::: tip 提示
其中，`@/src/utils/request.js` 是基于 axios 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。 它封装了全局 request拦截器、response拦截器、统一的错误处理、统一做了超时处理、baseURL设置等。
:::

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

::: tip 提示
如果有不同的`baseURL`，直接通过覆盖的方式，让它具有不同的`baseURL`。
```js
export function listUser(query) {
  return request({
    url: '/system/user/list',
    method: 'get',
    params: query,
    baseURL: process.env.BASE_API
  })
}
```
:::

## 引入依赖

除了 element-ui 组件以及脚手架内置的业务组件，有时我们还需要引入其他外部组件，这里以引入 `vue-count-to` 为例进行介绍。

在终端输入下面的命令完成安装：

```bash
$ npm install vue-count-to --save
```

> 加上 `--save` 参数会自动添加依赖到 package.json 中去。

<br/>

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

在 `@/main.js` 文件下注册组件。

```js
import countTo from 'vue-count-to'
Vue.component('countTo', countTo)
```

```html
<template>
  <count-to :startVal='startVal' :endVal='endVal' :duration='3000'></count-to>
</template>
```

<br/>

## 权限使用

封装了一个指令权限，能简单快速的实现按钮级别的权限判断。`v-permission`

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

::: tip 提示
在某些情况下，它是不适合使用v-hasPermi，如元素标签组件，只能通过手动设置v-if。
可以使用全局权限判断函数，用法和指令 v-hasPermi 类似。
:::

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

如：`@/views/system/log/index.vue`，原则上有多少级路由嵌套就需要多少个`<router-view>`。

<br/>

## 页签缓存

由于目前 `keep-alive` 和 `router-view` 是强耦合的，而且查看文档和源码不难发现 `keep-alive` 的 `include` 默认是优先匹配组件的 **name** ，所以在编写路由 router 和路由对应的 view component 的时候一定要确保 两者的 name 是完全一致的。(切记 name 命名时候尽量保证唯一性 切记不要和某些组件的命名重复了，不然会递归引用最后内存溢出等问题)

**DEMO:**

```js
//router 路由声明
{
  path: 'config',
  component: ()=>import('@/views/system/config/index'),
  name: 'Config',
  meta: { title: '参数设置', icon: 'edit' }
}
```

```js
//路由对应的view  system/config/index
export default {
  name: 'Config'
}
```

一定要保证两着的名字相同，切记写重或者写错。默认如果不写 name 就不会被缓存。


## 使用图标

全局 Svg Icon 图标组件。

默认在 `@/icons/index.js` 中注册到全局中，可以在项目中任意地方使用。所以图标均可在 `@/icons/svg`。可自行添加或者删除图标，所以图标都会被自动导入，无需手动操作。

### 使用方式

```html
<!-- icon-class 为 icon 的名字; class-name 为 icon 自定义 class-->
<svg-icon icon-class="password"  class-name='custom-class' />
```

### 改变颜色

`svg-icon` 默认会读取其父级的 color `fill: currentColor;`

你可以改变父级的`color`或者直接改变`fill`的颜色即可。

::: tip 提示
如果你是从 [iconfont](https://www.iconfont.cn/)下载的图标，记得使用如 Sketch 等工具规范一下图标的大小问题，不然可能会造成项目中的图标大小尺寸不统一的问题。
本项目中使用的图标都是 128\*128 大小规格的。
:::

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
