<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 11:11:07
 * @LastEditTime: 2023-10-08 18:20:22
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\views\dynamicIp\index.vue
-->
<template>
    <div class="dynamic-iP">
        <DetectionStatus ref="DetectionStatus"></DetectionStatus>
        <ul class="di-tabs">
            <li class="di-t-item" v-for="item in tabsList" :key="item.val" :class="{'activate':item.val === tabsVal}" @click="handleTabs(item)">
                {{ item.label }}
            </li>
        </ul>
        <!-- <component :is="tabsVal" @checkIp="checkIp"  :ref="tabsVal"></component> -->
        
        <Start  v-show=" tabsVal == 'Start' "  ref="Start"  @checkIp="checkIp"/>
        <History  v-show=" tabsVal == 'History' "  @checkIp="checkIp"  />
        <Flow  v-show=" tabsVal == 'Flow' "  @checkIp="checkIp" />
    </div>
</template>
<script>
import DetectionStatus from '@/components/DetectionStatus/index.vue'
import Start from './components/Start.vue'
import History from './components/History.vue'
import Flow from './components/Flow.vue'
export default {
    components:{
        DetectionStatus,
        Start,
        History,
        Flow
    },
    data () {
        return {
            tabsList:[
                {
                    label:this.$t('daynamic.tabs.start'),
                    val:'Start'
                },
                /*
                {
                    label:this.$t('daynamic.tabs.history'),
                    val:'History'
                },
                {
                    label:this.$t('daynamic.tabs.flow'),
                    val:'Flow'
                }
                */
            ],
            tabsVal:'Start'
        }
    },
    mounted() {  
        this.$refs.Start.init()
    },
    methods: {
        handleTabs(item){
            this.tabsVal = item.val
        },
        checkIp(){
            this.$refs.DetectionStatus.checkIp()
        }
    }
}
</script>
<style lang="scss" scoped>
.dynamic-iP{
    .di-tabs{
        display: flex;
        margin-bottom: 34px;
        .di-t-item{
            margin-right: 30px;
            padding: 0 24px;
            height: 36px;
            line-height: 36px;
            font-size: 16px;
            color: $color9BA2A8;
            border-radius: 5px;
            background-color: $colorEDF0F2;
            cursor: pointer;
            &.activate{
                color: $baseColor;
                background-color: $colorDBF0FF;
            }
        }
    }
}
</style>