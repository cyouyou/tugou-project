<?php
$conn = @mysqli_connect("localhost","root",""); 
$db = $conn->select_db("html5-7"); 
if(!$conn){
 	die("连接失败!");
}	
$conn->query("set names utf8");
$account = $_POST['account'];
$pwd = $_POST['pwd'];
$sql = "SELECT * FROM user WHERE account = '{$account}' AND pwd ='{$pwd}'";
$conn->query($sql);
//判断登录是否成功
if(mysqli_affected_rows($conn)>0){
	echo "登录成功";
}else{
	echo "登录失败，账号或密码错误";
}
?>