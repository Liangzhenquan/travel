<template>
  <div class="header">
    <router-link tag='div' class="header-left" to='/detail/0001'>
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-right">
      景区图片
    </div>
  </div>
</template>
<script>
export default {
  name: 'GallaryHeader'
}
</script>
<style scoped>
.header{
  display: flex;
  line-height: .88rem;
  background: #fff;
  border-bottom:.02rem solid #e0e0e0;
}
.header-left{
  width: .8rem;
  text-align: center;
}
.back-icon{
  font-size: .4rem;
  font-weight: bold;
}
.header-right{
  flex: 1;
  font-size: .32rem;
  text-align: center;
}
</style>