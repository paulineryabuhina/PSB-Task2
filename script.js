const operators = ["*", "/", "-", "+", "=", "(", ")"];
const resultDisplay = document.getElementById('display');
const historyDisplay = document.getElementById('history');

resultDisplay.addEventListener("input", function(event) {
    const inputValue = event.data;
    if (!isNaN(inputValue) || operators.includes(inputValue)) {
    } else {
        const currentValue = resultDisplay.textContent;
        resultDisplay.textContent = currentValue.slice(0, -1);
    }
});

resultDisplay.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

function addToDisplay(value) {
    if (resultDisplay.textContent === '') {
        resultDisplay.textContent = value;
    } else {
        resultDisplay.textContent += value;
    }
}

function calculateResult() {
    const expression = resultDisplay.textContent;
    const answer = eval(expression);
    resultDisplay.textContent = answer;
    historyDisplay.textContent = expression;
}

function clearAll() {
    resultDisplay.textContent = '';
}

function clearLast() {
    let currentValue = resultDisplay.textContent;
    resultDisplay.textContent = currentValue.slice(0, -1);
}
function copyToClipboard() {
    const textToCopy = resultDisplay.textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('Результат скопирован в буфер обмена!');
    }, function(err) {
        console.error('Не удалось скопировать текст: ', err);
    });
}
