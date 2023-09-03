import PromptSync from "prompt-sync"

const prompt = PromptSync()

function encontrarMaiorMenor(listaDeNumeros) {
  if (listaDeNumeros.length === 0) {
    console.log("A lista está vazia.");
    return;
  }

  let maior = listaDeNumeros[0];
  let menor = listaDeNumeros[0];

  for (let i = 1; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] > maior) {
      maior = listaDeNumeros[i];
    }
    if (listaDeNumeros[i] < menor) {
      menor = listaDeNumeros[i];
    }
  }

  console.log("O maior valor é: " + maior);
  console.log("\nO menor valor é: " + menor);
}

console.log("Esse código mostra o maior e menor valor de uma lista pré definida no sistema!\n")

const listaDeNumeros = [20, 62, 6, 920, -5, 0];
encontrarMaiorMenor(listaDeNumeros);

console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)
