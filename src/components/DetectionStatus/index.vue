<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-10-07 10:07:37
 * @LastEditTime: 2023-10-07 11:19:17
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\components\DetectionStatus\index.vue
-->
<template>
    <div class="detection-status">
        <div class="ds-item">
            <div class="ds-i-title">
                <h5>{{ $t('label.localIp') }}</h5>
                <el-button type="primary" @click="checkIp">{{ $t('button.examine') }}</el-button>
            </div>
            <p class="ds-i-site">{{ ipInfo.localIp }}（{{ipInfo.localRegion}}）</p>
        </div>
        <div class="ds-item">
            <div class="ds-i-title">
                <h5>{{ $t('label.agencyIp') }}</h5>
            </div>
            <p class="ds-i-site">{{ ipInfo.agencyIp }}（{{ipInfo.agencyRegion}}）</p>
        </div>
    </div>
</template>
<script>
 import { GetInterNetInfo ,GetIpInfo } from '@/utils/api'
 export default{
    data () {
        return {
            ipInfo:{
                localIp:'' ,
                localRegion:'',
                agencyIp:'',
                agencyRegion:''
            },
            lastCheckIpTime:0
        }
    },
    created(){
        /// this.checkIp()
    },
    mounted() {  
        this.checkIp()
    },
    methods: {
         checkIp(){
                if(new Date().getTime()-this.lastCheckIpTime<5000){
                      return 
                }
                this.lastCheckIpTime=new Date().getTime()
                let that=this
                GetIpInfo(function (message) {
                   /// that.checklocalIpLoading=false
                    console.log(message)
                    if (message.error) {
                        if (e) {
                            that.$message({
                                message: message.data,
                                type: 'warning'
                            });
                        }
                        return
                    }

                    if(message.data.local!=null){
                        that.ipInfo.localIp=message.data.local.ip
                        that.ipInfo.localRegion=message.data.local.country
                    }else{
                        that.ipInfo.localIp=''
                        that.ipInfo.localRegion=''
                    }

                    if(message.data.proxy!=null){
                        that.ipInfo.agencyIp=message.data.proxy.ip
                        that.ipInfo.agencyRegion=message.data.proxy.country
                    }else{
                        that.ipInfo.agencyIp=''
                        that.ipInfo.agencyRegion=''
                    }       

                    ///that.ipInfo.localIp=ip
                   //that.localIpInfo = message.data
                  ///that.localIpInfo["date"] = message.date
                })
         }
    }
 }
</script>
<style lang="scss" scoped>
.detection-status{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .ds-item{
        padding: 22px 30px;
        width: calc((100% - 32px) / 2);
        border: 1px solid $colorEEEEEE;
        border-radius: 10px;
        box-shadow: 0px 0px 5px  rgba($color: $color132940, $alpha: 0.1);
        .ds-i-title{
            display: flex;
            justify-content: space-between;
            h5{
                font-size: 24px;
                color: $color303336;
            }
            .el-button{
                padding: 0 24px;
                height: 32px;
                font-size: 14px;
            }
        }
        .ds-i-site{
            margin-top: 24px;
            font-size: 28px;
            font-weight: bold;
            color: $baseColor;
        }
    }
}
</style>