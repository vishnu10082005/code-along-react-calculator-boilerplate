import React, { useState } from 'react';
import '../App.css';
import Buttons from './buttons/buttons';
const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };
  const calculateResult = () => {
    try {
      let res = eval(input);
      setResult(res.toString());
    } catch (error) {
      setResult('Error');
    }
  };
  const clearInput = () => {
    setInput('');
    setResult('');
  };
  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <div className='Calculator'>
      <div className='input'>
        <h4>Input</h4>
        <input type='text' value={input}  />
        <h4>Output</h4>
        <input type='text' value={result}  />
      </div>
      <div className='Buttons'>
        <button style={{ backgroundColor: 'red' }} onClick={clearInput}>A/C</button>
        <button onClick={deleteLast}>DEL</button>
        <Buttons value='.' onClick={() => handleInput('.')} />
        <Buttons value='+' onClick={() => handleInput('+')} />
        <Buttons value='7' onClick={() => handleInput('7')} />
        <Buttons value='8' onClick={() => handleInput('8')} />
        <Buttons value='9' onClick={() => handleInput('9')} />
        <Buttons value='/' onClick={() => handleInput('/')} />
        <Buttons value='4' onClick={() => handleInput('4')} />
        <Buttons value='5' onClick={() => handleInput('5')} />
        <Buttons value='6' onClick={() => handleInput('6')} />
        <Buttons value='*' onClick={() => handleInput('*')} />
        <Buttons value='1' onClick={() => handleInput('1')} />
        <Buttons value='2' onClick={() => handleInput('2')} />
        <Buttons value='3' onClick={() => handleInput('3')} />
        <Buttons value='-' onClick={() => handleInput('-')} />
        <Buttons value='0' onClick={() => handleInput('0')} />
        <button style={{ gridColumn: 'span 3', backgroundColor: '#49A109' }} onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;