function convert() {
    let inputNumber = document.getElementById('inputNumber').value.trim();
    let fromSystem = document.getElementById('fromSystem').value;
    let toSystem = document.getElementById('toSystem').value;
    let outputResult = document.getElementById('outputResult');

    if (inputNumber === "") {
        outputResult.textContent = "Kérlek, adj meg egy számot!";
        return;
    }

    let decimalNumber;

    
    switch (fromSystem) {
        case 'binary':
            if (!/^[01]+$/.test(inputNumber)) {
                outputResult.textContent = "Érvénytelen bináris szám!";
                return;
            }
            decimalNumber = parseInt(inputNumber, 2);
            break;
        case 'decimal':
            if (!/^\d+$/.test(inputNumber)) {
                outputResult.textContent = "Érvénytelen decimális szám!";
                return;
            }
            decimalNumber = parseInt(inputNumber, 10);
            break;
        case 'octal':
            if (!/^[0-7]+$/.test(inputNumber)) {
                outputResult.textContent = "Érvénytelen oktális szám!";
                return;
            }
            decimalNumber = parseInt(inputNumber, 8);
            break;
        case 'hexadecimal':
            if (!/^[0-9a-fA-F]+$/.test(inputNumber)) {
                outputResult.textContent = "Érvénytelen hexadecimális szám!";
                return;
            }
            decimalNumber = parseInt(inputNumber, 16);
            break;
        default:
            outputResult.textContent = "Érvénytelen forrás számrendszer!";
            return;
    }


    let result;

    switch (toSystem) {
        case 'binary':
            result = decimalNumber.toString(2);
            let binaryLength = Math.max(inputNumber.length, 8);
            result = result.padStart(binaryLength, '0');
            break;
        case 'decimal':
            result = decimalNumber.toString(10);
            break;
        case 'octal':
            result = decimalNumber.toString(8);
            break;
        case 'hexadecimal':
            result = decimalNumber.toString(16).toUpperCase();
            break;
        default:
            outputResult.textContent = "Érvénytelen cél számrendszer!";
            return;
    }

    outputResult.textContent = `Eredmény: ${result}`;
}
