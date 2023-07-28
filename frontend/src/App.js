import React, { useReducer } from 'react';
// import Calculator from './components/Calculator';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import './App.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }

      if (payload.digit === 0 && state.currentOperand == 0) {
        return state;
      }

      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) return state;

      if (state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
};

const evaluate = ({ previousOperand, currentOperand, operation }) => {
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(previous) || isNaN(current)) {
    return '';
  }
  let computation = '';
  switch (operation) {
    case '+':
      computation = previous + current;
      break;
    case '-':
      computation = previous - current;
      break;
    case '×':
      computation = previous * current;
      break;
    case '÷':
      computation = previous / current;
      break;
  }
  return computation.toString();
};

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

const formatOperand = (operand) => {
  if (operand == null) return;

  const [integer, decimal] = operand.split('.');

  if (decimal == null) return INTEGER_FORMATTER.format(integer);

  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });

  const buttonCyphers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
  const operationCyphers = ['÷', '×', '+', '-', '='];

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>
          {formatOperand(previousOperand)} {operation}
        </div>
        <div className='current-operand'>{formatOperand(currentOperand)}</div>
      </div>
      <button
        className='span-two'
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>
      <OperationButton operation={operationCyphers[0]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[0]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[1]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[2]} dispatch={dispatch} />
      <OperationButton operation={operationCyphers[1]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[3]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[4]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[5]} dispatch={dispatch} />
      <OperationButton operation={operationCyphers[2]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[6]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[7]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[8]} dispatch={dispatch} />
      <OperationButton operation={operationCyphers[3]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[10]} dispatch={dispatch} />
      <DigitButton digit={buttonCyphers[9]} dispatch={dispatch} />
      <button
        className='span-two'
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        {operationCyphers[4]}
      </button>
    </div>
  );
}

export default App;
