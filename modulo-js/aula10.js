/* const alunos = [
    "Dongle", // 0
    "William", // 1
    "Nathan", // 2
    "Xande", //3
    "Diogo" //4
]
console.log(alunos.length);

            //Acessando a posição 1
console.log(alunos[1]);
console.log(alunos[alunos.length - 1]);

// Alteração/Atribuição de um valor na posição x
alunos[0] = "Diego";
console.log(alunos[0]); */

/* ====================================================================== */

/* const cores = ["azul", "verde", "amarelo", "preto"];

//Primeira cor
console.log(cores[0]);

//Terceira cor
console.log(cores[2]);

//Ultima cor
console.log(cores[cores.length -1]);

//Tamanho
console.log(cores.length);

//Substituir
cores[1] = "roxo";

//Mostrar tudo
console.log(cores); */

/* ====================================================================== */

/* const animais = ["gato", "cachorro", "coelho"];

console.log(animais[3];)
//não existe indice 3
//vai apenas até o 2 */

/* ====================================================================== */

/* const livros = ["Harry Potter", "Percy Jackson", "Game of Thrones"]

// Adiciono um novo elemento AO FINAL do Arrays
livros.push("Senhor dos Anéis");
console.log(livros);

// Remove o ULTIMO elemento do Array
livros.pop();
console.log(livros);

// Adiciono um novo elemento AO INÍCIO do Arrays
livros.unshift("Homem de Ferro");
console.log(livros);

// Remove o PRIMEIRO elemento do Array
livros.shift();
console.log(livros);

                    // Expressão lambda
const novoLivros = livros.filter(item => item !== 'Harry Potter');
console.log(novoLivros);

function removerItem(array, itemParaRemover) {
    return array.filter(item => item !== itemParaRemover);
}

const novoNovoLivros = removerItem(livros, 'Percy Jackson');
console.log(novoNovoLivros); */

/* ====================================================================== */

/* Considere:

```js
const fila = ["Ana", "Bruno", "Carla"];
```

Utilize métodos de Arrays para realizar as ações **na ordem**:

1. `"Diego"` entra no **fim** da fila.
2. A primeira pessoa da fila é atendida e sai.
3. `"Elisa"` entra no **início** da fila.
4. A última pessoa da fila desiste e sai.
5. Mostre a fila resultante e a quantidade de pessoas.

**Regra:** use os métodos vistos em aula (`push`, `pop`, `shift`, `unshift`), sem reconstruir o Array manualmente.

**Perguntas para pensar:** Qual método adiciona no início? Qual remove do início? Qual adiciona no fim? Qual remove do fim?

### Desafio extra — Histórico de tarefas

Considere:

```js
const tarefas = ["Estudar HTML", "Estudar CSS"];
```

Adicione `"Estudar JavaScript"` ao final, adicione `"Revisar lógica"` ao início e remova a tarefa do final. Mostre a lista depois de cada operação. */

/* const fila = ["Ana", "Bruno", "Carla"];

fila.push("Diego");
console.log(fila);

fila.shift();
console.log(fila);

fila.unshift("Elisa");
console.log(fila);

fila.pop();
console.log(fila);
console.log(fila.length); */

/* ====================================================================== */

/* const tarefas = ["Estudar HTML", "Estudar CSS"];

tarefas.push("Estudar JavaScript");
tarefas.unshift("Revisar lógica");
tarefas.pop();
console.log(tarefas); */

/* ====================================================================== */

/* const alunos = [
    "Dongle", // 0
    "William", // 1
    "Nathan", // 2
    "Xande", //3
    "Diogo" //4
]

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
} */

/* ====================================================================== */

/* const idades = [15, 18, 22, 16, 30];

let quantidade = 0;

for (let i = 0; i < idades.length; i++) {
    const idade = idades[i];

    if (idade >= 18) {
        quantidade++;
    }
}

console.log("Maiores de idade:", quantidade); */

/* ====================================================================== */

/* const notas = [8, 5, 10, 6, 7];
let somaNotas = 0;
let notasMaioresOuIguaisSete = 0;
let maiorNota = 0;
let menorNota = notas[0];

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];

    console.log("Aluno", i + 1, "- Nota:", notas[i]);

    if (notas[i] >= 7) {
        notasMaioresOuIguaisSete++;
    }

    if (notas[i] >= maiorNota) {
        maiorNota = notas[i];
    }

    if (notas[i] <= menorNota) {
        menorNota = notas[i];
    }
    
}

const media = somaNotas / notas.length;

console.log("Soma das notas:", somaNotas);
console.log("Media da turma:", media);
console.log("Notas maiores ou iguais a sete", notasMaioresOuIguaisSete);
console.log("A maior nota é:", maiorNota);
console.log("A menor nota é:", menorNota); */

/* ====================================================================== */

/* const frutas = ["Banana", "Tangerina", "Uva"] */

//For tradicional OU for com indice
/* for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
} */

// for...of
/* for (const fruta of frutas) {
    console.log(fruta);
} */

/* ====================================================================== */

/* function mostrarNomes(nomes) {
    for (const nome of nomes) {
        console.log(nome);
    }
}

const alunos = [
"Dongle", // 0
"William", // 1
"Nathan", // 2
"Xande", //3
"Diogo" //4
];

mostrarNomes(alunos); */

/* ====================================================================== */

