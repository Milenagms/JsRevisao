// 23) Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
// e mostre seu peso ideal, utilizando as seguintes fórmulas:
// - para sexo masculino: peso ideal = (72.7 * altura) - 58
// - para sexo feminino: peso ideal = (62.1 * altura) - 44.7 

const pesoIdeal = (altura, sexo) => {

    if (sexo == 'M') {
        let peso = (72.7 * altura) - 58
        return peso
    } else {
        if (sexo == 'F') {
            peso = (62.1 * altura) - 44.7
            return peso
        }
    }

    return 'dados incorretos '

}

const pessoa = pesoIdeal(1.69, 'M')
console.log(pessoa)