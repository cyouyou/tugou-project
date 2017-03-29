window.onload = function(){
	var vm = new Vue({
		el:'body',
		data:{
			cutNum:1,
			findNum:1,
			selectbool:false,
			showbg:true,
			searchData:[],
			searchDataArr:[],
			searchListArr:[],
			wd:'',
			showlist:false,
			myFoodArr:[],
			selectImgArr:[
			'img/select01.png',
			'img/select02.png',
			'img/select03.png',
			'img/select04.png',
			'img/select05.png',
			'img/select06.png',
			'img/select07.png',
			'img/select08.png',
			'img/select09.png'
			],
			picDataArr:[],
			// Ajax获取过来的数据必须重新赋值给一个变量
			DataArr:[]
		},
		methods:{
			findFn1:function(){
				this.findNum=1;
			},
			findFn2:function(){
				this.findNum=2;
			},
			homeFn:function(){
				this.cutNum=1;
			},
			shopFn:function(){
				this.cutNum=2;
			},
			selectVegFn:function(){
				this.cutNum=3;
			},
			findFn:function(){
				this.cutNum=4;
			},
			myFn:function(){
				this.cutNum=5;
			},
			myselectFn:function(){
				this.selectbool=!this.selectbool;
			},
			showList:function(){
				this.showlist=true;
			},
			hideList:function(){
				this.showlist=false;
				this.wd="";
			},
			deleteCard:function(index){
				this.myFoodArr.push(this.selectImgArr[index]);
				this.selectImgArr.splice(index,1);
			},
			deleteSelect:function(index){
				this.selectImgArr.push(this.myFoodArr[index]);
				this.myFoodArr.splice(index,1);
			},
			hideSearch:function(){
				this.showbg = !this.showbg;
			},
			// 获取列表
			getData:function(ev){
				this.showbg = !this.showbg;
				this.$http.post('./api/data.json',{
					// 传递的数据
				},{
					emulateJSON:true
				}).then(function(res){
					for (var i = 0; i < res.data.result.length; i++) {
						this.searchData[i] = res.data.result[i];
					}
					for (var i = 0; i < this.searchData.length; i++) {
						this.searchDataArr[i] = this.searchData[i];
					}
					this.searchListArr = this.searchDataArr;
					console.log(this.searchListArr);
				},function(res){
					console.log(res.status);
				});
			}
		},
		// Ajax请求数据
		created:function(){
			for (var i = 0; i < 42; i++) {
				this.picDataArr[i] = {
					"picSrc":"img/slider001.jpeg",
					"name":"蒸羊羔儿",
					"price":"￥43.00"
				};
			}
			// vue Post方法获取主页index里的数据
			this.$http.post('./api/data.json',{
				//传递的数据
			},{
				emulateJSON:true
			}).then(function(res){
				for (var i = 0; i < res.data.result.length; i++) {
					this.DataArr[i] = res.data.result[i];
				}
				this.picDataArr = this.DataArr;
				console.log(this.picDataArr);
			},function(res){
				console.log(res.status);
			});
		}
	})
}
