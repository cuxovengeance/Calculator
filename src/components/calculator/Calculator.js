import React, { Fragment, useState } from 'react';
import './calculator.css';
import {
  addSecondValue,
  buildEcuation,
  evaluate,
  evaluateWithOperationButton,
} from '../../helper';

const Calculator = ({ equation, setEquation }) => {
  /*State for knowing if the user selected a operator*/
  const [operatorExist, setOperatorExist] = useState(false);

  let { input, initialValue, operation, secondValue } = equation;

  /*Function for add a value to initialValue and show it in the display*/
  const displayInput = (e) => {
    e.preventDefault();
    while (input.charAt(0) === '0') {
      input = input.substr(1);
    }
    setEquation({
      ...equation,
      input: input + e.target.value,
    });
  };

  /*Function for add a second value*/
  const displaySecondInput = (e) => {
    e.preventDefault();
    if (initialValue !== '') {
      while (input.charAt(0) === '0') {
        input = input.substr(1);
      }
      addSecondValue(e, setEquation, equation, input);
    }
  };

  /*Function for add a decimal*/
  const displayDecimal = (e) => {
    e.preventDefault();
    if (input.includes('.')) return null;
    if (input.indexOf('.') === -1) {
      addSecondValue(e, setEquation, equation, input);
    }

    if (input !== '') {
      addSecondValue(e, setEquation, equation, input);
    }
  };

  /*Function for add a operation*/
  const addOperation = (e) => {
    e.preventDefault();
    setOperatorExist(true);
    const selectOperator = buildEcuation(e.target.value);
    setEquation({
      ...equation,
      initialValue: input,
      input: '',
      operation: selectOperator,
    });

    /*If the user change his mind and change the operation*/
    if (input === '') {
      setEquation({
        ...equation,
        input: '',
        operation: selectOperator,
      });
    }

    /*If the user use some of the operation button for get the result*/
    /* evaluateWithOperationButton(operation, initialValue, secondValue, input, setOperatorExist, setEquation);*/
  };

  /*Function for evaluate the equation and get a result*/
  const equal = () => {
    if (
      secondValue === '' ||
      input === '' ||
      initialValue === '' ||
      operation === ''
    )
      return null;
    setOperatorExist(false);
    evaluate(
      operation,
      setEquation,
      initialValue,
      secondValue,
      input,
      equation
    );
  };

  const cleanAll = () => {
    setOperatorExist(false);
    setEquation({
      input: '0',
      initialValue: '',
      operation: '',
      secondValue: '',
    });
  };

  /*4.Empty array for the digits*/
  const calc = [];
  /*5.Build buttons with the digits*/
  ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map((data) => {
    calc.push(
      <button
        key={data}
        value={data}
        className="squareButtons border btn btn-light"
        onClick={!operatorExist ? displayInput : displaySecondInput}
      >
        {data}
      </button>
    );
  });

  return (
    <Fragment>
      {/*1.Calculator container*/}
      <div className="card calculatorContent">
        {/*2.Display container - Initialize with initialValue prop*/}
        <div className="displayContainer font-weight-normal" id="display">
          {input}
        </div>

        {/*3.Keyboard container*/}
        <div className="keyBoardContainer">
          {/*8. Operation Buttons*/}
          <button
            id="append"
            value="+"
            name="+"
            className="squareButtons btn btn-light operationButtons border"
            onClick={addOperation}
          >
            {' '}
            +{' '}
          </button>
          <button
            id="minus"
            value="-"
            name="-"
            className="squareButtons btn btn-light operationButtons border"
            onClick={addOperation}
          >
            {' '}
            -{' '}
          </button>
          <button
            id="multiplication"
            value="*"
            name="*"
            className="squareButtons btn btn-light operationButtons border"
            onClick={addOperation}
          >
            {' '}
            &times;{' '}
          </button>
          <button
            id="division"
            value="/"
            name="/"
            className="squareButtons btn btn-light operationButtons border"
            onClick={addOperation}
          >
            {' '}
            &divide;{' '}
          </button>

          {/*6. Show Buttons of the digits*/}
          {calc}

          {/*7. Decimal Button*/}
          <button
            id="dot"
            value="."
            className="squareButtons border btn btn-light"
            onClick={displayDecimal}
          >
            {' '}
            .{' '}
          </button>

          {/* 8.Clear Button*/}
          <button
            id="ac"
            className="squareButtons btn btn-danger border"
            onClick={cleanAll}
          >
            {' '}
            AC{' '}
          </button>

          {/*9.Equal Button*/}
          <button
            id="equal"
            value="="
            className="equal border btn btn-primary"
            onClick={equal}
          >
            {' '}
            ={' '}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Calculator;
