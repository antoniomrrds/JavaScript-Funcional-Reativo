const carrinho =[
    {nome: 'Caneta', qtde: 10,preco:7.99},
    {nome: 'Impressora', qtde: 0,preco:649.50},
    {nome: 'Caderno', qtde: 4,preco:27.10},
    {nome: 'Lapis', qtde: 3,preco:5.82},
    {nome: 'tesoura', qtde: 1,preco:19.20}
]

const getTotal = item => item.qtde * item.preco
const somar =(acumulador,elemento) => {
    console.log(acumulador ,elemento)
    return acumulador + elemento
}

const totais = carrinho.map(getTotal)
    console.log(totais)
const totalGeral = totais
      .reduce(somar,0);// o segundo parametro e numero que irá comecar a contar 
console.log(totalGeral);