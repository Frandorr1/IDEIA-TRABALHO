// Definições básicas
let continuar = true;
let dados = [];

// Função para reserva:
function reserva() {
  console.log("Função de reserva");

  let nomeSolicitante = prompt("Qual o nome do solicitante?");
  let data = prompt("Qual a data?");
  let horario = prompt("Qual horario?");
  let sala = prompt("Qual é a sala?");
  let finalidade = prompt("Qual é a finalidade?");

  let novoSolicitante = {
    nomeSolicitante,
    data,
    horario,
    sala,
    finalidade,
  };

  dados.push(novoSolicitante);
}

function listar() {
  console.log("Função de lista");

  console.log(
    "Código | Nome do Solicitante | data | horario | sala | finalidade \n*"
  );
  console.log("---------------------------------------------------- n*");
  for (let i = 0; i < dados.length; i++) {
    dados[i].codigo = i;

    console.log(
      `${dados[i].codigo} | ${dados[i].nomeSolicitanta} | ${dados[i].data} | ${dados[i].horario} | ${dados[i].sala} | ${dados[i].finalidade} \n`
    );
  }
}

//Cria uma função para buscar sala:
function buscar() {
  console.log("Função de busca");

  let salaProcurada = prompt("Qual é a sala?");

  for (let i = 0; i < dados.lenghth; i++) {
    if (salaProcurada === dados[i].sala) {
      console.log(
        "Código | Nome do Solicitante | data | horario | sala | finalidade \n"
      );
      console.log(`Você está procurando ${salaProcurada}`);
      console.log("--------------------------------------------------- \n");
      console.log("Listagem de salas: \n");
      console.log("--------------------------------------------------- \n");
      console.log(
        "Código | Nome do Solicitante | data | horario | sala | finalidade \n"
      );
      console.log("--------------------------------------------------- \n");
      console.log(
        `${dados[i].codigo} | ${dados[i].nomeSolicitante} | ${dados[i].data} | ${dados[i].horario}
				| ${dados[i].sala} | ${dados[i].finalidade} \n`
      );
    }
  }
}
// Função para deletar reserva:
function deletar() {
  console.log("Função deletar");

  let nomeDoSolicitanteParaDeletar = Number(
    prompt("Escreva o numero da sala que quer deletar")
  );

  for (let i = 0; i < dados.length; i++) {
    if (nomeDoSolicitanteParaDeletar === dados[i].nomeSolicitante) {
      dados.splice(dados[i].nomeSolicitante, 1);
    }
  }
}
// Função para editar a reserva:
function editar() {
  console.log("Função editar reserva");

  let nomeDoAbrigoParaEditar = prompt(
    "Escreva o numero da sala que quer editar"
  );

  for (let i = 0; i < dados.length; i++) {
    if (nomeDoSolicitanteParaEditar === dados[i].nomeSolicitante) {
      let nomeSolicitante = prompt("Nome do Solicitante:");
      let data = prompt("data:");
      let horario = Number(prompt("horario:"));
      let sala = Number(prompt("sala:"));
      let finalidade = prompt("finalidade:");
      let salaEditada = { nomeSolicitante, data, horario, sala, finalidade };

     
    }

    dados[i].push(salaEditada);
  }
}

// Função para sair da reserva:
function sair() {
  continuar = false;
  console.log("Tchau! Para reiniciar, atualize a aba do navegador.");
}

// Loop para perguntar ao usuário
while (continuar) {
  // Formatar pergunta
  let pergunta = "SALAS DE REUNIÃO\n";
  pergunta += "-------------------------\n";
  pergunta += "Escolha uma opção:\n";
  pergunta += "1. reservar sala\n";
  pergunta += "2. Listar sala\n";
  pergunta += "3. Procurar sala\n";
  pergunta += "4. Sair\n";
  pergunta += "5. editar\n";

  // Guardar resposta
  let resposta = Number(prompt(pergunta));

  // Identificar resposta e chamar função
  switch (resposta) {
    case 1:
      cadastrar();
      break;
    case 2:
      listar();
      break;
    case 3:
      buscar();
      break;
    case 4:
      sair();
      break;
    case 5:
      editar();
      break;
  }
}
