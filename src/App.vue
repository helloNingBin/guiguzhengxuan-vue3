<template>
      <SvgIcon :name="name"  :color="color" />
      <div class="a">
         <div class="b"></div>
      </div>
</template>
<script lang="ts" setup>
   import { ref } from 'vue';
   const name = ref('home')
   const color = ref('green')

</script>

<style scoped lang="scss">
 .a{
   width: 100px;
   height: 100px;
   background-color: $testcolor;
   .b{
      width: 50px;
      height: 50px;
      background-color: $base-menu-background;
   }
 }
</style>
