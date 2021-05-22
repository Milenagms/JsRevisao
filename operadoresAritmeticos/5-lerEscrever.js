
// 5) Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor. 

class numAntecessor{
  constructor(numero){
    this.numero = numero;
  }

  Atencessor(){
    console.log(this.numero - 1);
    return;
  }
}

const numero = new numAntecessor('14');
console.log(numero)
numero.Atencessor();