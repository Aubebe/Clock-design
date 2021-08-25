// JavaScript Document
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
	
	var posh = (-3.42 * h) + 50;
	var posm = (-3.42 * m) + 50;
	var poss = (-3.42 * s) + 50;
	var moves = poss + "vh";
	var movem = posm + "vh";
	var moveh = posh + "vh";
    
    var time = h + ":" + m + ":" + s + " ";
/*    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;*/
    document.getElementById("hours").innerText = h;
	document.getElementById("minutes").innerText = m;
	document.getElementById("seconds").innerText = s;
	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;
	document.getElementById("recthours").style.transform = "translateY(" + posh + "vh)";
	document.getElementById("rectminutes").style.transform = "translateY(" + posm + "vh)";
	document.getElementById("rectseconds").style.transform = "translateY(" + poss + "vh)";
    setTimeout(showTime, 1000);
    
}
showTime();