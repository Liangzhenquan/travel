<template>
    <ul class="list">
      <li 
        v-for='item of letter' 
        :key='item'
        :ref='item'
        @touchstart='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
        @click='handleLetterClick'
      >
        {{item}}
      </li>
    </ul>
</template>
<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities:Object
  },
  computed: {
    letter () {
      const letters=[];
      for(let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change',e.target.innerText);
    },
    handleTouchStart () {
      this.touchStatus = true;
    },
    handleTouchMove (e) {
      console.log(111);
    },
    handleTouchEnd () {
      this.touchStatus = false;
    }
  }
}
</script>
<style scoped>
.list{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  position: absolute;
  width: .42rem;
  top: 1.68rem;
  right: 0px;
  bottom: 0;
}
.list li{
  line-height: .4rem;
  color:#00bcd4;
}
</style>