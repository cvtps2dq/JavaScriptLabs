function binaryToDecimal(binaryString) {
    let decimalNumber = 0;
    let exponent = 0;

    for (let i = binaryString.length - 1; i >= 0; i--) {
        // convert to number
        // again, love ternary <3
        let bit = binaryString.charAt(i) === '1' ? 1 : 0;

        // add a value of current bit, multiplied by 2 in bit's position power
        decimalNumber += bit * Math.pow(2, exponent);

        // next power
        exponent++;
    }

    console.log(decimalNumber);
}

binaryToDecimal("00001001");
binaryToDecimal("11110000");