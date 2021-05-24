// 10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
// distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
// seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
// calcular e escrever o custo final ao consumidor. 

class Carro {
    constructor(custoFabrica) {
        this.custoFabrica = custoFabrica;
        this.impostos = 45 / 100;
        this.distribuidor = 28 / 100;
    }

    custoImposto() {
        return this.custoFabrica * this.impostos

    }
    custoDistribuidor() {
        return this.custoFabrica * this.distribuidor;

    }

    valorCarro() {
        return this.custoDistribuidor() + this.custoImposto() + this.custoFabrica
    }


}



const valorFinal = new Carro(100)
console.log(valorFinal.valorCarro())