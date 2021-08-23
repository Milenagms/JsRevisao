// 01. Crie uma função que recebe um array de números e coloque eles em ordem crescente. Não use o método sort.

function ordemCrescente(args) {
    let array = [];
    let repeticoes = args.length;
    for (let i = 0; i < repeticoes; i++) {
        let menor = 99999999999999999999999999999999999999;
        let indexARemover = 0;

        args.forEach((element, index) => {
            if (element < menor) {
                menor = element;
                indexARemover = index;

            }
        });

        array.push(menor);
        args.splice(indexARemover, 1);

        console.log("Args", args)
    }

    console.log(array)
}

ordemCrescente([4, 3, 5, 6, 578, 1])