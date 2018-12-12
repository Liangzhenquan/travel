<template>
  <div>
    <router-link 
      tag='div'
      class="header-abs"
      to='/'
      v-show='showAbs'
    >
      <div class="iconfont header-abc-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show='!showAbs'>
      <router-link 
        tag='div'
        to='/'
      >
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true
    }
  },
  methods: {
    handleScroll () {
      console.log(1);
      // const top = document.documentElement.scrollTop
      // if (top > 60) {
      //   let opacity = top / 140
      //   opacity = opacity > 1 ? 1 : opacity
      //   this.opacityStyle = { opacity }
      //   this.showAbs = false
      // } else {
      //   this.showAbs = true
      // }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped>
.header-abs{
 width: 0.72rem;
 position: absolute;
 top: .1rem;
 left: .1rem;
 line-height: 0.72rem;
 border-radius: 50%;
 text-align: center;
 background: rgba(0, 0, 0, .5);
}
.header-abc-back{
  font-size: .36rem;
  color: #fff;
  font-weight: bold;
}
.header-fixed{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: .86rem;
  line-height: .86rem;
  background: #00bcd4;
  color: #fff;
  text-align: center;
  font-size: .32rem;
}
.header-fixed-back{
  width: 0.72rem;
  float: left;
  margin-top: .1rem;
  margin-left: .1rem;
  line-height: 0.72rem;
  text-align: center;
  font-size: .36rem;
  color: #fff;
  font-weight: bold;
}
</style>