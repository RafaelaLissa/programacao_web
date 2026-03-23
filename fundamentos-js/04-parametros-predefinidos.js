/*calcArea() é uma função que calcula a a´rea de uma figura geométrica
plana, dados a base, a altura e o tipo da forma 
*/
// O parametro tipo foi transformado em predifinido,com valor padrão 'R'
 function calcArea(base, altura,tipo){
    switch(tipo){
        case 'R':  //Retânguglo
        return base * altura
        case 'T':  //Triângulo
        return base * altura /2
        case 'E':  // Elipse/ circulo
        return (base /2) * (altura / 2) * Math.PI
        default:   // Formas inválidas/desconhecidas
        return undefined
    }
 }
 console.log(`Área triângulo 10x30: ${calcArea(10,30, 'T')}`)
 console.log(`Área elipse (circulo) 7,5x7,5: ${calcArea(7.5,7.5, 'E')}`)
 console.log(`Área retângulo 12,5x15,5: ${calcArea(12.8,15.5, 'R')}`)
 console.log(`Área forma inválida 8x17: ${calcArea(8,17, 'H')}`)
 // Chamando a função com apenas dois parametros
 console.log(`Área retângulo 20x40: ${calcArea(20,40)}`)
 /*REGRAS PARA O USO DE PARAMETROS PREDIFINIDOS
 1)O parametro predifinido deve vir sempre POR ULTIMO na lista de parametros de uma função
 2) Pode haver mais de um parametro predifinido. Nesse caso, devem ser sempre os ULTIMOS.
  */
 