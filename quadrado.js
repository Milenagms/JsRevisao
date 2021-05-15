//  Faça um programa que entre com 5 numeros e imprima o quadrado de cada número

function rand(max = 100){
  return Math.floor(Math.random() * (max - 1) + 1);
 
}
const valoresGerados = function gerarValores(){
  const valores = [] 
  for (let i = 1; i < 6; i++){
    valores.push(rand());
  }
  return valores
}
const valoresComRand = valoresGerados(rand())

const quadrado = valoresComRand.map(valor => valor ** 2);

console.log(`Esses são os valores BEFORE de ficar ao quadrado: ${valoresComRand}`)
console.log(`Esses são os valores AFTER de ficar ao quadrado: ${quadrado}`)