/* # SuperDev — Desafio de fim de semana: Arrays + lógica de programação

**Disciplina:** JavaScript e Lógica de Programação  
**Conteúdos:** Arrays, Strings, condições, laços e funções  
**Formato:** exercícios sem respostas, em ordem de dificuldade aproximada

## Antes de começar

A proposta é **reutilizar tudo o que vocês já aprenderam** para resolver problemas com Arrays. Alguns exercícios são curtos; outros exigem organizar a solução em várias etapas.

**Vocês podem usar:**

- `let`, `const`, operações matemáticas, comparações, `&&`, `||` e `%`;
- `if`, `else if`, `else`;
- `for`, `for...of`, `while`, `do...while`, `break` e `continue`;
- funções com parâmetros, argumentos e `return`;
- Strings: `.length`, índice (`texto[i]`), `.trim()`, `.toUpperCase()`, `.toLowerCase()`, `.includes()`, `.startsWith()`, `.endsWith()` e `.slice()`;
- Arrays: índice (`lista[i]`), `.length`, `.push()`, `.pop()`, `.shift()` e `.unshift()`.

**Por enquanto, não usem:**

- `map()`, `filter()`, `reduce()`, `forEach()`, `find()`, `sort()`, `reverse()`, `splice()` ou `Array.includes()`;
- funções prontas que resolvam o exercício inteiro, como `Math.max()` para encontrar o maior valor;
- objetos ou Arrays dentro de Arrays (ainda vamos estudar essas estruturas com calma).

> **Atenção:** `.includes()` em **String** está liberado; em **Array**, ainda não. Quando precisarem procurar um elemento em um Array, façam a busca usando repetição e comparação.

**Como praticar:** para cada problema, identifiquem primeiro o que entra, o que precisa acontecer e qual é a saída esperada. Testem o código com os valores fornecidos e, quando possível, mudem os dados para verificar se a solução continua funcionando.

**Sugestão de ritmo:** façam os exercícios **1 a 20** como trilha principal. Os **21 a 30** são desafios extras para quem quiser aprofundar. Não é necessário resolver todos de uma vez.

--- */

/* ====================================================================== */

/* # Nível 1 — Conhecendo e manipulando Arrays

## Exercício 1 — Catálogo de filmes

Considere:

```js
const filmes = ["Interestelar", "Matrix", "Shrek", "Avatar"];
```

1. Mostre o primeiro filme.
2. Mostre o terceiro filme.
3. Mostre o último filme **sem escrever diretamente o índice `3`**.
4. Mostre quantos filmes existem.
5. Substitua `"Shrek"` por `"Toy Story"`.
6. Mostre o Array completo após a alteração.

**Desafio:** o que acontece se tentar acessar `filmes[filmes.length]`? Explique.
R: undefined

--- */

/* const filmes = ["Interestelar", "Matrix", "Shrek", "Avatar"];

console.log(filmes[0]);
console.log(filmes[2]);
console.log(filmes[filmes.length - 1]);
console.log(filmes.length);

filmes[2] = "Toy Story";

console.log(filmes); */

/* ====================================================================== */

/* ## Exercício 2 — Fila da cantina

Considere:

```js
const fila = ["Ana", "Bruno", "Carla"];
```

Execute **na ordem**:

1. `"Diego"` chega e entra no fim da fila.
2. A primeira pessoa é atendida e sai da fila.
3. `"Elisa"` recebe prioridade e entra no início da fila.
4. A última pessoa desiste e sai da fila.
5. Mostre **quem foi atendido**, **quem desistiu** e **como ficou a fila**.

Use os métodos adequados de Array. Não crie manualmente outro Array com o resultado.

--- */

/* const fila = ["Ana", "Bruno", "Carla"];

fila.push("Diego");
console.log(fila);

const atendido = fila.shift();
console.log(fila);

fila.unshift("Elisa");
console.log(fila);

const desistiu = fila.pop();
console.log(fila);

console.log("Atendido:", atendido);
console.log("Desistiu:", desistiu);
console.log(fila); */

/* ====================================================================== */

/* ## Exercício 3 — Pilha de caixas

Um funcionário empilha caixas, sempre colocando as novas no **topo** (fim do Array).

```js
const caixas = ["Caixa A", "Caixa B"];
```

1. Empilhe `"Caixa C"` e `"Caixa D"`.
2. Retire a caixa do topo e mostre qual foi retirada.
3. Empilhe `"Caixa E"`.
4. Retire mais uma caixa do topo.
5. Mostre as caixas restantes e a quantidade delas.

**Pergunta:** por que `pop()` faz mais sentido aqui do que `shift()`?

--- */

/* const caixas = ["Caixa A", "Caixa B"];

caixas.push("Caixa C", "Caixa D");

const caixaRetirada = caixas.pop();

caixas.push("Caixa E");

caixas.pop();

console.log(caixas);
console.log(caixas.length); */

/* ====================================================================== */

/* ## Exercício 4 — Corrigindo um cadastro

```js
const idades = [15, 19, 0, 22, 17];
```

O valor `0` foi cadastrado por engano: a idade correta é `20`.

1. Corrija apenas o elemento errado.
2. Acrescente ao final uma nova idade: `24`.
3. Mostre todas as idades usando um `for` tradicional.
4. Mostre a quantidade total de pessoas cadastradas.

**Desafio:** faça o programa mostrar `"Pessoa 1: 15 anos"`, `"Pessoa 2: 19 anos"` etc., embora o índice do Array comece em zero.

--- */

/* const idades = [15, 19, 0, 22, 17];

idades[2] = 20;
//console.log(idades);

idades.push(24);
//console.log(idades);

for (let i = 0; i < idades.length; i++) {
    console.log("Pessoa", i + 1, idades[i], "anos");
}

console.log(idades.length); */

/* ====================================================================== */

/* # Nível 2 — Arrays, `for`, `if` e contas

## Exercício 5 — Contagem de ingressos

```js
const idades = [12, 18, 35, 9, 67, 25, 16, 70];
```

Um cinema utiliza estas categorias:

- menores de 18: **meia-entrada**;
- 18 a 59: **inteira**;
- 60 ou mais: **meia-entrada**.

Percorra o Array e mostre a categoria de cada pessoa. No final, informe:

1. quantidade de meias-entradas;
2. quantidade de entradas inteiras;
3. quantidade total de pessoas.

Use `for` ou `for...of` junto com `if`.

--- */

/* const idades = [12, 18, 35, 9, 67, 25, 16, 70];
let meiasEntradas = 0;
let inteiras = 0;

for (const idade of idades) {
    if (idade < 18 || idade >= 60) {
        meiasEntradas++;
        console.log(idade, "meia entrada");
    }
    else {
        inteiras++;
        console.log(idade, "inteira");
    }
}

console.log("Quantidade de meia-entrada:", meiasEntradas);
console.log("Quantidade de inteira:", inteiras);
console.log("Quantidade de pessoas:", idades.length); */

