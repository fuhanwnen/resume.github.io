window.onload=function(){//当文档加载完毕的时候，才执行下面的代码
	//获取按钮：
	 var wrap_ol = document.getElementById('main-btn');
	 var aLi = wrap_ol.getElementsByTagName('li');
	 var num = 0;
	 var oldLi = aLi[num];
	var wrap_banner = document.getElementById('main-banner');
	var list_img = wrap_banner.getElementsByTagName('li');
	var oldImg = list_img[num];
	var time;
	 
	for(var i=0;i<3;i++){//for循环 
		aLi[i].index = i; //自定义属性
		aLi[i].onmouseover = function(){//匿名函数
			clearInterval(time);//清除定时器
			num = this.index;
			run();
		}
		aLi[i].onmouseout=function(){
			autoPlay();	
		}
	}
	function run(){//函数封装
		oldLi.className = '';
		aLi[num].className = 'active';
		oldLi = aLi[num]; //更新 oldLi
		//图片
		oldImg.className = '';
		list_img[num].className = 'active';
		oldImg = list_img[num]; //更新 oldImg
	}

	//自动轮播
	autoPlay();
	function autoPlay(){
		time = setInterval(function(){
			run();
			num++;//每次让num加1
			if(num==3){
				num = 0;
			}
		},1000);
	}

	//setInterval 设置定时器setInterval(函数,1000毫秒) 每1000毫秒执行一次里面的函数
	



	//////////////////////// 左右切换 //////////////////////////////
	//在文档中获取元素通过id方法（'ID名'）
	 var b_banner = document.getElementById('b-banner');
	 var b_wrap = document.getElementById('b-wrap');
	 var b_content = document.getElementById('b-content');
	 var b_btn = b_wrap.getElementsByTagName('a');
	 var b_timer;
	 var number = 0;
	 b_btn[0].onclick = function(){
				b_run();
	 }

	 function b_run(){
		number++;			
		if(number > 0){	
			number = -5;
			b_content.style.transition = 'none';
			b_content.style.left = number*228+'px';
			setTimeout(function(){
					number = -4;
					b_content.style.transition = '0.5s';
					b_content.style.left = number*228+'px';
			},200)//setTimeout只执行一次
		}else{
			setTimeout(function(){
					b_content.style.transition = '0.5s';
					b_content.style.left = number*228+'px';
			},200)
		}
	 }
	 b_btn[1].onclick = function(){
			number--;			
			b_content.style.left = number*228+'px';
			if(number<-5){
				number = 0;
				b_content.style.transition = 'none';
				b_content.style.left = number*228+'px';
				setTimeout(function(){
						number = -1;
						b_content.style.transition = '0.5s';
						b_content.style.left = number*228+'px';
				},200)
			}else{
				setTimeout(function(){
						b_content.style.transition = '0.5s';
						b_content.style.left = number*228+'px';
				},200)
			}
	 }
	 b_autoplay();//启动定时器
	 function b_autoplay(){ b_timer = setInterval(b_run,1000); }
	 //清除定时器
	 b_banner.onmouseover = function(){clearInterval(b_timer);}
	 //重启定时器
	 b_banner.onmouseout = function(){b_autoplay();}
	 

	///////////////左右滚动////////////////////////////

	/*var oul = document.getElementById('b-content');//ul
	var ali = oul.getElementsByTagName('li');

	//复制一份ul的图片
	oul.innerHTML += oul.innerHTML;
	//ul的宽
	oul.style.width = ali[0].offsetWidth*ali.length+'px';

	function move(){
		if(oul.offsetLeft < -oul.offsetWidth/2)
		{
			oul.style.left = '0';
		}
		if(oul.offsetLeft>0)
		{
			oul.style.left = -oul.offsetWidth/2+'px';
		}
		oul.style.left = oul.offsetLeft-2+'px';
	}
	//定时器
	var times = setInterval(move,30);
	//鼠标移入暂停
	oul.onmouseover = function()
	{
		clearInterval(times);
	};
	//鼠标移出启动
	oul.onmouseout = function()
	{
		times=setInterval(move,30);
	};*/
////////////////////////////////////////
}//onload的尾吧

