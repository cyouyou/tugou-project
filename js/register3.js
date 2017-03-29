var account = $("#account"); //账号
var pwd = $("#password"); //密码
var pwdConfirm = $("#password_confirm"); //确定密码
var btn = $("#enter");
var bol = false;
account.on("change", function() {
	$.get('register.php',{
		type: "check",
		account: account.val()
	},
	function(response,status,xhr){
		// var data = JSON.parse(response);
		console.log(response);
		//判断账号是否已经存在而直接点注册
		// bol = data.bol;
		// //判断账号是否存在，提示字体不同颜色
		// if (data.bol) {
		// 	account.next().html("可以注册").css("color", "green");
		// } else {
		// 	account.next().html("用户账号已存在").css("color", "red");
		// }
	})
});
	//点击注册
btn.on("click", function() {
	if (!bol) {
		alert("用户账号已存在");
		return;
	}
	//填写信息不完整返回
	if (account.val() == "" || pwd.val() == "") {
		alert("请输入完整信息");
		return;
	}
	//两次密码不一致返回
	if (pwd.val() != pwdConfirm.val()) {
		alert("两次密码不一致!");
		return;
	}
	//满足注册条件发送给服务器请求
	$.get("register.php",{
		type: "add",
		account: account.val(),
		pwd: pwd.val()
	},
	function(response,status,xhr){
		var data = JSON.parse(response);
		console.log(data);
		if (data.bol) {
			alert("注册成功");
		}else{
			alert("注册失败");
		}
	})
});	





