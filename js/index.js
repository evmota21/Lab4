function resetButton(event){
    console.log("Clckeaste reset!");
    digito = 0;
    digito2 = 0;
    operador = 0;
    input[0].value = "";
    result.value = "";
}
function equalsButton(event){
    console.log("Clckeaste equals!");
    switch(operador){
        case 1:
            digito2 = Number(input[0].value);
            result.value = digito + digito2;
            console.log({digito});
            console.log({digito2});
            log.value += "\n" + digito + " " + "+ " + digito2 + " = " + result.value;
            break;
        case 2:
            digito2 = Number(input[0].value);
            result.value = digito - digito2;
            console.log({digito});
            console.log({digito2});
            log.value += "\n" + digito + " " + "- " + digito2 + " = " + result.value;
            break;
        case 3:
            digito2 = Number(input[0].value);
            result.value = digito * digito2;
            console.log({digito});
            console.log({digito2});
            log.value += "\n" + digito + " " + "* " + digito2 + " = " + result.value;
            break;
        case 4:
            digito2 = Number(input[0].value);
            result.value = digito / digito2;
            console.log({digito});
            console.log({digito2});
            log.value += "\n" + digito + " " + "/ " + digito2 + " = " + result.value;
            break;
    }
}
function sumaButton(event){
    console.log("Clckeaste suma!");
    var numInput = input[0].value;
    digito = Number(numInput);
    input[0].value = "";
    operador = 1;
    console.log({digito});
}
function restaButton(event){
    console.log("Clckeaste resta!");
    var numInput = input[0].value;
    digito = Number(numInput);
    input[0].value = "";
    operador = 2;
    console.log({digito});
}
function multButton(event){
    console.log("Clckeaste mult!");
    var numInput = input[0].value;
    digito = Number(numInput);
    input[0].value = "";
    operador = 3;
    console.log({digito});
}
function divButton(event){
    console.log("Clckeaste div!");
    var numInput = input[0].value;
    digito = Number(numInput);
    input[0].value = "";
    operador = 4;
    console.log({digito});
}

var digito = 0;
var digito2 = 0;
var operador = 0;


const input = document.getElementsByClassName("inputNumber");
const result = document.getElementById("resultValue");
const reset = document.getElementsByClassName("resetButton");
const equal = document.getElementsByClassName("equalButton");
const suma = document.getElementById("addButton");
const resta = document.getElementById("substractButton");
const mult = document.getElementById("multiplicationButton");
const div = document.getElementById("divisionButton");
const log = document.getElementById("logInformation");



var valor = input[0].value;

reset[0].addEventListener('click', resetButton);
equal[0].addEventListener('click', equalsButton);
suma.addEventListener('click', sumaButton);
resta.addEventListener('click', restaButton);
mult.addEventListener('click', multButton);
div.addEventListener('click', divButton);


console.log("imprimiendo valor...");
console.log(suma);
console.log({valor});