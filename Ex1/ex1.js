import PromptSync from "prompt-sync"

const prompt = PromptSync()

function valores(v1, v2, v3) {
    
    if (v1 > v2 && v1 > v3) {
        return v1
    } else if (v2 > v1 && v2 > v3){
        return v2
    } else {
        return v3
    }
}

console.log(`Esse programa mostra a maior variável dentre três escolhidas pelo usuário!`)

let v1 = prompt("Digite a variável 1: ")
let v2 = prompt("Digite a variável 2: ")
let v3 = prompt("Digite a variável 3: ")

const maior = valores(v1, v2, v3)

console.log(`A variável maior é: ${maior}`)