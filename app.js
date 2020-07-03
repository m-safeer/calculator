function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clrResult(){
    var result = document.getElementById("result");
    result.value = "";
} 

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function getSqr(){
    var result = document.getElementById("result");
    result.value = result.value * result.value;
}

function getCube(){
    var result = document.getElementById("result");
    result.value = result.value * result.value * result.value;
}
