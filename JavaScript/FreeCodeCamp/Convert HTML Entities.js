function convertHTML(str) {
const regex = /['"<>&]/gi
const lettersRegex = str.replace(regex,replaceRegex => {
  if(replaceRegex === "'" || replaceRegex === '"'){
    return (replaceRegex === "'")?"&apos;":'&quot;' 
  }else if(replaceRegex === "<" || replaceRegex === ">"){
    return (replaceRegex === "<") ? "&lt;":"&gt;"
  }else{
    return "&amp;"
  }

}) 
  return lettersRegex;
}

convertHTML("Dolce & Gabbana")

// metodo do frecodecamp

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");