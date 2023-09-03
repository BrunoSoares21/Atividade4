import PromptSync from "prompt-sync"

const prompt = PromptSync()

function tabuada(num, limite) {
    
    for (let i = 1; i <= limite; i++) {
        const total = numDigitado * i
        console.log(`${numDigitado} X ${i} = ${total}`)
    }

}

const num = numDigitado(prompt('Informe um número para para saber sua tabuada: '))

const limite = limiteDigitado(prompt('Informe um número limite para realizar a tabuada: '))

const executarTabuada = tabuada(num, limite)

console.log(`${executarTabuada}`)