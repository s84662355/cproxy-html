<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 15:52:12
 * @LastEditTime: 2023-10-12 17:28:35
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\layout\components\Navbar.vue
-->
<template>
  <div class="nav-bar">
    <div class="nb-left">
      <h1 class="iconfont icon-bingji"></h1>
      <p class="nb-l-status">
        {{ $t("nav.status") }}：
        <span v-if="showUserInfo" class="nb-ls-val"
          >{{ $t("nav.operation") }}...</span
        >
        <span v-if="!showUserInfo" class="nb-ls-nologin">{{
          $t("nav.notLoggedIn")
        }}</span>
      </p>
    </div>
    <div class="nb-right" >
      <!-- <el-button type="primary">CDK</el-button>
            <img class="nb-r-translate" :src="useGetImage('images/nav/translate.png')" />
            <img class="nb-r-inform" :src="useGetImage('images/nav/inform.png')" /> -->
      <el-dropdown v-if="showUserInfo">
        <span class="el-dropdown-link">
          {{ userInfo.name }}
          <el-icon class="el-icon--right">
            <CaretBottom color="#656E75" />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="nb-r-d">
            <el-dropdown-item>
              <img :src="useGetImage('images/nav/user.png')" />
              <span class="nb-rd-label">{{ userInfo.name }}</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <img :src="useGetImage('images/nav/email.png')" />
              <span class="nb-rd-label">{{ userInfo.email }}</span>
            </el-dropdown-item>
            <el-divider />
            <el-dropdown-item>
              <img :src="useGetImage('images/nav/quit.png')" />
              <span class="nb-rd-quit" @click="handleQuit">{{
                $t("nav.quit")
              }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <ul class="nb-r-operate">
        <li  @click="clickMenu(1)">
          <img :src="useGetImage('images/nav/minimize.png')" />
        </li>
        <li @click="clickMenu(2)">
          <img :src="useGetImage('images/nav/expansion.png')" />
        </li>
        <li @click="clickMenu(3)">
          <img :src="useGetImage('images/nav/close.png')" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useGetImage } from "@/utils/utils.js";
import { WinClose,WinMinimize,WinMaximize,Close ,GetSoftwareSetting } from "@/utils/api.js";
export default {
  data() {
    return {
      userInfo: {
        name: "",
        email: "",
      },
      showUserInfo: false,
    };
  },
  created() {
    
  },
  mounted() {
    this.checkLoginStatus();
    this.init();
    const _this = this
    window.setInterval(() => {
        _this.checkLoginStatus(); 
        GetSoftwareSetting(function (message) {
             _this.$.appContext.config.globalProperties.SoftwareSetting = message.data
        })   
    }, 2000 );
  },
  methods: {
    useGetImage,
    clickMenu(a){
        switch(a) {
            case 1:  
                WinMinimize()
                break;
            case 2:  
                WinMaximize()
                break;

            case 3:
                WinClose()
                break;

            default:      
        }
    },
    checkLoginStatus() {
        const _this = this
        if (_this.$.appContext.config.globalProperties.$isLogin) {
            _this.showUserInfo = true
            _this.userInfo.name  = _this.$.appContext.config.globalProperties.$UserInfo.userName
            _this.userInfo.email = _this.$.appContext.config.globalProperties.$UserInfo.email
        }else{
            _this.userInfo.name=""
            _this.userInfo.email=""
        }
    },
    init() {
 
    },
    // 登出
    handleQuit() {
        this.$.appContext.config.globalProperties.$isLogin=false
        this.$.appContext.config.globalProperties.$UserInfo=null
        this.showUserInfo = false
        this.$router.push("/login");
        this.$emit('close')
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-bar {
  -webkit-app-region: drag;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 60px;
  background-color: $colorEDF2F5;
  .nb-left {
    
    display: flex;
    align-items: center;
    h1 {
      font-size: 22px;
      color: $baseColor;
    }
    .nb-l-status {
      -webkit-app-region:  drag;
      margin-left: 30px;
      font-size: 16px;
      color: $color303336;
      .nb-ls-val {
        color: $color21B064;
      }
      .nb-ls-nologin {
        color: $colorFF3333;
      }
    }
  }
  .nb-right {
    -webkit-app-region: no-drag;
    display: flex;
    align-items: center;
    .el-button {
      width: 69px;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
    }
    .nb-r-translate,
    .nb-r-inform {
      margin-left: 30px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .nb-r-inform {
      margin-left: 40px;
    }
    .el-dropdown {
      margin-left: 40px;

      .el-dropdown-link {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: $color303336;
        .el-icon {
          font-size: 20px;
        }
        &:focus-visible {
          outline: none;
        }
      }
      &:focus-visible {
        outline: none;
      }
    }
    .nb-r-operate {
      -webkit-app-region: no-drag; 
      display: flex;
      align-items: center;
      margin-left: 40px;
      li {
        display: flex;
        align-items: center;
        margin-left: 38px;
        cursor: pointer;

        img {
          width: 12px;
          height: 12px;
        }
        &:first-child {
          margin-left: 0;
          img {
            height: 2px;
          }
        }
      }
    }
  }
}
.nb-r-d {
  padding: 20px 17px 14px;
  ::v-deep .el-dropdown-menu__item {
    margin-bottom: 20px;
    padding: 0;
    img {
      margin-right: 10px;
      width: 16px;
      height: 16px;
    }
    .nb-rd-label {
      font-size: 14px;
      color: $color656E75;
    }
    &:last-child {
      margin-top: 10px;
      margin-bottom: 0;
      justify-content: center;
      .nb-rd-quit {
        margin-left: 10px;
        font-size: 14px;
        color: $color9BA2A8;
      }
    }
    &:hover {
      background-color: transparent;
    }
  }
  ::v-deep .el-divider {
    margin: 0;
    border-color: $colorEEEEEE;
  }
}
</style>
