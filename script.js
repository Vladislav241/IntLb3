const expression = document.getElementById('expression');

function press(value) {
    expression.value += value;
}

function clearDisplay() {
    expression.value = '';
}

function calculate() {
    try {
        expression.value = eval(expression.value.replace('×', '*').replace('÷', '/'));
    } catch (e) {
        alert("Неправильний вираз!");
        clearDisplay();
    }
}
