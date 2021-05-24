// 11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
// mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
// efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
// vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
// vendedor. 

class salarioFunc {
    constructor(NumCarrosVendidos, valorTotalVendas, salarioFixo, valorComissaoFixa) {
        this.NumCarrosVendidos = NumCarrosVendidos;
        this.valorTotalVendas = valorTotalVendas;
        this.salarioFixo = salarioFixo;
        this.valorComissaoFixa = valorComissaoFixa;
    }

    valorPorCarroVendidos() {
        return this.valorComissaoFixa * this.NumCarrosVendidos;
    }

    valorVendas() {
        return this.valorTotalVendas * 0.05;
    }

    valorSalario() {
        return this.salarioFixo + this.valorPorCarroVendidos() + this.valorVendas();
    }
}

const salarioFuncionario = new salarioFunc(10, 50, 1000, 2)
console.log(salarioFuncionario.valorSalario())