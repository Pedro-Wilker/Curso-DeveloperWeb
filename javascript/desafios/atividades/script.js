/* Atividade 1  */
var notaAluno = prompt("Please enter your note ");

if (notaAluno <= 5.9) {
  document.write("<h1>O aluno foi reprovado</h1>");
} else if (notaAluno >= 6 && notaAluno < 9.9) {
  document.write("<h1>O aluno foi aprovado</h1>");
} else if (notaAluno > 9.9) {
  document.write("<h1>Parabéns aluno!!!</h1>");
}

/* Atividade 2  */

var idade = prompt("Digite sua idade");

if (idade > 0 && idade <= 15) {
  document.write("Criança");
} else if (idade > 15 && idade <= 30) {
  document.write("Jovem");
} else if (idade > 30 && idade <= 60) {
  document.write("Adulto");
} else if (idade > 60) {
  document.write("Idoso");
} else {
  document.write("Erro");
}
