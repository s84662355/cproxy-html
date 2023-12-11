<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 15:51:59
 * @LastEditTime: 2023-10-07 11:02:35
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\layout\components\AppMain.vue
-->
<template>
    <div class="app-main">
        <RouterView v-slot="{Component}">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
.app-main{
  position: relative;
  box-sizing: border-box;  
  padding: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  @include scrollbar;
  &:hover{

  }
}
</style>