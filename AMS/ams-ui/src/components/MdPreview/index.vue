<template>
  <div>
    <div class="app-wrapper" v-if="isShowTree">
      <div class="drawer-bg" />
      <!-- 基于预览markdown组件生成menu数据 -->
      <!-- <md-sidebar class="sidebar-container" :title="title"/> -->
      <sidebar-menu ref="sidebar" class="sidebar-container" :hideToggle="true" :disableHover="true" :menu="menu" @toggle-collapse="onToggleCollapse" @item-click="onItemClick"/>
      <div :class="{hasTagsView:false}" class="main-container">
        <!-- 预览markdown组件 -->
        <v-md-editor ref="editor" v-model="value" :height="height" :style="styles" mode="preview" ></v-md-editor>
      </div>

      <!-- <div v-for="anchor in titles" :key="anchor.title"
        :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
        @click="handleAnchorClick(anchor)"
      >
        <a style="cursor: pointer">{{ anchor.title }}</a>
      </div> -->
      <!-- <sidebar-menu :menu="menu" /> -->
    </div>
    <!-- 预览markdown组件 -->
    <v-md-editor v-else ref="editor" v-model="value" :height="height" :style="styles" mode="preview" ></v-md-editor>
  </div>
</template>

<script>
import {  MdSidebar } from '@/layout/components'
import ResizeMixin from '@/layout/mixin/ResizeHandler'
import _ from 'lodash'
export default {
  name: "MdPreview",
  props: {
    /* 预览内容 */
    value: {
      type: String,
      default: "",
    },
    /* 文档名称 */
    title: {
      type: String,
      default: "",
    },
    /* 高度 */
    height: {
      type: Number,
      default: null,
    },
    /* 最小高度 */
    minHeight: {
      type: Number,
      default: null,
    },
    /* 是否展示左右及树形结构 */
    isShowTree: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    MdSidebar 
  },
  mixins: [ResizeMixin],
  data() {
    return {
      secondMenu: []
    };
  },
  computed: {
    styles() {
      let style = {};
      if (this.minHeight) {
        style.minHeight = `${this.minHeight}px`;
      }
      if (this.height) {
        style.height = `${this.height}px`;
      }
      return style;
    },
    menu() {
      let menu = [
        // {
        //     header: true,
        //     title: this.title,
        //     hiddenOnCollapse: true
        // },
        ...this.secondMenu
      ];
      return menu;
    },
  },
  mounted() {
    const anchors = this.$refs.editor.$el.querySelectorAll(
      '.v-md-editor-preview h1,h2,h3,h4,h5,h6'
    );
    const titles = Array.from(anchors).filter((title) => !!title.innerText.trim());

    if (!titles.length) {
      this.titles = [];
      return;
    }

    const hTags = Array.from(new Set(titles.map((title) => title.tagName))).sort();

    this.titles = titles.map((el) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }));
    console.log(this.titles);
    let level = 0;
    let _menu = this.secondMenu;
    _(this.titles).forEach(function(item) {
      if(item.lineIndex && item.title ){
        if(item.indent === level){
          _menu.push(item);
        } else if(item.indent === (level+1)){
          if(!(_.last(_menu)).child){
            (_.last(_menu)).child = [];
          }
          (_.last(_menu)).child.push(item);
        }
        // console.log(item);
      }
    });    
    
    var _that = this;
    
    setTimeout(function(){ 
      const arrows = _that.$refs.sidebar.$el.querySelectorAll(
      '.vsm--arrow,.vsm--arrow_open'
    );
      console.log(arrows);
      _(arrows).forEach(function(item) {
        console.log(arrows);
        item.remove();
      });
    }, 500);

  },
  methods: {
    //监听展开收缩事件
    onToggleCollapse(collapsed) {

    },
    //监听菜单项点击事件
    onItemClick(event, item, node) {
      console.log(node);
      const arrows = this.$refs.sidebar.$el.querySelectorAll(
        '.active'
      );
      _(arrows).forEach(function(item) {
        item.classList.remove("active");
      });
      node.$el.classList.add("active");
      this.handleAnchorClick(item);
    },
    //定位锚点
    handleAnchorClick(anchor) {
      const { editor } = this.$refs;
      const { lineIndex } = anchor;

      const heading = editor.$el.querySelector(
        `.v-md-editor-preview [data-v-md-line="${lineIndex}"]`
      );

      if (heading) {
        editor.previewScrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
  },
};
</script>

<style>
.v-sidebar-menu {
  background-color: #fff !important;
}
.v-sidebar-menu .vsm--item {
  color: #2c3e50 !important;
}
.v-sidebar-menu .vsm--item.vsm--item_open {
  color: #2c3e50 !important;
}
.v-sidebar-menu .vsm--link {
  color: #2c3e50 !important;
  border-left: .25rem solid transparent !important;
  border-left-color: transparent !important;
  padding: .35rem 1rem .35rem 1.25rem !important;
  padding-left: 1.25rem !important;
}
.v-sidebar-menu .vsm--link:hover {
  color: #3eaf7c !important;
}
.active > .vsm--link_level-2 {
  color: #3eaf7c !important;
  border-left-color: #3eaf7c !important;
}
.vsm--item_open > .vsm--link_level-1 {
  color: #3eaf7c !important;
}
.v-sidebar-menu .vsm--link_hover, .v-sidebar-menu .vsm--link:hover {
  background-color: #fff !important;
}
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1{
  background-color: #fff !important;
}
.vsm--link_level-1 .vsm--title{
  font-size: 1.2em !important;
  line-height: 1.7 !important;
  font-weight: 700 !important;
}
.vsm--link_level-2 .vsm--title{
  font-weight: 600 !important;
  font-size: 1em !important;
}
.v-sidebar-menu .vsm--link.vsm--link_active {
  font-weight: 600 !important;
  color: #3eaf7c !important;
}
.v-sidebar-menu .vsm--dropdown .vsm--list{
  background-color: #fff !important;
}
.v-sidebar-menu .vsm--arrow {
  background-color: #fff !important;
}
.v-sidebar-menu .vsm--arrow.vsm--arrow_open {
  background-color: #fff !important;
}
</style>