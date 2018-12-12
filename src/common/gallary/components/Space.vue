<template>
  <div class="space" @click='closeGallary'>
    <div class="wrapper">
     <swiper :options="swiperOptions">
      <swiper-slide v-for='(item,index) in gallaryImgs' :key='index'>
        <img class="gallary-img" :src="item" />
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GallarySpace',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    },
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOptions: {
         pagination: '.swiper-pagination',
         paginationType: 'fraction',  
         observeParents: true,
         observer: true
      }
    }
  },
  methods: {
    closeGallary () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
.space >>> .swiper-container{
  overflow: inherit;
}
.space{
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
}
.wrapper{
  width: 100%;
  background: #fff;
}
.gallary-img{
  width: 100%;
}
.swiper-pagination{
  color: #fff;
  bottom: -1rem;
}
</style>