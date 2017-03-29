var slider = mui("#slider");
slider.slider({
	interval: 3000
});

// 懒加载
mui.init();

var createFragment = function(count,list) {
	var fragment = document.createDocumentFragment();
	var li;
	switch(list){
		case 'list':
		for (var i = 0; i < count; i+=2) {
			li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media';
			li.innerHTML = '<p>美食精选</p><div class="lazy-pic lpl"><ul><a href="./components/comDetails.html?id='+(11+i)+'" target="_self"><li>{{picDataArr['+(i+10)+'].name}} {{picDataArr['+(10+i)+'].price}}</li><li><img data-lazyload="./img/lazyfood0'+(i+1)+'.jpg?version=' + Math.random() * 1000 + '"></li></a></ul></div><div class="lazy-pic lpr"><ul><a href="./components/comDetails.html?id='+(12+i)+'" target="_self"><li>{{picDataArr['+(i+11)+'].name}} {{picDataArr['+(11+i)+'].price}}</li><li><img data-lazyload="./img/lazyfood0'+(i+2)+'.jpg?version=' + Math.random() * 1000 + '"></li></a></ul></div>';
			fragment.appendChild(li);
		}
		return fragment;
		break;
		case 'shop_list':
		for (var i = 0; i < count; i+=2) {
			li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media';
			li.innerHTML = '<div class="shop-left"><a href="./components/comDetails.html?id='+(23+i)+'" target="_self"><img data-lazyload="./img/shop_pic0'+(i+1)+'.jpg?version=' + Math.random() * 1000 + '"></a><p>{{picDataArr['+(22+i)+'].name}} {{picDataArr['+(22+i)+'].price}}</p></div><div class="shop-right"><a href="./components/comDetails.html?id='+(24+i)+'" target="_self"><img data-lazyload="./img/shop_pic0'+(i+2)+'.jpg?version=' + Math.random() * 1000 + '"></a><p>{{picDataArr['+(23+i)+'].name}} {{picDataArr['+(23+i)+'].price}}</p></div>';
			fragment.appendChild(li);
		}
		return fragment;
		break;
		case 'find_list':
		for (var i = 0; i < count; i++) {
			li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media';
			li.innerHTML = '<div class="find-pic"><a href="./components/comDetails.html?id='+(35+i)+'" target="_self"><img data-lazyload="./img/find_pic0'+(i+1)+'.jpg?version=' + Math.random() * 1000 + '"></a></div><p style="padding:5px 10px;">{{picDataArr['+(i+34)+'].name}}</p><p style="padding-left:10px">深夜做好的水果拼盘，第一次做，多多指点</p><div style="color: rgb(165,165,165);"><span class="mui-icon-extra mui-icon-extra-heart" style="margin-left:10px"></span><span class="mui-icon mui-icon-chatbubble" style="margin-left:20px;padding-bottom:5px;"></span><span class="mui-icon mui-icon-more" style="float:right"></span></div>';
			fragment.appendChild(li);
		}
		return fragment;
		break;
	}

};

(function($) {
	var list = document.getElementById("list");
	var shop_list = document.getElementById("shop-list");
	var find_list = document.getElementById("find-list");
	list.appendChild(createFragment(12,'list'));
	shop_list.appendChild(createFragment(12,'shop_list'));
	find_list.appendChild(createFragment(8,'find_list'));
	$(document).imageLazyload({
		placeholder: './img/60x60.gif'
	});
})(mui);

var vegNav = document.getElementById("veg-nav");
var findNav = document.getElementById("find-nav");


function cutBg(obj){
	if (obj=='left') {
		vegNav.style.backgroundImage = "url(img/nav2.png)";
	}
	if (obj=='right') {
		vegNav.style.backgroundImage = "url(img/nav1.png)";
	}
}
function findBg(obj){
	if (obj=='left') {
		findNav.style.backgroundImage = "url(img/nav2.png)";
	}
	if (obj=='right') {
		findNav.style.backgroundImage = "url(img/nav1.png)";
	}
}