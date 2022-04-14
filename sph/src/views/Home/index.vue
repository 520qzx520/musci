<template>
<input @getResult="getMyExcelData">
</template>
<script>
import Search from '../Search/index.vue'
 export default{
data(){
return{}
 },
components:{
   Search 
 },
methods:{
  getMyExcelData(data) {
    // data 为读取的excel数据，在这里进行处理该数据
    console.log(data)
  }
 }
}
</script>