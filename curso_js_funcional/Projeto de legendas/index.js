const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'legendas')




fn.lerDiretorio(caminho)
.then(arquivos => fn.filterExtesion(arquivos,'.txt'))
.then(console.log)
// .then()
// .catch(err => console.log(`Erro: ${err} !`))
// console.log(arquivos)
