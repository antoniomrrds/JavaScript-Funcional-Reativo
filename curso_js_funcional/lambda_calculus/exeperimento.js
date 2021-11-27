Number.prototype.log= function(){console.log(+this)}
Function.prototype.log= function(){console.log(this.toString())}
//Função identidade
const I = a=>a

I(3).log()
I(I).log()


const SELF = f => f(f)

SELF(I).log()


const first = a => _ => a 

 first(7)(11).log()


const last = _ => b => b 

last(7)(11).log()

// o famososo flipe ous seja o giro 

const change = f => a=>b=> f(b)(a)
change(last)(7)(11).log()

// inverteu o primeiro e pegou o ultimo 
change(first)(7)(11).log()


const change2 = a=>b=> change(first)(b)(a)
change2(13)(20).log()


// bollean true e false 


const T = first 
const  F  = last
//para o quokka
T.toString = ()=>'Verdadeiro (first)'
F.toString = ()=>'Falso (last)'

T.log()
F.log()

//NOTE:
const NOT = a => a(F)(T)
NOT(F).log()

const AND = a => b=> a(b)(F)
AND(T)(T).log()


// or 
const OR = a => b =>a(T)(b)

OR(F)(T).log()


const EQ = a => b => a(b)(NOT(b))

//igualdade logica

EQ(T)(T).log()


EQ(T)(F).log()

EQ(F)(T).log()


EQ(F)(F).log()


const XOR = a=> b => NOT(EQ(a)(b))

XOR(F)(T).log()

