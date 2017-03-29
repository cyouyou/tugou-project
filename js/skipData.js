window.onload = function(){
  var c = new Vue({
    el:'body',
    data:{
      pid:0,
      detailMsg:{},
      detailPic:'',
      starArr:[],
      starArr1:[]
    },
    methods:{

    }
  })

  c.pid = location.href.split('?')[1].match(/id=\d+/)[0].match(/\d+/)[0];
  c.$http.post('../api/data.json',{
    // 需传输的数据
  },{
    emulateJSON:true
  }).then(function(res){
    console.log(this.pid);
    for (var i = 0; i < res.data.result.length; i++) {
      // console.log(res.data.result[i]);
      if (res.data.result[i].id==this.pid) {
        this.detailMsg = res.data.result[i];
      }
      this.detailPic = '../'+this.detailMsg.picSrc;
    }
    console.log(this.detailMsg);
    for (var i = 0; i < this.detailMsg.starNum; i++) {
      this.starArr.push(1);
    }
    for (var i = 0; i < 5-this.detailMsg.starNum; i++) {
      if (this.detailMsg.starNum!=5) {
        this.starArr1.push(1);
      }
    }
    console.log(this.detailMsg.starNum);
  },function(res){
    console.log(res.status);
  })
}
