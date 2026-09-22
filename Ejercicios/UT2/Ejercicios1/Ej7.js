let numero = parseInt(prompt("Introduce un número entero: "))

for (let i = 0; i < numero; i++) {
    let numeroActual = i
    for (let j = 0; j < i; j++) {
        console.log("*")
    }
    console.log("\n")
}