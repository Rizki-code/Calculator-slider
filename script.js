let outputScreen = document.querySelector("#screen");

function display(num) {
	outputScreen.value += num;
}

function result() {
	try {
		outputScreen.value = eval(outputScreen.value);
	}
	catch(err){
		outputScreen.value = "Jangan Tolol ^_^";
	}
}

function c() {
	outputScreen.value = "";
}

function del() {
	outputScreen.value = outputScreen.value.slice(0,-1);
}
let outputScreen2 = document.querySelector("#screen2");

function display2(num) {
	outputScreen2.value += num;
}

function result2() {
	try {
		outputScreen2.value = eval(outputScreen2.value);
	}
	catch(err){
		outputScreen2.value = "Jangan Tolol ^_^";
	}
}

function c2() {
	outputScreen2.value = "";
}

function del2() {
	outputScreen2.value = outputScreen2.value.slice(0,-1);
}
