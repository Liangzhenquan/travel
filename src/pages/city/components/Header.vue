<template>
  <div class="header">
  	城市选择
  	<router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default{
	name: 'CityHeader'
}
</script>
<style scoped>
.header{
	position: relative;
	text-align: center;
	color: #fff;
	height: .86rem;
	line-height: 0.86rem;
	background: #00bcd4;
	font-size: .32rem;
}
.header-back{
	position: absolute;
	width: .64rem;
	left: 0;
	top: 0;
	font-size: .4rem;
	color: #fff;
}
</style>