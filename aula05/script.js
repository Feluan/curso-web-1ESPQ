// Array literal (forma mais comum)
const tarefas = [
  "Estudar JavaScript",
  "Criar projeto TaskMaster",
  "Preparar apresentação",
  "Revisar código"
];
console.log("Array de tarefas:", tarefas);

// Usando o construtor Array
const categorias = new Array("Trabalho", "Estudo", "Pessoal", "Projetos");
console.log("Array de categorias:", categorias);

// Array.of (ES6)
const prioridades = Array.of("Baixa", "Média", "Alta");
console.log("Array de prioridades:", prioridades);

// Array.from (ES6) - cria array a partir de uma string
const letras = Array.from("TaskMaster");
console.log("Array de letras:", letras);

    
// Acesso por índice
console.log("Primeira tarefa:", tarefas[0]);
console.log("Última tarefa:", tarefas[tarefas.length - 1]);


// Modificando um elemento
tarefas[2] = "Preparar apresentação sobre Arrays";
console.log("Após modificação:", tarefas);

// Métodos para adicionar e remover elementos

tarefas.push("Testar aplicação");    // Adiciona no final
console.log("Após push:", tarefas);

const removido = tarefas.pop();         // Remove o último
console.log("Removido com pop:", removido);
console.log("Após pop:", tarefas);

tarefas.unshift("Planejar sprint");      // Adiciona no início
console.log("Após unshift:", tarefas);

const removidoInicio = tarefas.shift();  // Remove o primeiro
console.log("Removido com shift:", removidoInicio);
console.log("Após shift:", tarefas);

const removidoIndiceEspecífico = tarefas.splice(1,1);  
// Remove 1 elemento a partir do índice 1
console.log("Removido com splice:", removidoIndiceEspecífico);
console.log("Após splice (remoção):", tarefas);

// Adicionando elementos com splice
tarefas.splice(2, 0, "Nova tarefa inserida");
// A partir do índice 2, remove 0 elementos e insere "Nova tarefa inserida"
console.log("Após splice (adição):", tarefas);

// Substituindo elementos com splice
tarefas.splice(1, 1, "Tarefa substituída");
// A partir do índice 1, remove 1 elemento e insere "Tarefa substituída" no lugar
console.log("Após splice (substituição):", tarefas);

// forEach: Executa uma função para cada elemento
tarefas.forEach((t, i) => {
  console.log(`${i + 1}. ${t}`);
});

// map: Cria um novo array transformando cada elemento
const tarefasEmMaiusculo = tarefas.map(t => t.toUpperCase());
console.log("Tarefas em maiúsculas:", tarefasEmMaiusculo);

// filter: Retorna um array com os elementos que passam no teste
const tarefasComA = tarefas.filter(t => t.toLowerCase().includes("a"));
console.log("Tarefas que contêm 'a':", tarefasComA);

// find: Retorna o primeiro elemento que atende à condição
const tarefaEncontrada = tarefas.find(t => t.includes("sprint"));
console.log("Tarefa encontrada:", tarefaEncontrada);

// findIndex: Retorna o índice do primeiro elemento que atende à condição
const indiceEncontrado = tarefas.findIndex(t => t.includes("sprint"));
console.log("Índice encontrado:", indiceEncontrado);

// reduce: Reduz o array a um único valor (ex: soma dos comprimentos)
const somaComprimentos = tarefas.reduce((total, t) => total + t.length, 0);
console.log("Soma dos comprimentos:", somaComprimentos);

// some: Verifica se algum elemento satisfaz a condição
const existeTarefaCurta = tarefas.some(t => t.length < 10);
console.log("Existe tarefa com menos de 10 caracteres?", existeTarefaCurta);

// every: Verifica se todos os elementos satisfazem a condição
const todasTarefasLongas = tarefas.every(t => t.length > 5);
console.log("Todas as tarefas têm mais de 5 caracteres?", todasTarefasLongas);

// sort: Ordena o array (alfabeticamente por padrão)
const tarefasOrdenadas = [...tarefas].sort();
console.log("Tarefas ordenadas:", tarefasOrdenadas);

// reverse: Inverte a ordem dos elementos
const tarefasInvertidas = [...tarefas].reverse();
console.log("Tarefas invertidas:", tarefasInvertidas);

// flat: Achata um array de arrays
const arrayAninhado = [["Tarefa 1", "Tarefa 2"], ["Tarefa 3", "Tarefa 4"]];
const arrayAchatado = arrayAninhado.flat();
console.log("Array achatado:", arrayAchatado);

// flatMap: Aplica um mapeamento e achata o resultado
const frases = ["JavaScript é incrível", "Arrays facilitam o trabalho"];
const palavras = frases.flatMap(frase => frase.split(" "));
console.log("Palavras extraídas com flatMap:", palavras);

