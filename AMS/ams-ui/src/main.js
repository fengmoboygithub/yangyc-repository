import Vue from 'vue'
//////////////////////////////////引入v-md-editor markdown编辑器  start//////////////////////////////////////////
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';
import zhCN from '@kangc/v-md-editor/lib/lang/zh-CN';

// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// 主题包默认只支持了 markup, html, xml, svg, mathml, css, clike, jacascript(js)。以免引入太多冗余代码导致包的体积过大。如果需要支持更多的语言代码高亮，请按需引入对应的语言包。
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';

////////////引入额外的语言包高亮 start///////////
// 语言包需要在引入主题之后引入，否则不会生效。
// 直接按需引入 prism 的语言包即可，此处以 json 为例  所以语言包可在https://github.com/PrismJS/prism/tree/master/components 查找
// import 'prismjs/prism';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

////////////引入额外的语言包高亮 end///////////

// the codemirror editor 实现左侧编辑区域 代码高亮显示
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
//代码行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(vuepressTheme);
VMdEditor.lang.use('zh-CN', zhCN);

VMdEditor.use(createLineNumbertPlugin());
Vue.use(VMdEditor);
//////////////////////////////////引入v-md-editor markdown编辑器  end//////////////////////////////////////////

//////////////////////////////////引入v-md-editor-preview markdown预览   start//////////////////////////////////////////
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
VMdPreview.use(vuepressTheme);
Vue.use(VMdPreview);
//////////////////////////////////引入v-md-editor-preview markdown预览   end//////////////////////////////////////////

//////////////////////////////////引入vue-sidebar-menu 侧边栏   start//////////////////////////////////////////
import VueSidebarMenu from 'vue-sidebar-menu'

import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// import "./assets/styles/vue-sidebar-custom-var.scss";
import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss";

Vue.use(VueSidebarMenu)
//////////////////////////////////引入vue-sidebar-menu 侧边栏   end//////////////////////////////////////////

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ams.scss' // ams css
import App from './App'
import store from './store'
import router from './router'
import permission from './directive/permission'

import './assets/icons' // icon
import './permission' // permission control
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, download, handleTree } from "@/utils/ams";
import Pagination from "@/components/Pagination";
//自定义表格工具扩展
import RightToolbar from "@/components/RightToolbar"

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}

// 全局组件挂载
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)

Vue.use(permission)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
