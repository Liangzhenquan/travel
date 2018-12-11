<template>
  <div>
    <div class="search">
      <input v-model='keyword' class="search-input" type="text" placeholder="请输入城市名/拼音">
    </div>
    <div 
      class="search-content" 
      ref='search'
      v-show="keyword"
    >
      <ul>
        <li 
          class="search-item" 
          v-for="item of list"
          :key='item.id'
          @click='handleCityClick(item.name)'
        >{{item.name}}</li>
        <li v-show='hasNoData'>{{message}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
  name: "CitySearch",
  props: {
    cities:Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      message: "未找到匹配项！",
      timer: null
    }
  },
  methods: {
     handleCityClick(city){
       this.$store.dispatch('changeCity',city);
       this.$router.push('/');
     }
  },
  computed: {
    hasNoData () {
      return !this.list.length;
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(!this.keyword){
        this.list = []
      }
      this.timer = setTimeout(()=>{
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if(item.spell.indexOf(this.keyword) > -1 ||
              item.name.indexOf(this.keyword) > -1){
              result.push(item);
            }
          })
        }
        this.list = result
      },100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search);
  }
}
</script>
<style scoped>
.search{
  padding: .1rem;
  background: #00bcd4;
}
.search-input{
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  line-height: .62rem;
  border-radius: .1rem;
  padding: 0 .2rem;
}
.search-content{
  z-index: 1;
  position: absolute;
  overflow: hidden;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;  background: #fff;
}
.search-item{
  padding-left: .2rem;
  line-height: .62rem;
  border-bottom: .02rem solid #eee;
}
</style>