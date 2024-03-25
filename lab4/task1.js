function findMinimum(a, b, c) {
    return a <= b && a <= c ? a : (b <= a && b <= c ? b : c);
}

// Пример использования
console.log(findMinimum(2, 5, 3));
console.log(findMinimum(600, 342, 123));
console.log(findMinimum(25, 21, 4));