// Criação de objeto usando sintaxe literal
const tarefa = {
  id: 1,
  titulo: "Aprender sobre objetos",
  descricao: "Estudar propriedades e métodos",
  concluida: false,
  prioridade: "alta",
  dataCriacao: new Date()
};
console.log("Objeto tarefa:", tarefa);
console.log("Título (ponto):", tarefa.titulo);
console.log("Prioridade (colchetes):", tarefa["prioridade"]);

// Objeto com nomes especiais (acessados com colchetes)
const tarefaEspecial = {
  "nome da tarefa": "Tarefa com espaço",
  "data-criacao": "2025-01-01"
};
console.log("Nome especial:", tarefaEspecial["nome da tarefa"]);

const projetoTaskMaster = {
  nome: "TaskMaster",
  version: "1.0",
  autor: "Curso JavaScript",
  tarefas: [],
  adicionarTarefa(titulo, prioridade = "média") {
    const novaTarefa = {
      id: this.tarefas.length + 1,
      titulo,
      prioridade,
      concluida: false,
      criada: new Date()
    };
    this.tarefas.push(novaTarefa);
    console.log(`Tarefa "${titulo}" adicionada.`);
    return novaTarefa;
  },
  listarTarefas() {
    console.log(`Projeto ${this.nome} - Lista de Tarefas:`);
    this.tarefas.forEach(t => console.log(`- ${t.id}: ${t.titulo} (${t.prioridade})`));
  }
};

projetoTaskMaster.adicionarTarefa("Estudar Objetos", "alta");
projetoTaskMaster.adicionarTarefa("Criar interface");
projetoTaskMaster.listarTarefas();

// Iterando com for...in
console.log("Propriedades do objeto tarefa:");
for (let prop in tarefa) {
  console.log(`${prop}: ${tarefa[prop]}`);
}

// Object.keys e Object.values
console.log("Chaves:", Object.keys(tarefa));
console.log("Valores:", Object.values(tarefa));


const prioridades = ["baixa", "média", "alta"];
// Extraindo valores com destructuring
const [baixa, media, alta] = prioridades;
console.log("Baixa:", baixa);
console.log("Média:", media);
console.log("Alta:", alta);

// Uso do rest pattern para capturar o restante dos elementos
const [primeiraCat, ...outrasCats] = ["Trabalho", "Estudo", "Pessoal", "Saúde"];
console.log("Categoria principal:", primeiraCat);
console.log("Outras categorias:", outrasCats);

const tarefaObj = {
  id: 1,
  titulo: "Aprender desestruturação",
  descricao: "Estudar sintaxe e aplicações",
  prioridade: "alta",
  concluida: false
};

// Extraindo propriedades com renomeação e valores padrão
const { titulo: nomeTarefa, prioridade, concluida, categoria = "Geral" } = tarefaObj;
console.log("Nome da tarefa:", nomeTarefa);
console.log("Prioridade:", prioridade);
console.log("Concluída:", concluida);
console.log("Categoria (padrão):", categoria);

// Desestruturação de objetos aninhados
const projeto = {
  nome: "TaskMaster",
  desenvolvedor: {
    nome: "Maria Silva",
    email: "maria@exemplo.com"
  },
  prazos: {
    inicio: new Date(2025, 0, 15),
    fim: new Date(2025, 5, 30)
  }
};

const {
  nome: nomeProjeto,
  desenvolvedor: { nome: devNome, email },
  prazos: { inicio, fim }
} = projeto;
console.log("Projeto:", nomeProjeto);
console.log("Desenvolvedor:", devNome);
console.log("Email:", email);
console.log("Início:", inicio.toLocaleDateString());
console.log("Fim:", fim.toLocaleDateString());

// Desestruturação em parâmetros de função
function exibirDetalhes({ titulo, prioridade, concluida }) {
  console.log(`Tarefa: ${titulo}`);
  console.log(`Prioridade: ${prioridade}`);
  console.log(`Status: ${concluida ? "Concluída" : "Pendente"}`);
}
exibirDetalhes(tarefaObj);


// Matriz 3x3 (tabuleiro de jogo da velha)
const tabuleiro = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
];
console.log("Tabuleiro:", tabuleiro);
console.log("Posição (1,1):", tabuleiro[1][1]);

// Matriz de notas de múltiplos alunos
const notasAlunos = [
  [8.5, 7.2, 9.1],  // Aluno 1
  [6.8, 8.0, 7.5],  // Aluno 2
  [9.2, 8.8, 9.0]   // Aluno 3
];
console.log("Notas dos alunos:", notasAlunos);
console.log("Nota do aluno 2, prova 1:", notasAlunos[1][0]);

// Matriz de pixels (imagem 2x2)
const imagem = [
  [[255, 0, 0], [0, 255, 0]],    // Linha 1: vermelho, verde
  [[0, 0, 255], [255, 255, 0]]   // Linha 2: azul, amarelo
];
console.log("Pixel (0,0):", imagem[0][0]); // Vermelho
console.log("Pixel (1,1):", imagem[1][1]); // Amarelo

