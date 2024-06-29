// for in - lê os indices
const frutas = ['maçã', 'pera', 'uva', 'melancia', 'mamão']
for(let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Verlã',
    sobrenome: 'Acosta Ramos',
    dataNascimento: '25/01/1973',
    endereco: 'Sete de setembro,2496',
    profissao: 'Motorista'
};

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

frutas.forEach(function(element, indice, array){
    console.log(element, indice, array);
});