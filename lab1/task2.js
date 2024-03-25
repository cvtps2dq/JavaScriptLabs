function roundToPrecision(number, precision) {
    // limit the precision
    precision = Math.min(precision, 15);

    // rounding
    var roundedNumber = parseFloat(number.toFixed(precision));

    // make this string
    var roundedString = roundedNumber.toString();

    // delete right hand sign zeroes
    if (roundedString.indexOf('.') !== -1) {
        roundedString = roundedString.replace(/0+$/, ''); // right hand sign zeroes removal
        roundedString = roundedString.replace(/\.$/, ''); // delete decimal if it is a last char
    }
    console.log(roundedString);
}

roundToPrecision(3.1415926535897932384, 2);
roundToPrecision(10.5,3 );