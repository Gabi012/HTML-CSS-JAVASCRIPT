function Conta(divisor, dividendo){
    
    let result = dividendo / divisor
    let resto = dividendo % divisor
    
    return console.log(`Resultado: ${result} Resto: ${resto}`)
}
Conta(10,4)