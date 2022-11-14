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

const addMencao = (array_object) => {
    let novo_array = []
    array_object.forEach((aluno) => {
        let mencao
        let nota = aluno.mediaFinal

        if(nota < 5){
            mencao = 'RR'
        }
        else if(nota < 7){
            mencao = 'MM'
        }
        else if(nota < 9){
            mencao = 'MS'
        }
        else{
            mencao = 'SS'
        }
        aluno = {
            ...aluno,
            mencao: mencao
        }
        novo_array.push(aluno)
    })
    return novo_array
}

// console.log(addMencao(exemplo))