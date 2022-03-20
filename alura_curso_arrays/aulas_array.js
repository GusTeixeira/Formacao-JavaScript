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

//console.log(array3)

//Filter
function isBigEnough(value) {
    return value >= 10;
  }
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

//Slice

const nomes = ['Joao', 'Juliena', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline',
'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan',
'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

//console.log(`Alunos da Sala 1: ${sala1}`)
//console.log(`Alunos da Sala 2: ${sala2}`)

//Splice

const listaDeChamada = ['Joao', 'Juliena', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme']

listaDeChamada.splice(1,2, 'Rodrigo')

//console.log(`Lista de chamada ${listaDeChamada}`);

const salaDePython = ['Melissa', 'Helena', 'Rodrigo']
const salaDeJava = ['Ju', 'Leo', 'Raquel']
const salaUnificada = salaDeJava.concat(salaDePython)

console.log(salaUnificada)

