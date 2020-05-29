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
        setInitialValue(initialValue + e.target.value);
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
        setSecondlValue(secondValue + e.target.value);
    }

    const equal = e => {
        /*if(initialValue === '0' || secondValue === 0 || operator === '') return null;
        const ecuation = `${secondValue}  ${operator} ${initialValue} `;
        const result = eval(ecuation);
        console.log(result);
        setInitialValue(result);
        setSecondlValue(0);
        setOperatorExist(false);
        setOperator('');*/
    }

    const clearAll = e => {
        setInitialValue(0);
        setSecondlValue(0);
        setOperator('');
        setOperatorExist(false);
    }

    /*4.Empty array for the digits*/
    const calc = [];
    /*5.Build buttons with the digits*/
    ['7', '8', '9', '4', '5', '6', '1', '2', '3'].map(data => {
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


  return(
      <Fragment>
          {/*1.Calculator container*/}
          <div className='card calculatorContent'>

              {/*2.Display container - Initialize with initialValue prop*/}
              <div className='displayContainer font-weight-normal' id='display'> </div>

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
                  > &times; </button>

                  <button
                      value='/'
                      name='/'
                      className='squareButtons btn btn-light operationButtons border'
                      onClick={addOperator}
                  > &divide; </button>

                  {/*6. Show Buttons of the digits*/}
                  {calc}

                  {/*Zero*/}
                  <button
                      value='0'
                      className="squareButtons border btn btn-light"
                      onClick={(operatorExist)? setInitial : setSecond }
                  > 0 </button>

                  {/*Decimal*/}
                  <button
                      value='.'
                      className="squareButtons border btn btn-light"
                      onClick={setInitial}
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
