<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-10-08 17:01:04
 * @LastEditTime: 2023-10-08 17:54:24
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\views\set\components\entirety.vue
-->
<template>
    <div class="entirety">
        <!-- <div class="e-rule">
            <h4>{{ $t('set.title.rule') }}</h4>
            <p class="e-r-hint">{{ $t('set.hint.port') }}</p>
            <div class="e-r-input">
                <span class="e-ri-label">{{ $t('set.label.start') }}</span>
                <el-input v-model="formData.start" maxlength="5" :placeholder="$t('placeholder.input')"></el-input>
            </div>
            <div class="e-r-input">
                <span class="e-ri-label">{{ $t('set.label.end') }}</span>
                <el-input v-model="formData.end" maxlength="5" :placeholder="$t('placeholder.input')"></el-input>
            </div>
        </div>
        <div class="e-repair">
            <h4>{{ $t('set.title.repair') }}</h4>
            <div class="e-r-item">
                <span class="e-ri-label">{{ $t('set.label.restore') }}</span>
                <el-button type="primary" @click="handleOperate('restore')">{{ $t('button.restore') }}</el-button>
            </div>
            <div class="e-r-item">
                <span class="e-ri-label">{{ $t('set.label.refresh') }}</span>
                <el-button type="primary" @click="handleOperate('refresh')">{{ $t('button.refresh') }}</el-button>
            </div>
        </div> -->
        <div class="e-else">
            <h4>{{ $t('set.title.else') }}</h4>
            <div class="e-e-item">
                <span class="e-ei-label">
                    {{ $t('set.label.auto') }}<el-switch v-model="formData.auto" @change="handleChangeAuto" />
                </span>
            </div>
            <div class="e-e-item">
                <span class="e-ei-label">
                    {{ $t('set.label.update') }}  {{ versions }}
                </span>
                <el-button type="primary"  @click="handleOperate('update')">{{ $t('button.update') }}</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { SetSoftwareSetting ,GetSoftwareSetting } from "@/utils/api.js";
export default{
    data () {
        return {
            formData:{
                start:'',
                end:'',
                auto:false
            },
            versions:''
        }
    },
    mounted() {
       this.formData.auto=this.$.appContext.config.globalProperties.SoftwareSetting.StartTurnOn
       this.versions=this.$.appContext.config.globalProperties.SoftwareSetting.Version
    },
    methods:{
        handleOperate(type){
            switch (type) {
                case 'restore':
                    // 还原
                    break;
                case 'refresh':
                    // 刷新
                    break
                case 'update':
                    // 检测更新
                    break
                default:
                    break;
            }
        },
        handleChangeAuto(e){
            // 开机自启，true/false

           const that = this
           this.$.appContext.config.globalProperties.SoftwareSetting.StartTurnOn=  this.formData.auto 
           SetSoftwareSetting(that.SoftwareSetting, function (message) {
                console.log("SetSoftwareSetting", message)
                if (message.error) {
                    that.$message({
                        message: message.data,
                        //message: "设置失败",
                        type: 'warning'
                    });
                    return 
                }
                that.$.appContext.config.globalProperties.SoftwareSetting = message.data
                that.versions=that.$.appContext.config.globalProperties.SoftwareSetting.Version
           })
        }
    }
}
</script>
<style lang="scss" scope>
.entirety{
    h4{
        margin-bottom: 30px;
        font-size:20px;
        font-weight: bold;
        color: $color303336;
    }
    .e-rule{
        margin-top: 30px;
        .e-r-hint{
            margin-left: 74px;
            margin-bottom: 24px;
            font-size: 14px;
            color: $color303336;
        }
        .e-r-input{
            display: flex;
            align-items: center;
            margin-left: 74px;
            margin-bottom: 24px;
            .e-ri-label{
                margin-right: 30px;
                font-size: 14px;
                color: $color656E75;
            }
            .el-input{
                width: 340px;
                height: 36px;
                line-height: 36px;
                input{
                    height: 34px;
                    line-height: 34px;
                }
            }
        }
    }
    .e-repair{
        margin-top: 40px;
        .e-r-item{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 74px;
            margin-bottom: 24px;
            width: 518px;
            .e-ri-label{
                font-size: 14px;
                color: $color303336;
            }
            .el-button{
                padding: 0;
                width: 88px;
                height: 40px;
                font-size: 14px;
            }
        }
    }
    .e-else{
        margin-top: 40px;
        .e-e-item{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 74px;
            margin-bottom: 24px;
            width: 533px;
            .e-ei-label{
                font-size: 14px;
                color: $color303336;
                .el-switch{
                    margin-left: 10px;
                }

            }
            .el-button{
                padding: 0 30px;
                height: 40px;
                font-size: 14px;
            }
        }
    }
}
</style>