/* Este exercício é para gerar quantidades e notas aleatorias e retornar a menor delas */

function rand(max = 10){
  const valormaximo = Math.random() * (max - 1) + 1;
  return valormaximo.toFixed(2);
}

const quantidadeNotas = () => rand(100);


function gerarNotas(quantidadeNotas){
  const notas = [] 
  for (let i = 1; i < quantidadeNotas; i++){
    notas.push(rand());
  } 

  return notas
}


function minNota(gerarNota){
  console.log(gerarNota)
  nota = 10;
  for (notas of gerarNota ){
    if (nota > notas){
        nota = notas 
    }
  }
  return nota
  
}
console.log(minNota(gerarNotas(quantidadeNotas())));