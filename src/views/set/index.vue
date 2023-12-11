<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-10-08 16:49:28
 * @LastEditTime: 2023-10-08 18:00:56
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\views\set\index.vue
-->
<template>
    <div class="set">
        <DetectionStatus></DetectionStatus>
        <!-- <ul class="s-tabs">
            <li class="s-t-item" v-for="item in tabsList" :key="item.val" :class="{'activate':item.val === tabsVal}" @click="handleTabs(item)">
                {{ item.label }}
            </li>
        </ul> -->
        <component :is="tabsVal"></component>
    </div>
</template>
<script>
import DetectionStatus from '@/components/DetectionStatus/index.vue'
import Agency from './components/Agency.vue'
import Entirety from './components/Entirety.vue'
export default {
    components:{
        DetectionStatus,
        Entirety,
        Agency
    },
    data () {
        return {
            // tabsList:[
            //     {
            //         label:this.$t('set.tabs.entirety'),
            //         val:'Entirety'
            //     },
            //     {
            //         label:this.$t('set.tabs.agency'),
            //         val:'Agency'
            //     }
            // ],
            tabsVal:'Entirety'
        }
    },
    methods: {
        handleTabs(item){
            this.tabsVal = item.val
        }
    }
}
</script>
<style lang="scss" scope>
.set{
    .s-tabs{
        display: flex;
        margin-bottom: 34px;
        .s-t-item{
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