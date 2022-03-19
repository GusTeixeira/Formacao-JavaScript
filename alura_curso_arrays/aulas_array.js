//Length
const notas = [10, 9, 8, 5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

//console.log(media)

//Push
notas.push(7);
media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length
//console.log(media)

//Pop
notas.pop()
//O código abaixo deu o resultado "NaN" not a number porquê o valor notas[4] foi removido com a função pop
//media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length
media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

//Concat
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

array1.concat(array2)

console.log(array1)
