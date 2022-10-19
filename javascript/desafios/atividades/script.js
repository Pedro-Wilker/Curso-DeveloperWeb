var notaAluno = prompt("Please enter your note ");

if (notaAluno <= 5.9) {
  document.write("<h1>O aluno foi reprovado</h1>");
} else if (notaAluno >= 6 && notaAluno < 9.9) {
  document.write("<h1>O aluno foi aprovado</h1>");
} else if (notaAluno == 10) {
  document.write("<h1>Parabéns aluno!!!</h1>");
}
