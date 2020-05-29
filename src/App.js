import React, {Fragment, useState} from 'react';
import CalculatorT from "./components/calculator/CalculatorT";
import Calculator from './components/calculator/Calculator';

function App() {

    const [ecuation , setEcuation] = useState({
        input:'0',
        initialValue:'',
        operation:'',
        secondValue:''
    })

  return (
      <Fragment>
          {/*<Calculator/>*/}
          <CalculatorT
              ecuation={ecuation}
              setEcuation={setEcuation}
          />
      </Fragment>
  );
}

export default App;
