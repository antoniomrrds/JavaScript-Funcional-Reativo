const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise(function (resolve, reject) {
        let arquivos = fs.readdirSync(caminho)
        try {
            resolve(arquivos.map(arquivos => path.join(caminho, arquivos)))
            // console.log(arquivos)
        } catch (e) {
            reject('OOps algo deu errado')
        }
    })


}

// const texto = ["lista de arquivos mp3:" ,'jazz.mp3','rock.srt',"podcast.txt","blues.mp3"]



const filterExtesion = (array,extension) => {
    let regex =  new RegExp(`\\w+\\${extension}` , "gi")
    return result =  array.filter(ex => ex.match(regex))
}



module.exports = {
    lerDiretorio,
    filterExtesion
}