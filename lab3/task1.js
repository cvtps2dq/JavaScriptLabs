function modifyArray(array) {
    let modifiedArray = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        let modifiedValue;

        if (currentValue % 2 === 0) {
            modifiedValue = currentValue + i;
        } else {
            modifiedValue = currentValue - i;
        }

        modifiedArray.push(modifiedValue);

        originalSum += currentValue;
        modifiedSum += modifiedValue;
    }

    console.log(modifiedArray);
    console.log(originalSum);
    console.log(modifiedSum);
}

modifyArray([5, 15, 23, 56, 35]);
modifyArray([-5, 11, 3, 0, 2]);