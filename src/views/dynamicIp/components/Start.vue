<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-10-07 11:24:40
 * @LastEditTime: 2023-10-12 09:17:15
 * @LastEditors: Zheng Canbin
 * @FilePath: \007ip-vps-electron\src\views\dynamicIp\components\Start.vue
-->
<template>
    <div class="start">
        <div class="s-box">
            <div class="s-b-form">
                <div class="s-bf-item">
                    <span class="s-bfi-label">{{$t('daynamic.label.agency') }}</span>
                     <div class="s-bfi-content">
                        <ul class="s-bfic-tabs">
                            <li class="s-bfict-item" v-for="item in tabsList" :key="item.val" @click="handleTabs(item.val)"
                                :class="{ activate: item.val === formData.type }">{{ item.label }}</li>
                        </ul>
                    </div>
                   
                </div>
                <div class="s-bf-item">
                    <span class="s-bfi-label">{{$t('daynamic.label.region') }}</span>
                    <div class="s-bfi-content">
                        <el-cascader v-model="formData.region" :options="regionList"
                            :placeholder="$t('placeholder.select')" @change="regionSelect"/>
                    </div>
                </div>
                <div class="s-bf-item">
                    <span class="s-bfi-label">{{$t('daynamic.label.agreement') }}</span>
                    <div class="s-bfi-content">
                        <el-radio-group v-model="formData.tcp" fill="#209CDF"  @change="formDatatcpSelect">
                            <el-radio label="1">SOCKS5</el-radio>
                            <el-radio label="0" class="ml-8">HTTP/HTTPS</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="s-bf-item">
                    <span class="s-bfi-label">{{$t('daynamic.label.duration') }}</span>
                    <div class="s-bfi-content">
                        <el-radio-group v-model="formData.duration"  @change="formdurationSelect" >
                            <el-radio :label='0'>{{$t('daynamic.radio.rotate') }}</el-radio>
                            <el-radio :label='1' class="ml-9">{{$t('daynamic.radio.glue') }} <el-select v-model="formData.durationNum" :placeholder="$t('placeholder.select')"
                                    class="s-bfic-select"   @change="formdurationNumSelect" >
                                    <el-option v-for="item in durationList" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select><span class="s-bfic-unit">{{ $t('date.minute') }}</span></el-radio>
                        </el-radio-group>
                    </div>
                </div>
            </div>
            <ul class="s-b-num">
                <li class="s-bn-item">
                    <span class="s-bni-label">{{$t('daynamic.label.use') }}</span>
                    <span class="s-bni-val">{{ numInfo.use }}GB</span>
                </li>
                <li class="s-bn-item">
                    <span class="s-bni-label">{{$t('daynamic.label.predict') }}</span>
                    <span class="s-bni-val">{{ numInfo.predict }}GB</span>
                </li>
                <li class="s-bn-item">
                    <span class="s-bni-label">{{$t('daynamic.label.average') }}</span>
                    <span class="s-bni-val">{{ numInfo.average }}MB</span>
                </li>
            </ul>
            <div class="s-b-operate">
                <div class="s-bo-residue">
                    <p class="s-bos-hint">{{$t('daynamic.hint.residue') }}</p>
                    <h4>{{ numInfo.residue }}GB</h4>
                    <a href="#">{{$t('daynamic.hint.buy') }}</a>
                </div>
                <div class="s-bo-set">
                    <p class="s-bos-stutas">{{$t('daynamic.label.buy') }}<span class="s-boss-not">{{ $t('status.not') }}</span></p>
                    <el-button type="primary" plain @click="open_auto_windows">{{ $t('button.buy') }}</el-button>
                </div>
            </div>
            <div class="s-b-btn">
                 <el-button type="primary" @click="StartUseProxy" v-show="!isStartProxy"  >{{ $t('button.open') }}</el-button>
                 <el-button type="danger" @click="StopUseProxy"  v-show="isStartProxy"  > {{ $t('button.stop') }}</el-button>
            </div>
        </div>
        <el-dialog v-model="dialogVisible" width="560px" :show-close="false" @close="dialogVisible = false">
            <template #header="{ close, titleId, titleClass }">
                <div class="dialog-header">
                    <h4 :id="titleId" :class="titleClass">{{$t('daynamic.hint.buySet') }}</h4>
                    <el-icon class="el-icon--left" @click="close" color="#666666" >
                        <Close  />
                    </el-icon>
                </div>
            </template>
            <div class="s-d-content">
                <div class="s-dc-select">
                    <span class="s-dcs-label">{{$t('daynamic.label.buyType') }}</span>
                    <el-radio-group v-model="fromSetData.type" fill="#209CDF"  >
                        <el-radio :label="item.value" v-for="item in setTypeList" :key="item.value">{{ item.label }}</el-radio>
                    </el-radio-group>
                </div>
                <div class="s-dc-low">
                    {{$t('daynamic.hint.low') }}
                    <el-input v-model="fromSetData.low" type="number">
                        <template #append>MB</template>
                    </el-input>{{$t('daynamic.hint.auto') }}
                    <el-input v-model="fromSetData.num" type="number">
                        <template #append>GB</template>
                    </el-input>（{{$t('daynamic.hint.price') }}10.0$/GB）
                </div>
                <p class="s-dc-hint">{{$t('daynamic.hint.inform') }}</p>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">{{ $t('button.cancel') }}</el-button>
                    <el-button type="primary" @click="SaveAutoBuy">
                        {{ $t('button.save') }}
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script>
import {GetAutoDynamic,GetCountryCity,UpdateAutoDynamic,GetDynamicsProxyData,GetListDynamicBrokerIp,GetDynamicsProxyGeoDatas,CloseProxy } from "@/utils/api.js";

