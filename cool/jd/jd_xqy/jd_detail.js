//顶部下拉菜单
$(".app_jd,.service")//选中ul的class
	.hover(function(){
	$(this).children("[id$='_items']").toggle()
	.prev().toggleClass("hover");//选中ul的前一位
})

//全部商品分类
$("#category").hover(function(){
	$("#cate_box").toggle();
})
$("#cate_box").on("mouseenter","li",showSub)//添加事件 只允许li触发
							.on("mouseleave","li",showSub);
function showSub(){
	$(this).children(".sub_cate_box").toggle()
				 .prev().toggleClass("hover");
}

//标签切换
$("#product_detail>.main_tabs").on("click","li:not(.current)",function(){
	//标签切换
	$(this).addClass("current")
				 .siblings().removeClass("current");
	//内容切换
	var $divs = $("#product_detail>[id^='product']");
	$divs.removeClass("show")
	//如果不是商品评价
	if(!$(this).is(":contains('商品评价')")){
		var i=$(this).index("#product_detail>.main_tabs>li:not(:contains('商品评价'))");
		$divs.eq(i).addClass("show");
	}
})

//放大镜 
var preview={
	LIWIDTH:62,//每个li的宽
	$ul:null,
	moved:0,//保持li已经左移的个数
	$mask:null,
	MSIZE:175,
	SMSIZE:350,
	MAX:0,
	$lg:null,//保存div
	//MAXLEFT:0,
	init(){
		this.MAX=this.SMSIZE-this.MSIZE;
		this.$ul = $("#icon_list");
		$("#preview>h1>a").click(function(e){
			if(!$(e.target).is("[class$='_disabled']")){
				if($(e.target).is(".forward")){
					this.$ul.css("left",parseFloat(this.$ul.css("left"))-this.LIWIDTH);
					this.moved++;
				}else{
					this.$ul.css("left",parseFloat(this.$ul.css("left"))+this.LIWIDTH);
					this.moved--;
				}
				this.checkA();
			}
		}.bind(this))
		//为$ul添加鼠标进入事件 只允许li下img相应
		this.$ul.on("mouseover","li>img",function(){
			//获得当前img的src
			var src=$(this).attr("src");
			//在src前面插入-m
			var i=src.lastIndexOf(".");
			src=src.slice(0,i)+"-m"+src.slice(i);
			//设置id为img的src
			$("#mImg").attr("src",src);
		});
		//选择id做遮罩层
		this.$mask=$("#mask");
		//选择id为largeDiv
		this.$lg=$("#largeDiv");

		//为id为superMask绑定hover
		$("#superMask").hover(function(){
			//切换id为mask的显示隐藏
			this.$mask.toggle();
			this.$lg.toggle();
			//获得mImg的src
			var src=$("#mImg").attr("src");
			var i=src.lastIndexOf(".");
			src=src.
				slice(0,i-1)+"l"+src.slice(i);
			//这是$lg的背景图片
			this.$lg.css("background","url("+src+")");
		}.bind(this))
		 .mousemove(function(e){//绑定鼠标移动事件
			//获得鼠标的x,y坐标
			var x=e.offsetX, y=e.offsetY;
			var top=y-this.MSIZE/2,
					left=x-this.MSIZE/2;
			//如果top<0就改回0
			if(top<0) top=0
			//否则 如果top>MAX 就改回MAX
			else if(top>this.MAX) top=this.MAX;
			//如果left<0 就改回MAX
			if(left<0) left=0
			//否则 如果left>MAX 就改回MAX
			else if(left>this.MAX) left=this.MAX;
			this.$mask.css({
				top,left   //"top":top,"left":left=>top,left  ES6简写
			});
			//修改$lg的背景位置
			this.$lg.css("backgroundPosition",`${-16/7*left}px ${-16/7*top}px`);
		}.bind(this));

	},

	checkA(){
		if(this.moved==0)
			$("[class^='backward']").attr("class","backward_disabled")
		else if(this.$ul.children().size()-this.moved==5)
			//禁用forward
			$("[class^='forward']").attr("class","forward_disabled")
		else{
			$("[class^='backward']").attr("class","backward");
			$("[class^='forward']").attr("class","forward");
		}
	},
}
preview.init();
