// 16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
// compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
// escreva o custo total da compra. 


function cost(appleQuantities) {
    if (appleQuantities < 12) {
        return ` The value was with the promotion: R$${appleQuantities * 1.30}`
    }
    return ` The value was: R$${appleQuantities}`
}

console.log(cost(13))