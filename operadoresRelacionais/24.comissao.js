// 24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
// ultrapassar este valor, calcular e escrever o seu salário total. 

(function (salarioFixo, ValorVendasFeitas) {
    function calculaComissao() {
        if (ValorVendasFeitas <= 1500) {
            return ValorVendasFeitas * 0.03;

        }
        return ValorVendasFeitas * 0.05;
    }

    function salarioFinal() {
        const salarioTotal = calculaComissao() + salarioFixo
        return salarioTotal
    }
    console.log(salarioFinal())

})(1700, 1800)