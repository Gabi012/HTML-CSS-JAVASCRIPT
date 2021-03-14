const escola = "Cod3r"
//retorna digito
console.log(escola.charAt(4))
//valor da tabela ascii
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))
//expressao regular -substitui todos os digitos pela letra e
// /\w/g substitui tudo
console.log(escola.replace(/\d/, 'e'))
//transforma em array
console.log('Ana, Maria, Pedro'.split(','))

//console.log('Ana, Maria, Pedro'.split(/./)) faz igual 

//console.log('C', escola.substring(1,4))