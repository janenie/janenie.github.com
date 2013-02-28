$(function() {
	$("#add_comment").toggle(function(){
		$(".comment_post").fadeIn();
	}, function() {
		$(".comment_post").fadeOut();
	})
	
	$("#otherArch").mouseenter(function() {
		$("#otherArch").css({"color": "#37a"});
	})
	$("#otherArch").mouseleave(function() {
		$(this).css({"color": "black"});
	})
	$("#otherArch").toggle(function() {
		$("#otherArch dl").fadeIn();
	}, function() {
		$("#otherArch dl").fadeOut();
	})
})
