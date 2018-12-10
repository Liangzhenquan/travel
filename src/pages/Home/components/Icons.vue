<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page,index) of pages' :key='index'>
		    <div class="icon" v-for='item of page' :key='item.id'>
		      <div class="icon-img">
		       <img :src="item.imgUrl" alt="">
		      </div>
          <p class="icon-desc">{{item.desc}}</p>
		    </div>
		  </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeIcons',
  data () {
  	return {
	  		swiperOption: {
	        autoplay: false
	      },
  		  iconList: [{
			  	id: 1,
			  	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
			  	desc:'热门景点'
			  }, {
			  	id: 2,
			  	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			  	desc:'北京必游'
			  }, {
			  	id: 3,
			  	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			  	desc:'北京必游'
			  }, {
			  	id: 4,
			  	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			  	desc:'北京必游'
			  }, {
			  	id: 5,
			  	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
			  	desc:'热门景点'
			  }, {
			  	id: 6,
			  	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			  	desc:'北京必游'
			  }, {
			  	id: 7,
			  	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			  	desc:'北京必游'
			  }, {
			  	id: 8,
			  	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			  	desc:'北京必游'
			  }, {
			  	id: 9,
			  	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			  	desc:'北京必游'
			  }]
  	}
  },
  computed: {
    pages() {
    	const pages=[];
    	this.iconList.forEach((item,index)=>{
         const page=Math.floor(index/8);
         if(!pages[page]){
         	  pages[page]=[];
         }
         pages[page].push(item);
    	})
    	return pages;
    }
  }

}
</script>
<style >
.icon .swiper-container{
	width:100%;
	height: 0;
	background: red;
	padding-bottom: 50%;
}
.icons{
  margin-top: .1rem;
}
.icon{
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}
.icon-img{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .44rem;
  box-sizing: border-box;
  padding: .1rem;
}
.icon-img img{
  display: block;
  margin:0 auto;
  height: 100%;
}
.icon-desc{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .44rem;
  line-height: .44rem;
  text-align: center;

}
</style>
