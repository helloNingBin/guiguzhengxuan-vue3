<template>
  <svg :style="{width,height}">
    <use :xlink:href="prefix+name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
defineProps({
    name:{type:String,default:'#'},
    color:{type:String,default:'#000'},
    width:{type:String,default:'24px'},
    height:{type:String,default:'24px'},
    prefix:{type:String,default:'#icon-'}
})



</script>
<style lang="scss" scoped>




</style>
