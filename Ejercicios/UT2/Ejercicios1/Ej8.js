function esBisiesto(anyo) {

    let anyoString = toString(anyo)
    let anyoUltimo = anyoString[3]
    let anyoPenultimo = anyoString[2]
    
    if (anyo % 4 != 0) {
        return 0;
    } else if (anyoUltimo === "0" && anyoPenultimo === "0" && anyo != 2000 && anyo != 2400 && anyo % 400 != 0) {
            return 0;
    } else {
        return 1;
    }

}
esBisiesto(3000)