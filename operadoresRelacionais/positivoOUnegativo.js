// 15) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 

function positiveOrNegative(number) {
    const value = number < 0 ? "it's a negative number" : "it's a positive number"
    return value
}

console.log(positiveOrNegative(-1))