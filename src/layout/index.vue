<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 15:45:01
 * @LastEditTime: 2023-10-12 17:29:27
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\layout\index.vue
-->
<template>
  <div class="app-wrapper">
    <Navbar @close='init'></Navbar>
    <div class="main-container">
      <div class="fixed-nav" v-if="showUserInfo">
        <!-- 左侧 -->
        <Sidebar></Sidebar>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>
<script>
import  AppMain  from "./components/AppMain.vue";
import  Navbar  from "./components/Navbar.vue";
import  Sidebar  from "./components/Sidebar/index.vue";

export default {
  components: {
    AppMain,
    Navbar,
    Sidebar,
  },
    data() {
    return {
      showUserInfo: false,
    };
  },
  mounted() {
    this.checkLoginStatus();
    this.init();
    const _this = this
    window.setInterval(() => {
      _this.checkLoginStatus(); 
    }, 2000 );
  },
 
  methods: {
    checkLoginStatus() {
        const _this = this
           if ( _this.$.appContext.config.globalProperties.$isLogin) {
              _this.showUserInfo = true
           }
    },
    init() {
      const _this = this
      if ( _this.$.appContext.config.globalProperties.$isLogin) {
        _this.showUserInfo = true
      } else {
        _this.showUserInfo = false
      }
    },

  },
};
</script>
<style lang="scss" scoped>
.main-container {
  display: flex;
  height: calc(100vh - 60px);
  overflow: hidden;
  .fixed-nav {
    width: 210px;
    height: 100%;
  }
  .app-main {
    flex: 1;
  }
}
</style>
