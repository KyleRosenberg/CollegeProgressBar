setInterval(setSemester, 1000);
setInterval(setYear, 1000);
setInterval(setGrad, 1000);

function setSemester(){
	var start = new Date(2017, 0, 17, 8);
	var end = new Date(2017, 4, 12, 18);
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