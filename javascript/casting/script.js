var variavel1 = prompt("Digite um numero qualquer");

var entrada2 = prompt("Digite algum outro numero qualquer");

//Se nosso objetivo fosse somar os valores de entrada, temos que utilizar o casting ou seja passar eles para outro tipo de variavel;
variavel1 = parseInt(variavel1);
entrada2 = parseInt(entrada2);

document.write(variavel1 + entrada2);
