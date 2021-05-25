// 13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
// Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
// final é: 


class mediaNota {
    constructor(nota1, nota2, nota3) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    mediaFinal() {
        const notaFinal = this.nota1 * 2 + this.nota2 * 3 + this.nota3 * 5
        return notaFinal
    }
}

const notaAluno = new mediaNota(2, 2, 2)
console.log(notaAluno.mediaFinal())