// Função para exibir uma matriz de forma organizada
function exibirMatriz(matriz, titulo = "Matriz") {
  console.log(`\n${titulo}:`);
  matriz.forEach((linha, i) => {
    console.log(`Linha ${i}: [${linha.join(', ')}]`);
  });
}

// Matriz de exemplo
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
exibirMatriz(matriz, "Matriz Original");

// Percorrendo todos os elementos da matriz
console.log("\nPercorrendo todos os elementos:");
matriz.forEach((linha, i) => {
  linha.forEach((elemento, j) => {
    console.log(`Posição [${i}][${j}]: ${elemento}`);
  });
});

// Encontrando o maior valor na matriz
let maiorValor = matriz[0][0];
let posicaoMaior = [0, 0];

matriz.forEach((linha, i) => {
  linha.forEach((elemento, j) => {
    if (elemento > maiorValor) {
      maiorValor = elemento;
      posicaoMaior = [i, j];
    }
  });
});

console.log(`\nMaior valor: ${maiorValor} na posição [${posicaoMaior[0]}][${posicaoMaior[1]}]`);

// Calculando a soma de cada linha
const somasLinhas = matriz.map(linha => 
  linha.reduce((soma, elemento) => soma + elemento, 0)
);
console.log("Somas das linhas:", somasLinhas);

// Calculando a soma de cada coluna
const somasColunas = [];
for (let j = 0; j < matriz[0].length; j++) {
  let somaColuna = 0;
  for (let i = 0; i < matriz.length; i++) {
    somaColuna += matriz[i][j];
  }
  somasColunas.push(somaColuna);
}
console.log("Somas das colunas:", somasColunas);

// Matriz irregular (linhas com tamanhos diferentes)
const matrizIrregular = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9, 10]
];

console.log("Matriz irregular:");
matrizIrregular.forEach((linha, i) => {
  console.log(`Linha ${i} (${linha.length} elementos): [${linha.join(', ')}]`);
});

// Função para verificar se uma matriz é regular
function isMatrizRegular(matriz) {
  if (matriz.length === 0) return true;
  
  const primeiraLinhaTamanho = matriz[0].length;
  return matriz.every(linha => linha.length === primeiraLinhaTamanho);
}

console.log("É matriz regular?", isMatrizRegular(matrizIrregular)); // false
console.log("É matriz regular?", isMatrizRegular(matriz)); // true

// Sistema de coordenadas para um jogo
const mapa = [
  ['🌲', '🌲', '🏔️', '🌲'],
  ['🌲', '🏠', '🌲', '🌲'],
  ['🌲', '🌲', '🌲', '🏪'],
  ['🌲', '🌲', '🌲', '🌲']
];

function exibirMapa(mapa) {
  console.log("\nMapa do jogo:");
  mapa.forEach(linha => {
    console.log(linha.join(' '));
  });
}

function encontrarElemento(mapa, elemento) {
  for (let i = 0; i < mapa.length; i++) {
    for (let j = 0; j < mapa[i].length; j++) {
      if (mapa[i][j] === elemento) {
        return [i, j];
      }
    }
  }
  return null;
}

exibirMapa(mapa);
console.log("Posição da casa:", encontrarElemento(mapa, '🏠'));
console.log("Posição da loja:", encontrarElemento(mapa, '🏪'));

// Matriz de temperaturas por cidade e mês
const temperaturas = [
  // Jan, Fev, Mar, Abr
  [25, 27, 26, 24],  // São Paulo
  [30, 32, 31, 29],  // Rio de Janeiro
  [22, 24, 23, 21]   // Curitiba
];

const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba'];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];

// Encontrar a temperatura mais alta
let tempMaxima = temperaturas[0][0];
let cidadeTempMax = 0;
let mesTempMax = 0;

temperaturas.forEach((cidade, i) => {
  cidade.forEach((temp, j) => {
    if (temp > tempMaxima) {
      tempMaxima = temp;
      cidadeTempMax = i;
      mesTempMax = j;
    }
  });
});

console.log(`\nTemperatura mais alta: ${tempMaxima}°C em ${cidades[cidadeTempMax]} no mês de ${meses[mesTempMax]}`);


// Array unidimensional (1D) - uma lista simples
const notas = [8.5, 7.2, 9.1, 6.8];

// Array bidimensional (2D) - tabela/matriz
const tabuleiro = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', 'O', 'X']
];

// Array tridimensional (3D) - cubo de dados
const cubo = [
  [ // Camada 0
    [1, 2, 3],
    [4, 5, 6]
  ],
  [ // Camada 1
    [7, 8, 9],
    [10, 11, 12]
  ]
];

console.log("Elemento 3D:", cubo[1][0][2]); // 9