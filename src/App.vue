<!--
 * @Description: 
 * @Author: Su Miao
 * @Date: 2023-09-28 10:22:08
 * @LastEditTime: 2023-09-28 15:49:10
 * @LastEditors: Su Miao
 * @FilePath: \007ip-vps-electron\src\App.vue
-->
<template>
  <RouterView  />
</template>
<script setup>
import { RouterView } from 'vue-router'

</script>
<style scoped lang="scss">
::-webkit-scrollbar{
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: #C1C1C1;
}
::-webkit-scrollbar-track{
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #F1F1F1;
}
</style>

<script>
export default {
    components:{
       
    },
    data () {
        return {
           
        }
    },

    mounted() {
     
    },
 
    methods: {

    }
}

</script>
 