// parnome/valor
const saudacao = 'Opa' //contexto léxico

function exec() {
    const saudacao = 'falaa' // contexto 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 50,
    endereco: {
        logradouro: 'Rua Mario',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)