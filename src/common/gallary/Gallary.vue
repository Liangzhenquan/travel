<template>
  <div>
    <gallary-header></gallary-header>
    <gallary-list @show='showGallary'></gallary-list>
    <gallary-space v-show='gallary' @close='closeGallary'></gallary-space>
  </div>
</template>
<script>
import GallaryHeader from '@/common/gallary/components/Header'
import GallaryList from '@/common/gallary/components/List'
import GallarySpace from '@/common/gallary/components/Space'
export default {
  name: 'CommonGallary',
  components: {
    GallaryHeader,
    GallaryList,
    GallarySpace
  },
  data () {
    return {
      gallary:false
    }
  },
  methods: {
    showGallary () {
      this.gallary = true;
    },
    closeGallary () {
      this.gallary = false;
    }
  }
}
</script>