//Alguns dados de um usuario
const fullname = 'Jonicleisson Junqueira Júnior'
const username = 'Junin'
const group = 'alunos'

// CRIANDO UM OBIJETO A PARTIR DAS VARIAVEIS ACIMA
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)
/* Quando o nome da propriedade de um objeto é identico a da variavel que lhe dará o valor,é possivél
usar a sintaxe chamada PROPRIEDADE ABREVIADA.Ela permite não repetir os nomes repetir os nomes das variaveis
á frente dos nomes das propriedades
*/
const user2 ={
    fullname,
    username,
    group
}
console.log(user2)
//Um objeto pode mesclar propriedades abreviadas e não abreviadas
const user3 ={
    fullname,
    username,
    password: 'SoberanoTricolor',
    group,
    lastlogin: '2026-03-02 11:27:35'
}
console.log(user3)

/*USANDO PROPRIEDADES ABREVIADAS PARA DEPURAÇÃO (DEBUG) */
const x=10, y= 'batata'
/*Exibindo o valor das duas variaveis com console.log().
Observe que os valores são mostrados, mas a saida não informa quais as variaveis de onde provêm os valores. 
*/
console.log(x, y)
/*Saida melohorada: passando um objeto formado pelas variaveis como propriedades abreviadas
para console.log(), conseguimos identificar de onde vem os valores 
*/
console.log({x,y})
