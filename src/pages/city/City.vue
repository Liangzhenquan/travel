<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list 
      :cities='cities' 
      :hot='hot'
      :letter='letter'
    ></city-list>
    <city-alphabet :cities='cities' @change='handleLetterChange'></city-alphabet>
  </div>
</template>
<script>
import CityHeader from '@/pages/City/components/Header'
import CitySearch from '@/pages/City/components/Search'
import CityList from '@/pages/City/components/List'
import CityAlphabet from '@/pages/City/components/Alphabet'
import axios from 'axios'
export default{
	name:'City',
	components:{
		CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
	},
  data () {
    return {
       cities: {},
       hot: [],
       letter: ''
    }
  },
  mounted () {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
      .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res){
      res=res.data;
      if(res.ret && res.data){
        const data=res.data;
        this.hot=data.hotCities;
        this.cities=data.cities;
      }
    },
    handleLetterChange(letter){
       this.letter=letter;
    }
  }
}	
</script>
