//idade
function calcularIdade(anoNascimento, mesNascimento) {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var mesAtual = dataAtual.getMonth() + 1; // O mês é baseado em zero (0 = janeiro), então adicionamos 1.

  var idade = anoAtual - anoNascimento;

  // Verificar se o aniversário já ocorreu este ano
  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && dataAtual.getDate() < anoNascimento)) {
      idade--;
  }

  return idade;
}

function atualizarIdade() {
  var spanIdade = document.getElementById('idade');
  var anoNascimento = 1984;
  var mesNascimento = 10; 

  spanIdade.textContent = calcularIdade(anoNascimento, mesNascimento);
}

atualizarIdade();
setInterval(atualizarIdade, 365 * 24 * 60 * 60 * 1000);

//anos de esperiência
function calcularAnosExperiencia(anoInicio) {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var anosExperiencia = anoAtual - anoInicio;

  return anosExperiencia;
}

function atualizarAnosExperiencia() {
  var spanExperiencia = document.querySelector('.experience');
  var anoInicio = 2020; 

  spanExperiencia.setAttribute('data-purecounter-end', calcularAnosExperiencia(anoInicio));
}

atualizarAnosExperiencia();

setInterval(function () {
  atualizarAnosExperiencia();
}, 365 * 24 * 60 * 60 * 1000);


//ano atual no footer
var currentYearElement = document.getElementById('currentYear');
var currentYear = new Date().getFullYear();

currentYearElement.textContent = currentYear;