/* ====================================================================== */

/* ## Exercício 6 — Notas da turma

```js
const notas = [8, 4, 7, 9, 5, 6, 10];
```

Percorra as notas e calcule:

1. a soma das notas;
2. a média geral;
3. quantos alunos foram **aprovados** (`nota >= 7`);
4. quantos estão em **recuperação** (`nota >= 5` e `< 7`);
5. quantos foram **reprovados** (`nota < 5`).

Mostre um resumo ao final. **Não some os valores manualmente.**

**Desafio:** faça o código funcionar mesmo se novas notas forem adicionadas ao Array. */

/* const notas = [8, 4, 7, 9, 5, 6, 10];

let soma = 0;
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

for(let i = 0; i < notas.length; i++) {
    soma += notas[i];

    if (notas[i] >= 7) {
        aprovados++;
    } else if (notas[i] >= 5 && notas[i] < 7) {
        recuperacao++;
    } else {
        reprovados++;
    }
}

const media = soma / notas.length;

console.log("Soma das notas:", soma);
console.log("Média das notas:", media);
console.log("Quantidade de alunos aprovados:", aprovados);
console.log("Quantidade de alunos em recuperação:", recuperacao);
console.log("Quantidade de alunos reprovados:", reprovados);
--- */

/* ====================================================================== */

/* ## Exercício 7 — Índice não é valor

```js
const numeros = [7, 12, 5, 18, 3, 20, 9];
```

Resolva **separadamente**:

1. Mostre os elementos que estão em **índices pares** (`0`, `2`, `4`, ...). */
/* const numeros = [7, 12, 5, 18, 3, 20, 9];

for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) {
        console.log(numeros[i]);
    }
} */
//2. Mostre os elementos cujos **valores são pares**.
/* const numeros = [7, 12, 5, 18, 3, 20, 9];

for (const numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
} */
//3. Conte quantos elementos possuem valores maiores que `10`.
/* const numeros = [7, 12, 5, 18, 3, 20, 9];
let maiorQue10 = 0;

for (const numero of numeros) {
    if (numero > 10) {
        maiorQue10++;
    }  
}

console.log(maiorQue10); */
//4. Some apenas os valores ímpares.]
/* const numeros = [7, 12, 5, 18, 3, 20, 9];
let somarImpares = 0;

for (const numero of numeros) {
    if (numero % 2 === 1) {
        somarImpares += numero;
    }
}

console.log(somarImpares); */

//**Pergunta:** qual é a diferença entre verificar `i % 2` e verificar `numeros[i] % 2`?
//R: "i" eu acesso a posição do elemento, já "numeros[i]" eu acesso o próprio elemento.

/* ====================================================================== */

/* ## Exercício 8 — Separando produtos por preço

```js
const precos = [18, 75, 42, 120, 9, 60, 33];
```

Crie dois Arrays inicialmente vazios:

```js
const baratos = [];
const caros = [];
```

Regras:

- produtos que custam **menos de R$ 50** vão para `baratos`;
- produtos que custam **R$ 50 ou mais** vão para `caros`.

Percorra `precos`, distribua os valores e mostre os dois Arrays. **Não use `filter()`.**

**Desafio:** calcule o total de preços de cada grupo. */

/* const precos = [18, 75, 42, 120, 9, 60, 33];

const baratos = [];
const caros = [];

let totalBaratos = 0;
let totalCaros = 0;

for (const preco of precos) {
    if (preco < 50) {
        baratos.push(preco);
        totalBaratos += preco;
    }
    else {
        caros.push(preco);
        totalCaros += preco;
    }
}

console.log("Baratos:", baratos);
console.log("Caros:", caros);

console.log("Total dos Baratos:", totalBaratos);
console.log("Total dos Caros:", totalCaros);

--- */

/* ====================================================================== */

//## Exercício 9 — Maior e menor temperatura

//```js
//const temperaturas = [23, 18, 31, 25, 17, 31, 20];
//```

//Sem `Math.max()`, `Math.min()` ou `sort()`:

//1. encontre a menor temperatura;
//2. encontre a maior temperatura;
//3. mostre em qual **índice** cada uma apareceu pela primeira vez;
//4. conte quantas vezes a maior temperatura aparece.

//**Dica de raciocínio:** com qual valor você pode começar a variável que guarda o maior ou o menor número?

/* let menorTemperatura = temperaturas[0];
let maiorTemperatura = temperaturas[0];

let indiceMenor;
let indiceMaior;

let quantidadeMaiorTemperatura = 0;

for (let i = 0; i < temperaturas.length; i++) {

    if (temperaturas[i] < menorTemperatura) {
        menorTemperatura = temperaturas[i];
        indiceMenor = i;
    }
    if (temperaturas[i] > maiorTemperatura) {
        maiorTemperatura = temperaturas[i];
        indiceMaior = i;
        quantidadeMaiorTemperatura = 1;
    }
    else if (temperaturas[i] === maiorTemperatura) {
    quantidadeMaiorTemperatura++;
}
}

console.log(menorTemperatura);
console.log(maiorTemperatura);
console.log(indiceMenor);
console.log(indiceMaior); */

/* ====================================================================== */

/* ## Exercício 10 — Busca com `break`

```js
const codigos = [101, 205, 309, 412, 518, 620];
const codigoProcurado = 412;
```

Use um `for` para encontrar o código procurado.

- Se encontrar, mostre o índice e interrompa a busca usando `break`.
- Se não encontrar, mostre `"Código não encontrado"`.

**Desafio:** teste com o código `999` e confira se a mensagem continua correta.

--- */

/* const codigos = [101, 205, 309, 412, 518, 620];
const codigoProcurado = 999;

let encontrado = false;

for (let i = 0; i < codigos.length; i++) {
    if (codigoProcurado === codigos[i]) {
        console.log(i);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
        console.log("Código não encontrado");
    } */

/* ====================================================================== */

