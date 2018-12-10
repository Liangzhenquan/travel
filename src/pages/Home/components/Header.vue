<template>
   <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <span class='iconfont'>&#xe632;</span>
        输入城市/景点/主题</div>
      <router-link to='/city'>
        <div class="header-right">
          {{city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>
   </div>
</template>
<script>
export default{
  name: 'HomeHeader',
  props:{
    city:String
  }
}
</script>
<!-- scoped 限制住选择器只对当前组件样式生效 -->
<style scoped>
/*@import '@/assets/styles/varibles.styl'*/
.header{
  display: flex;
  line-height: .86rem;
  background: #00bcd4;
  color:#fff;
}
.header-left{
  width: .64rem;
  float: left;
}
.back-icon{
  text-align: center;
  font-size: .4rem;
}
.header-input{
  flex: 1;
  height: .64rem;
  line-height: .64rem;
  background: #fff;
  border-radius: .1rem;
  margin-top: .12rem;
  margin-left: .2rem;
  padding-left: .2rem;
  color:#ccc;
}
.header-right{
  width: 1.24rem;
  float: right;
  color:#fff;
  text-align: center;
}
.arrow-icon{
  font-size: .24rem;
}
</style>
