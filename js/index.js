
document.getElementById("storm").volume=0.1;
document.getElementById("disp").volume=0.75;

function mute() {
	document.getElementById("storm").volume=0;
	document.getElementById("disp").volume=0;
}

function restore() {
	document.getElementById("storm").volume=0.1;
	document.getElementById("disp").volume=0.75;
}