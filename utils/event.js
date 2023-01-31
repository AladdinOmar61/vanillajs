import { add, mult } from "./math";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multButton = document.getElementById('mult');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const addResult = document.getElementById('add-result');
    const multResult = document.getElementById('mult-result');
    const updateDomWithAddedNumbers = () => {
        addResult.innerHTML = add(number1.value, number2.value);
        //parseInt(number1.value, 10) + parseInt(number2.value, 10);
    }

    const updateDomWithAMultipliedNumbers = () => {
        multResult.innerHTML = mult(number1.value, number2.value);
        //parseInt(number1.value, 10) + parseInt(number2.value, 10);
    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multButton.addEventListener('click', updateDomWithAMultipliedNumbers);

}

export {eventHandler};