function resetButton(event){
    console.log("Clckeaste reset!");
    digito = 0;
    digito2 = 0;
    operador = 0;
    input[0].value = "";
    result.value = "";
    operadores = [];
    digitos = [];
    input[0].focus();
}
function equalsButton(event){
    console.log("Clckeaste equals!");
    digito = Number(input[0].value);
    digitos.push(digito);
    var stringLog = "\n" + digitos[0] + " " + operadores[0] + " ";
    var resultado = digitos[0];
    for(var i = 0; i<operadores.length; i++){
        switch(operadores[i]){
            case "+":
                resultado += digitos[i+1];
                stringLog += digitos[i+1] + " ";
                if(i != operadores.length-1){
                    stringLog += operadores[i+1] + " ";
                }
                input[0].focus();
                break;
            case "-":
                resultado -= digitos[i+1];
                stringLog += digitos[i+1] + " ";
                if(i != operadores.length-1){
                    stringLog += operadores[i+1] + " ";
                }
                input[0].focus();
                break;
            case "*":
                resultado *= digitos[i+1];
                stringLog += digitos[i+1] + " ";
                if(i != operadores.length-1){
                    stringLog += operadores[i+1] + " ";
                }
                input[0].focus();
                break;
            case "/":
                resultado /= digitos[i+1];
                stringLog += digitos[i+1] + " ";
                if(i != operadores.length-1){
                    stringLog += operadores[i+1] + " ";
                }
                input[0].focus();
                break;
        }
    }
    stringLog += "= " + resultado;
    result.value = resultado;
    log.value += stringLog;
    
}
function sumaButton(event){
    console.log("Clckeaste suma!");
    var numInput = input[0].value;
    digito = Number(numInput);
    digitos.push(digito);
    operadores.push("+");
    input[0].value = "";
    operador = 1;
    console.log({digito});
    input[0].focus();
}
function restaButton(event){
    console.log("Clckeaste resta!");
    var numInput = input[0].value;
    digito = Number(numInput);
    digitos.push(digito);
    operadores.push("-");
    input[0].value = "";
    operador = 2;
    console.log({digito});
    input[0].focus();
}
function multButton(event){
    console.log("Clckeaste mult!");
    var numInput = input[0].value;
    digito = Number(numInput);
    digitos.push(digito);
    operadores.push("*");
    input[0].value = "";
    operador = 3;
    console.log({digito});
    input[0].focus();
}
function divButton(event){
    console.log("Clckeaste div!");
    var numInput = input[0].value;
    digito = Number(numInput);
    digitos.push(digito);
    operadores.push("/");
    input[0].value = "";
    operador = 4;
    console.log({digito});
    input[0].focus();
}

var digito = 0;
var digito2 = 0;
var operador = 0;
var digitos = [];
var operadores = [];

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

input[0].focus();