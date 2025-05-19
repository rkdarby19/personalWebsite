function setSpot(){
	let xSpot = document.getElementById("box1");
	xSpot.innerHTML +="X";
}

let btnWidget = document.getElementById("button");
btnWidget.addEventListener("click", setSpot);
