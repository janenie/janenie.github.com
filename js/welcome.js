$(function() {
	    var client = function() {
	    	
	    	var engine = {
	    		ie: 0,
	    		gecko: 0,
	    		webkit: 0,
	    		khtml: 0,
	    		opera: 0,
	    		
	    		ver: null
	    	};
	    	
	    	var browser = {
	    		ie: 0,
	    		firefox: 0,
	    		konq: 0,
	    		chrome: 0,
	    		opera: 0,
	    		safari: 0,
	    		
	    		ver: null
	    	};
	    	
	    	var ua = navigator.userAgent;
	    	if (window.opera) {
	    		engine.ver = browser.ver = window.opera.version();
	    		engine.opera = browser.opera = parseFloat(engine.ver);
	    	} else if (/AppleWebkit\/(\S+)/.test(ua)){
	    		engine.ver = RegExp["$1"];
	    		engine.webkit = parseFloat(engine.ver);
	    		
	    		if (/Chrome\/(\S+)/.test(ua)) {
	    			browser.ver = RegExp["$1"];
	    			browser.chrome = parseFloat(browser.ver);
	    		} else if (/Version\/(S+)/.test(ua)) {
	    			browser.ver = RegExp["$1"];
	    			browser.safari = parseFloat(browser.ver);
	    		} else {
	    			var safariVersion = 1;
	    			if (engine.webkit < 100 ) {
	    				safariVersion = 1;
	    			} else if (engine.webkit < 312) {
	    				safariVersion = 1.2;
	    			} else if (engine.webkit < 412) {
	    				safariVersion = 1.3;
	    			} else {
	    				safariVersion =2;
	    			}
	    			
	    			browser.safari = browser.ver = safariVersion;
	    		}
	    		
	    		
	    	} else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
	    		engine.ver = browser.ver = RegExp["$1"];
	    		engine.khtml = browser.konq = parseFloat(engine.ver);
	    	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
	    		engine.ver = RegExp["$1"];
	    		engine.gecko = parseFloat(engine.ver);
	    		
	    		if (/Firefox\/(\S+)/.test(ua)) {
	    			browser.ver = RegExp["$1"];
	    			browser.firefox = parseFloat(browser.ver);
	    		}
	    		
	    	} else if (/MSIE ([^;]+)/.test(ua)) {
	    		engine.ver = browser.ver = RegExp["$1"];
	    		engine.ie = browser.ie = parseFloat(engine.ver);
	    	}
	    	return {
	    		engine: engine,
	    		browser: browser
	    	};
	    }();
	    if (client.engine.ie && client.browser.ie) {
	    	$("body").css({"display": "none"});
	    	alert ("Please use other browser like chrome and firefox");
	    }
	    else {
	    	drawing();
			background();
	    }
		
})

time = 100;
countx = 0;
county = 0;
function drawing() {
    ctx = $("#drawing")[0];
	if (ctx.getContext) {
		ctx = ctx.getContext("2d");
		ctx.beginPath();
		ctx.strokeStyle = "rgba(198,211,205, 0.4)";
		ctx.lineWidth = 3;
		x = 180;
		y = 100;
		num = 0;
		ctx.moveTo(x, y);
		timeId = setInterval(paintRect, time);
		
	}
}

function fill() {
	ctx.fillStyle = "rgba(255,228,225,0.9)";
	ctx.shadowColor = "#888";
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 20;
	ctx.shadowBlur = 25;
	ctx.shadowAlpha = 0.25;
	ctx.fillRect(181,101, 580, 360);
}

function paintRect() {
	console.log(x + " " + y);
	ctx.lineTo(getX(), getY());
	ctx.stroke();
	if (num >= 4) {
		clearInterval(timeId);
		setTimeout(fill, 0);
		showText();
	}
}

function getX() {
	if ( y == 460 && countx == 0)  {
		num++;
		countx++;
		x = 180;
		y = 100;
		return x;
	}
	if (x == 760 && county == 0) {
		num++;
		return x;
	}
	if ( x == 760 && y == 460) {
		num++;
		x = 180;
		return x;
	}
	if (y == 100 && countx != 0 && county == 0) {
		x += 58;
	}
	if (y == 460 && countx != 0) {
		x += 58;
	}
	return x;
}

function getY() {
	if ( y == 460)  {
		return y;
	}
	if (x == 760 && county == 0) {
		county++;
		return y;
	}
	if (x == 180 && countx == 0) {
		y += 36;
	}
	if (x == 760 && county != 0) {
		y += 36;
	}
	return y;
}

function background() {
	$("body").attr("class", "background");
	$div = $('<div id="pic1" class="animate"></div>');
	$("body").append($div);
}

function showText() {
	var content = ["This","is","made", "only", "to", "share", "my", "interest", "with", "friends","like"
	,"you!", "Here", "is", "what", "I've", "wanted", "to", "do", "when","I", "was", "a", "child.",
	"Let's", "see!"];	
	var message = $('<div id="message"></div>');
	for (var i=0; i < content.length; i++) {
	  $('<span class="word">' + content[i] + '&nbsp;</span>').appendTo(message);
	};
	
	$(".container").append(message);
	var index = 0;
	var interval = setInterval(function() {
		if (index >= content.length) {
			clearInterval(interval);
			locate()
		}
		$($('.word')[index]).fadeIn();
		index++;
	}, 450);
	//if ( index >= content.length) locate();
}

function locate() {
	setTimeout(function() {
		window.location.href= "first_page.html";
	}, 1000);
}

// function getStringPos(str) {
	// var upperCaseCount = 0;
	// for (var i=0; i < str.length; i++) {
	  // if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] == 'm')) {
	  	// upperCaseCount++;
	  // } 
	// };
	// console.log(((str.length - upperCaseCount) + upperCaseCount * 2 + 1) * 8);
	// return ((str.length - upperCaseCount) + upperCaseCount * 2 + 1) * 8;
// }
// 
// function show() {
	// //console.log(fill_x);
    // if (fill_x > 580)
    // {
    	// console.log(fill_x);
    	// fill_x = 80;
    	// fill_y += 50;
    // }
    // ctx.fillStyle = "rgba(0,0,0,0.6)";
    // ctx.fillText(content[count], fill_x, fill_y);
    // fill_x += getStringPos(content[count]);
    // count++;
    // if (count < content.length) {
    	// timeId = setTimeout(show, 2000);
    // }
// }

