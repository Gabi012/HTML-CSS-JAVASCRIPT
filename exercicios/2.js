function Triangulo (l1,l2,l3){
    if(l1 == l2 && l2 == l3 && l3 ==l1){
        console.log('Equilatero')
    }else{
        if(l1 == l2 || l2 == l3 ||l3==l1 ){
            console.log('isosceles')
        }else{
            console.log('escaleno')
        }
    }


}
Triangulo(1,1,1)
Triangulo(4,4,1)
Triangulo(1,4,1)
Triangulo(1,2,3)