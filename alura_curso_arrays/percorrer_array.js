const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10,7,9,6]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

//includes verifica se um elemento do array existe e retorna um boolean 
//indexOf retorna a posição do elemento no array

const exibeNomeNota = (nomeDoAluno) => { 
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é ' + listaDeNotasEAlunos[1][indice]
    }
    else{
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("João"))