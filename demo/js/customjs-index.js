// JavaScript Document
$(function () {
	//滚动banner
		$(".prev,.next").hover(function(){
		$(this).stop(true,false).fadeTo("show",0.9);
	},function(){
		$(this).stop(true,false).fadeTo("show",0.4);
	});
	
	$(".banner-box").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"fold",
		interTime:6500,
		delayTime:500,
		autoPlay:true,
		autoPage:true, 
		trigger:"click" 
	});
	
	//app菜单
	$(".apprmenu li").each (function(i){
		$(this).click(function(){
			$(".apprmenu li").removeClass("active");
			$(this).addClass("active");
			$(".allapplist").children("div").removeClass("active");
			$(".allapplist").children("div").eq(i).addClass("active");
		})
	
	})






	
}); 


