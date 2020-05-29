import React, {Fragment, useState} from "react";
import './calculator.css';
import {buildEcuation} from '../../helper';

const CalculatorT = ({ecuation,setEcuation}) => {

    const [operatorExist, setOperatorExist] = useState(false);

    let {input, initialValue, operation, secondValue} = ecuation;

    const displayInput = e => {
        e.preventDefault();
        while(input.charAt(0) === '0'){
            input = input.substr(1);
        }
            setEcuation({
                ...ecuation,
                input: input + e.target.value,
            });
    }

    const displaySecondInput = e => {
        e.preventDefault();
        if(initialValue !== '') {
            while(input.charAt(0) === '0'){
                input = input.substr(1);
            }
            setEcuation({
                ...ecuation,
                input: input + e.target.value,
                secondValue: input + e.target.value
            })
        }
    }

    const displayDecimal = e => {
        e.preventDefault();
        if(input.includes('.')) return null;
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

        /*If the user change his mind and change the operation*/
        if(input === ''){
            setEcuation({
                ...ecuation,
                input: '',
                operation: selectOperator
            })
        }

 /*       if(initialValue !== '' && secondValue !== ''){
            const operation = ecuation.operation;
            const second = ecuation.secondValue;
            setOperatorExist(false);

            if(operation === selectOperator && second !== ''){
                setEcuation({
                    input: String(eval(parseFloat(initialValue) + parseFloat(secondValue))),
                    initialValue: input,
                    secondValue: ''
                });
            }
        }*/

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
            input:'0',
            initialValue:'',
            operation:'',
            secondValue:'',
            result: ''
        })
        setOperatorExist(false);
    }

    /*4.Empty array for the digits*/
    const calc = [];
    /*5.Build buttons with the digits*/
    ['7', '8', '9', '4', '5', '6', '1', '2', '3','0'].map(data => {
        calc.push(
            <button
                value={data}
                className="squareButtons border btn btn-light"
                onClick={(!operatorExist) ? displayInput : displaySecondInput }>
                {data}
            </button>
        );
    });

    return(
        <Fragment>
            {/*1.Calculator container*/}
            <div className='card calculatorContent'>

                {/*2.Display container - Initialize with initialValue prop*/}
                <div className='displayContainer font-weight-normal' id='display'>{input}</div>

                {/*3.Keyboard container*/}
                <div className='keyBoardContainer'>

                    {/*8. Operation Buttons*/}
                    <button value='+' name='+' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> + </button>
                    <button value='-' name='-' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> - </button>
                    <button value='*' name='*' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> &times; </button>
                    <button value='/' name='/' className='squareButtons btn btn-light operationButtons border' onClick={addOperation}> &divide; </button>

                    {/*6. Show Buttons of the digits*/}
                    {calc}

                    {/*Decimal Button*/}
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
