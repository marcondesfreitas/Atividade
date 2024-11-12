const juros = .2;
const desconto = .1;

batom = {
    nome: 'Batom MAC',
    cor: 'Vermelho',
    valor: 200
};

rimel = {
    nome: 'Rímel MAC',
    cor: 'Preto',
    valor: 350
};

function parcelamento(produto, numParcelas) {
    let valorParcelas
    let descontado
    
    if (numParcelas < 0 || numParcelas > 12 ) {
        console.log('Número de parcelas inválido.')
    } else {
        if (numParcelas <= 1) {
            descontado = produto.valor * desconto
            valorParcelas = produto.valor - descontado
            console.log('Você recebeu um desconto de R$' + descontado + ' por comprar à vista! O valor da compra é R$' + valorParcelas + '.');
                        
            return valorParcelas
        } else {
            if (numParcelas < 11) {
                valorParcelas = produto.valor / numParcelas
                console.log('O valor de cada parcela é R$' + valorParcelas + '.')
                
                return valorParcelas
            } else {
                valorParcelas = (produto.valor * (juros + 1)) / numParcelas
                console.log('O valor de cada parcela é R$' + valorParcelas + '.')
            
                return valorParcelas
            }
        }
    }
};

parcelamento(rimel, 6)
parcelamento(batom, 0)
parcelamento(rimel, 1)
parcelamento(rimel, 11)
parcelamento(batom, 917239071)