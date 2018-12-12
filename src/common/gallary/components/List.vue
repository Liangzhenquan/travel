<template>
  <div class="list">
    <ul class="gallary-img">
      <li 
        class="item-img" 
        @click='showGallary'
        v-for='(item,index) of gallaryImgs'
        :key='index'
      ><img :src="item" alt=""></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GallaryList',
  props: {
    gallaryImgs: Array
  },
  methods: {
    showGallary (e) {
      this.$emit('show');
    }
  }
}
</script>
<style scoped>
.list{
  position: absolute;
  top: .90rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f5f5f5;
  padding: .1rem;
}
.item-img{
  width: 50%;
  overflow: hidden;
  box-sizing: border-box;
  float: left;
  padding: .06rem;
}
.item-img img{
  width: 100%;
}
</style>