<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-10-07 18:29:06
 * @LastEditTime: 2023-10-08 10:40:27
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\views\dynamicIp\components\Flow.vue
-->
<template>
    <div class="flow">
        <h5>{{ $t('daynamic.tabs.flow') }}</h5>
        <div class="f-screen">
            <span class="f-s-label">{{ $t('daynamic.label.startStop') }}</span>
            <el-date-picker v-model="date" type="daterange" :start-placeholder="$t('placeholder.startDate')" :end-placeholder="$t('placeholder.endDate')"
                format='YYYY-MM-DD' value-format='YYYY-MM-DD' :disabled-date="disabledDate" />
            <el-button type="primary" @click="handlerSearch"><el-icon class="el-icon--left">
                    <Search />
                </el-icon>{{ $t('button.query') }}</el-button>
        </div>
        <div class="f-charts" ref="charts" :style="{height:chartsHeight+'px'}"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts'
export default {
    data() {
        return {
            formData: {
                start: '',
                end: ''
            },
            date: [],
            chartsHeight:300
        }
    },
    mounted(){
        this.initCharts()
    },
    created(){
        this.initHeight()
        window.addEventListener('resize',this.initHeight)
    },
    beforeUnmount() {
        window.removeEventListener('resize',this.initHeight)
    },
    methods: {
        handlerSearch() {
            console.log(this.date);
        },
        disabledDate(time) {
            return time.getTime() > Date.now()
        },
        initCharts() {
            const chart = echarts.init(this.$refs.charts)
            chart.setOption({
                grid: {
                    left: '5%',
                    right: '3%'
                },
                xAxis: {
                    type: 'category', boundaryGap: false, data: [
                        "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
                    ]
                },
                tooltip: {
                    trigger: "axis"
                },
                yAxis: {
                    type: "value"
                },
                dataZoom: [
                    {
                        start: 0, // 默认为0
                        end: 100, // 默认为100
                        type: 'slider',
                        maxValueSpan: 31, // 显示数据的条数(默认显示10个，注意：从 0 开始计算)
                        show: true, // 是否显示滚动条(this.XData换成自己的数据)
                        xAxisIndex: [0],
                        handleSize: 0, // 滑动条的 左右2个滑动条的大小
                        height: 0,
                        bottom: 10,
                        borderColor: 'transparent',
                        showDataShadow: false, // 是否显示数据阴影 默认auto
                        showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
                        filterMode: 'filter',
                        // 	brushSelect: false, //刷选功能，设为false可以防止拖动条长度改变 ************（这是一个坑）
                        moveHandleStyle: {}
                    },
                    {
                        type: 'inside', // 支持内部鼠标滚动平移
                        start: 0,
                        end: 40,
                        zoomOnMouseWheel: false, // 关闭滚轮缩放
                        moveOnMouseWheel: true, // 开启滚轮平移
                        moveOnMouseMove: true // 鼠标移动能触发数据窗口平移
                    }
                ],
                series: [
                    {
                        data: [
                            606, 542, 985, 687, 501, 787, 339, 706, 383, 684, 669, 737
                        ],
                        type: "line"
                    }
                ]
            });
            window.onresize = ()=>{
                chart.resize()
            }
        },
        initHeight(){
            this.chartsHeight = window.innerHeight - 437
        }
    }
}
</script>
<style lang="scss" scoped>
.flow {
    h5 {
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: bold;
        color: $color303336;
    }

    .f-screen {
        display: flex;
        align-items: center;

        .f-s-label {
            margin-right: 12px;
            font-size: 12px;
            color: $color333333;
        }

        ::v-deep .el-date-editor {
            width: 334px;
            height: 32px;
            flex-grow: 0;
        }

        ::v-deep .el-button {
            margin-left: 20px;
            padding: 0 13px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
        }
    }
    .f-charts{
        width: 100%;
        height: 400px;
    }
}
</style>