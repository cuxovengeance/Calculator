import React, {Fragment} from 'react';
import './calculator.css';

const Calculator = ({ initialValue, setInitialValue }) => {
  /*4.Build buttons with the digits*/
    const btnDigits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'].map(data => (
        <button
            key={data}
            value={data}
            className="squareButtons border btn btn-light"
            onClick={e => {setInitialValue(initialValue + e.target.value)}}
        > {data} </button>
        )
    );

  return(
      <Fragment>
          {/*1.Calculator container*/}
          <div className="card calculatorContent">

              {/*2.Display container - Initialize with initialValue prop*/}
              <div className="displayContainer font-weight-normal">{initialValue}</div>

              {/*3.Keyboard container*/}
              <div className="keyBoardContainer">

                  <button className="squareButtons btn btn-light operationButtons border"> + </button>
                  <button className="squareButtons btn btn-light operationButtons border"> - </button>
                  <button className="squareButtons btn btn-light operationButtons border"> x </button>
                  <button className="squareButtons btn btn-light operationButtons border"> / </button>

                  {btnDigits}

                  {/*4.Clear Button*/}
                  <button
                      className="squareButtons btn btn-danger border"
                      onClick={() => {setInitialValue(0)}}
                  > AC </button>
                  <button className="equal border btn btn-primary"> = </button>

              </div>
          </div>
      </Fragment>
  );
};

export default Calculator;
