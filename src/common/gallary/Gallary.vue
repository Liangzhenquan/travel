<template>
  <div>
    <gallary-header></gallary-header>
    <gallary-list @show='showGallary' :gallaryImgs='gallaryImgs'></gallary-list>
    <gallary-space 
      v-show='gallary' 
      @close='closeGallary'
      :gallaryImgs='gallaryImgs'
      ></gallary-space>
  </div>
</template>
<script>
import GallaryHeader from '@/common/gallary/components/Header'
import GallaryList from '@/common/gallary/components/List'
import GallarySpace from '@/common/gallary/components/Space'
import axios from 'axios'
export default {
  name: 'CommonGallary',
  components: {
    GallaryHeader,
    GallaryList,
    GallarySpace
  },
  data () {
    return {
      gallary:false,
      gallaryImgs: []
    }
  },
  methods: {
    showGallary () {
      this.gallary = true;
    },
    closeGallary () {
      this.gallary = false;
    },
    getGallaryInfo () {
      axios.get('/api/detail.json')
      .then(this.getGallaryInfoSucc);
    },
    getGallaryInfoSucc (res) {
      res = res.data;
      this.gallaryImgs = res.data.gallaryImgs;
    }
  },
  mounted () {
    this.getGallaryInfo();
  }
}
</script>