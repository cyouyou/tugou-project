<?php
//连接数据库
$conn = mysqli_connect("localhost","root","","html5-7");
$conn->query("set names utf8");
//获取数据处理类型
$type = $_GET['type'];
//根据不同的数据类型返回数据或将数据添加给数据库
switch($type){
	case 'check':
		$account = $_GET['account'];
		$sql = "SELECT * FROM user WHERE account = '{$account}'";
		$ret = $conn->query($sql);
		//函数返回前一次 MySQL 操作（SELECT、INSERT、UPDATE、REPLACE、DELETE）所影响的记录行数。
		if(mysqli_affected_rows($conn)>0){
			echo '{"bol":false}';
		}else{
			echo '{"bol":true}';
		}
		break;
	case 'add':
		$account = $_GET['account'];
		$pwd = $_GET['pwd'];
		$sql = "INSERT INTO user (account,pwd) VALUES ('$account','$pwd')";
		$ret = $conn->query($sql);
		if(mysqli_affected_rows($conn)>0){ 
			echo '{"bol":true}';
		}else{
			echo '{"bol":false}'; 
		}		
     }
?>