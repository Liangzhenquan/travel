<template>
  <div class="banner">
    <router-link to='/gallary'>
      <img class="banner-img" :src="list" alt="">
    </router-link>
    <div class="banner-info">
      <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        39
      </div>
      <div class="banner-title">
        {{sightName}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBanner',
  props: {
    list: String,
    sightName: String
  }
}
</script>
<style scoped>
.banner{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner-img{
  width: 100%;
}
.banner-info{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: .6rem;
  padding-left: .3rem;
  padding-bottom: .3rem;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, .5))
}
.banner-number{
  width: 1rem;
  height: .22rem;
  line-height: .22rem;
  font-size: .24rem;
  padding: .1rem;
  border-radius: .2rem;
  background: rgba(0, 0, 0, .5);
  text-align: center;
}
.banner-title{
  font-size: .38rem;
}
</style>