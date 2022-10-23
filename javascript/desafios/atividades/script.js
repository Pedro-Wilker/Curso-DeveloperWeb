/* Atividade 1  
var notaAluno = prompt("Please enter your note ");

if (notaAluno <= 5.9) {
  document.write("<h1>O aluno foi reprovado</h1>");
} else if (notaAluno >= 6 && notaAluno < 9.9) {
  document.write("<h1>O aluno foi aprovado</h1>");
} else if (notaAluno > 9.9) {
  document.write("<h1>Parabéns aluno!!!</h1>");
}

Atividade 2  

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
 */

var nome = prompt("Digite seu nome");

var altura = prompt("Digite sua altura em centimetros");

var peso = prompt("Digite seu peso em kg");

altura = parseFloat(altura);
peso = parseFloat(peso);

var altura1 = altura / 100;
console.log(altura1);

altura1 *= altura1;
console.log(altura1);

var mCorporal = peso / altura1;

if (mCorporal >= 0 && mCorporal < 16) {
  document.write(" Baixo peso muito grave ");
} else if (mCorporal >= 16 && mCorporal <= 16.99) {
  document.write(" Baixo peso grave ");
} else if (mCorporal >= 17 && mCorporal <= 18.49) {
  document.write("Baixo peso");
} else if (mCorporal >= 18.5 && mCorporal <= 24.99) {
  document.write("Peso Normal");
} else if (mCorporal >= 25 && mCoporaal <= 29.99) {
  document.write("Sobrepeso");
} else {
  document.write("Erro");
}

/* switch (mCorporal) {
  case mCorporal >= 0 && mCorporal < 16:
    document.write(" Baixo peso muito grave ");
    break;
  case mCorporal >= 16 && mCorporal <= 16.99:
    document.write(" Baixo peso grave ");
    break;
  case mCorporal >= 17 && mCorporal <= 18.49:
    document.write("Baixo peso");
    break;
  case mCorporal >= 18.5 && mCorporal <= 24.99:
    document.write("Peso Normal");
    break;
  default:
    document.write("Information invalid");
    break;
} */

/* Declarando uma funcao */

/* Funcao de execucao ou funcao void */

/* Funcao de retorno
  as funcoes quando possuem retorno elas podedm ser associadas com a variavel que foi criada nela. 
  */

function calcularAreasTerreno(largura, comprimento) {
  var area = largura * comprimento;

  console.log("O terreno possui: " + area);
}
/* Sempre que ela(funcao do tipo void) for chamada ela vai dar esse retonodo console.log no site */
calcularAreasTerreno(15, 25);

function soma(a, b) {
  b = b === undefined ? 0 : b;
  return a + b;
}

console.log(soma(7, 7));
console.log(soma(7));
