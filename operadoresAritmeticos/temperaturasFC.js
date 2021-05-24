// 12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
// correspondente em graus Celsius (baseado na fórmula abaixo): 


class temperatura {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    deFParaC() {
        return ((this.fahrenheit - 32) * 5) / 9
    }
}

const emCelsius = new temperatura(212)
console.log(emCelsius.deFParaC())