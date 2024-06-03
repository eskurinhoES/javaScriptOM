const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById("numero_titulo");
const texto = document.getElementById("texto");


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>A raiz quadrada de ${numero} é: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro?: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>${numero} é NAN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>${numero} Arredondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>${numero} Arredondando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>${numero} Com duas casas decimais: ${numero.toFixed(2)}</p>`