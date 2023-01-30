const $num1 = document.querySelector("#num1");
const $num2 = document.querySelector("#num2");
const $num3 = document.querySelector("#num3");
const $inputMsg = document.querySelector("#inputMsg");

function checkPassword() {

    const num1 = Number($num1.value);
    const num2 = Number($num2.value);
    const num3 = Number($num3.value);

    if (num1 === 9 && num2 === 1 && num3 === 1) {
        $inputMsg.innerHTML = "Password 1 es correcto";
    }
    else if (num1 === 7 && num2 === 1 && num3 === 4) {
        $inputMsg.innerHTML = "Password 2 es correcto";
    } else {
        $inputMsg.innerHTML = "Password incorrecto";
    }

}