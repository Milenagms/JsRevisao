// 19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 


function ordemCrescente(number1, number2) {
    if (number1 > number2) {
        return ` ${number2} ${number1}`
    }
    return ` ${number1} ${number2}`

}
console.log(ordemCrescente(14, 8))