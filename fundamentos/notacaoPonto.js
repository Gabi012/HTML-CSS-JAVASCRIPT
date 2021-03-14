console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' <- isso adiciona no objeto tbm
console.log(obj1.nome)


function Obj (nome){
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}



function Ler(obj){
     console.log("print: " + obj.nome)
    
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
console.log('teste')

Ler(obj1)
Ler(obj2)
Ler(obj3)