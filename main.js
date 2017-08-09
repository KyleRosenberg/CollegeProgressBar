var currsem = setInterval(function(){loadValues(new Date(2017, 7, 28, 8), new Date(2017, 11, 20, 18), "currsem", "label")}, 15);
var curryer = setInterval(function(){loadValues(new Date(2017, 7, 28, 8), new Date(2018, 4, 9, 18), "curryer", "label2")}, 15);
var all = setInterval(function(){loadValues(new Date(2016, 7, 22, 8), new Date(2020, 4, 19, 18), "all", "label3")}, 15);
var wend = setInterval(function(){loadValues(getLastDay(new Date(), 1, 8), getNextDay(new Date(), 5, 18), "wend", "label5")}, 15);
setTime();
setInterval(setTime, 1000);

var intervals = {
	"currsem": currsem,
	"curryer": curryer,
	"all": all,
	"wend": wend
}

var functs = {
	"currsem": semloop,
	"curryer": yerloop,
	"all": allloop,
	"wend": wenloop
}

function semloop(){setValues(new Date(2017, 7, 28, 8), new Date(2017, 11, 20, 18), "currsem", "label")}
function yerloop(){setValues(new Date(2017, 7, 28, 8), new Date(2018, 4, 9, 18), "curryer", "label2")}
function allloop(){setValues(new Date(2016, 7, 22, 8), new Date(2020, 4, 19, 18), "all", "label3")}
function wenloop(){setValues(getLastDay(new Date(), 1, 8), getNextDay(new Date(), 5, 18), "wend", "label5")}

function setValues(start, end, id, lb){
	var now = Date.now();
	var diff = (end.getTime()-start.getTime());
	var num = (now-start.getTime());
	var perc = Math.max(0, Math.min(100, num/diff*100));
	document.getElementById(id).style.width = perc + "%";
	document.getElementById(lb).innerHTML = Math.round(perc*100)/100 + "%";
}

function loadValues(start, end, id, lb){
	var now = Date.now();
	var bar = document.getElementById(id);
	var wid = percentwidth(bar);
	var diff = (end.getTime()-start.getTime())/1000;
	var num = (now-start.getTime())/1000;
	var perc = Math.max(0, Math.min(100, num/diff*100));
	if (wid==false){
		wid = perc/60;
	}else{
		wid += (perc/60.0);
	}
	if (wid >= perc){
		wid = perc;
		clearInterval(intervals[id]);
		setInterval(functs[id], 1000);
	}
	bar.style.width = wid + "%";
	document.getElementById(lb).innerHTML = Math.round(wid*100)/100 + "%";
}

function percentwidth(elem){
    var wid = elem.style.width;
    if (wid.length==0) return 0;
    var realwid = parseFloat(wid.substr(0, wid.length-1));
    return realwid;
}

function getLastDay(now, day, time){
	while (now.getDay()!=day){
		now.setDate(now.getDate()-1);
	}
	now.setHours(time);
	now.setMinutes(0);
	now.setSeconds(0);
	return now;
}

function getNextDay(now, day, time){
	if (day == 5){
		if (now.getDay() == 0 || now.getDay() == 6){
			while (now.getDay()!=day){
				now.setDate(now.getDate()-1);
			}
		} else {
			while (now.getDay()!=day){
				now.setDate(now.getDate()+1);
			}
		}
	}
	now.setHours(time);
	now.setMinutes(0);
	now.setSeconds(0);
	return now;
}

function setTime(){
	var now = Date(Date.now())
	document.getElementById("time").innerHTML = now.toLocaleString();
}
