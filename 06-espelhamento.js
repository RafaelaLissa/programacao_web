//Encontrando o menor e o maior números em uma série
let minimo = Math.min(2, -5, 4, 0, 11, -1)
let maximo = Math.max(2, -5, 4, 0, 11, -1)
console.log('Valores mínimo e máximo determinados a partir de valores avulsos:')
console.log({minimo, maximo})
 console.log('-'. repeat(80))

// E se os números estivessem em um vetor?
/*Marh.min() e Math.max() não conseguem trabalhar quando os numeros estão em um vetor*/
const nums = [2, -5, 4, 0, 11, -1]
minimo = Math.min(nums)
maximo = Math.max(nums)
console.log('Valores mínimo e máximo determinados a partir de um vetor:')
console.log({minimo, maximo})
console.log('-' .repeat(80))
/*A sintaxe de espelhamento (spreading), representada por... antes do nome de uma variavel que contém um vetor
ou um objeto, é capaz de "desempacotar" um vetor ou objeto em uma série de valores avulsos
*/
minimo = Math.min(...nums)
maximo = Math.max(...nums)
console.log('Valores calculados após aplicação do espelhamento no vetor:')
console.log({minimo, maximo})
/*OUTROS USOS PARA A SINTAXE DE ESPELHAMENTO */
const carro1 = {
    modelo: 'Impala',
    marca: 'Chevrolet',
    ano: 1967,
    cor: 'preto'
}
//"copioando" carro1 para carro2
//const carro2 = carro1 // não funciona
//para criar uma cópia real de um objeto(e não uma nova referencia a ele), podemos usar a sintaxe de espelhamento
//.Ela "desmonta" o objeto orinal e,
//mudando o valor das propriedades do carro2
carro2.modelo = 'camaro'
carro2.marca = 'Chevrolet'
carro2.ano = 2012
carro2.cor = 'amarelo'
console.log('-'.repeat(80))
//exibindo ambos os carros
console.log({carro1,carro2})