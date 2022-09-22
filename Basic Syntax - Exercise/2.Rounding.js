function Rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }
    let finalNumber = number.toFixed(precision);

    console.log(parseFloat(finalNumber));
}
Rounding(10.5, 3);