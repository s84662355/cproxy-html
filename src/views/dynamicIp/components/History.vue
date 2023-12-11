<template>
    <div class="history">
        <div class="h-head">
            <div class="h-h-left">
                <h5>{{ $t('daynamic.tabs.history') }}</h5>
                <span class="h-hl-hint">{{ $t('daynamic.hint.showData') }}</span>
                <el-button link type="primary">{{ $t('daynamic.button.clear') }}</el-button>
            </div>
            <div class="h-h-btn">
                <el-icon><RefreshRight /></el-icon>
                {{ $t('button.refresh') }}
            </div>
        </div>
        <el-table :data="tableData" border style="width: 100%" :max-height="tableHeight" :header-cell-style="{ background: '#F7F7F7', height: '42px', color: '#999999' }">
            <el-table-column prop="date" :label="$t('daynamic.table.agency')" width="180"  align="center "/>
            <el-table-column prop="name" :label="$t('daynamic.table.delay')" width="180" align="center "/>
            <el-table-column prop="address" :label="$t('daynamic.table.state')" align="center "/>
            <el-table-column prop="address" :label="$t('daynamic.table.province')" align="center "/>
            <el-table-column prop="address" :label="$t('daynamic.table.city')" align="center "/>
            <el-table-column prop="address" :label="$t('daynamic.table.extract')" align="center "/>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableHeight:200,
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                }
            ]
        }
    },
    created(){
        this.initTableHeight()
        window.addEventListener('resize',this.initTableHeight)
    },
    beforeUnmount() {
        window.removeEventListener('resize',this.initTableHeight)
    },
    methods:{
        initTableHeight(){
            this.tableHeight = window.innerHeight - 405
        }
    }
}
</script>
<style lang="scss" scoped>
.history{
    .h-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        .h-h-left{
            display: flex;
            align-items: center;
            h5{
                margin-right: 12px;
                font-size: 20px;
                font-weight: bold;
                color: $color303336;
            }
            .h-hl-hint{
                margin-right: 10px;
                font-size: 14px;
                color: $color303336;
            }
            .el-button{
                font-size: 16px;
                color: $baseColor !important;
            }
        }
        .h-h-btn{
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 20px;
            color: $baseColor;
            cursor: pointer;
            .el-icon{
                margin-right: 6px;
            }
        }
    }
}
</style>