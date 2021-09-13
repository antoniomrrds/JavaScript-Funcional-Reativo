function Produto(nome,preco, desc = 0.50){
    this.nome = nome
    this.preco = preco
    this._desc = desc 

    this.precoFinal = () =>  this.preco * (1 - this._desc)
}

Object.defineProperty(Produto.prototype,'descString',{
    get: function(){
        return `${this._desc * 100}%`
    }
})
Object.defineProperty(Produto.prototype,'desc',{
    get: function(){
        return `O Desconto é : ${this._desc}`
    },set: function(novoDesc){
        if(novoDesc >=0 && novoDesc  <=1){
            this._desc = novoDesc
        }
    }
})



Produto.prototype.log = function(){
    console.log(`Nome: ${this.nome} Preço R$ ${this.preco}`)
}


const p1 = new Produto('Caneta',10)
console.log(p1.nome)
p1.log()
const p2 = new Produto('Geladeira',3000)
console.log(p2.precoFinal())
p2.desc = 0.99 
console.log(p2.preco)
console.log(p2._desc)
console.log(p2.descString)


 