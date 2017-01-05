//author：hzy
//2016/5/12
$(document).ready(function(){
	// 下拉菜单显隐
	$(".dropdown").hide();
	$(".fore-sys-select").hover(function(){
		$(this).find(".dropdown").slideDown(100);
	}, function(){
		$(this).find(".dropdown").slideUp(100);
	})
	// 专题切换
	$(".topic-select .dropdown>.fir-list>li>a").click(function(){
		$(this).parent().parent().find(".sec-list").hide();
		$(this).next().fadeIn(100);
	});
	// 政区选择
	//贵州省选择
	$(".area-select .dropdown .pro-list li>a").click(function(){
		$(this).addClass('selected');
		$(".area-select .dropdown .fir-list li").find("a.selected").removeClass("selected");
		$(".area-select .dropdown .sec-list li").find("a.selected").removeClass("selected");
	});
	$(".area-select .dropdown .fir-list li>a").click(function(){
		$(this).addClass('selected').parent().siblings("li").find("a.selected").removeClass("selected");
		$(".area-select .dropdown .sec-list").hide().eq($(".area-select .fir-list li>a").index(this)).show();
	});
	$(".area-select .dropdown .sec-list li>a").click(function(){
		$(this).addClass('selected').parent().siblings("li").find("a.selected").removeClass("selected");
	});
	// 覆盖率选择
	$(".year-filter ul li a").click(function(){
		$(this).addClass('selected').parent().siblings("li").find("a.selected").removeClass("selected");
	});
	// 筛选器
	$(".forestcover-select .dropdown ul li a").click(function(){
		$(this).addClass('selected').parent().siblings("li").find("a.selected").removeClass("selected");
	});
});