<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<router-link
			  tag='li' 
			  class="item border-bottom" 
			  v-for='list of list' 
			  :key='list.id'
			  :to="'/detail/'+list.id"
			>
				<img class="item-img" :src="list.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{list.title}}</p>
					<p class="item-desc">{{list.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>
<script>
export default{
	name: 'HomeRecommend',
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
	margin-top: .2rem;
	line-height: .8rem;
	background: #ccc;
	text-indent: .2rem;
}
.item{
	overflow: hidden;
	display: flex;
	height: 1.9rem;
}
.item-img{
	height: 1.7rem;
	width: 1.7rem;
	padding: .1rem;
}
.item-info{
	flex: 1;
	padding: .1rem;
	min-width: 0;
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
.item-button{
	margin-top: .2rem;
	background: #ff9300;
	padding: 0 .2rem;
	border-radius: .06rem;
}
</style>