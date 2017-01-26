setMeals();
setSemester();
setYear();
setGrad();
setTime();
setWend();
setInterval(setMeals, 1000);
setInterval(setSemester, 1000);
setInterval(setYear, 1000);
setInterval(setGrad, 1000);
setInterval(setTime, 1000);
setInterval(setWend, 1000);

function setWend(){
	var now = Date.now();
	var start = getLastDay(new Date(now), 1, 8);
	var end = getNextDay(new Date(now), 5, 18);
	var diff = (end.getTime()-start.getTime())/1000;
	var num = (now-start.getTime())/1000;
	var perc = Math.min(100, num/diff*100);
	document.getElementById("wend").style.width = perc + "%";
	document.getElementById("label5").innerHTML = Math.round(perc*100)/100 + "%";
}

function setMeals(){
	var now = Date.now();
	var start = getLastDay(new Date(now), 4, 0);
	var end = getNextDay(new Date(now), 3, 19);
	var diff = (end.getTime()-start.getTime())/1000;
	var num = (now-start.getTime())/1000;
	var perc = Math.min(100, num/diff*100);
	document.getElementById("meals").style.width = perc + "%";
	document.getElementById("label4").innerHTML = Math.round(perc*100)/100 + "%";
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
	while (now.getDay()!=day){
		now.setDate(now.getDate()+1);
	}
	now.setHours(time);
	now.setMinutes(0);
	now.setSeconds(0);
	return now;
}

function setSemester(){
	var start = new Date(2017, 0, 17, 8);
	//console.log(start);
	var end = new Date(2017, 4, 12, 18);
	//console.log(end);
	var diff = (end.getTime() - start.getTime())/1000;
	var now = Date.now();
	var num = (now - start.getTime())/1000;
	var perc = num/diff*100;
	document.getElementById("currsem").style.width = perc + "%";
	document.getElementById("label").innerHTML = Math.round(perc*100)/100 + "%";
}

function setYear(){
	var start = new Date(2016, 7, 22, 8);
	var end = new Date(2017, 4, 12, 18);
	var diff = (end.getTime() - start.getTime())/1000;
	var now = Date.now();
	var num = (now - start.getTime())/1000;
	var perc = num/diff*100;
	document.getElementById("curryer").style.width = perc + "%";
	document.getElementById("label2").innerHTML = Math.round(perc*100)/100 + "%";
}

function setGrad(){
	var start = new Date(2016, 7, 22, 8);
	var end = new Date(2020, 4, 19, 18);
	var diff = (end.getTime() - start.getTime())/1000;
	var now = Date.now();
	var num = (now - start.getTime())/1000;
	var perc = num/diff*100;
	document.getElementById("all").style.width = perc + "%";
	document.getElementById("label3").innerHTML = Math.round(perc*100)/100 + "%";
}

function setTime(){
	var now = Date(Date.now())
	document.getElementById("time").innerHTML = now.toLocaleString();
}