/* ## Exercício 11 — Ignorando leituras inválidas

```js
const leituras = [12, -1, 19, 22, -1, 15, 28, 999, 17];
```

As regras do sensor são:

- `-1` representa uma leitura inválida: ignore-a usando `continue`;
- `999` significa falha crítica: encerre o processamento usando `break`;
- os demais números representam leituras válidas.

Calcule **somente para as leituras processadas antes da falha**:

1. quantidade de leituras válidas;
2. soma das leituras válidas;
3. média das leituras válidas.

**Pergunta:** a leitura `17` deve entrar no cálculo? Por quê?
R: Não, porque o break encerra o for quando encontra 999.

--- */

/* const leituras = [12, -1, 19, 22, -1, 15, 28, 999, 17];

let quantidadeValidas = 0;
let somaValidas = 0;

for (const leitura of leituras) {
    if (leitura === -1) {
        continue;
    }
    else if (leitura === 999) {
        break;
    }

    quantidadeValidas++;
    somaValidas += leitura;

}
const media = somaValidas / quantidadeValidas;

console.log("Quantidade de leituras válidas:", quantidadeValidas);
console.log("Soma das leituras válidas:", somaValidas);
console.log("Média das leituras válidas:", media); */

/* ====================================================================== */

/* # Nível 3 — Strings + Arrays

## Exercício 12 — Nomes para um crachá

```js
const nomes = [" ana ", "BRUNO", " Carla", "dIEGO ", " elisa "];
```

Monte um **novo Array** chamado `nomesFormatados`.

Para cada nome:

1. remova espaços do início e do fim usando `.trim()`;
2. transforme todo o texto em maiúsculo;
3. adicione o resultado ao novo Array.

Mostre `nomesFormatados` no final.

**Regra:** não altere os valores do Array original.

--- */

/* const nomes = [" ana ", "BRUNO", " Carla", "dIEGO ", " elisa "];

const nomesFormatados = [];

for (const nome of nomes) {
    nomesFormatados.push(nome.trim().toUpperCase());
}

console.log("Nomes formatados:", nomesFormatados); */

/* ====================================================================== */

/* ## Exercício 13 — Filtrando nomes por letra

```js
const participantes = ["Alice", "Bruno", "Amanda", "Carlos", "arthur", "Bia"];
```

Crie uma lista contendo somente os nomes que começam com a letra `A` ou `a`.

1. Use `for` ou `for...of` para percorrer os participantes.
2. Use `if`, `.toLowerCase()` e `.startsWith()` para testar cada nome.
3. Adicione os nomes encontrados a um novo Array usando `.push()`.
4. Mostre a lista e a quantidade de nomes encontrados.

**Desafio:** faça uma segunda lista com os nomes que **terminam** com `a`, ignorando maiúsculas/minúsculas.

--- */

/* const participantes = ["Alice", "Bruno", "Amanda", "Carlos", "arthur", "Bia"];

const novaLista = [];
let quantidade = 0;

for (const participante of participantes) {
    if (participante.toLowerCase().startsWith("a")) {
        novaLista.push(participante);
        quantidade++;
    }
}

console.log("Nova lista:", novaLista);
console.log("Quantidade:", quantidade); */

/* ====================================================================== */

/* ## Exercício 14 — Limpando uma lista de mensagens

```js
const mensagens = [" Oi ", "   ", "Bom dia", "", " Tudo bem? ", "   Obrigado  "];
```

Crie um novo Array chamado `mensagensValidas`.

- Remova espaços nas extremidades de cada mensagem.
- Se uma mensagem ficar vazia (`""`), ignore-a usando `continue`.
- Adicione as demais mensagens ao novo Array.

Mostre quantas mensagens válidas existem e como ficou a lista.

--- */

/* const mensagens = [" Oi ", "   ", "Bom dia", "", " Tudo bem? ", "   Obrigado  "];

const mensagensValidas = [];

let quantidades = 0;

for (const mensagem of mensagens) { 

    if (mensagem.trim() === "") {
        continue;
    }
        mensagensValidas.push(mensagem.trim());
        quantidades++;
}

console.log("Mensagens válidas:", mensagensValidas);
console.log("Quantidade de mensagens válidas:", quantidades); */

/* ====================================================================== */

/* ## Exercício 15 — Procurar e-mails de uma empresa

```js
const emails = [
    "ana@empresa.com",
    "bruno@gmail.com",
    "  carla@EMPRESA.com  ",
    "diego@escola.com",
    "elisa@empresa.com"
];
```

Crie um Array contendo somente os e-mails que terminam em `"@empresa.com"`.

**Requisitos:**

- a verificação não pode diferenciar maiúsculas de minúsculas;
- espaços nas extremidades devem ser ignorados;
- os e-mails adicionados ao novo Array devem estar sem espaços e em letras minúsculas.

**Não use `filter()`.**

--- */

/* const emails = [
    "ana@empresa.com",
    "bruno@gmail.com",
    "  carla@EMPRESA.com  ",
    "diego@escola.com",
    "elisa@empresa.com"
];

const emailsCorretos = [];

for (const email of emails) {
    const emailCorreto = email.toLowerCase().trim();

    if (emailCorreto.endsWith("@empresa.com")) {
        emailsCorretos.push(email.toLowerCase().trim());
    }
}

console.log("E-mails corretos:", emailsCorretos); */

/* ====================================================================== */

/* ## Exercício 16 — Quantas vogais existem nos nomes?

```js
const nomes = ["MARIA", "Joao", "Bruno", "Ana"];
```

Faça um programa que:

1. percorra cada nome do Array;
2. percorra **cada caractere de cada nome**;
3. conte a quantidade de vogais de cada nome;
4. mostre o resultado individual;
5. mostre também o total de vogais de **todos os nomes**.

**Obrigatório:** use `for` dentro de `for` (um para os nomes, outro para os caracteres) e `if`.

Considere apenas `a`, `e`, `i`, `o`, `u`, sem diferenciar maiúsculas/minúsculas.

--- */

