import React, { useState } from 'react';

import Calculator from './components/Calculator';
import './App.css';

export default function App() {
  const buttonCyphers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operationCyphers = ['÷', '×', '+', '-', '.', '='];

  const [page, setPage] = useState('Calculator');
  const [calcMemory, setCalcMemory] = useState('');
  const [calcInput, setCalcInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');

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
      />
    );
  } else {
    currentPage = <div>ERROR! PAGE NOT FOUND</div>;
  }

  return <div className='App'>{currentPage}</div>;
}
