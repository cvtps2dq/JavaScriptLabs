function isMagicMatrix(matrix) {
    // is matrix empty?
    if (matrix.length === 0) {
        return false;   // :(
    }

    // first row sum for checks
    let sumRow = 0;
    for (let j = 0; j < matrix[0].length; j++) {
        sumRow += matrix[0][j];
    }

    // rows checks
    for (let i = 1; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        if (sum !== sumRow) {
            return false;
        }
    }

    // columns sum checks
    for (let j = 0; j < matrix[0].length; j++) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            sum += matrix[i][j];
        }
        if (sum !== sumRow) {
            return false;
        }
    }
    return true;
}

console.log(isMagicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(isMagicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(isMagicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));