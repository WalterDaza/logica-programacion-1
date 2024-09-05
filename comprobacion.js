const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Escriba el primer número: "));
let numero1 = parseInt(prompt("Escriba el segundo número: "));
let numero2 = parseInt(prompt("Escriba el tercer número: "));

let totalNumeros = [numero, numero1, numero2]

const numerosorden = totalNumeros.slice().sort()
let numerosrevers = numerosorden.slice().reverse()

for(let i =0; i < totalNumeros.length - 1; i++){
    if(totalNumeros[i] === totalNumeros[i+1] || totalNumeros[i] === totalNumeros[i+2]){
        console.log(`El número ${totalNumeros[i]} esta dos veces o más`)
        break;
    } else {
        console.log("Numeros ordenados de menor a mayor:", numerosorden);
        console.log("Numeros ordenados de mayor a menor:", numerosrevers);
        break;
    }
}

