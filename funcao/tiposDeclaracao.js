console.log(soma(3, 4))

// function declaration - pode ser chama antes da funcao
function soma(x, y) {
    return x + y
}

// function expression - só é chamada dps de funcao ser declarada
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression - só é chamada dps de funcao ser declarada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))