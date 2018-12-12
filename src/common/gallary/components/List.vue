<template>
  <div class="list">
    <ul class="gallary-img">
      <li class="item-img" @click='showGallary'><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg" alt=""></li>
      <li class="item-img"><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg" alt=""></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'GallaryList',
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