import PromptSync from "prompt-sync"
import readline from "readline"

const prompt = PromptSync()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function ColetarDadosCliente() {
  rl.question("Digite o nome do cliente (deixe em branco para sair): ", function(nome) {
    if (nome === "") {
      console.log(`\nEncerrando programa!\n`)
      rl.close()
    } else {
      ColetarHobbies(nome, [])
    }
  })
}

function ColetarHobbies(nome, hobbies) {
  rl.question("\nDigite um hobby (deixe em branco para sair da lista): ", function(hobby) {
    if (hobby === "") {
      const hobbiesFormatados = hobbies.join(", ")
      console.log(`\nNome: ${nome} | Hobbies: ${hobbiesFormatados}\n`)
      ColetarDadosCliente()
    } else {
      hobbies.push(hobby)
      ColetarHobbies(nome, hobbies)
    }
  })
}

console.log(`\nEste programa coleta dados do cliente, como o Nome e o Hobby!\n`)

ColetarDadosCliente()

