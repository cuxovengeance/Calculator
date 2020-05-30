import React, { Fragment, useState } from 'react';
import Calculator from './components/calculator/Calculator';

function App() {
  const [equation, setEquation] = useState({
    input: '0',
    initialValue: '',
    operation: '',
    secondValue: '',
  });

  return (
    <Fragment>
      <Calculator equation={equation} setEquation={setEquation} />
    </Fragment>
  );
}

export default App;
