
// Escreva  um  algoritmo  para  ler  as  dimensões  de  um  retângulo  (base  e  altura),  calcular  e  escreve r  a área do retângulo.

function calulaAreaRetangulo(altura, largura){
  if (altura > largura) return 'não é um retangulo';
  areaRetangulo = altura * largura;
  return areaRetangulo;
}
console.log(calulaAreaRetangulo(30, 50))