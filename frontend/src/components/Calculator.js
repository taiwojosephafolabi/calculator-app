import React from 'react';

function Calculator({ ACTIONS, reducer, dispatch, calculatorApp, buttonCyphers, operationCyphers, currentOperand, previousOperand, operation }) {
  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>{operationCyphers[0]}</button>
      <button>{buttonCyphers[0]}</button>
      <button>{buttonCyphers[1]}</button>
      <button>{buttonCyphers[2]}</button>
      <button>{operationCyphers[1]}</button>
      <button>{buttonCyphers[3]}</button>
      <button>{buttonCyphers[4]}</button>
      <button>{buttonCyphers[5]}</button>
      <button>{operationCyphers[2]}</button>
      <button>{buttonCyphers[6]}</button>
      <button>{buttonCyphers[7]}</button>
      <button>{buttonCyphers[8]}</button>
      <button>{operationCyphers[3]}</button>
      <button>{operationCyphers[4]}</button>
      <button>{buttonCyphers[9]}</button>
      <button className='span-two'>{operationCyphers[5]}</button>
    </div>
  );
}

export default Calculator;