/* const nomes = ["MARIA", "Joao", "Bruno", "Ana"];

let quantidadeVogais = 0;
let quantidadeVogaisNome = 0;

for (const nome of nomes) {
    
    for (let i = 0; i < nome.length; i++) {
        const letra = nome[i].toLowerCase();

        if (letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u") {

            quantidadeVogais++;
            quantidadeVogaisNome++;
        }
    }
    console.log("Quantidade de vogais", nome, ":", quantidadeVogaisNome);

    quantidadeVogaisNome = 0;
}

console.log("Quantidade de voagais:", quantidadeVogais); */

/* ====================================================================== */

/* # Nível 4 — Funções que recebem Arrays

## Exercício 17 — Total de compras

Crie uma função:

```js
calcularTotal(precos)
```

Ela deve receber um Array de preços, somar todos os valores usando repetição e **retornar** o total.

Teste com:

```js
const precos = [10, 25, 8, 17];
```

Depois teste com:

```js
const precosVazios = [];
```

**Pergunta:** o que a função deve retornar quando o Array estiver vazio?
R: 0 */

/* function calcularTotal(precos) {
    let total = 0;

    for (const preco of precos) {
        total += preco;
    }

    return total;
}

const precos = [10, 25, 8, 17];
const precosVazios = [];

console.log(calcularTotal(precos));
console.log(calcularTotal(precosVazios)); */

/* ====================================================================== */

/* ## Exercício 18 — Contar números acima do limite

Crie uma função:

```js
contarAcimaDoLimite(numeros, limite)
```

Ela deve retornar a quantidade de elementos **maiores** que `limite`.

Teste com:

```js
const numeros = [3, 8, 15, 2, 20, 11];

console.log(contarAcimaDoLimite(numeros, 10));
console.log(contarAcimaDoLimite(numeros, 20));
```

**Regra:** a função precisa funcionar com outros Arrays e limites, sem depender dos exemplos acima.

--- */

/* function contarAcimaDoLimite(numeros, limite) {
    let quantidadeAcima = 0;

    for (const numero of numeros) {
        if (numero > limite) {
            quantidadeAcima++;
        }
    }

    return quantidadeAcima;
}

const numeros = [3, 8, 15, 2, 20, 11];

console.log(contarAcimaDoLimite(numeros, 10));
console.log(contarAcimaDoLimite(numeros, 20)); */

/* ====================================================================== */

/* ## Exercício 19 — Buscar um nome

Crie uma função:

```js
buscarIndice(nomes, nomeProcurado)
```

Ela deve:

- percorrer o Array usando `for`;
- comparar os nomes sem diferenciar maiúsculas e minúsculas;
- retornar o **índice da primeira ocorrência**;
- retornar `-1` caso não encontre.

Teste com:

```js
const nomes = ["Ana", "Bruno", "Carla", "Bruno"];

console.log(buscarIndice(nomes, "bruno"));
console.log(buscarIndice(nomes, "Diego"));
```

**Desafio:** adapte a função para também ignorar espaços no começo/fim dos nomes.

--- */

/* function buscarIndice(nomes, nomeProcurado) {

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i].toLowerCase() === nomeProcurado.toLowerCase()) {
            return i;
        }
    }

    return -1;

}

const nomes = ["Ana", "Bruno", "Carla", "Bruno"];

console.log(buscarIndice(nomes, "bruno"));
console.log(buscarIndice(nomes, "Diego")); */

/* ====================================================================== */

/* ## Exercício 20 — Inverter um Array manualmente

Crie uma função:

```js
inverterLista(lista)
```

Ela deve criar e retornar **um novo Array com a ordem invertida**.

Exemplo:

```js
const numeros = [10, 20, 30, 40];

console.log(inverterLista(numeros));
console.log(numeros);
```

**Regras:**

- use `for` regressivo e `.push()`;
- não use `.reverse()`;
- **não altere o Array original**.

--- */

/* function inverterLista(lista) {
    const ordemInvertida = [];

    for (let i = lista.length -1; i >= 0; i--) {
        ordemInvertida.push(lista[i]);
    }

    return ordemInvertida;
}

const numeros = [10, 20, 30, 40];


console.log(inverterLista(numeros));
console.log(numeros); */

/* ====================================================================== */

/* # Nível 5 — Desafios extras (opcionais)

## Exercício 21 — Remover nomes repetidos

```js
const nomes = ["Ana", "BRUNO", "ana", "Carla", "bruno", "Diego", "carla"];
```

Crie um novo Array que contenha apenas um exemplar de cada nome.

Regras:

- `"Ana"` e `"ana"` contam como o **mesmo nome**;
- mantenha a **primeira forma encontrada** (por exemplo, se `"BRUNO"` apareceu primeiro, guarde `"BRUNO"`);
- não use `Array.includes()`, `Set` ou `filter()`;
- tente resolver com **dois `for`**, `if` e `.push()`.

**Pergunta:** por que precisamos comparar o nome atual com os que já foram adicionados à nova lista?

--- */

/* const nomes = ["Ana", "BRUNO", "ana", "Carla", "bruno", "Diego", "carla"];

const nomesSemRepeticao = [];

for (const nome of nomes) {
    const nomeMinusculo = nome.toLowerCase(); 
    let nomeExiste = false;

    for (const novoNome of nomesSemRepeticao) {
        const novoNomeMinusculo = novoNome.toLowerCase();
       
        if (nomeMinusculo === novoNomeMinusculo) {
            nomeExiste = true;
            break;
        }
    }

    if (nomeExiste === false) {
        nomesSemRepeticao.push(nome);
    }
}

console.log(nomesSemRepeticao); */

/* ====================================================================== */

/* ## Exercício 22 — Avaliar várias senhas

```js
const senhas = ["abc", "Dev2026X", "senhaforte", "12345678", "A1bcdefg"];
```

Para cada senha, determine se ela atende **a todas** as regras:

1. ter pelo menos `8` caracteres;
2. conter ao menos uma letra maiúscula;
3. conter ao menos uma letra minúscula;
4. conter ao menos um número.

Mostre uma mensagem por senha:

```text
Senha 1 - Inválida
Senha 2 - Válida
...
```

**Regras:** use `for` para percorrer as senhas e outro `for` para examinar os caracteres. Use `if`, operadores lógicos e contadores ou variáveis booleanas.

> Para facilitar, considere letras de `A` a `Z`, letras de `a` a `z` e números de `0` a `9`. É um exercício de lógica, não um validador de segurança real.

--- */

