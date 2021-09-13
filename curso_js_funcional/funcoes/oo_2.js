class Produto{
    constructor( nome, preco,desc =0.5){
        this._nome = nome
        this.preco = preco
        this.desc = desc
    }

get name (){
    return ` Produto: ${this._nome}`
}

set setName(name){
     this._nome = name

}

   get  precoFinal(){
            return this.preco*(1 - this.desc)
    }
}


const p1 = new Produto('Caneta',10)
console.log(p1.name)
p1.setName = "panela"
console.log(p1.name)


const p2 = new Produto('Geladeira',1000,0.8)
console.log(p2.preco)
console.log(p2.precoFinal.toFixed(2))
