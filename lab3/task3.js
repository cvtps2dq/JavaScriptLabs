function rotateArray(array, rotations) {
    let rotatedArray = [...array]; // array copy

    // check if rotations is needed
    if (rotations > 0) {
        for (let i = 0; i < rotations; i++) {
            // move last -> first
            let firstElement = rotatedArray.shift();
            rotatedArray.push(firstElement);
        }
    } else if (rotations < 0) {
        // if negative, change the direction
        for (let j = 0; j > rotations; j--) {
            // move last -> first
            let lastElement = rotatedArray.pop();
            rotatedArray.unshift(lastElement);
        }
    }
    console.log(rotatedArray.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);