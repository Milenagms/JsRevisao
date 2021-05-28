// 21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
//     minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
//     de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 


function calculaHora(inicio, fim) {
    const horaJogo = fim - inicio
    if (horaJogo > 24) return false
    return horaJogo
}

console.log(calculaHora(17, 24))