
const readLine = require('readline');

function getAnswer(answer) {
    //Bliblioteca para pegar as entradas e saidas de dados
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    return new Promise(resolve => {
        rl.question(answer, resp => {
            resolve(resp)
            rl.close()
        })
    })
}
// Observer
const girlfriend = _ => console.log('N: apagar as luzes... \nN: Pedir silêncio ... \nN:Supresa !!!');

// Observer
const syndic = _ => console.log('S: Monitorando o barulho !!!');

// Subject e o que monitora a situação
async function concierge(interested) {
    while (true) {
        const resp = await getAnswer('O Aniversariante Chegou ? (s/N/q)')
        if (resp.toLowerCase() === 's') {
            // os observadores sao notificados
            (interested || []).forEach(obs => obs());
        } else if (resp.toLowerCase() === 'q') {
            break;
        }
    }
}

/**
 * Chamada da Função -> Registra os dois observadores! 
 * Os Observadores são  : girlfriend  e syndic
O Subject é o concierge! 
*/


concierge([girlfriend, syndic]);

