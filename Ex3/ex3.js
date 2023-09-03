import PromptSync from "prompt-sync"

const prompt = PromptSync()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

if (numbers.length === 0) {
    return {
      maior: null,
      menor: null,
    }
}

let maior = numbers[0];
let menor = numbers[0];

for (const number of numbers) {
    if (number > maior) {
      maior = number;
    }
    if (number < menor) {
      menor = number;
    }
}

return {
    maior,
    menor,
}


console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)