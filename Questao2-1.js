exemplo = [
    {
        nome: "Aluno1",
        idade: 18,
        mediaFinal: 7,
    },
    {
        nome: "Aluno2",
        idade: 17,
        mediaFinal: 10,
    },
    {
        nome: "Aluno3",
        idade: 16,
        mediaFinal: 3,
    },
    {
        nome: "Aluno4",
        idade: 19,
        mediaFinal: 8,
    },
    {
        nome: "Aluno5",
        idade: 21,
        mediaFinal: 5,
    },
    {
        nome: "Aluno6",
        idade: 35,
        mediaFinal: 6,
    }    
]

const classStatistics = (array_object) => {
    let notas = []
    let n = array_object.length
    let total = 0
    let alunosAprovados = []
    let alunosReprovados = []
    array_object.forEach((aluno) => {
        let nota = aluno.mediaFinal
        notas.push(nota)
        total += nota
        if (nota < 5){
            alunosReprovados.push(aluno.nome)
        }
        else {
            alunosAprovados.push(aluno.nome)
        }
    })

    // calculando média total da turma
    let mediaTurma = total / n

    // calculando desvio padrão da turma
    let numerador_dp = 0
    notas.forEach((nota) => {
        numerador_dp += (nota - mediaTurma)**2
    })
    let desvioPadrao = (numerador_dp / n)**(1/2)

    // imprime no console o que foi pedido no item 1 da letra A (Questão 2)
    console.log(`A média da turma é igual a ${mediaTurma}`)
    console.log(`O desvio padrão da turma é igual a ${desvioPadrao} `)

    // imprime no console o que foi pedido no item 2 da letra A (Questão 2)
    console.log(`Alunos aprovados: ${alunosAprovados}\nTotal de alunos aprovados: ${alunosAprovados.length}`)
    console.log(`Alunos reprovados: ${alunosReprovados}\nTotal de alunos reprovados: ${alunosReprovados.length}`)
}

// classStatistics(exemplo)