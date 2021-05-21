
// 7) Faça  um  algoritmo que  leia  a  idade de  uma  pessoa expressa em  anos,  
// meses e  dias  e  escreva a  idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 

class pessoaIdade{
  constructor(ano, mes, dias){
    this.ano = ano;
    this.mes = mes;
    this.dias = dias;
  }

  anos(){
    const age = this.ano * 365
    return age
  }

  mess(){
    const meses = this.mes * 30
    return meses
  }

  idadeFinal(){
    return this.anos() + this.mess() + this.dias
  }

}







const idade = new pessoaIdade(1, 1, 1)
console.log('Sua idade em dias são: ' + idade.idadeFinal());