// 14) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
// contrário escrever NÃO É MAIOR QUE 10! 

function greaterThanTen(valor) {
    const valores = (valor > 10 ? 'It grater than Ten' : 'It not greater than ten');
    return valores
}

console.log(greaterThanTen(20))