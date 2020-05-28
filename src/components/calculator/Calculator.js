import React, {Fragment} from 'react';
import './calculator.css';

const Calculator = ({ initialValue, setInitialValue }) => {

    /*4.Empty array for the digits*/
    const calc = [];

    /*set data in the input*/
    let setData = e => {
        e.preventDefault();
        const data = parseFloat(initialValue);
        setInitialValue(data + e.target.value);
    }

    /*5.Build buttons with the digits*/
    [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].forEach(data => {
        calc.push(
                <button
                    key={data}
                    value={data}
                    className="squareButtons border btn btn-light"
                    onClick={setData}
                > {data} </button>
        );
    });

    /*Variable para validar no ingresar más de un simbolo*/
    const str = (initialValue.toString()).substr(-1);

    /*Add Operation*/
    const append = e => {
        e.preventDefault();
        if(str === '+' || str === '-' || str === '*' || str === '/') return null;

        setInitialValue(initialValue + e.target.value)
    }


  return(
      <Fragment>
          {/*1.Calculator container*/}
          <div className="card calculatorContent">

              {/*2.Display container - Initialize with initialValue prop*/}
              <div className="displayContainer font-weight-normal">{initialValue}</div>

              {/*3.Keyboard container*/}
              <div className="keyBoardContainer">

                  {/*8. Add button*/}
                  <button
                      value="+"
                      className="squareButtons btn btn-light operationButtons border"
                      onClick={append}
                  > + </button>

                  <button className="squareButtons btn btn-light operationButtons border"> - </button>
                  <button className="squareButtons btn btn-light operationButtons border"> x </button>
                  <button className="squareButtons btn btn-light operationButtons border"> / </button>

                  {/*6. Show Buttons of the digits*/}
                  {calc}

                  {/*7.Clear Button*/}
                  <button
                      className="squareButtons btn btn-danger border"
                      onClick={() => {setInitialValue("0")}}
                  > AC </button>

                  {/*9.Equal Button*/}
                  <button
                      value="="
                      className="equal border btn btn-primary"
                  > = </button>


              </div>
          </div>
      </Fragment>
  );
};

export default Calculator;
