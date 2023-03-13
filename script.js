var result = document.getElementById("result");

function insertDigit(digit) {
	if (result.value == "0") {
		result.value = digit;
	} else {
		result.value += digit;
	}
}

function clearResult() {
	result.value = "0";
}

function deleteDigit() {
	result.value = result.value.slice(0, -1);
	if (result.value == "") {
		result.value = "0";
	}
}

function calculate() {
	try {
		result.value = eval(result.value);
	} catch (error) {
		result.value = "Error";
	}
}
