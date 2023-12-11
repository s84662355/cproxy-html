<template>
    <div class="static-ip">
        <DetectionStatus></DetectionStatus>
        <div class="si-screen">
            <div class="si-s-item">
                <span class="si-si-label">{{ $t('static.label.state') }}</span>
                <el-select v-model="formData.country" :placeholder="$t('placeholder.select')" @change="countryChange">
                    <el-option v-for="item in countries" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="si-s-item">
                <span class="si-si-label">{{ $t('static.label.protocol') }}</span>
                <el-select v-model="formData.protocol" :placeholder="$t('placeholder.select')" @change="protocolChange">
                    <el-option v-for="item in protocolOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="si-s-item">
                <span class="si-si-label">{{ $t('static.label.network') }}</span>
                <el-select v-model="formData.network" :placeholder="$t('placeholder.select')">
                    <el-option v-for="item in networkOptions" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="si-s-item mr-4">
                <span class="si-si-label">{{ $t('static.label.remark') }}</span>
                <el-input v-model="formData.remark" :placeholder="$t('placeholder.input')"></el-input>
            </div>
            <el-button type="primary" @click="searchIp" >{{ $t('button.search') }}</el-button>
            <el-button type="primary">{{ $t('static.button.buy') }}</el-button>
        </div>
        <div class="si-data">
            <div class="si-d-item">
                {{ $t('static.label.agencyNum') }}<span class="si-di-blue">{{ staticData.agency }}</span>
            </div>
            <div class="si-d-item">
                {{ $t('static.label.expire') }}<span class="si-di-red">{{ staticData.expire }}</span>
            </div>
        </div>
        <el-table :data="tableData" border style="width: 100%" :max-height="tableHeight"
            :header-cell-style="{ background: '#F7F7F7', height: '42px', color: '#999999' }" @row-dblclick="handleRowDblclick">
            <el-table-column prop="ip" :label="$t('static.table.myIp')" width="180" align="center " />
            <el-table-column prop="port" :label="$t('static.table.port')" width="180" align="center " />
            <el-table-column prop="country" :label="$t('static.table.state')" align="center " />
            <el-table-column prop="protocolStr" :label="$t('static.table.protocol')" align="center " />
            <el-table-column prop="networkStatusStr" :label="$t('static.table.network')" align="center " />
            <el-table-column prop="remark" :label="$t('static.table.remark')" align="center " />
            <el-table-column prop="end_time" :label="$t('static.table.expire')" align="center " />
            <el-table-column prop="address" :label="$t('static.table.switch')" align="center ">
                <template #default="scope">
                    <el-switch v-model="scope.row.switch" :active-value="1" :inactive-value="0" @change="handlerChangeSwitch(scope.row)"></el-switch>
                </template>
            </el-table-column>
            <el-table-column :label="$t('static.table.operate')" align="center ">
                <template #default="scope">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            {{ $t('static.table.operate') }}
                            <el-icon class="el-icon--right">
                                <arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                               <!--
                                <el-dropdown-item @click="handlerOperate('renew',scope.row)">{{ $t('static.button.renew') }}</el-dropdown-item>
                                -->
                                <el-dropdown-item @click="handlerOperate('copy',scope.row)">{{ $t('button.copy') }}</el-dropdown-item>
                                <el-dropdown-item @click="handlerOperate('remark',scope.row)">{{ $t('button.remark') }}</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
           v-model:current-page="currentPage"
           v-model:page-size="pageSize"
           :page-sizes="[10, 20, 50, 100, 500]"
           :background="true"
           layout="total, sizes, prev, pager, next, jumper"
           :total="total"
           @size-change="handleSizeChange"
           @current-change="handleCurrentChange"
        />
 
        <el-dialog v-model="dialogVisibleRenew" width="460px" :show-close="false" @close="dialogVisibleRenew = false">
            <template #header="{ close, titleId, titleClass }">
                <div class="dialog-header">
                    <h4 :id="titleId" :class="titleClass">{{ $t('static.title.renew') }}</h4>
                    <el-icon class="el-icon--left" @click="close" color="#666666" >
                        <Close  />
                    </el-icon>
                </div>
            </template>
            <div class="si-d-content">
                <p class="si-dc-renew">{{ $t('static.label.orderId') }}</p>
                <p class="si-dc-renew">{{ $t('static.label.renewMoney') }}</p>
                <p class="si-dc-renew">{{ $t('static.label.renewDuration') }}</p>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisibleRenew = false">{{ $t('button.cancel') }}</el-button>
                    <el-button type="primary" @click="handleSubmit('renew')">
                        {{ $t('button.confirm') }}
                    </el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog v-model="dialogVisibleRemark" width="460px" :show-close="false" @close="dialogVisibleRemark = false">
            <template #header="{ close, titleId, titleClass }">
                <div class="dialog-header">
                    <h4 :id="titleId" :class="titleClass">
                    {{ $t('static.title.editRemark') }} 
                    </h4>
                    <el-icon class="el-icon--left" @click="close" color="#666666" >
                        <Close  />
                    </el-icon>
                </div>
            </template>
            <div class="si-d-content">
                <el-input
                    v-model="remarkVal"
                    :rows="5"
                    type="textarea"
                    maxlength="30"
                    :placeholder="$t('placeholder.input')"
                    show-word-limit
                />
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisibleRemark = false">{{ $t('button.cancel') }}</el-button>
                    <el-button type="primary" @click="handleSubmit('remark')">
                        {{ $t('button.confirm') }}
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>

