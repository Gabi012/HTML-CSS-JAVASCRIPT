function Bhaskara(a,b,c){
    let v = []
    let delta = b**2 - 4*a*c
    if(delta <=0) {
        console.log('Delta negativo')
       }else{
            let x1 = (-b + Math.sqrt(delta))/ 2 *a
            let x2 = (-b - Math.sqrt(delta))/ 2 *a
            v.push(x1)
            v.push(x2)
            console.log(v)
       }
    }
    
Bhaskara(1, 3, 2)
Bhaskara(3, 1, 2)