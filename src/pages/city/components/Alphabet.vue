<template>
    <ul class="list">
      <li 
        v-for='item of letters' 
        :key='item'
        :ref='item'
        @touchstart.prevent='handleTouchStart'
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
    letters () {
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
      if(this.touchStatus) {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.$refs['A'][0].offsetTop;
          const touchY = e.touches[0].clientY-84;
          const index = Math.floor((touchY - startY)/20);
          if(index >= 0 && index < this.letters.length) {
            this.$emit('change',this.letters[index]);
          }
        })
      }
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