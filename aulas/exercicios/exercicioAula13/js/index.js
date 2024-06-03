const nome = prompt("Digite o seu nome completo: ");

document.body.innerHTML =  `Seu nome é: <strong>${nome}</strong>.<br/>`;
document.body.innerHTML += `Seu nome tem: ${nome.length} letras.<br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong>.<br/>`;
document.body.innerHTML += `O primeiro índice da letra "a" no seu nome é: <strong>${nome.indexOf('a')}</strong>.<br/>`;
document.body.innerHTML += `A última ocorrência da letra "a" é no indice: <strong>${nome.lastIndexOf('a')}</strong>.<br/>`;
document.body.innerHTML += `As 3 últimas letras do seu nome são: <strong>${nome.slice(-3)}</strong>.<br/>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>.<br/>`;
document.body.innerHTML += `Seu nome em letra minúscula: <strong>${nome.toLowerCase()}</strong>.<br/>`;
document.body.innerHTML += `Seu nome em letras maiúsculas: <strong>${nome.toUpperCase()}</strong>.<br/>`