export function addSecondValue(e, setEquation, equation, input) {
  setEquation({
    ...equation,
    input: input + e.target.value,
    secondValue: input + e.target.value,
  });
}
export function buildEcuation(op) {
  let sign = '';

  switch (op) {
    case '+':
      sign = '+';
      break;

    case '-':
      sign = '-';
      break;

    case '*':
      sign = '*';
      break;

    case '/':
      sign = '/';
      break;

    default:
      break;
  }

  return sign;
}

export function evaluate(
  operation,
  setEquation,
  initialValue,
  secondValue,
  input,
  equation
) {
  if (operation === '+' && secondValue !== '') {
    setEquation({
      input: String(parseFloat(initialValue) + parseFloat(secondValue)),
    });
  }

  if (operation === '-' && secondValue !== '') {
    setEquation({
      input: String(parseFloat(initialValue) - parseFloat(secondValue)),
    });
  }

  if (operation === '*' && secondValue !== '') {
    setEquation({
      input: String(parseFloat(initialValue) * parseFloat(secondValue)),
    });
  }

  if (operation === '/' && secondValue !== '') {
    setEquation({
      input: String(parseFloat(initialValue) / parseFloat(secondValue)),
    });
  }

  /*If the user use one of the operation button for get the result*/
  /****IMPORTANT: This part is not 100% correctly functional, missing some validations *****/
  /*  if (operation === '+') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String((parseFloat(initialValue) + parseFloat(secondValue))),
    });
  }
  if (operation === '-') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String((parseFloat(initialValue) - parseFloat(secondValue))),
    });
  }
  if (operation === '*') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String((parseFloat(initialValue) * parseFloat(secondValue))),
    });
  }
  if (operation === '/') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String((parseFloat(initialValue) / parseFloat(secondValue))),
    });
  }*/
}

/*===IMPORTANT===
 * this function works, but present a little problem with the function evaluate.
 * The problem is when i use this function and then the other (evaluate) the result
 * is incorrect, result a NaN or a concatenation of the values.*/
/*export function evaluateWithOperationButton(
  operation,
  initialValue,
  secondValue,
  input,
  setOperatorExist,
  setEquation
) {
  if (initialValue !== '' && secondValue !== '') {
    setOperatorExist(false);

    if (operation === '+') {
      setEquation({
        input: String((parseFloat(initialValue) + parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '+',
      });
    }
    if (operation === '-') {
      setEquation({
        input: String((parseFloat(initialValue) - parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '-',
      });
    }
    if (operation === '*') {
      setEquation({
        input: String((parseFloat(initialValue) * parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '*',
      });
    }
    if (operation === '/') {
      setEquation({
        input: String((parseFloat(initialValue) / parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '/',
      });
    }
  }
}*/
