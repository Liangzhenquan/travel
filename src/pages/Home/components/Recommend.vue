<template>
	<div>
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for='list of recommendList' :key='id'>
				<img class="item-img" :src="list.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{list.title}}</p>
					<p class="item-desc">{{list.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	name: 'HomeRecommend',
	data () {
		return {
			recommendList:[{
				id: 1,
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/53/53f7752ece875d00a3.img.jpg_200x200_5c006913.jpg',
        title:'龙脉山泉',
        desc:'度假村的游泳馆里不仅是游泳。'
			}, {
				id: 2,
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/53/53f7752ece875d00a3.img.jpg_200x200_5c006913.jpg',
        title:'龙脉山泉',
        desc:'度假村的游泳馆里不仅是游泳。'
			}]
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