/* const senhas = ["abc", "Dev2026X", "senhaforte", "12345678", "A1bcdefg"];

let numeroSenha = 0;

for (const senha of senhas) {
    numeroSenha++;

    let temMaiuscula = false;
    let temMinuscula = false;
    let temNumero = false;

    for (let i = 0; i < senha.length; i++) {

        if (senha[i] >= "A" && senha[i] <= "Z") {
            temMaiuscula = true;
        }
        if (senha[i] >= "a" && senha[i] <= "z") {
            temMinuscula = true;
        }
        if (senha[i] >= "0" && senha[i] <= "9") {
            temNumero = true;
        }
    }

    if (senha.length >= 8 && temMaiuscula && temMinuscula && temNumero) {
        console.log("Senha", numeroSenha, "- Válida");
    }
    else {
        console.log("Senha", numeroSenha, "- Inválida");
    }
} */

/* ====================================================================== */

/* ## Exercício 23 — Boletim escolar com dois Arrays

```js
const alunos = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
const notas = [8, 4, 6, 10, 7];
```

Os Arrays estão na **mesma ordem**: o aluno de índice `0` tem a nota de índice `0` e assim por diante.

Gere um relatório:

```text
Ana - Nota: 8 - Aprovado
Bruno - Nota: 4 - Reprovado
...
```

Regras:

- `nota >= 7`: Aprovado;
- `nota >= 5` e `< 7`: Recuperação;
- `nota < 5`: Reprovado.

Ao final, mostre:

1. média geral da turma;
2. nome e nota do aluno com a maior nota;
3. quantidade em cada situação.

**Desafio:** crie uma função `classificarNota(nota)` e reutilize-a no relatório.

--- */

/* const alunos = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
const notas = [8, 4, 6, 10, 7];

let somaNotas = 0;
let maiorNota = notas[0];
let alunoMaiorNota = alunos[0];
let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

function classificarNota(nota) {

    if (nota >= 7) {
        return "Aprovado";
    }
    else if (nota >= 5) {
        return "Recuperação";
    }
    else {
        return "Reprovado";
    }
}

for (let i = 0; i < alunos.length; i++) {
    const situacao = classificarNota(notas[i]);

    if (situacao === "Aprovado") {
        aprovados++;
    }
    else if (situacao === "Recuperação") {
        recuperacao++;
    }
    else {
        reprovados++;
    }

    somaNotas += notas[i];

    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
        alunoMaiorNota = alunos[i];
    }
    
    console.log(alunos[i], "- Nota:", notas[i], "-", situacao);

}

let media = somaNotas / notas.length;

console.log("Média da turma:", media);
console.log("Aluno com maior nota:", alunoMaiorNota, "- Nota:", maiorNota);
console.log("Quantidade Aprovados:", aprovados);
console.log("Quantidade Recuperação:", recuperacao);
console.log("Quantidade Reprovados:", reprovados); */

/* ====================================================================== */

/* ## Exercício 24 — Controle de estoque com movimentações

Uma loja começa com `10` unidades em estoque.

```js
const movimentos = ["entrada", "saida", "saida", "entrada", "saida"];
const quantidades = [5, 7, 12, 4, 6];
```

Cada movimento corresponde à quantidade que está no **mesmo índice**.

Exemplos:

- `movimentos[0]` = `"entrada"` e `quantidades[0]` = `5` → entram 5 unidades;
- `movimentos[1]` = `"saida"` e `quantidades[1]` = `7` → saem 7 unidades.

Processe os movimentos na ordem.

**Regras:**

1. em `"entrada"`, aumente o estoque;
2. em `"saida"`, diminua o estoque **somente se houver unidades suficientes**;
3. se uma saída não puder ser realizada, mostre `"Estoque insuficiente"` e não altere o estoque;
4. mostre o estoque após cada operação;
5. ao final, mostre o estoque restante, quantas operações deram certo e quantas foram recusadas.

**Desafio:** use uma função `podeRetirar(estoque, quantidade)` que retorne `true` ou `false`.

--- */
/* let unidadeEstoque = 10;
let entradas = 0;
let saidas = 0;
let recusadas = 0;

const movimentos = ["entrada", "saida", "saida", "entrada", "saida"];
const quantidades = [5, 7, 12, 4, 6];

function podeRetirar(estoque, quantidade) {
    return estoque >= quantidade;
}

for (let i = 0; i < movimentos.length; i++) {
    if (movimentos[i] === "entrada") {
        unidadeEstoque += quantidades[i];
        entradas++;
    }
    else {
        if (podeRetirar(unidadeEstoque, quantidades[i])) {
            unidadeEstoque -= quantidades[i];
            saidas++;
        }
        else {
            console.log("Estoque insuficiente");
            recusadas++;
        }
    }

    console.log(unidadeEstoque);
}

console.log("Estoque restante:", unidadeEstoque);
console.log("Quantidade entradas:", entradas);
console.log("Quantidade saidas:", saidas);
console.log("Quantidade recusadas:", recusadas);
 */
/* ====================================================================== */

/* ## Exercício 25 — Fila que muda enquanto é atendida

Uma fila começa com:

```js
const fila = ["Ana", "Bruno", "Carla"];
const novasChegadas = ["Diego", "Elisa"];
```

Crie um programa que continue atendendo pessoas **enquanto houver alguém na fila**.

Regras:

1. cada atendimento remove a primeira pessoa da fila (`shift()`);
2. mostre quem foi atendido;
3. **depois do segundo atendimento**, `"Diego"` chega e entra no fim;
4. **depois do quarto atendimento**, `"Elisa"` chega e entra no fim;
5. quando a fila ficar vazia, termine;
6. ao final, mostre quantos atendimentos foram realizados.

**Obrigatório:** use `while`, `if` e os métodos de Array.

**Pergunta:** por que `while` é uma escolha natural aqui, em vez de fazer um `for` com a quantidade inicial de pessoas?

--- */

