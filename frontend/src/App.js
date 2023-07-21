import React, { useState } from "react";

import "./App.css";

export default function App() {
  const buttonCyphers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operationCyphers = ["-", "+", "/", "*"];

  const [calcMemory, setCalcMemory] = useState('');
  const [calcInput, setCalcInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  return <div className="App"></div>;
}
