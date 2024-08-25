let parametro1 = parseFloat(prompt("Digite o primeiro número:"));
let parametro2 = parseFloat(prompt("Digite o segundo número:"));
let opçãoparametro = prompt("Escolha a operação: (Digite 1 para Somar; Digite 2 para Subtrair; Digite 3 para Multiplicar; Digite 4 para Dividir.)");

function soma (a, b){
    return a + b;

}

function subtração (a, b){
    return a - b;

}

function Multiplicação (a, b){
    return a * b;

}

function Divisão (a, b){
    return a / b;

}

if (opçãoparametro==="1"){
    alert(soma(parametro1, parametro2));
} else if (opçãoparametro==="2"){
    alert(subtração(parametro1, parametro2));
} else if(opçãoparametro === "3"){
    alert(Multiplicação(parametro1, parametro2));
}else if (opçãoparametro === "4"){
    alert((parametro1, parametro2));
    alert(Divisão(parametro1, parametro2));
} else {
    alert("Opção de Operação digitada errada, por favor tente novamente !")
}