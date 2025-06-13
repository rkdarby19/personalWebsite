/*function setSpot(){
	let xSpot = document.getElementById("box1");
	xSpot.innerHTML +="X";
}

let btnWidget = document.getElementById("button");
btnWidget.addEventListener("click", setSpot);
*/
document.addEventListener('keydown', (event) => {
	if(event.key === 's') {
		console.log("s pressed");
		document.getElementById("1").innerHTML = "X";
	}
});
