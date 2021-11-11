//Forma Funcional

function pairElement(str) {
  const obj = {}
  const dnaTape = Array.from(str).map(dna => {
    obj.baseNOne = dna
   let nitrogenBases;
    if(obj.baseNOne === 'G' || obj.baseNOne === 'C' ) nitrogenBases = (obj.baseNOne === 'G') ? 'C' : 'G'
    else nitrogenBases = (obj.baseNOne === 'T') ? 'A':'T'
    
    obj.baseNtwo = nitrogenBases
    return Object.values(obj)
  })

  return dnaTape;
}


  
  const r =
  // pairElement("aTCGa")
pairElement("TTGAG")
// pairElement("GCG");

//   pairElement("GCG");
  console.log(r)


  //Forma Imperativa
function pairElement(str) {
    const dnaTape = []
  for(let  i = 0;i<str.length;i++ ){
  const obj = {
      par: str[i].toUpperCase(),
    }
  let nitrogenBases;
   switch(obj.par){
     case 'A':
         nitrogenBases = 'T'
    break;
     case 'T':
         nitrogenBases = 'A'
      break;
     case 'C':
         nitrogenBases = 'G'
      break;
     case 'G':
         nitrogenBases = 'C'
      break;
   }
    obj.par2  = nitrogenBases
   dnaTape.push(Object.values(obj))
  
  }
    return dnaTape;
  }
  
  const r =
  // pairElement("aTCGa")
  pairElement("TTGAG")
  // pairElement("GCG");
  console.log(r)
  