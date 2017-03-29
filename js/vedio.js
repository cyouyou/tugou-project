var video1=document.getElementsByTagName("video")[0];
var video2=document.getElementsByTagName("video")[1];
var video3=document.getElementsByTagName("video")[2];
video1.onclick=function(){
	if(video1.paused){
		video1.play();
	}else{
		video1.pause();
	}
}
video2.onclick=function(){
	if(video2.paused){
		video2.play();
	}else{
		video2.pause();
	}
}
video3.onclick=function(){
	if(video3.paused){
		video3.play();
	}else{
		video3.pause();
	}
}