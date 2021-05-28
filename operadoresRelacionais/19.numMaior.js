// 19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.


function numMaior(number1, number2) {
    if (number1 === number2) return false;
    if (number1 > number2) {
        return number1
    }
    return number2
}

console.log(numMaior(4, 4))