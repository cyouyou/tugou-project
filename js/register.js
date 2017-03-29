mui.init({
	swipeBack: true //启用右滑关闭功能
});
mui(document.body).on('tap', '.mui-btn', function(e){
	mui(this).button('loading');
	setTimeout(function() {
		mui(this).button('reset');
	}.bind(this), 2000);
});

mui(document.body).on('tap', '.mui-btn', function(e){
	mui(this).button('loading');
	setTimeout(function() {
		mui(this).button('reset');
	}.bind(this), 2000);
});

//表单判断
//账号

function fnOnblur(obj){
	var reg = /^1\d{10}$/;
	if (!(reg).test(document.getElementById("account").value)){
		alert("账号只能为1开头的11位手机号");
	}
}
//密码
function fnOnchange(obj){
	if (obj.value.length < 6){
		alert("密码长度不能小于6位");
	}
}


































