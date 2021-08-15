const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

//Neste ponto coloquei uma exceção
//este simbolo _ dentro do parametro da fuuncao significa que nao possui importancia
const displayContent = (_,content) =>{
 try{
    console.log(content.toString())
 }catch(e){
    console.log(`Ocorreu um problema no arquivo pequeno gafanhoto erro = ${e} !`)
 }
}

fs.readFile(caminho,displayContent)   

console.log('Inicio Sync ...')
//Quando voce usa o sync ele faz sincrona ou seja ele espera ja no read file sem sync ele e assincrona durante a execução
const cont  = fs.readFileSync(caminho)
console.log(cont.toString())
console.log('Fim Sync ...')

