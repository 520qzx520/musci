<template>
  <div>
    <div class="Footer">
      <div class="Footer-container">
        <div class="Footer-container-top">
          <ul>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
          </ul>
          <ul>
            <li>支付方式</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
          </ul>
          <ul>
            <li>配送方式</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
          </ul>
          <ul>
            <li>售后服务</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
          </ul>
          <ul>
            <li>特殊服务</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
            <li>购物指南</li>
          </ul>
          <ul>
            <li>帮助中心</li>
            <li><img src="./images/wx_cz.jpg" /></li>
          </ul>
        </div>
        <div class="Footer-container-bottom">
          <ul>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
            <li>加入我们</li>
          </ul>
          <p>地址：但是五大湖hi多少都会</p>
          <p>经忽视的39493434893</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang='less' scoped>
    .Footer{
        background-color:rgb(243 244 245);
        .Footer-container{
            width:1200px;
            margin: 0 auto;
            .Footer-container-top{
                display: flex;
                justify-content:center;
                ul{
                    margin-top:30px;
                    width:16.66666%;
                    li{
                        display: flex;
                        justify-content: center;
                        padding: 2px 0;
                    }
                    li:first-child{
                        font-weight:bolder;
                        font-size: 16px;
                    }
                }
            }
            .Footer-container-bottom{
                margin-top: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
                ul{
                    display: flex;
                    li{
                       
                        padding: 0 10px;
                        margin-bottom: 10px;
                        border-right: 1px solid rgb(172, 165, 154);
                    }
                }
            }
            p{
                margin: 0 0 10px 0;
            }

        }
    }
</style>
