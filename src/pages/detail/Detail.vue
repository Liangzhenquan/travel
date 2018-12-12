<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>
<script>
import DetailBanner from '@/pages/detail/components/Banner'
import DetailHeader from '@/pages/detail/components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>