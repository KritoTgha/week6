import React, { useState } from 'react';
import './App.css';

function Calculator() {
  // State variables to store inputs, operator, and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  // Function to handle calculation
  const calculate = () => {
    const firstNumber = parseFloat(num1);
    const secondNumber = parseFloat(num2);
    let calcResult = 0;

    switch (operator) {
      case '+':
        calcResult = firstNumber + secondNumber;
        break;
      case '-':
        calcResult = firstNumber - secondNumber;
        break;
      case '*':
        calcResult = firstNumber * secondNumber;
        break;
      case '/':
        calcResult = secondNumber !== 0 ? firstNumber / secondNumber : 'Cannot divide by zero';
        break;
      default:
        calcResult = 'Invalid Operation';
    }

    setResult(`Result: ${calcResult}`);
  };

  return (
    <div style={{ padding: '20px', border: '2px solid #ccc', width: '300px', background: 'lightgreen' }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First Number"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <select
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      >
        <option value="+">Add</option>
        <option value="-">Subtract</option>
        <option value="*">Multiply</option>
        <option value="/">Divide</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second Number"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={calculate} style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
        Calculate
      </button>
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{result}</p>
    </div>
  );
}

export default Calculator;
