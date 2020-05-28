import React, { Fragment, useState } from 'react';

import Calculator from './components/calculator/Calculator';

function App() {
    /*State for the Initial value of the calculator*/
  const [initialValue, setInitialValue] = useState(0);

  return (
      <Fragment>
          <Calculator
              initialValue={initialValue}
              setInitialValue={setInitialValue}
              />
      </Fragment>
  );
}

export default App;
