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
      input: String(eval(parseFloat(initialValue) + parseFloat(secondValue))),
    });
  }

  if (operation === '-' && secondValue !== '') {
    setEquation({
      input: String(eval(parseFloat(initialValue) - parseFloat(secondValue))),
    });
  }

  if (operation === '*' && secondValue !== '') {
    setEquation({
      input: String(eval(parseFloat(initialValue) * parseFloat(secondValue))),
    });
  }

  if (operation === '/' && secondValue !== '') {
    setEquation({
      input: String(eval(parseFloat(initialValue) / parseFloat(secondValue))),
    });
  }

  /*If the user use one of the operation button for get the result*/
/*  if (operation === '+') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String(eval(parseFloat(initialValue) + parseFloat(secondValue))),
    });
  }
  if (operation === '-') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String(eval(parseFloat(initialValue) - parseFloat(secondValue))),
    });
  }
  if (operation === '*') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String(eval(parseFloat(initialValue) * parseFloat(secondValue))),
    });
  }
  if (operation === '/') {
    setEquation({
      ...equation,
      secondValue: input,
      input: String(eval(parseFloat(initialValue) / parseFloat(secondValue))),
    });
  }*/
}

export function evaluateWithOperationButton(
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
        input: String(eval(parseFloat(initialValue) + parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '+',
      });
    }
    if (operation === '-') {
      setEquation({
        input: String(eval(parseFloat(initialValue) - parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '-',
      });
    }
    if (operation === '*') {
      setEquation({
        input: String(eval(parseFloat(initialValue) * parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '*',
      });
    }
    if (operation === '/') {
      setEquation({
        input: String(eval(parseFloat(initialValue) / parseFloat(secondValue))),
        initialValue: input,
        secondValue: '',
        operation: '/',
      });
    }
  }
}
