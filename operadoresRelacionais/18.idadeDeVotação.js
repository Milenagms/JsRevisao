// 18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
// poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

const idadeDevotacao = (anoNascimento, anoAtual) => {
    if (anoAtual < anoNascimento) return false
    const idade = anoAtual - anoNascimento
    return idade
}

const valida = (idade) => {
    if (idade >= 18) {
        return 'Pode votar '
    }
    return 'Não pode votar '
}


console.log(valida(idadeDevotacao(2005, 2021)))
