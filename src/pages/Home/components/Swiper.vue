<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgURL" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: 1,
        imgURL: "http://img1.qunarzz.com/piao/fusion/1812/e0/7aed5dde53dabe02.jpg_750x200_9b7a65fd.jpg"
      }, {
        id: 2,
        imgURL: "http://img1.qunarzz.com/piao/fusion/1809/d4/e298dff35d3af802.jpg_750x200_9b0d56c1.jpg"
      }]
    }
  }
}
</script>
<style scoped>
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.67%
}
.swiper-img{
  width:100%;
}
</style>
