var left_count = 4;
$(function() {
	$("#right").click(function(){
		moveRight();
	})
	$("#left").click(function() {
		moveLeft();
	})
	$(".showImg").toggle(showZoom,reveal);
	$("#showZoom").click(reveal);
})

function moveRight() {
	if (left_count > 3) {
		for (var i = 1; i <= 5; i++) {
			var id = "img" + i;
			id = "#" + id;
			console.log($(id));
			var pos = $(id).position();
			var left = pos.left;
			console.log(left);
			left -= 210;
			$(id).animate({"left": left});
		}
		left_count--;
	}
}

function moveLeft() {
	if (left_count < 5) {
		for (var i = 1; i <= 5; i++) {
			var id = "img" + i;
			id = "#" + id;
			console.log($(id));
			var pos = $(id).position();
			var left = pos.left;
			console.log(left);
			left += 210;
			$(id).animate({"left": left});
		}
		left_count++;
	}
}

function showZoom(id) {
	var src = "url('"+ $(this).attr("src") + "')";
	console.log(src);
	$("#showZoom").css({"background-image": src}).fadeIn(500);
	$("#fog").fadeIn();
}

function reveal(){
	$("#showZoom").fadeOut();
	$("#fog").fadeOut();
}
