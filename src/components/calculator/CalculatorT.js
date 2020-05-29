import React, {Fragment, useState} from "react";
import './calculator.css';
import {buildEcuation} from '../../helper';

const CalculatorT = ({ecuation,setEcuation}) => {

    const [operatorExist, setOperatorExist] = useState(false);

    const {input, initialValue, operation, secondValue} = ecuation;

    const displayInput = e => {
        e.preventDefault();
        setEcuation({
            ...ecuation,
            input: input + e.target.value
        });
    }

    const displaySecondInput = e => {
        e.preventDefault();
        if(initialValue !== '') {
            setEcuation({
                ...ecuation,
                input: input + e.target.value,
                secondValue: input + e.target.value
            })
        }
    }

    const displayDecimal = e => {
        e.preventDefault();
        if(input.indexOf('.') === -1){
            setEcuation({
                ...ecuation,
                input: input + e.target.value,
                secondValue: input + e.target.value
            });
        }

        if(input !== ''){
            setEcuation({
                ...ecuation,
                input: input + e.target.value,
                secondValue: input + e.target.value
            });
        }
    }

    const addOperation = e => {
        e.preventDefault();
        setOperatorExist(true);
        const selectOperator = buildEcuation(e.target.value);
        setEcuation({
            ...ecuation,
            initialValue: input,
            input: '',
            operation: selectOperator });
    }

    const equal = () => {
        const operation = ecuation.operation;
        const second = ecuation.secondValue;
        setOperatorExist(false);

        if(operation === '+' && second !== ''){
            setEcuation({
                input: String(eval(parseFloat(initialValue) + parseFloat(secondValue))),
            });
        }

        if(operation === '-' && second !== ''){
            setEcuation({
                input: String(eval(parseFloat(initialValue) - parseFloat(secondValue)))
            });
        }

        if(operation === '*' && second !== ''){
            setEcuation({
                input: String(eval(parseFloat(initialValue) * parseFloat(secondValue)))
            });
        }

        if(operation === '/' && second !== ''){
            setEcuation({
                input: String(eval(parseFloat(initialValue) / parseFloat(secondValue)))
            });
        }
    }

    const cleanAll = () => {
        setEcuation({
            input:'',
            initialValue:'',
            operation:'',
            secondValue:'',
            result: ''
        })
        setOperatorExist(false);
    }

    return(
        <Fragment>
            {/*1.Calculator container*/}
            <div className='card calculatorContent'>

                {/*2.Display container - Initialize with initialValue prop*/}
                <div className='displayContainer font-weight-normal' id='display'>{input}</div>

                {/*3.Keyboard container*/}
                <div className='keyBoardContainer'>

                    {/*8. Add button*/}
                    <button value='+' name='+' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> + </button>
                    <button value='-' name='-' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> - </button>
                    <button value='*' name='*' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> &times; </button>
                    <button value='/' name='/' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> &divide; </button>

                    {/*6. Show Buttons of the digits*/}
                    <button value='7' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 7 </button>
                    <button value='8' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 8 </button>
                    <button value='9' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 9 </button>
                    <button value='4' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 4 </button>
                    <button value='5' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 5 </button>
                    <button value='6' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 6 </button>
                    <button value='3' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 3 </button>
                    <button value='2' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 2 </button>
                    <button value='1' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 1 </button>
                    <button value='0' className="squareButtons border btn btn-light" onClick={(!operatorExist) ? displayInput : displaySecondInput }> 0 </button>

                    {/*Decimal*/}
                    <button value='.' className="squareButtons border btn btn-light" onClick={displayDecimal}> . </button>

                    {/* 7.Clear Button*/}
                    <button className="squareButtons btn btn-danger border" onClick={cleanAll}> AC </button>

                    {/*9.Equal Button*/}
                    <button value="=" className="equal border btn btn-primary" onClick={equal}> = </button>

                </div>
            </div>
        </Fragment>
    );
};

export default CalculatorT;
