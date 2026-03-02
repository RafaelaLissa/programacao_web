const nome ='Valcicleide'
const idade = 20
const cidade = 'Morro Alto de Cima/MG'
//Mesclando strings com variaveis usando concatenação
const msg1 = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg1)
/* Mesclando strings e variaveis usando template string
Template string são OBRIGATORIAMENTE delimitadas por`` 
(bacticks / acentos graves / "crases"
*/
const msg2 = `Meu nome é ${nome}, tenho ${idade}, anos e moro em ${cidade}.`
console.log(msg2)

//Dentro de uma template string, não estamos limitados a usar 
//apenas variaveis dentro do simbolo ${}. Qualquer código JS valido pode ser empregado ali
console.log(`EM ${2026 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} ANOS.`)