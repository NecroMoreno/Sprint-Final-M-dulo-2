
//definiendo las variables

var operandoA;
var operandoB;
var operacion;

function init(){
    var 
        operando = document.getElementById("operando"),
        resultado = document.getElementById("resultado"),
        resetError = document.getElementById("ceBtn"),
        reset = document.getElementById("cBtn"),
        resetLast = document.getElementById("arrowBtn"),
        divide = document.getElementById("divideBtn"),
        siete = document.getElementById("sieteBtn"),
        ocho = document.getElementById("ochoBtn"),
        nueve = document.getElementById("nueveBtn"),
        multiplica = document.getElementById("multiplicaBtn"),
        cuatro = document.getElementById("cuatroBtn"),
        cinco = document.getElementById("cincoBtn"),
        seis = document.getElementById("seisBtn"),
        resta = document.getElementById("restaBtn"),
        uno = document.getElementById("unoBtn"),
        dos = document.getElementById("dosBtn"),
        tres = document.getElementById("tresBtn"),
        suma = document.getElementById("sumaBtn"),
        zero = document.getElementById("zeroBtn"),
        coma = document.getElementById("comaBtn"),
        igual = document.getElementById("igualBtn");
}

unoBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "1";
}

unoBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "1";
}

dosBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "2";
}

tresBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "3";
}

cuatroBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "4";
}

cincoBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "5";
}

seisBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "6";
}

sieteBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "7";
}

ochoBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "8";
}

nueveBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "9";
}

zeroBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "0";
}

divideBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "÷";
}

multiplicaBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "×";
}

restaBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "-";
}

sumaBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "+";
}

ceBtn.onclick = function(e){
    resetear();
}

cBtn.onclick = function(e){
    resetear();
}

arrowBtn.onclick = function(e){
    operando.textContent = operando.textContent  + "+";
}

function resetear(){
    resultado.textContent = "";
    operando.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
  }

  function calculo(){
    




  }