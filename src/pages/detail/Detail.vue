<template>
  <div> 
    <detail-banner :list='bannerImg' :sightName='sightName'></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
  </div>
</template>
<script>
import DetailBanner from '@/pages/detail/components/Banner'
import DetailHeader from '@/pages/detail/components/Header'
import DetailList from '@/pages/detail/components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      list: [],
      bannerImg: '',
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      })
      .then(this.getDetailInfoSucc);
    },
    getDetailInfoSucc(res){
      res = res.data;
      if(res.ret && res.data) {
        this.list = res.data.categoryList;
        this.bannerImg = res.data.bannerImg;
        this.sightName = res.data.sightName;
      }
    }
  },
  mounted () {
    this.getDetailInfo();
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
}
</script>