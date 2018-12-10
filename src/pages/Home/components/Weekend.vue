<template>
	<div>
		<div class="recommend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for='list of list' :key='list.id'>
				<img class="item-img" :src="list.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{list.title}}</p>
					<p class="item-desc">{{list.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name: 'HomeWeekend',
	props: {
	  list:Array
	},
	data () {
		return {
		}
	}
}
</script>
<style scoped>
.recommend-title{
	line-height: .8rem;
	background: #ccc;
	text-indent: .2rem;
}
.item{
	margin-bottom: .2rem;
}
.item-img{
   width: 100%;
}
.item-title{
	line-height: .54rem;
	font-size: .32rem;
}
.item-desc{
	line-height: .4rem;
	color: #ccc;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>