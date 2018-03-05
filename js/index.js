window.onload = function(){
	var oIndex = document.getElementById("index");
	var oBottom = document.getElementById("bottom");
	var oBgdio = document.getElementById("bgdio");
	var oBgbutdio = document.getElementById("butdio");
	var oBottomaaDiv = oBottom.getElementsByTagName("div");
	var aSpan = oBottomaaDiv[0].getElementsByTagName("span");
	//让id为index的高 = 客户端高度
	oIndex.style.height = document.documentElement.clientHeight+'px';
	//音频的点击事件
	oBottomaaDiv[0].onclick = function(){
		if( oBgdio.muted == false ){
			aSpan[0].style.left = '0px';
			aSpan[1].style.left = '0px';
			aSpan[1].style.background = 'url(img/jingyin.png)';
			//muted 视频输出被禁音
			oBgdio.muted = 1;
			oBgbutdio.muted = 1;
		}else{
			aSpan[0].style.left = '32px';
			aSpan[1].style.left = '32px';
			aSpan[1].style.background = 'url(img/bofang.png)';
			oBgdio.muted = 0;
			oBgbutdio.muted = 0;
		}
	}
	//左侧炫酷 鼠标移入事件
	oBottomaaDiv[1].onmouseover = function(){
		this.style.background = 'url(img/xuanku2.png) no-repeat';
		oBottomaaDiv[2].style.background = 'url(img/six2.png) no-repeat';
	}
	//鼠标移出事件
	oBottomaaDiv[1].onmouseout = function(){
		this.style.background = 'url(img/xuanku.png) no-repeat';
		oBottomaaDiv[2].style.background = 'url(img/six.png) no-repeat';
	}
	//右侧文字 鼠标移入事件
	oBottomaaDiv[3].onmouseover = function(){
		this.style.background = 'url(img/wenzi2.png) no-repeat';
		oBottomaaDiv[2].style.background = 'url(img/six2.png) no-repeat';
	}
	oBottomaaDiv[3].onmouseout = function(){
		this.style.background = 'url(img/wenzi.png) no-repeat';
		oBottomaaDiv[2].style.background = 'url(img/six.png) no-repeat';
	}
	//左侧炫酷 点击事件
	oBottomaaDiv[1].onclick = function(){
		oBgbutdio.src = "mp3/sousou.mp3";
		//指定音频在加载完后立即播放
		oBgbutdio.autoplay = "autoplay";
		setTimeout(function(){
			window.location.href = "cool/cool.html";
		},500)
	}
	//右侧文字 点击事件
	oBottomaaDiv[3].onclick = function(){
		oBgbutdio.src = "mp3/sousou.mp3";
		//指定音频在加载完后立即播放
		oBgbutdio.autoplay = "autoplay";
		setTimeout(function(){
			window.location.href = "sim/sim.html";
		},500)
	}
}