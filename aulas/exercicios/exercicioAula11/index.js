let number1 = prompt("Digite um número: ");
let number2 = prompt("Digite outro número: ");
[number1, number2] = [parseInt(number1), parseInt(number2)]
resultado = number1 + number2;

alert(`O resultado da soma entre ${number1} e ${number2} é: ${resultado}.`);