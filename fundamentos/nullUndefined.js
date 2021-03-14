let valor //nao inicializado
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

// console.log(valor.toString()) // Erro!
const produto = {}
console.log(produto.preco)
produto.preco = 3.50;
console.log(produto)

produto.preco = undefined // evite atribuir undefined
//delete produto.preco
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)