//method:请求方式，url:请求路径,json:发送的数据，cb:回调函数  
function ajax(method,url,json,cb){  
    //处理浏览器兼容  
    if (window.XMLHttpRequest) {  
        var xmlhttp = new XMLHttpRequest();  
    }else{  
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");             
    }  
    // 将发送的数据转化为数组并拼接成字符串，如{name:"abc",age:18}转name=abc&age=18  
    var arr = [];  
    for(var key in json){  
        var str = key + "=" +json[key];  
        arr.push(str);  
    }  
    var str = arr.join("&");//"name=abc&age=18"  
    //请求方式  
    if (method=="get") {  
        xmlhttp.open("get",url+"?"+str);  
        xmlhttp.send();  
    }else{  
        xmlhttp.open("post",url);  
        xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');  
        xmlhttp.send(str);  
    }  
    //监听数据库响应  
    xmlhttp.onreadystatechange = function(){  
        if (xmlhttp.readyState==4&&xmlhttp.status==200){                 
            cb(xmlhttp.responseText);  
        }  
    }  
}  
