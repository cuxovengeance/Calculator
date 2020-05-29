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
