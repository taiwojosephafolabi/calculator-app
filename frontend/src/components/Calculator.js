import React from 'react';

function Calculator({calculatorApp}) {
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'></div>
        <div className='current-operand'></div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      {/* Input numbers and operands */}
      <button></button>
    </div>
  );
}

export default Calculator;
