var elevator={
	FHEIGHT:414,
	UPLEVEL:0,
	DOWNLEVEL:0,
	$spans:null,
	$elevator:null,
	init(){
		this.UPLEVEL=(innerHeight-this.FHEIGHT)/2;
		this.DOWNLEVEL=this.UPLEVEL+this.FHEIGHT;
		this.$spans=$(".floor>header>span");
		me.$elevator = $("#elevator");
		$(window).scroll(function(){
			//console.log($(document.body).scrollTop());
			me.chackSpan();
			if(me.$span.is(".hover"))
				me.$elevator.show();
			else
				me.#elevator.hide();
		});
		me.$elevator.children("ul").on("mouseover","li",function(){
				
				$(this).children.index("#elevator>ul>li");
				if(!me.$spans.eq(i).is(".hover"))
					$(this).children(":first").hide().next().show();
			
			}).on("mouseover","li",function(){
				$(this).children.index("#elevator>ul>li");
				if(!me.$spans.eq(i).is(".hover"))
					$(this).children(":first").show().next().hide();
			
		});
	},
	chackSpan(){
		var me=this;
		me.$spans.each(function(i){
			//获得当前span的offsetTop
			var offsetTop = $(this).offset().top;
			var scrollTop = $(document.body).scrollTop();
			if(offsetTop>(scrollTop+me.UPLEVEL) && offsetTop<=(scrollTop+me.DOWNLEVEL)) {
				$(this).addClass("hover");
				me.$elevator.find("ul>li").eq(i).children(":first").hide().next().show();
			}else{
				$(this).removeClass("hover");
				me.$elevator.find("ul>li").eq(i).children(":first").show().next().hide();
			}
		})	
	},
}
		elevator.init();