/* const fila = ["Ana", "Bruno", "Carla"];
const novasChegadas = ["Diego", "Elisa"];

let atendimentos = 0;

while (fila.length > 0) {
    console.log("Atendido:", fila.shift());
    atendimentos++;

    if (atendimentos === 2 || atendimentos === 4) {
        fila.push(novasChegadas[0]);
        novasChegadas.shift();
    }
}

console.log("Atendimentos realizados:", atendimentos); */

/* ====================================================================== */

/* ## Exercício 26 — Combinações de sabores

```js
const sabores = ["Morango", "Chocolate", "Baunilha"];
const coberturas = ["Granulado", "Caramelo"];
```

Uma sorveteria quer mostrar **todas as combinações possíveis** de um sabor com uma cobertura.

Exemplo:

```text
Morango + Granulado
Morango + Caramelo
Chocolate + Granulado
...
```

1. Mostre todas as combinações usando **dois `for`**.
2. Conte quantas combinações foram geradas.
3. Faça o programa continuar funcionando caso sejam adicionados novos sabores ou coberturas.

**Desafio:** crie a função `mostrarCombinacoes(sabores, coberturas)`.

--- */

/* const sabores = ["Morango", "Chocolate", "Baunilha"];
const coberturas = ["Granulado", "Caramelo"];

function mostrarCombinacoes(sabores, coberturas) {
    let total = 0;

    for (const sabor of sabores) {

        for (const cobertura of coberturas) {
            console.log(sabor, "+", cobertura);
            total++;
        }
    }

    return total;
}

const resultado = mostrarCombinacoes(sabores, coberturas);

console.log("Total combinações:", resultado); */

/* ====================================================================== */

/* ## Exercício 27 — Primeiro dia em que a meta é atingida

```js
const vendasDiarias = [120, 0, 150, -1, 200, 180, 90, 250, 100];
const meta = 650;
```

Regras:

- `-1` significa que o valor do dia é inválido: ignore-o com `continue`;
- `0` significa que não houve venda, mas o dia foi válido;
- os demais valores representam vendas do dia;
- some as vendas válidas até alcançar ou ultrapassar a meta;
- **assim que atingir a meta, use `break`** e mostre o dia em que isso aconteceu;
- mostre a soma acumulada e a quantidade de dias com dados válidos processados.

**Atenção:** os dias são numerados começando em **1**, mas o índice do Array começa em **0**.

--- */

/* const vendasDiarias = [120, 0, 150, -1, 200, 180, 90, 250, 100];
const meta = 650;

let diaValido = 0;
let somaVendas = 0;

for (let i = 0; i < vendasDiarias.length; i++) {
    if (vendasDiarias[i] < 0) {
        continue;
    }

    somaVendas += vendasDiarias[i];
    diaValido++;

    if (somaVendas >= meta) {
        console.log("Dia:", i + 1);
        break;
    }
}

console.log("Soma das vendas:", somaVendas);
console.log("Dias:", diaValido); */

/* ====================================================================== */

/* ## Exercício 28 — Ranking de jogadores sem `sort()`

```js
const jogadores = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
const pontuacoes = [80, 120, 95, 110, 70];
```

Mostre um ranking dos jogadores do **maior para o menor número de pontos**, sem modificar os Arrays originais.

**Regras:**

- não use `sort()`, `reverse()` ou objetos;
- os dois Arrays possuem a mesma ordem de correspondência;
- cada jogador deve aparecer **exatamente uma vez**;
- tente usar repetições, comparações e um Array auxiliar para controlar quem já entrou no ranking.

**Dica:** você já sabe como encontrar o maior valor. Como poderia repetir essa busca sem selecionar a mesma pessoa novamente?

--- */

/* const jogadores = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
const pontuacoes = [80, 120, 95, 110, 70];

const rankingJogadores = [];
const rankingPontos = [];
const usados = [];

for (let rodada = 0; rodada < jogadores.length; rodada++) {

    let maior = -1;
    let indice = -1;

    for (let i = 0; i < pontuacoes.length; i++) {

        if (usados.includes(i)) {
            continue;
        }

        if (pontuacoes[i] > maior) {
            maior = pontuacoes[i];
            indice = i;
        }
    }

    rankingJogadores.push(jogadores[indice]);
    rankingPontos.push(pontuacoes[indice]);
    usados.push(indice);
}

console.log("Ranking jogadores:", rankingJogadores);
console.log("Pontuação jogadores:", rankingPontos); */

/* ====================================================================== */

/* ## Exercício 29 — Biblioteca: empréstimos e devoluções

```js
const livros = ["JavaScript Básico", "HTML e CSS", "Lógica de Programação"];
const disponiveis = [true, false, true];
```

Os dois Arrays estão relacionados por índice: `disponiveis[i]` indica se `livros[i]` está disponível.

Crie as funções:

```js
buscarLivro(livros, titulo)
emprestarLivro(livros, disponiveis, titulo)
devolverLivro(livros, disponiveis, titulo)
```

**Comportamento esperado:**

- `buscarLivro` retorna o índice do título ou `-1` se não existir (ignore maiúsculas/minúsculas);
- `emprestarLivro` verifica se o livro existe e está disponível; se estiver, marca como indisponível;
- `devolverLivro` verifica se o livro existe e está emprestado; se estiver, marca como disponível;
- mostre mensagens adequadas para livro não encontrado, empréstimo recusado e devolução inválida;
- faça alguns testes de empréstimo e devolução e depois mostre todos os livros com seus estados.

**Atenção:** uma função pode chamar outra. Evite repetir a lógica de busca nas três funções.

--- */

