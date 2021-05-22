// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário, com os descontos de inss, pensao alimenticia e IRPF.

class calculandoSalario{
  constructor(salarioAntigo, pensaoAlimenticia =  0, dependentes = 0, reajuste = 0){
    this.salarioAntigo = salarioAntigo;
    this. pensaoAlimenticia = pensaoAlimenticia;
    this.dependentes = dependentes;
    this.reajuste = reajuste;
    
  }

  calculaSalario(){
    if (this.salarioAntigo === 0){
      return this.salarioAntigo
    }else{
      const percentual = this.reajuste/100;
      const salarioReajustado = (this.salarioAntigo * percentual) + this.salarioAntigo;
        return salarioReajustado
    }
   
  }

  faixaINSS(){
    const salarioNovo = this.calculaSalario();
    const nivel = [0.075, 0.09, 0.12, 0.14];
   
    if (salarioNovo >= 6433.57) return nivel [3];
    if (salarioNovo >= 2203.49) return nivel [2];
    if (salarioNovo >= 1100.01) return nivel [1];
    if (salarioNovo <= 1100) return nivel [0];
      return
  }

  reducaoINSS(){ 
    const faixa = this.faixaINSS();
    const reducao = [16.50, 82.60, 148,71];
    if (faixa == 0.14) return reducao[2];
    if (faixa == 0.12) return reducao[1];
    if (faixa == 0.09) return reducao[0];
      return 
  }

  faixaIRPF(){
    const semINSS = this.calculandoIRPF();
    const nivel = [0, 0.075, 0.15, 0.225, 0.275];
   
    if (semINSS >= 4664.69) return nivel [4];
    if (semINSS >= 3751.06) return nivel [3];
    if (semINSS >= 2826.66) return nivel [2];
    if (semINSS >= 1903.99) return nivel [1];
    if (semINSS < 1903.98) return nivel [0];
      return
  }

  reducaoIRPJ(){ 
    const faixa = this.faixaIRPF();
    const reducao = [142.80, 354.80, 636.13, 869.36];
    if (faixa == 0.075) return reducao[0];
    if (faixa == 0.15) return reducao[1];
    if (faixa == 0.225) return reducao[2];
    if (faixa == 0.275) return reducao[3];
      return 
  }


  calculandoINSS(){
    return (this.calculaSalario() * this.faixaINSS()) - this.reducaoINSS()
  }

  calculandoIRPF(){

    return this.calculaSalario()-(this.calculandoINSS() + this.pensaoAlimenticia + (this.dependentes * 189.59))
   
  }

  valorIRPF(){
    const valorDependentes = this.dependentes
    return ((this.calculandoIRPF(valorDependentes) * this.faixaIRPF()) - this.reducaoIRPJ()).toFixed(2);
  }

  salarioComDescontos(){
   return  this.calculaSalario() - this.calculandoINSS() - this.pensaoAlimenticia - this.valorIRPF()
  }

}


const salarioFinal = new calculandoSalario(3000, 200, 1);
console.log(salarioFinal.salarioComDescontos())

