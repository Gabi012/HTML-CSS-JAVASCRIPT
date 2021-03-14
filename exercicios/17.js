function calcularReajuste(plano, salarioatual){
    switch (plano){
        case 'a':
            return salarioatual *  0.1 + salarioatual
            break
        case 'b':
            return salarioatual *  0.15 + salarioatual

        break
        case 'c':
            return salarioatual * 0.2  + salarioatual
        break
        default:
            return 'Plano inválido.'

    }
}

console.log(calcularReajuste('a', 1000));
console.log(calcularReajuste('b', 1000));
console.log(calcularReajuste('c', 1000));
console.log(calcularReajuste('d', 1000));