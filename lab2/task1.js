function sumOfDigits(number) {
    // make it string!
    let numberStr = number.toString();
    let sum = 0;

    for (let i = 0; i < numberStr.length; i++) {
        sum += parseInt(numberStr[i]);
    }

    return sum;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(456));
console.log(sumOfDigits(789));