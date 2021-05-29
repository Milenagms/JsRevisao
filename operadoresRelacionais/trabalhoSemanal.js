// 22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
// de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
// o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
// (considere que o mês possua 4 semanas exatas). 

class HorasExtras {
    constructor(horasMensais, salarioHora) {
        this.horasMensais = horasMensais
        this.salarioHora = salarioHora
        this.mensalNomal = 40 * 4
    }


    valorPorHoraExtra() {
        return (this.salarioHora / 2) + this.salarioHora
    }

    horaExtra() {
        return this.horasMensais - this.mensalNomal
    }

    salarioNormal() {
        return this.mensalNomal * this.salarioHora
    }

    valorHoraextra() {
        return this.valorPorHoraExtra() * this.horaExtra() + this.salarioNormal();
    }
}

const holerite = new HorasExtras(170, 5)
console.log(holerite.valorHoraextra())
console.log(holerite.salarioNormal())
