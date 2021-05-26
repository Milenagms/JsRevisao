// 17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
// aluno é aprovado). Escrever também a média calculada. 


class Notas {
    constructor(nota1, nota2) {
        this.nota1 = nota1;
        this.nota2 = nota2
    }

    calculaMedia() {
        const media = (this.nota1 + this.nota2) / 2
        return media
    }
}

const notasAlunos = new Notas(2, 2)
if (notasAlunos.calculaMedia() >= 6) {
    console.log(`This student was approved with an average of: ${notasAlunos.calculaMedia()}`)
} else {
    console.log(`This student was reproved with an average of: ${notasAlunos.calculaMedia()}`)
}

