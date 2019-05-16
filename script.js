let button = document.getElementById('sum');

button.addEventListener('click', summation);

function summation() {
	let firstNum = parseFloat( document.getElementById( 'firstField' ).value ),
		secondNum =  parseFloat( document.getElementById( 'secondField' ).value ),
		result = firstNum + secondNum
		alert( 'результат: \r\n' + result.toFixed(1) );
}
