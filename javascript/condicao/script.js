document.write("<h1>Hello</h1>");

var num = prompt("Digite um numero");

var number = 25;

var num = num + 14;

if (number <= num) {
  document.write("Voce vai conseguir ser um bom programador!" + "<br>");
}

/* switch */

var parametro = prompt("Digite um numero entre 0 e 2");

switch (parametro) {
  case 0:
    document.write("O numero digitado é 0");
    break;

  case 1:
    document.write("O numero digitado é 1");
    break;

  case 2:
    document.write("O numero digit é 2");
    break;

  default:
    document.write("Numero não encontrado");
    break;
}
