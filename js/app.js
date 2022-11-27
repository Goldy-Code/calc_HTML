// document.getElementById("input").addEventListener("change", (e) => {
// 	document.getElementById("output").innerHTML +=
// 		getValue(e.target.value) + "<br>";
// 	e.target.value = "";
// });
// const getValue = (str) => str.toUpperCase();
// document.getElementById("calcBtn").addEventListener("click", () => {});

document.getElementById('calcBtn').addEventListener('click', () => {
	const inputA = document.getElementById('inputA').value
	const inputB = document.getElementById('inputB').value
	const selectOp = document.getElementById('selectOp').value
	let calculations = (a, b, op) => (
		op === '/' ? a / b :
			op === '*' ? a * b :
				op === '+' ? +a + +b :
					op === '-' ? a - b : 'write correctly'
	)
	let result = calculations(inputA, inputB, selectOp);
	
	document.getElementById('output').innerHTML = result

	document.getElementById('inputA').value = ''
	document.getElementById('selectOp').value = ''
	document.getElementById('inputB').value = ''
});