export default {
    props: ["aaaa"],
    data() {
        return {
            formData: {
                type: 0,
                region: [""],
                tcp: '1',
                duration: 0,
                durationNum: 5
            },
            tabsList: [
                {
                    label: this.$t('daynamic.tabs.whole'),
                    val: 0
                },
                /*
                {
                    label: this.$t('daynamic.tabs.shunt'),
                    val: 1
                }
                */
            ],
            regionList: [
            ],
            durationList: [
                {
                    label: '5',
                    value: 5
                },
                {
                    label: '10',
                    value: 10
                },
                {
                    label: '20',
                    value: 20
                }, 
                {
                    label: '30',
                    value: 30
                }, 
                {
                    label: '40',
                    value: 40
                }, 
                {
                    label: '50',
                    value: 50
                },
                {
                    label: '60',
                    value: 60
                }
            ],
            numInfo: {
                use: 0,
                predict: 0,
                average: 0,
                residue: 0
            },
            dialogVisible: false,
            isStartProxy:false,
            fromSetData:{
                type:0,
                low:35,
                num:35
            },
            autoDynamicData:{
                autoBuy: "",
                autoBuyFlow: 0,
                dayFlow:  0,
                lastBuy:  0,
                mothFlow: 0,
                residualFlow: 0,
                useFlow:  0
            },
            setTypeList:[
                {
                    label:this.$t('daynamic.radio.hm'),
                    value:0
                },
                {
                    label:this.$t('daynamic.radio.auto'),
                    value:1
                }
            ]
        }
    }, 
    mounted() {  
        this.init()
    },
    methods: {
        regionSelect(){
            this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData
        },
        formDatatcpSelect(){
            this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData
        },
        formdurationSelect(){
            this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData      
        },
        formdurationNumSelect(){
            this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData      
        },
        init(){
             const _this = this
             GetCountryCity(function(message){
                    console.log(message)
                    if (message.error) {
                        return
                    }
                    _this.regionList=[
                       {
                          label: _this.$t('daynamic.label.globalrandom'),
                          value: ''
                       }
                    ]
                    _this.regionList=_this.regionList.concat(message.data) 


             })
             _this.isStartProxy=_this.$.appContext.config.globalProperties.$DynamicsProxy.isStartProxy
             _this.GetAutoDynamic()
             if(this.$.appContext.config.globalProperties.$DynamicsProxy.formData!=null){
                   this.formData=this.$.appContext.config.globalProperties.$DynamicsProxy.formData
             }
               
        },
        open_auto_windows(){
            this.dialogVisible = true
            this.GetAutoDynamic()
            this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData
        },
        handleTabs(val) {
            this.formData.type = val
            this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData
        },
        StopUseProxy(){
            const _this=this
            CloseProxy(function(message){
                if (message.error) {
                    return
                }
                _this.$emit("checkIp")    
                _this.isStartProxy=false  
                _this.$.appContext.config.globalProperties.$DynamicsProxy.isStartProxy=false
            })
            _this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData
        },
        StartUseProxy(){
                let country=this.formData.region[0]
                let city = ""
                if(this.formData.length>1){
                    city=this.formData.region[1]
                }

                let durationNum=this.formData.durationNum.formData
                if(this.formData.duration == 0){
                    durationNum =  0
                }
                const _this=this
                GetDynamicsProxyData(country,city,this.formData.tcp,durationNum,this.formData.duration,function(message){
                        console.log(message)
                        if (message.error) {
                            _this.$message({
                                message: "设置代理失败,"+message.data,
                                type: 'warning'
                            });
                            _this.isStartProxy=false
                            _this.$.appContext.config.globalProperties.$DynamicsProxy.isStartProxy=false
                            return
                        }
                        _this.$emit("checkIp")    
                        _this.isStartProxy=true
                        _this.$.appContext.config.globalProperties.$DynamicsProxy.isStartProxy=true
                        _this.$.appContext.config.globalProperties.$StaticProxyPageData.proxyId=0
                })
        },
        SaveAutoBuy(){
                  const _this=this
                  UpdateAutoDynamic(this.fromSetData.type,this.fromSetData.num*1000*1000*1000,this.fromSetData.low*1000*1000 ,function(message){
                      _this.GetAutoDynamic()
                  })
                  this.dialogVisible = false
                  this.$.appContext.config.globalProperties.$DynamicsProxy.formData=this.formData

        },
        GetAutoDynamic(){
                 const _this=this
                 GetAutoDynamic(function(message){
                    if (message.error) {
                        return
                    }
                    _this.autoDynamicData=message.data
                    console.log( _this.autoDynamicData)

                    _this.fromSetData={
                        type:Number(_this.autoDynamicData.autoBuy) ,
                        low:_this.autoDynamicData.lastBuy/1000/1000 ,
                        num:_this.autoDynamicData.autoBuyFlow/1000/1000/1000 
                    }
                    _this.numInfo.use= Number(_this.autoDynamicData.useFlow/1000/1000/1000).toFixed(2)
                    _this.numInfo.predict= Number (_this.autoDynamicData.mothFlow/1000/1000/1000).toFixed(2)
                    _this.numInfo.average=Number (_this.autoDynamicData.dayFlow/1000/1000 ).toFixed(2)
                    _this.numInfo.residue=Number (_this.autoDynamicData.residualFlow/1000/1000/1000 ).toFixed(2)
                 })
        }

    }
}
</script>
<style lang="scss" scoped>
.start {
    display: flex;
    justify-content: center;

    .s-box {
        width: 815px;

        .s-b-form {
            .s-bf-item {

                display: flex;
                align-items: center;
                margin-bottom: 30px;

                .s-bfi-label {
                    margin-right: 30px;
                    width: 176px;
                    font-size: 14px;
                    text-align: right;
                }

                .s-bfi-content {
                    flex: 1;

                    .s-bfic-tabs {
                        display: inline-flex;
                        border: 1px solid $color209CDF;
                        border-radius: 6px;
                        overflow: hidden;

                        .s-bfict-item {
                            padding: 0 24px;
                            height: 36px;
                            line-height: 38px;
                            font-size: 16px;
                            color: $color666666;
                            cursor: pointer;
                            &.activate {
                                color: $whiteColor;
                                background-color: $color209CDF;
                            }
                        }
                    }

                    ::v-deep .el-cascader {
                        width: 540px;
                        height: 36px;
                        line-height: 36px;

                        .el-input {
                            line-height: 34px;
                        }

                        ::v-deep .el-input__inner {
                            height: 34px;
                        }
                    }

                    .el-radio-group {
                        ::v-deep .el-radio {
                            background-color: $whiteColor !important;

                            .is-checked {
                                .el-radio__inner {
                                    background-color: $whiteColor;

                                    &::after {
                                        background-color: $color209CDF;
                                    }
                                }
                            }

                            .el-radio__label {
                                font-size: 14px;
                                color: $color333333;
                            }
                        }
                    }

                    .ml-8 {
                        margin-left: 80px;
                    }

                    .ml-9 {
                        margin-left: 94px;
                    }

                    .s-bfic-select {
                        margin: 0 12px;
                        width: 100px;
                    }
                }
            }
        }

        .s-b-num {
            display: flex;
            justify-content: space-between;

            .s-bn-item {
                padding: 0 20px;
                height: 50px;
                line-height: 50px;
                border-radius: 10px;
                background-color: $colorEEF6FE;

                .s-bni-label {
                    margin-right: 20px;
                    font-size: 16px;
                    color: $color303336;
                }

                .s-bni-val {
                    font-size: 20px;
                    font-weight: bold;
                    color: $baseColor;
                }
            }
        }

        .s-b-operate {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 24px;
            height: 180px;
            border-radius: 10px;
            background-color: $colorEEF6FE;

            .s-bo-residue {
                .s-bos-hint {
                    margin-bottom: 16px;
                    font-size: 16px;
                    color: $color9BA2A8;
                }

                h4 {
                    font-size: 40px;
                    font-weight: bold;
                    color: $baseColor;
                }

                a {
                    margin-top: 16px;
                    font-size: 16px;
                    color: $baseColor;
                    text-decoration: underline;
                }
            }

            .s-bo-set {
                margin-left: 214px;

                .s-bos-stutas {
                    font-size: 16px;
                    color: $color656E75;

                    .s-boss-not {
                        color: $color9BA2A8;
                    }
                }

                .el-button {
                    margin-top: 20px;
                    padding: 0 30px;
                    height: 42px;
                    line-height: 40px;
                    background-color: $whiteColor;

                    &:active,
                    &:hover,
                    &:focus {
                        color: $baseColor;
                    }
                }
            }
        }

        .s-b-btn {
            margin-top: 48px;
            display: flex;
            justify-content: center;

            .el-button {
                width: 192px;
                height: 42px;
                line-height: 42px;
                font-size: 16px;
            }
        }
    }
}
::v-deep .el-dialog{
    @include elDialog;
        .el-dialog__body{
            padding: 0;
            .s-d-content{
                .s-dc-select{
                    display: flex;
                    align-items: center;
                    margin-top: 40px;
                    .s-dcs-label{
                        margin-right: 20px;
                        font-size: 14px;
                        color: $color656E75;
                    }
                    .el-radio-group {
                        ::v-deep .el-radio {
                            background-color: $whiteColor !important;

                            .is-checked {
                                .el-radio__inner {
                                    background-color: $whiteColor;

                                    &::after {
                                        background-color: $color209CDF;
                                    }
                                }
                            }

                            .el-radio__label {
                                font-size: 14px;
                                color: $color333333;
                            }
                        }
                    }
                }
                .s-dc-low{
                    display: flex;
                    align-items: center;
                    margin-top: 40px;
                    font-size: 14px;
                    color: $color303336;
                    .el-input{
                        margin: 0 12px;
                        width: 106px;
                        height: 36px;
                        line-height: 36px;
                        .el-input-group__append{
                            padding: 0 8px;
                            background-color: transparent;
                            border: none;
                        }
                    }
                }
                .s-dc-hint{
                    margin-top: 24px;
                    font-size: 14px;
                    color: $color656E75;
                }
            }
        }
    
    
}
</style>