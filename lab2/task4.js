function calculateResult(num1, operator, num2) {
    var result;

    // I love switch <3
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Неверный оператор.");
            return;
    }

    console.log(result.toFixed(2));
}

// Пример использования:
calculateResult(5, '+', 10);
calculateResult(25.5, '-', 3);