var account = document.querySelector("#account");
var pwd = document.querySelector("#password");
var btn = document.querySelector("#enter");
var p = document.querySelector("#contentShow");
var returns = document.querySelector("#return");
//点击登录
btn.onclick=function(){
	ajax("post","enter.php",{account:account.value,pwd:pwd.value},function (data){  
		p.innerHTML = account.value +","+ data;  
		account.value = "";//清空帐号  
		pwd.value = "";//清空密码  
	})  
}
