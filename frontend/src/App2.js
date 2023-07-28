/* eslint-disable default-case */
import React, { useState } from 'react';

import Calculator from './components/Calculator';
import './App.css';

export default function App() {
  const buttonCyphers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operationCyphers = ['÷', '×', '+', '-', '.', '='];

  const [page, setPage] = useState('Calculator');
  // const [calcMemory, setCalcMemory] = useState('');
  // const [calcInput, setCalcInput] = useState('');
  // const [answer, setAnswer] = useState('');
  // const [error, setError] = useState('');

  // const ACTIONS = {
  //   ADD_DIGIT: 'add-digit',
  //   DELETE_DIGIT: 'delete-digit',
  //   CLEAR: 'clear',
  //   CHOOSE_OPERATION: 'choose-operation',
  //   EVALUATE: 'evaluate',
  // };

  // const reducer = (state, { type, payload }) => {
  //   switch (type) {
  //     case ACTIONS.ADD_DIGIT:
  //       return {
  //         ...state,
  //         currentOperand: `${currentOperand || ''}${payload.digit}`,
  //       };
  //   }
  // };

  // const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
  //   reducer,
  //   {}
  // );

  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });

  const calculatorApp = () => {
    setPage('Calculator');
  };

  let currentPage;
  if (page === 'Calculator') {
    currentPage = (
      <Calculator
        calculatorApp={calculatorApp}
        buttonCyphers={buttonCyphers}
        operationCyphers={operationCyphers}
        // ACTIONS={ACTIONS}
        // reducer={reducer}
        // dispatch={dispatch}
        // currentOperand={currentOperand}
        // previousOperand={previousOperand}
        // operation={operation}
        
      />
    );
  } else {
    currentPage = <div>ERROR! PAGE NOT FOUND</div>;
  }

  return <div className='App'>{currentPage}</div>;
}
