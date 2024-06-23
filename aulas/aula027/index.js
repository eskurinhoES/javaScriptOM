// Código usando if/else
/*const pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
}else{
    console.log('Usuário Normal');
}*/
//Código usando operação ternária
const pontuacaoUsuario = 9000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);