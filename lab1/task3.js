function checkDivisibility(number) {
    if (number % 10 === 0) {
        console.log("Can be divided by 10");
    } else if (number % 7 === 0) {
        console.log("Can be divided by 7");
    } else if (number % 6 === 0) {
        console.log("Can be divided by 6");
    } else if (number % 3 === 0) {
        console.log("Can be divided by 3");
    } else if (number % 2 === 0) {
        console.log("Can be divided by 2");
    } else {
        console.log("Prime number. No divisions.");
    }
}

checkDivisibility(30);
checkDivisibility(15);
checkDivisibility(12);
checkDivisibility(1643);