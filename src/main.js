import { calculate, toggleSign, toPercent } from './calculator.js';

/* ===== UI制御 ===== */

let currentValue = '0';
let previousValue = '';
let operator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');

function updateDisplay(value) {
  display.textContent = value;
}

function handleNumber(value) {
  if (currentValue === '0' || shouldResetDisplay) {
    currentValue = value;
    shouldResetDisplay = false;
  } else {
    currentValue += value;
  }
  updateDisplay(currentValue);
}

function handleOperator(op) {
  if (operator && !shouldResetDisplay) {
    const result = calculate(previousValue, operator, currentValue);
    previousValue = result.toString();
    updateDisplay(previousValue);
  } else {
    previousValue = currentValue;
  }
  operator = op;
  shouldResetDisplay = true;
}

function handleEquals() {
  if (!operator) return;
  const result = calculate(previousValue, operator, currentValue);
  currentValue = result.toString();
  updateDisplay(currentValue);
  previousValue = '';
  operator = null;
  shouldResetDisplay = true;
}

function handleClear() {
  currentValue = '0';
  previousValue = '';
  operator = null;
  shouldResetDisplay = false;
  updateDisplay('0');
}

function handleDecimal() {
  if (shouldResetDisplay) {
    currentValue = '0';
    shouldResetDisplay = false;
  }
  if (!currentValue.includes('.')) {
    currentValue += '.';
  }
  updateDisplay(currentValue);
}

function handleSign() {
  currentValue = toggleSign(currentValue);
  updateDisplay(currentValue);
}

function handlePercent() {
  currentValue = toPercent(currentValue);
  updateDisplay(currentValue);
}

/* ===== イベントリスナー ===== */

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    switch (action) {
      case 'number':
        handleNumber(value);
        break;
      case 'operator':
        handleOperator(value);
        break;
      case 'equals':
        handleEquals();
        break;
      case 'clear':
        handleClear();
        break;
      case 'decimal':
        handleDecimal();
        break;
      case 'sign':
        handleSign();
        break;
      case 'percent':
        handlePercent();
        break;
    }
  });
});
