import { add, mult, divide, sub } from "./math";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multButton = document.getElementById('mult');
    const divideButton = document.getElementById('divide'); 
    const subButton = document.getElementById('subtract'); 
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const addResult = document.getElementById('add-result');
    const multResult = document.getElementById('mult-result');
    const divideResult = document.getElementById('divide-result');
    const subResult = document.getElementById('sub-result');
    const updateDomWithAddedNumbers = () => {
        addResult.innerHTML = add(number1.value, number2.value);
        //parseInt(number1.value, 10) + parseInt(number2.value, 10);
    }

    const updateDomWithMultipliedNumbers = () => {
        multResult.innerHTML = mult(number1.value, number2.value);
        //parseInt(number1.value, 10) + parseInt(number2.value, 10);
    }

    const updateDomWithDividedNumbers = () => {
        divideResult.innerHTML = divide(number1.value, number2.value);
        //parseInt(number1.value, 10) + parseInt(number2.value, 10);
    }

    const updateDomWithSubtractedNumbers = () => {
        subResult.innerHTML = sub(number1.value, number2.value);
        //parseInt(number1.value, 10) + parseInt(number2.value, 10);
    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multButton.addEventListener('click', updateDomWithMultipliedNumbers);
    divideButton.addEventListener('click', updateDomWithDividedNumbers);
    subButton.addEventListener('click', updateDomWithSubtractedNumbers);

}

export {eventHandler};