</template>
<script>
import DetectionStatus from '@/components/DetectionStatus/index.vue'
import { useCopyUrl } from '@/utils/utils.js'
import {GetStaticIpList,CloseProxy, UpdateRemark,GetStaticCountry,GetStaticCountIp,SetStaticIp } from "@/utils/api.js";
 
export default {
    components: {
        DetectionStatus
    },
    data() {
        return {
            formData: {
                country: '',
                protocol: 0,
                network: '',
                remark: ''
            },
            countries:[
                {
                    label:this.$t('static.select.all'),
                    value:''
                }
            ],
            protocolOptions:[
                {
                    label:'SOCKS5',
                    value:1
                },
                {
                    label:'HTTP',
                    value:0
                },
            ],
            networkOptions:[
                {
                    label:this.$t('static.select.all'),
                    value:''
                },
                {
                    label:this.$t('static.select.normal'),
                    value:1
                },
                {
                    label:this.$t('static.select.abnormal'),
                    value:0
                },
                {
                    label:this.$t('static.select.undetected'),
                    value:3
                },
                {
                    label:this.$t('static.select.checking'),
                    value:2
                }
            ],
            staticData: {
                agency: 3,
                expire: 1
            },
            tableHeight: 200,
            tableData: [
            ],
            rowData:{},
            dialogVisibleRenew:false,
            dialogVisibleRemark:false,
            remarkVal:'',
            total:0,//条数
            pageSize:10,//每页条数
            currentPage:0,//页数
            oldCurrentPage:0,
            pageKey:"",
            proxyId:0
        }
    },
    mounted() { 
        const _this=this
        this.init() 
    },
    created() {
        this.initTableHeight()
        window.addEventListener('resize', this.initTableHeight)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.initTableHeight)
    },
    methods: {
        init(){
            const _this=this
            GetStaticCountry(function(message){
                if (message.error) {
                    return
                }
                _this.countries=[
                    {
                        label:_this.$t('static.select.all'),
                        value:''
                    }
                ],
                _this.countries=_this.countries.concat(message.data)  
            })
            GetStaticCountIp(function(message){
                console.log(message)
                if (message.error) {
                    return
                }
                _this.staticData.agency = message.data.ipNum
                _this.staticData.expire = message.data.toExpireNum

                _this.$.appContext.config.globalProperties.$StaticProxyPageData.agency=_this.staticData.agency
                _this.$.appContext.config.globalProperties.$StaticProxyPageData.expire=_this.staticData.expire
            })

            _this.currentPage=_this.$.appContext.config.globalProperties.$StaticProxyPageData.currentPage 
            _this.total=_this.$.appContext.config.globalProperties.$StaticProxyPageData.total
            _this.tableData=_this.$.appContext.config.globalProperties.$StaticProxyPageData.tableData
            _this.staticData.agency=_this.$.appContext.config.globalProperties.$StaticProxyPageData.agency
            _this.staticData.expire=_this.$.appContext.config.globalProperties.$StaticProxyPageData.expire

            _this.formData.protocol=_this.$.appContext.config.globalProperties.$StaticProxyPageData.formData.protocol 
            _this.formData.remark=_this.$.appContext.config.globalProperties.$StaticProxyPageData.formData.remark
            _this.formData.country=_this.$.appContext.config.globalProperties.$StaticProxyPageData.formData.country 
            _this.formData.network=_this.$.appContext.config.globalProperties.$StaticProxyPageData.formData.network
           

            _this.tableData.forEach(function(item,index){
                // 关闭之前启动的
                if(item.id==_this.$.appContext.config.globalProperties.$StaticProxyPageData.proxyId){
                   item.switch = 1
                }else{
                   item.switch = 0
                }
            })
            

        },
        searchIp(){
           this.oldCurrentPage=0
           this.getProxyData(1)
        },
        initTableHeight() {
          this.tableHeight = window.innerHeight - 447
        },
        handleSizeChange(e){
          this.pageSize = e
          // 重新请求页面
        },
        handleCurrentChange(e){
          this.oldCurrentPage=this.currentPage
          this.currentPage=e
          console.log("sfsdfsfsdf   ",e)
          this.getProxyData()
          // 重新请求页面
        },
        countryChange(){
          //  alert(this.formData.country)
        },
        protocolChange(){
          ///    alert(this.formData.protocol)
        },
        handlerOperate(type,row){
            console.log(row)
            this.rowData = row
 
            switch (type) {
                case 'renew':
                    this.dialogVisibleRenew = true
                    break;
                case 'remark':
                    this.dialogVisibleRemark = true
                    this.remarkVal=row.remark
                    break;
                case 'copy':
                    useCopyUrl(row.ip+":"+row.port+":"+row.username+":"+row.password+":"+row.protocolStr )
                    break;
                default:
                    break;
            }
        },
        handleSubmit(type){
            const that = this
            switch (type) {
                case 'renew':
                    this.dialogVisibleRenew = false
                    // 处理续费的操作
                    break;
                case 'remark':
                    this.dialogVisibleRemark = false
                    // 处理备注的操作
                    if(this.rowData!=null){
                       let id = this.rowData.id
                       let remarkVal = this.remarkVal
                       UpdateRemark(id,remarkVal,that.pageKey,function(message){
                            console.log(message)
                            if (message.error) {
                                that.$message({
                                    message: "修改备注失败",
                                    type: 'warning'
                                });
                                return
                            }
                            for(let i in that.tableData){
                                if(that.tableData[i].id==id){
                                     that.tableData[i].remark=remarkVal
                                     break
                                }  
                            }
                       })
                    }
                    break;
                default:
                    break;
                this.rowData = null
                this.remarkVal=""
            }
        },
        // 交互效果就是只有一条开启/双击横条切换开启状态
        handleRowDblclick(row){
            // 判断当前的行是否已开启,目前根据ID进行获取索引
            const _this = this
            const rowIndex = this.tableData.findIndex(item=>item.id === row.id)
            // 开启的状态
            if(row.switch){
                // 关闭
                this.tableData[rowIndex].switch = 0
            }else{
                // 未启动
                this.tableData.forEach(function(item,index){
                    // 关闭之前启动的
                    if(item.switch){
                        _this.tableData[index].switch = 0
                    }
                })
                // 启动当前选中的
                this.tableData[rowIndex].switch = 1
            }
        },
        handlerChangeSwitch(row){
            const that = this
            if(row.switch){
               SetStaticIp(row,function(message){
                   console.log(message)
                    if (message.error) {
                        that.$message({
                            message: "设置代理失败",
                            type: 'warning'
                        });
                        row.switch=0
                        return
                    }
                    that.$.appContext.config.globalProperties.$StaticProxyPageData.proxyId=row.id
                    that.$.appContext.config.globalProperties.$DynamicsProxy.isStartProxy=false
               })
            }else{
               CloseProxy(function(message){
                    row.switch=0
                    that.$.appContext.config.globalProperties.$StaticProxyPageData.proxyId=0
               })
            }
       
            const _this = this
            const data = Object.assign({},row)
            const rowIndex = this.tableData.findIndex(item=>item.id === row.id)
            this.tableData.forEach(function(item,index){
                // 关闭之前启动的
                if(item.switch){
                    _this.tableData[index].switch = 0
                }
            })
            // 启动当前选中的
            if(data.switch){
                this.tableData[rowIndex].switch = 1
            }

        },
        getProxyData( ){
            const that = this
            GetStaticIpList(this.currentPage,this.pageSize,this.formData.protocol,this.formData.remark,this.formData.country,3,this.formData.network,function(message){
                console.log(message)
                if (message.error) {
                    that.$message({
                        message: "请求静态数据失败",
                        type: 'warning'
                    });
                    that.currentPage = that.oldCurrentPage
                    that.$.appContext.config.globalProperties.$StaticProxyPageData.currentPage=that.currentPage
                    return
                } 
                that.pageKey=message.data.pageKey
                that.total = message.data.data.total
                that.currentPage = message.data.data.page
                for(let index in  message.data.data.list) {
                   switch(message.data.data.list[index].protocol){
                      case 1:
                        message.data.data.list[index]["protocolStr"]="socks5"
                        break
                      case 0:
                        message.data.data.list[index]["protocolStr"]="http"
                        break
                   }
                   switch(message.data.data.list[index].networkStatus){
                      case 1:
                        message.data.data.list[index]["networkStatusStr"]="正常"
                        break
                      case 0:
                        message.data.data.list[index]["networkStatusStr"]="异常"
                        break
                      case 2:
                        message.data.data.list[index]["networkStatusStr"]="检查中"
                        break
                      case 3:  
                        message.data.data.list[index]["networkStatusStr"]="未检查"
                        break
                   }

                   if(message.data.data.list[index].id==that.$.appContext.config.globalProperties.$StaticProxyPageData.proxyId){
                        message.data.data.list[index].switch=1
                   }else{
                        message.data.data.list[index].switch=0
                   }
                }


                that.tableData = message.data.data.list
                that.$.appContext.config.globalProperties.$StaticProxyPageData.currentPage=that.currentPage
                that.$.appContext.config.globalProperties.$StaticProxyPageData.total=that.total
                that.$.appContext.config.globalProperties.$StaticProxyPageData.tableData=that.tableData
                that.$.appContext.config.globalProperties.$StaticProxyPageData.formData.protocol=that.formData.protocol
                that.$.appContext.config.globalProperties.$StaticProxyPageData.formData.remark=that.formData.remark
                that.$.appContext.config.globalProperties.$StaticProxyPageData.formData.country=that.formData.country
                that.$.appContext.config.globalProperties.$StaticProxyPageData.formData.network=that.formData.network


            })
        } 
    }
}