/* const livros = ["JavaScript Básico", "HTML e CSS", "Lógica de Programação"];
const disponiveis = [true, false, true];

function buscarLivro(livros, titulo) {
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].toLowerCase() === titulo.toLowerCase()) {
            return i;
        }
    }

    return -1;
}

function emprestarLivro(livros, disponiveis, titulo) {
    const indice = buscarLivro(livros, titulo);

    if (indice === -1) {
        return "Livro não encontrado.";
    }

    if (disponiveis[indice] === false) {
        return "Livro não disponível.";
    }
    
    disponiveis[indice] = false;
    return "Livro disponível.";
}

function devolverLivro(livros, disponiveis, titulo) {
    const indice = buscarLivro(livros, titulo);

    if (indice === -1) {
        return "Livro não encontrado.";
    }
    
    if (disponiveis[indice] === true) {
        return "Livro não disponível para devolução.";
    }

    else {
        disponiveis[indice] = true;
        return "Pode devolver.";
    }
}

console.log(emprestarLivro(livros, disponiveis, "JavaScript Básico"));
console.log(devolverLivro(livros, disponiveis, "HTML e CSS"));
console.log(emprestarLivro(livros, disponiveis, "HTML e CSS"));
console.log(emprestarLivro(livros, disponiveis, "HTML e CSS")); */

/* ====================================================================== */

/* ## Exercício 30 — Projeto final: mini sistema de vendas

Uma pequena papelaria trabalha com produtos, preços e estoques:

```js
const produtos = ["Caderno", "Caneta", "Borracha", "Lápis"];
const precos = [20, 4, 3, 2];
const estoques = [3, 10, 0, 8];

const pedidosProdutos = ["caneta", "caderno", "borracha", "lápis", "caneta"];
const pedidosQuantidades = [2, 2, 1, 5, 20];
```

Os Arrays estão alinhados por índice. Por exemplo, `produtos[0]`, `precos[0]` e `estoques[0]` descrevem o mesmo item. Da mesma forma, `pedidosProdutos[i]` e `pedidosQuantidades[i]` descrevem o mesmo pedido.

**Implemente o processamento de todos os pedidos, na ordem.**

Regras:

1. encontre o produto solicitado, **sem diferenciar letras maiúsculas/minúsculas**;
2. se o produto não existir, recuse o pedido;
3. se não houver estoque suficiente, recuse o pedido;
4. se o pedido for aceito, retire a quantidade do estoque e some o valor ao faturamento (`preço × quantidade`);
5. mostre uma mensagem para cada pedido dizendo se foi aceito ou recusado;
6. no final, mostre o faturamento total, a quantidade de pedidos aceitos, a de recusados e o estoque final de cada produto.

**Estruture o problema usando funções.** Sugestões de nomes:

```js
buscarIndiceProduto(produtos, nome)
estoqueSuficiente(estoque, quantidade)
mostrarEstoque(produtos, estoques)
```

Você pode criar outras funções se ajudar a organizar a solução.

**Desafio final:** acrescente um novo pedido para um produto que não existe e verifique se o programa continua funcionando corretamente.

--- */

const produtos = ["Caderno", "Caneta", "Borracha", "Lápis"];
const precos = [20, 4, 3, 2];
const estoques = [3, 10, 0, 8];

const pedidosProdutos = ["caneta", "caderno", "borracha", "lápis", "caneta"];
const pedidosQuantidades = [2, 2, 1, 5, 20];

let faturamento = 0;
let quantidadePedidos = 0;
let pedidosRecusados = 0;

function buscarIndiceProduto(produtos, nome) {
    for (let i = 0; i < produtos.length; i++) {
        if (nome.toLowerCase() === produtos[i].toLowerCase()) {
            return i;
        }
    }

    return -1;
}

function estoqueSuficiente(estoque, quantidade) {
    return estoque >= quantidade;
}

function mostrarEstoque(produtos, estoques) {
    console.log("\n--- ESTOQUE FINAL ---");

    for (let i = 0; i < produtos.length; i++) {
        console.log(`${produtos[i]}: ${estoques[i]} unidades`);
    }
}

function processarPedidos() {
    for (let i = 0; i < pedidosProdutos.length; i++) {
        const nome = pedidosProdutos[i];
        const quantidade = pedidosQuantidades[i];

        const indice = buscarIndiceProduto(produtos, nome);

        if (indice === -1) {
            console.log(`Pedido recusado: ${nome} não encontrado.`);
            pedidosRecusados++;
            continue;
        }

        if (!estoqueSuficiente(estoques[indice], quantidade)) {
            console.log(`Pedido recusado: estoque insuficiente de ${nome}.`);
            pedidosRecusados++;
            continue;
        }

        estoques[indice] -= quantidade;
        faturamento += precos[indice] * quantidade;
        quantidadePedidos++;

        console.log(`Pedido aceito: ${quantidade} ${nome}(s).`);
    }

    console.log("\n--- RESUMO DAS VENDAS ---");
    console.log("Faturamento total: R$", faturamento);
    console.log("Pedidos aceitos:", quantidadePedidos);
    console.log("Pedidos recusados:", pedidosRecusados);

    mostrarEstoque(produtos, estoques);
}

processarPedidos();

/* ====================================================================== */

/* # Checklist de entrega

Antes de concluir, confira:

- [ ] Usei Arrays para armazenar dados relacionados?
- [ ] Entendi que o primeiro elemento está no índice `0`?
- [ ] Usei `.length` em vez de números fixos quando fazia sentido?
- [ ] Sei a diferença entre índice e valor do elemento?
- [ ] Escolhi corretamente entre `for`, `for...of` e `while`?
- [ ] Usei `if` para tratar cada caso?
- [ ] Evitei perder os valores dos contadores e acumuladores?
- [ ] Consigo explicar o motivo de usar `break` ou `continue`?
- [ ] Minhas funções recebem os parâmetros necessários e retornam o que foi pedido?
- [ ] Verifiquei o comportamento com Arrays vazios quando o exercício envolve uma função genérica?
- [ ] Testei minha solução alterando os dados iniciais?
- [ ] Evitei usar métodos de Arrays que ainda não estudamos?

## Para pensar depois da lista

Quando você usa um Array, geralmente aparecem três perguntas importantes:

1. **Onde está o dado?** → índice e busca.
2. **O que faço com cada dado?** → repetição e condição.
3. **O que faço com o resultado?** → imprimir, contar, somar, criar outro Array ou retornar de uma função.

Essas três ideias vão aparecer novamente quando começarmos a trabalhar com os métodos mais avançados de Arrays e com o DOM. */
