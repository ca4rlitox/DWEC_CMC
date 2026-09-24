// Calcular factorial

let numero = parseInt(prompt("Introduce el número para calcular su factorial."))
let aux = 1
for (let i = 1;i<numero;i++) {
    aux*=i
}
console.log(`El factorial de ${numero} es ${aux}`)