</script>
<style lang="scss" scoped>
.static-ip {
    .si-screen {
        display: flex;
        align-items: center;

        .si-s-item {
            display: flex;
            align-items: center;
            margin-right: 10px;

            .si-si-label {
                margin-right: 12px;
                font-size: 14px;
                color: $color333333;
            }

            .el-select {
                width: 160px;
                height: 32px;

                .el-input {
                    line-height: 30px;
                }

                ::v-deep .el-input__inner {
                    height: 30px;
                }
            }

            .el-input {
                width: 160px;
                height: 32px;
            }
        }

        .el-button {
            padding: 0 24px;
            height: 32px;
            font-size: 14px;
        }

        .mr-4 {
            margin-right: 15px;
        }
    }

    .si-data {
        display: flex;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 30px;

        .si-d-item {
            margin-right: 60px;
            font-size: 20px;
            color: $color303336;

            .si-di-blue {
                color: $baseColor
            }

            .si-di-red {
                color: $colorFF3333;
            }
        }
    }

    ::v-deep .el-pagination{
      margin-top: 10px;
    }
    ::v-deep .el-dropdown {
        .el-dropdown-link {
            cursor: pointer;
            &:focus-visible {
                outline: none;
            }
        }

        &:focus-visible {
            outline: none;
        }
    }
}
::v-deep .el-dialog{
    @include elDialog;
        .el-dialog__body{
            padding: 0;
            .si-d-content{
               .si-dc-renew{
                margin-top: 20px;
                    font-size: 14px;
                    color: $color333333;
               }
               .el-textarea{
                margin-top: 20px;
               }
            }
        }
}
</style>