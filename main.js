
function enviar(){
    let resultado = document.querySelector(".resultado");
    let nome = window.prompt("Qual é seu nome")
    let altura  = document.getElementById("altura").value;
    let alturaData = altura * altura;
    let peso = document.getElementById("peso").value;
    resultado.innerHTML =  "Olá " + nome + " " + "Seu IMC é de : " + peso/alturaData;
    if(resultado.value == " "){
        alert("Por Favor, insira algo válido em altura e peso")
    }
}