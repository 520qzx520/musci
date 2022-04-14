<template>
<div>
  <div class="header">
    <div class="header-container">
      <div class="header-left">
        <h5>商品会欢迎你</h5>
       <span class="login"><router-link to="/login">请登录</router-link> </span>
     <span> <router-link to='/register'>免费注册</router-link> </span>
      </div>
      <div class="header-right">
        <ul>
          <li>我的订单</li>
          <li>我的购物车</li>
          <li>我的商品会</li>
          <li>商品会会员</li>
          <li>企业采购</li>
          <li>关注商品会</li>
          <li>合作招商</li>
          <li>商家后台</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="header-search">
     <img src="./images/logo.png" />
      <form>
         <input type="text" id='search' v-model="keyword"/> 
        <label for='search' @click="goSearch">搜索</label>
      </form>
    
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return{
        keyword:''
      }
    },
    methods: {
      goSearch(){
        //第一种 字符串
        // this.$router.push('/search/'+this.keyword)
        //第二种 模板字符串
        // this.$router.push(`/search/${this.keyword}?key=${this.keyword.toUpperCase()} `)
        //第三种 对象
        this.$router.push({
          name:'Search',
          params:{keyword:this.keyword},
          query:{key:this.keyword.toUpperCase()}
        })
      }
      
    }
  };
</script>

<style scoped lang="less">
  .header {

    background-color: #f3f3f3;
    .header-container {
      margin: 0 auto;
      width: 1200px;
      display: flex;
      cursor: pointer;
      .header-left {
        display: flex;
        flex-grow: 1;
        span,
        h5 {
          padding: 10px;
          font-size: 14px;
          
        }
        .login {
          border-right: 1px solid rgb(247, 231, 231);
        }
      }
      .header-right ul {
        display: flex;
        li {
          padding: 10px;
          font-size: 14px;
          border-right: 1px solid rgb(247, 231, 231);
        }
        li:last-child {
          border-right: none;
        }
      }
    }
    
  }
  
  .header-search{
      width:1200px;
      margin: 0 auto;
      padding: 30px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      #search{
        width:370px;
        height: 20px;
        border: 2px solid rgb(214, 61, 61) ;
    }
    label{
      background: rgb(243, 45, 19);
      margin-left:-5px;
      padding:3.5px 10px;
      color: white;
      cursor: pointer;
    }
  }
</style>

