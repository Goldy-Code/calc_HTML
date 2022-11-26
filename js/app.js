// document.getElementById("input").addEventListener("change", (e) => {
// 	document.getElementById("output").innerHTML +=
// 		getValue(e.target.value) + "<br>";
// 	e.target.value = "";
// });
// const getValue = (str) => str.toUpperCase();
// document.getElementById("calcBtn").addEventListener("click", () => {});

document.getElementById('calcBtn').addEventListener('click', () => {

	let calculations = (a, b, op) => (
		op === '/' ? a / b :
			op === '*' ? a * b :
				op === '+' ? +a + +b :
					op === '-' ? a - b : 'write correctly'
	)
	let result = calculations(document.getElementById('inputA').value,
		document.getElementById('inputB').value,
		document.getElementById('selectOp').value);
	document.getElementById('output').innerHTML = result

	document.getElementById('inputA').value = ''
	document.getElementById('selectOp').value = ''
	document.getElementById('inputB').value = ''
});


