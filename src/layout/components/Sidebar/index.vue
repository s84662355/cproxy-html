<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 15:59:12
 * @LastEditTime: 2023-10-12 17:40:02
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\layout\components\Sidebar\index.vue
-->
<template>
    <div class="sidebar">
        <div class="s-balance">
            <h4>{{ $t('sidebar.balance') }}</h4>
            <div class="s-b-money">
                <h5>${{ money }}</h5>
                <el-icon>
                    <RefreshRight />
                </el-icon>
            </div>
            <el-button type="primary" @click="dialogVisible = true">{{ $t('sidebar.pay') }}</el-button>
        </div>
        <ul class="s-menu">
            <li class="s-m-item" v-for="(item, index) in routers" :key="index"
                :class="{ 'activate': activatePath === item.path }" @click="onGoToPath(item.path)">
                <span class="iconfont" :class="item.meta.icon"></span>
                <span class="s-mi-title">{{ item.meta.title }}</span>
            </li>
            <li class="s-m-help">{{ $t('sidebar.help') }}</li>
            <li class="s-m-item" @click="handlerTg">
                <span class="iconfont icon-a-ICON9"></span>
                <span class="s-mi-title">Telegram</span>
            </li>
        </ul>
        <div class="s-versions">
            <a href="https://ip007.cc/">Https://ip007.cc/</a>
            <p class="s-v-mark">{{ $t('sidebar.versionNumber') }}：V1.0.1</p>
        </div>
        <el-dialog v-model="dialogVisible" width="460px" :show-close="false" @close="dialogVisible = false">
            <template #header="{ close, titleId, titleClass }">
                <div class="dialog-header">
                    <h4 :id="titleId" :class="titleClass">{{ $t('sidebar.hint') }}</h4>
                    <el-icon class="el-icon--left" @click="close" color="#666666" >
                        <Close  />
                    </el-icon>
                </div>
            </template>
            <div class="s-d-content">
                <p class="s-dc-renew">{{ $t('sidebar.relation') }}</p>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">
                        {{ $t('button.confirm') }}
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            money: '12644.23',
            activatePath: '',
            routers: [],
            dialogVisible:false
        }
    },
    created() {
        this.initRoutes()

         
    },
    mounted() {  
         if(this.$.appContext.config.globalProperties.$UserInfo!=null){
           this.money=this.$.appContext.config.globalProperties.$UserInfo.balance
         }
    },
    watch: {
        '$route': {
            deep: true,
            immediate: true,
            handler: function (val) {
                this.activatePath = val.path
            }
        }
    },
    methods: {
        initRoutes() {
            this.routers = this.$router.options.routes.filter(item => {
                console.log(item.hidden,item);
                if (!item.hidden) return item.children[0]
            })
        },
        onGoToPath(path) {
            this.$router.push({ path })
        },
        handlerTg(){
            // 跳转到tg
        }
    }
}
</script>
<style lang="scss" scoped>
.sidebar {
    width: 210px;
    height: 100%;

    .s-balance {
        padding: 20px 24px;

        h4 {
            margin-bottom: 12px;
            font-size: 14px;
            color: $color656E75;
        }

        .s-b-money {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h5 {
                font-size: 20px;
                font-weight: bold;
                color: $color303336;
            }

            ::v-deep .el-icon {
                cursor: pointer;
                font-size: 20px;
                color: $baseColor;
            }
        }

        ::v-deep .el-button {
            margin-top: 14px;
            width: 100%;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
        }
    }

    .s-menu {
        height: calc(100% - 242px);
        overflow-y: scroll;
        @include scrollbar;

        .s-m-item {
            position: relative;
            padding-left: 30px;
            height: 54px;
            line-height: 54px;
            color: $color656E75;
            cursor: pointer;

            .iconfont {
                font-size: 20px;
            }

            .s-mi-title {
                margin-left: 20px;
                font-size: 14px;
            }

            &.activate {
                cursor: pointer;
                color: $baseColor;
                background-color: $colorE6F4FF;

                &::before {
                    position: absolute;
                    content: '';
                    top: 0;
                    right: 0;
                    width: 4px;
                    height: 54px;
                    background-color: $baseColor;
                }
            }
        }

        .s-m-help {
            margin: 20px 0;
            padding-left: 24px;
            font-size: 14px;
            color: $color9BA2A8;
        }
    }

    .s-versions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90px;

        a {
            font-size: 14px;
            color: $baseColor;
        }

        .s-v-mark {
            margin-top: 15px;
            font-size: 14px;
            color: $color9BA2A8;
        }
    }
}
::v-deep .el-dialog{
    @include elDialog;
        .el-dialog__body{
            padding: 0;
            .s-d-content{
               .s-dc-renew{
                margin-top: 20px;
                    font-size: 14px;
                    color: $color333333;
               }
            }
        }
    
    
}
</style>