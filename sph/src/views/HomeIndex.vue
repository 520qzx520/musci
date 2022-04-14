<template>
  <div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
  name:'HomeIndex',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped lang="less">
  
</style>