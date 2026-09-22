function esBisiesto(anyo) {
    anyoInt = parseInt(anyo)
    if (anyoInt % 4 != 0) {
        return 0;
    } else if (anyoInt % 400 != 0 && anyoInt > 400) {
        return 0;
    } else {
        return 1;
    }

}
esBisiesto(3000)