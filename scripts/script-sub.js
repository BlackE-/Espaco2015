var home = document.getElementById("home");
var img = document.getElementById("right");
if (home.offsetLeft) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
	var diag = document.body.appendChild(document.createElement('div'));
	var homePos = home.getBoundingClientRect();
	var imgPos = img.getBoundingClientRect();
	var x1 = homePos.left;
	var y1 = homePos.top+(home.offsetHeight*2);
	diag.style.width = "1px";
	diag.style.position = "fixed";
	diag.style.left = x1+"px";
	diag.style.top = y1+"px";
	diag.style.backgroundColor = "orange";
	diag.style.transformOrigin = "top left"; // add vendor extensions as needed
	var diag2 = document.body.appendChild(document.createElement('div'));
	diag2.style.width = "1px";
	diag2.style.position = "fixed";
	diag2.style.left = x1+"px";
	diag2.style.top = y1+"px";
	diag2.style.backgroundColor = "red";
	//diag.style.transformOrigin = "top left"; // add vendor extensions as needed
}
else {
    alert ("Your browser does not support this example! FIRST");
}

(window.onresize = function() {
	var home = document.getElementById("home");
	var img = document.getElementById("right");
	if (home.offsetLeft) {        // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
		/*Diagonal line from HOME TO RIGHT*/
		var homePos = home.getBoundingClientRect();
		var imgPos = img.getBoundingClientRect();
		var x2 = imgPos.left+img.offsetWidth, x1 = homePos.left;
		var width1 = Math.abs(x2 - x1);
		var y2 = imgPos.top+img.offsetHeight, y1 = homePos.top+(home.offsetHeight*2);
		var height1 = Math.abs(y2 - y1);
		diag.style.left = x1+"px";
		diag.style.top = y1+"px";
		var w = width1,
	        h = height1,
	        a = Math.atan2(w,h),
	        d = Math.sqrt(w*w+h*h);
	    diag.style.height = d+"px";
	    diag.style.transform = "rotate(-"+a+"rad)";

	    /*VERTICAL LINE UNDER HOME*/
	    diag2.style.left = x1+"px";
		diag2.style.top = (homePos.top+home.offsetHeight)+"px";
		d2 = (homePos.top+(home.offsetHeight*2))-(homePos.top+home.offsetHeight);
	    diag2.style.height = d2+"px";
	    diag2.style.transform = "rotate("+180+"deg)";

	    // add vendor extensions as needed
	}
	else {
	    alert ("Your browser does not support this example!Second");
	}
})();
/*	ORIGINAL*/
/*
var diag = document.body.appendChild(document.createElement('div'));
diag.style.width = "1px";
diag.style.position = "fixed";
diag.style.left = diag.style.top = "0px";
diag.style.backgroundColor = "black";
diag.style.transformOrigin = "top left"; // add vendor extensions as needed

(window.onresize = function() {
    var w = window.innerWidth || document.documentElement.clientWidth,
        h = window.innerHeight || document.documentElement.clientHeight,
        a = Math.atan2(w,h),
        d = Math.sqrt(w*w+h*h);
    diag.style.height = d+"px";
    diag.style.transform = "rotate(-"+a+"rad)";
    // add vendor extensions as needed
})();*/