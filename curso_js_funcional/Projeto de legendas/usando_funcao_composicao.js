const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'legendas')


const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]



const mostUsedWords = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumero,
    fn.agruparElementos,
    fn.ordernarPorAtribNumerico('qtde', 'desc'),
    )
    mostUsedWords(caminho)
        .then(console.log)

