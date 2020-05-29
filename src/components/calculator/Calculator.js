import React, {Fragment, useState} from 'react';
import './calculator.css';
import {buildEcuation} from '../../helper';

const Calculator = () => {

    const [initialValue, setInitialValue] = useState(0);
    const [secondValue, setSecondlValue] = useState(0);
    const [operator, setOperator] = useState('');
    const [operatorExist, setOperatorExist] = useState(false);

    const str = (initialValue.toString().substr(-1));

    const setInitial = e => {
        e.preventDefault();
        setInitialValue(parseFloat(initialValue + e.target.value));
    }

    const addOperator = e => {
        e.preventDefault();
        if(str === '+' || str === '-' || str === '*' || str === '/') return null;
        const selectedOperator = buildEcuation(e.target.value);
        setOperator(selectedOperator);
        setOperatorExist(true);
    }

    const setSecond = e => {
        e.preventDefault();
        setSecondlValue(parseFloat(secondValue + e.target.value));
    }

    const equal = e => {
        if(initialValue === 0 || secondValue === 0 || operator === '') return null;
        const ecuation = `${secondValue}  ${operator} ${initialValue} `;
        const result = eval(ecuation);
        console.log(result);
        setInitialValue(0);
        setSecondlValue(0);
        setOperatorExist(false);
        setOperator('');
    }

    const clearAll = e => {
        setInitialValue(0);
        setSecondlValue(0);
        setOperator('');
        setEc(0);
        setOperatorExist(false);
    }

    /*4.Empty array for the digits*/
    const calc = [];
    /*5.Build buttons with the digits*/
    [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(data => {
        calc.push(
                <button
                    key={data}
                    value={data}
                    name='input'
                    className="squareButtons border btn btn-light"
                    onClick={(operatorExist)? setInitial : setSecond }
                > {data} </button>
        );
    });

/*    const display = () => {
        if(secondValue === 0 && operator ===''){

        }
    }*/


  return(
      <Fragment>
          {/*1.Calculator container*/}
          <div className='card calculatorContent'>

              {/*2.Display container - Initialize with initialValue prop*/}
              <div className='displayContainer font-weight-normal' id='display'>{}</div>

              {/*3.Keyboard container*/}
              <div className='keyBoardContainer'>

                  {/*8. Add button*/}
                  <button
                      value='+'
                      name='+'
                      className='squareButtons btn btn-light operationButtons border'
                      onClick={addOperator}
                  > + </button>

                  <button
                      value='-'
                      name='-'
                      className='squareButtons btn btn-light operationButtons border'
                      onClick={addOperator}
                  > - </button>


                  <button
                      value='*'
                      name='*'
                      className='squareButtons btn btn-light operationButtons border'
                      onClick={addOperator}
                  > x </button>

                  <button
                      value='/'
                      name='/'
                      className='squareButtons btn btn-light operationButtons border'
                      onClick={addOperator}
                  > / </button>

                  {/*6. Show Buttons of the digits*/}
                  {calc}

        {/*          Decimal*/}
                  <button
                      value='.'
                      className="squareButtons border btn btn-light"
                      onClick={(operatorExist)? setInitial : setSecond }
                  > . </button>

                 {/* 7.Clear Button*/}
                  <button
                      className="squareButtons btn btn-danger border"
                      onClick={clearAll}
                  > AC </button>

                  {/*9.Equal Button*/}
                  <button
                      value="="
                      className="equal border btn btn-primary"
                      onClick={equal}
                  > = </button>


              </div>
          </div>
      </Fragment>
  );
};

export default Calculator;
