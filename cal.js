var operacao ;
var resultado ;
function btn1(val){
    var visor = document.getElementById("visor");
    if(visor.value == 0){
        visor.value = val;
    }else{
        visor.value = visor.value + val;
    }
}
function btndiv(val){
    operacao = val;
    var visor = document.getElementById("visor");
    resultado = visor.value;
    visor.value = "";
}
function btnig(val){
    var visor = document.getElementById("visor");
    if(operacao == "/"){
        visor.value = resultado / visor.value;
    }
    if(operacao == "*"){
        visor.value = resultado * visor.value;
    }
    if(operacao == "-"){
        visor.value = resultado - visor.value;
    }
    if(operacao == "+"){
        visor.value = +resultado + +visor.value;
    }
}
function btn2(val){
    document.getElementById("visor");
    visor.value=(0);
}
function btn3(val){
    operacao = val;
    var visor = document.getElementById("visor");
    resultado = visor.value;
    visor.value = "";
}
function btn4(val){
    operacao = val;
    var visor = document.getElementById("visor");
    resultado = visor.value;
    visor.value = "";
}
function btn5(val){
    operacao = val;
    var visor = document.getElementById("visor");
    resultado = visor.value;
    visor.value = "";
}
function btn6(val){
    var visor = document.getElementById("visor");
    if(operacao == "mrc"){
        visor.value = resultado;
    }
    if(operacao == "m-"){
            visor.value = clearInterval;
    }
}
function btn6(val){
    operacao = val;
    var visor = document.getElementById("visor");
    resultado = visor.value;
    visor.value = resultado;
}
function btn7(val){
    operacao = val;
    var visor = document.getElementById("visor");
    resultado = visor.value;
    visor.value = resultado;
}