// 8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

class calculaVotos{
  constructor(brancos, nulos, validos){
    this.brancos = brancos;
    this.nulos = nulos;
    this.validos = validos;
  }

  somatodos(){
    const eleitoresTotal = this.brancos + this.nulos + this.validos;
      return eleitoresTotal;
  }

  votosPorcentagem(valor){
    const percentual = (valor * 100) / this.somatodos();
      return percentual.toFixed(2);
  }
}

const votos = new calculaVotos(40, 30, 80);
console.log(votos.somatodos());

const brancos = votos.votosPorcentagem(votos.brancos);
const nulos = votos.votosPorcentagem(votos.nulos);
const validos = votos.votosPorcentagem(votos.validos);
console.log(brancos +'%' , nulos +'%', validos +'%')