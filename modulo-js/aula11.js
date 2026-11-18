/* function dobrar(numero) {
    return numero * 2;
}

console.log(dobras(5)); */

/* ====================================================================================================== */

// Arrow function

/* const dobrar = (numero) => {
    return numero * 2;
}
console.log(dobrar(5)); */

//======================================================================================================

/* function executarOperacao(numero, operacao) {
    return operacao(numero);
}

const triplicar = (numero) => numero * 3;

console.log(executarOperacao(10, triplicar));
console.log(executarOperacao(10, dobrar)); */

//======================================================================================================

/* const frutas = ["Banana", "Kiwi", "Uva", "Maça"];

// For com Index (i), For...of e forEach, são formas de ITERAÇÃO sobre arrays/strings/objetos
frutas.forEach((fruta) => {
    console.log(fruta);
})

const clientes = ["Xandinho07", "Nathan", "Pode Seller", "Dongle"];

clientes.forEach((cliente, index) => {
    console.log("Senha:", (index + 1), cliente);
}) */

//======================================================================================================

/* const temperaturas = [18, 31, 24, 12];

temperaturas.forEach((temperatura) => {
    if (temperatura >= 30) {
        console.log(temperatura, "está calor");
    }
    else if (temperatura >= 20) {
        console.log(temperatura, "está agradável");
    }
    else {
        console.log(temperatura, "está frio");
    }
}) */

//======================================================================================================

/* const gastos = [15, 30, 25];
let total = 0;

gastos.forEach((gasto) => {
    total += gasto;
})

console.log("Total: R$", total); */

//======================================================================================================

/* Considere:

const passageiros = ["Alice", "Diego", "Marina", "Pedro"];

usando forEach() mostre a etiqueta para cada passageiro incluindi a sua posição na lista (começando em 1). */

/* const passageiros = ["Alice", "Diego", "Marina", "Pedro"];

passageiros.forEach((passageiro, index) => {
    console.log("Passageiro:", index + 1, passageiro);
}) */

//======================================================================================================

// ############################################ MAP ###########################################

// Array A
//const pontos = [3, 5, 8];

// Crio um Array B a partir dos valores do Array A
//const pontosEmDobro = pontos.map((ponto) => ponto * 2);

//console.log(pontos);
//console.log(pontosEmDobro);

//======================================================================================================

/* const temperaturasCelsius = [0, 20, 30];

const temperaturaF = temperaturaCelsius.map((temperatura) => {
    return temperatura * 9 / 5 + 32;
})

console.log(temperaturaF); */

//======================================================================================================

/* const numeros = [2, 4, 6];

const dobrados = numeros.map((numero) => {
    return numero * 2;
})

console.log(dobrados); */

//======================================================================================================

/* Considere:

```js
const precos = [40, 80, 120, 200];
```

Crie um **novo Array** com acréscimo de 15% sobre cada preço usando `map()`.

Mostre o Array original e o novo Array. */

/* const precos = [40, 80, 120, 200];

const precoComAcrescimo = precos.map((preco) => {
    return preco + (preco * 15 / 100);
})

console.log(precos);
console.log(precoComAcrescimo); */

//======================================================================================================

/* Considere:

```js
const cidades = ["  blumenau", "JOINVILLE  ", "  itajaí  "];
```

Crie um novo Array em que cada cidade esteja:

- sem espaços no início e no fim;
- escrita totalmente em maiúsculas.

Use `map()` e métodos de String.

**Desafio extra:** gere um terceiro Array adicionando o prefixo `Cidade: ` a cada cidade padronizada. */

/* const cidades = ["  blumenau", "JOINVILLE  ", "  itajaí  "];

const cidadesReformuladas = cidades.map((cidade) => {
    return cidade.trim().toUpperCase();
})

const cidadesComPrefixo = cidadesReformuladas.map((cidade) => {
    return "Cidade: " + cidade;
}) 

console.log(cidadesReformuladas);
console.log(cidadesComPrefixo); */

//======================================================================================================
/* // ######################################## FILTER #######################################

const notas = [4, 7, 9, 10];

const aprovados = notas.filter((nota) => nota >= 7);

console.log(aprovados); */

//======================================================================================================

/* const quantidades = [5, 0, 12, 0, 3];

const semEsqtoque = quantidade.filter((quantidade) => quantidade === 0);

console.log(semEstoque); */

//======================================================================================================

/* Considere:

```js
const idades = [16, 18, 22, 14, 30, 19, 45];
```

Crie um novo Array somente com as idades entre **18 e 30 anos, incluindo os limites**.

Use `filter()` e `&&`. */

/* const idades = [16, 18, 22, 14, 30, 19, 45];

const idadesEntre = idades.filter((idade) => idade >= 18 && idade <= 30);

console.log(idadesEntre); */

//======================================================================================================

//### Exercício 6 — Nomes que contêm A

//Considere:

//```js
//const nomes = ["Ana", "Bruno", "Camila", "Igor", "Lara", "Pedro"];
//```

//Crie um novo Array apenas com os nomes que possuem a letra `a`, independentemente de ser maiúscula ou minúscula.

//Use `filter()` e métodos de String.

//**Desafio extra:** crie outro Array somente com nomes que tenham pelo menos 5 caracteres.

/* const nomes = ["Ana", "Bruno", "Camila", "Igor", "Lara", "Pedro"];

const nomesComA = nomes.filter((nome) => nome.toLowerCase().startsWith("a"));

const nomesAte5Caracteres = nomes.filter((nome) => nome.length >= 5);

console.log(nomesComA);
console.log(nomesAte5Caracteres); */

//======================================================================================================
// ########################################### Find, includes, indexOf ###########################

//const acesso = ["admin", "aluno", "professor"];

//console.log(acesso.includes("aluno")); // -> true/false
//console.log(acesso.includes("visitante"));
//console.log(acesso.includes("adm"));

//console.log(acesso.indexOf("admin"));
//console.log(acesso.indexOf("professor"));
//console.log(acesso.indexOf("visitante"));

//======================================================================================================

/* const senha = [12, 19, 27, 34];

const primeiraMaiorQue20 = senhas.find((senha) => {
    return senha > 20;
})

console.log(primeiraMaiorQue20); */

//======================================================================================================

/* const salarios = [1500, 2500, 3700, 1800];

console.log(salarios.filter((s) => s > 2000));// Pode obter 1 ou mais elementos
console.log(salarios.find((s) => s > 2000));// Somente o primeiro elemento */

//======================================================================================================

/* ### Exercício 7 — Mini sistema de preços

Considere:

```js
const valores = [35, 120, 75, 200, 15, 90];
```

Resolva cada tarefa usando o método adequado entre os estudados hoje:

1. Mostre cada preço no console acompanhado de um número de item começando em 1.
2. Crie um novo Array com **R$ 10 de desconto** em cada valor.
3. Crie um novo Array contendo apenas preços **maiores ou iguais a R$ 80**.
4. Encontre o **primeiro preço maior que R$ 100**.
5. Verifique se existe exatamente o valor `75` no Array.
6. Descubra em qual índice aparece o valor `200`.

Antes de programar, escreva um comentário com o nome do método escolhido para cada tarefa. */

/* const valores = [35, 120, 75, 200, 15, 90];

valores.forEach((valor, indice) => {
    console.log("Item:", indice + 1, "R$:", valor);
});

const desconto = 10;

const valoresComDesconto = valores.map((valor) => {
    return valor - desconto;
});

console.log(valoresComDesconto);

const valoresMaiores = valores.filter((valor) => valor >= 80);
console.log(valoresMaiores);

const primeiroMaior = valores.find((valor) => {
    return valor > 100;
})

console.log(primeiroMaior);
console.log(valores.includes(75));
console.log(valores.indexOf(200)); */

//======================================================================================================

/* # SuperDev — Desafio de fim de semana: Arrays e callbacks

**Disciplina:** JavaScript e Lógica de Programação  
**Conteúdo:** `forEach()`, `map()`, `filter()`, `find()`, `includes()`, `indexOf()`, funções, Strings, `if` e laços de repetição.

## Orientações

Esta lista é uma continuação dos exercícios de Arrays e do conteúdo sobre **callbacks e arrow functions**.

- Resolva os exercícios na ordem sugerida. Os **exercícios 1 a 16 são a trilha principal**; os **17 a 24 são desafios extras**.
- Utilize somente conceitos já vistos: variáveis, funções, `return`, `if/else`, `for`, `for...of`, Arrays e métodos de Strings.
- Prefira o método de Array solicitado em cada exercício. Não substitua `filter()` por um `for` quando o objetivo for justamente praticar `filter()`.
- Não utilize `reduce()`, `sort()`, `some()`, `every()`, objetos, DOM ou recursos ainda não apresentados em aula.
- Sempre que criar uma função, **teste-a com mais de um conjunto de dados**. Não deixe a solução funcionar apenas para o exemplo inicial.
- **Não há respostas neste arquivo.** Os exemplos de saída servem apenas para entender o enunciado.

--- */

//======================================================================================================

/* # Parte 1 — Entenda antes de executar

## Exercício 1 — `forEach()` e o valor retornado

Considere:

```js
const planetas = ["Marte", "Vênus", "Terra"];

const resultado = planetas.forEach((planeta, indice) => {
    console.log(indice + 1, planeta);
});

console.log(resultado);
```

**Sem executar**, responda:

1. O que será mostrado pelos `console.log()` dentro do `forEach()`?
R: 1 Marte
   2 Vênus
   3 Terra
2. Qual é o valor de `resultado`?
R: undefined
3. Por que `forEach()` não é a escolha ideal para criar outro Array com valores transformados?
R: porque ele é usado apenas para percorrer o array

--- */

/* const planetas = ["Marte", "Vênus", "Terra"];

const resultado = planetas.forEach((planeta, indice) => {
    console.log(indice + 1, planeta);
});

console.log(resultado); */

//======================================================================================================

/* ## Exercício 2 — Transformar ou selecionar?

Considere:

```js
const numeros = [3, 6, 9, 12];

const resultadoA = numeros.map((numero) => numero + 1);
const resultadoB = numeros.filter((numero) => numero > 6);
```

**Sem executar**, escreva:

1. O conteúdo de `resultadoA`;
    4, 7, 10, 13
2. o conteúdo de `resultadoB`;
    9, 12
3. qual dos métodos transforma todos os elementos;
    .map()
4. qual dos métodos decide quais elementos continuam no novo Array;
    .filter()
5. se o Array `numeros` foi modificado.
    não, tanto o .map(), quanto o .filter() não modificam o array original.

--- */

/* const numeros = [3, 6, 9, 12];

const resultadoA = numeros.map((numero) => numero + 1);
const resultadoB = numeros.filter((numero) => numero > 6); */

//======================================================================================================

/* ## Exercício 3 — O `map()` que não funciona

O código deveria criar um Array com o triplo de cada número:

```js
const numeros = [2, 4, 6];

const triplicados = numeros.map((numero) => {
    numero * 3;
});

console.log(triplicados);
```

1. Identifique o erro.
2. Corrija o código mantendo as chaves `{ }` da callback.
3. Escreva uma segunda versão usando uma arrow function mais curta.
4. Explique a função do `return` nesse caso.

--- */

/* const numeros = [2, 4, 6];

const triplicados = numeros.map((numero) => {
    return numero * 3;
});

console.log(triplicados);

const triplicar = numeros.map((numero) => numero * 3);
console.log(triplicar); */

//======================================================================================================

/* # Parte 2 — `forEach()` com lógica

## Exercício 4 — Programação de um festival

Considere:

```js
const apresentacoes = ["Teatro", "Música", "Dança", "Comédia"];
```

Use **`forEach()`** para mostrar:

```text
Apresentação 1: Teatro
Apresentação 2: Música
Apresentação 3: Dança
Apresentação 4: Comédia
```

**Atenção:** o índice do Array começa em `0`, mas a numeração do evento começa em `1`.

**Extra:** marque a última apresentação com a mensagem `Encerramento do festival`.

--- */

/* const apresentacoes = ["Teatro", "Música", "Dança", "Comédia"];

apresentacoes.forEach((apresentacao, indice) => {

    if (indice === apresentacoes.length - 1) {
        console.log("Encerramento do festival:", apresentacao)
    } else {
        console.log("Apresentação", indice + 1 + ":", apresentacao);
    }
}) */

//======================================================================================================

/* ## Exercício 5 — Entradas e saídas de caixa

Uma pequena loja registrou movimentações financeiras:

```js
const movimentacoes = [80, -25, 120, -40, 15];
```

Os valores positivos representam **entradas**, e os negativos representam **saídas**.

Utilizando **`forEach()` e `if`**, descubra:

1. o total recebido (somente valores positivos);
2. o total gasto (apresente o valor como uma quantidade positiva);
3. o saldo final;
4. quantas movimentações foram entradas e quantas foram saídas.

Não some os números manualmente.

--- */

/* const movimentacoes = [80, -25, 120, -40, 15];

let entradas = 0;
let quantidadeEntradas = 0;
let saidas = 0;
let quantidadeSaidas = 0

movimentacoes.forEach((valor) => {
    if (valor >= 0) {
        entradas += valor;
        quantidadeEntradas++;
    } else {
        saidas += valor * -1;
        quantidadeSaidas++;
    }
})

const saldoFinal = entradas - saidas;

console.log("Entradas:", entradas);
console.log("Saídas:", saidas);
console.log("Saldo:", saldoFinal);
console.log("Movimentações entradas:", quantidadeEntradas);
console.log("Movimentações saídas:", quantidadeSaidas); */

//======================================================================================================

/* ## Exercício 6 — Lista de presença

Considere:

```js
const presencas = ["P", "F", "P", "P", "F", "P", "P"];
```

`P` significa **presente** e `F` significa **faltou**.

Use **`forEach()`** para:

1. mostrar a situação de cada participante, numerando-os a partir de `1`;
2. contar quantos compareceram;
3. contar quantos faltaram;
4. calcular o percentual de presença da turma.

**Desafio:** faça o código funcionar também quando todos estiverem presentes ou quando ninguém estiver presente.

--- */

/* const presencas = ["P", "F", "P", "P", "F", "P", "P"];

let presentes = 0;
let faltantes = 0;

presencas.forEach((presenca, indice) => {
    if (presenca === "P") {
        console.log("Participante", indice + 1 + ": Presente");
        presentes++;
    } else {
        console.log("Participante", indice + 1 + ": Faltou");
        faltantes++;
    }

})

let percentualPresenca = 0;

if (presencas.length > 0) {
    percentualPresenca = (presentes / presencas.length) * 100;
}

console.log("Presentes:", presentes);
console.log("Faltantes:", faltantes);
console.log("Percentual presença:", percentualPresenca + "%"); */

//======================================================================================================

/* # Parte 3 — `map()` para transformar dados

## Exercício 7 — Padronização de etiquetas

Considere:

```js
const etiquetas = ["  Frágil ", "urgente", " Entrega Expressa  ", "normal"];
```

Crie um novo Array chamado `etiquetasPadronizadas`, usando **`map()`**, com todas as etiquetas:

- sem espaços nas extremidades;
- completamente em letras maiúsculas.

Mostre **o Array original e o novo** para comparar os resultados.

**Dica:** combine `.trim()` e `.toUpperCase()`.

--- */

/* const etiquetas = ["  Frágil ", "urgente", " Entrega Expressa  ", "normal"];

const etiquetasPadronizadas = etiquetas.map((etiqueta) => etiqueta.trim().toUpperCase());

console.log(etiquetas);
console.log("Etiquetas padronizadas:", etiquetasPadronizadas); */

//======================================================================================================

/* ## Exercício 8 — Reajuste de mensalidades

Uma instituição possui os seguintes valores de mensalidade:

```js
const mensalidades = [90, 150, 75, 220, 100];
```

Utilize **`map()` com `if`** para gerar um novo Array com os valores reajustados:

- mensalidades **menores que R$ 100** recebem aumento de **5%**;
- mensalidades **maiores ou iguais a R$ 100** recebem aumento de **12%**.

Mostre os valores antes e depois do reajuste.

**Extra:** transforme a lógica em uma função `reajustarMensalidades(mensalidades)` que retorna o novo Array.

--- */

/* const mensalidades = [90, 150, 75, 220, 100];

console.log(mensalidades);

function reajustarMensalidades(mensalidades) {

    const valoresReajustados = mensalidades.map((mensalidade) => {
        if (mensalidade < 100) {
            return mensalidade + (mensalidade * 5 / 100);
        } else {
            return mensalidade + (mensalidade * 12 / 100);
        }

    })

    return valoresReajustados;
}

console.log(reajustarMensalidades(mensalidades)); */

//======================================================================================================

/* ## Exercício 9 — Tempo de podcasts

Os tempos dos episódios foram cadastrados em **minutos**:

```js
const duracoesMinutos = [3, 12, 8, 20, 5];
```

Crie, com **`map()`**, um novo Array contendo a duração de cada episódio em **segundos**.

Depois, usando outro `map()`, crie uma lista de mensagens com o formato:

```text
Episódio de 3 minutos
Episódio de 12 minutos
...
```

O Array original deve continuar guardando valores em minutos.

--- */

/* const duracoesMinutos = [3, 12, 8, 20, 5];

const duracoesSegundos = duracoesMinutos.map((duracao) => duracao * 60);

console.log(duracoesSegundos);

const episodios = duracoesMinutos.map((duracao) => {
    return "Episódio de " + duracao + " minutos";
})

console.log(episodios) */

//======================================================================================================

/* ## Exercício 10 — Classificação de avaliações

Considere:

```js
const avaliacoes = [2, 5, 8, 10, 6, 3];
```

Crie um novo Array, utilizando **`map()`**, substituindo cada nota pela classificação:

- nota menor que `5`: `"Ruim"`;
- nota entre `5` e `7`, inclusive: `"Regular"`;
- nota maior ou igual a `8`: `"Ótima"`.

Mostre as classificações.

**Extra:** crie uma função `classificarAvaliacao(nota)` e passe-a como callback ao `map()`.

--- */

/* const avaliacoes = [2, 5, 8, 10, 6, 3];

function classificarAvaliacao(nota) {
    if (nota < 5) {
        return "Ruim"
    } else if (nota <= 7) {
        return "Regular"
    } else {
        return "Ótima"
    }
}

const classificacao = avaliacoes.map(classificarAvaliacao)

console.log(classificacao); */

//======================================================================================================

/* # Parte 4 — `filter()` para selecionar elementos

## Exercício 11 — Credenciamento de uma trilha

Considere:

```js
const idades = [13, 18, 30, 65, 17, 42, 70, 21];
```

Para participar de uma trilha, a pessoa deve ter **de 18 a 65 anos, inclusive**.

Use **`filter()`** para criar um novo Array somente com as idades permitidas.

Depois mostre:

1. o Array com as idades permitidas;
2. quantas pessoas podem participar;
3. quantas pessoas não atendem ao critério.

--- */

/* const idades = [13, 18, 30, 65, 17, 42, 70, 21];

const idadesPermitidas = idades.filter((idade) => idade >= 18 && idade <= 65);

const naoAtendem = idades.length - idadesPermitidas.length;

console.log(idadesPermitidas);
console.log("Total de pessoas permitidas:", idadesPermitidas.length);
console.log("Não atendem ao critério:", naoAtendem); */

//======================================================================================================

/* ## Exercício 12 — Arquivos para impressão

Considere:

```js
const arquivos = [
    "relatorio.pdf",
    "imagem.png",
    "  contrato.PDF ",
    "anotacoes.txt",
    "manual.pdf",
    "FOTO.JPG"
];
```

Usando **`filter()`**, selecione somente arquivos PDF.

A busca deve:

- ignorar letras maiúsculas/minúsculas;
- desconsiderar espaços no início e no fim do nome.

**Extra:** depois use `map()` para gerar uma lista limpa, sem espaços e com os nomes em letras minúsculas.

--- */

/* const arquivos = [
    "relatorio.pdf",
    "imagem.png",
    "  contrato.PDF ",
    "anotacoes.txt",
    "manual.pdf",
    "FOTO.JPG"
];

const arquivosPdf = arquivos.filter((arquivo) => arquivo.trim().toLowerCase().endsWith("pdf"));

const arquivosLimpos = arquivosPdf.map((arquivo) => arquivo.trim().toLowerCase());

console.log(arquivosPdf);
console.log(arquivosLimpos); */

//======================================================================================================

/* ## Exercício 13 — Produtos para uma campanha

Considere:

```js
const precos = [12, 55, 80, 25, 150, 42, 60, 9];
```

Uma campanha seleciona somente produtos com valor **maior que R$ 20 e menor que R$ 100**.

1. Use `filter()` para criar a lista dos produtos elegíveis.
2. Use `map()` para criar outro Array aplicando **10% de desconto** aos preços elegíveis.
3. Mostre os dois Arrays e explique por que utilizou métodos diferentes em cada etapa.

--- */

/* const precos = [12, 55, 80, 25, 150, 42, 60, 9];

const produtosElegiveis = precos.filter((preco) => preco > 20 && preco < 100);

const descontoProdutos = produtosElegiveis.map((produto) => produto - (produto * 10 / 100));

console.log("Produtos elegíveis:", produtosElegiveis);
console.log("Produtos com desconto:", descontoProdutos); */

//======================================================================================================

/* # Parte 5 — `find()`, `includes()` e `indexOf()`

## Exercício 14 — Conferindo códigos de acesso

Considere:

```js
const codigos = [110, 205, 307, 410, 512];
const procurado = 307;
```

Utilize:

1. `includes()` para verificar se o código está cadastrado;
2. `indexOf()` para identificar sua posição no Array;
3. `if` para mostrar `"Código encontrado"` ou `"Código inexistente"`.

**Teste novamente com `procurado = 999`.**

Responda: o que `indexOf()` devolve quando não encontra o elemento?

--- */

/* const codigos = [110, 205, 307, 410, 512];
const procurado = 999;

if (codigos.includes(procurado)) {
    console.log("Código encontrado.")
} else {
    console.log("Código inexistente.")
}

console.log(codigos.indexOf(procurado)); */

//======================================================================================================

/* ## Exercício 15 — Primeiro horário disponível

Considere:

```js
const horarios = [8, 9, 11, 13, 16, 19];
```

Uma pessoa só pode comparecer **entre 12h e 17h, inclusive**.

1. Use **`find()`** para encontrar o primeiro horário possível.
2. Mostre o horário encontrado.
3. Teste novamente procurando um horário entre **20h e 22h**.
4. Se não houver horário compatível, mostre `"Nenhum horário disponível"`.

Responda: o que `find()` devolve quando não encontra nenhum elemento?

--- */

/* const horarios = [8, 9, 11, 13, 16, 19];

const horaDisponivel = horarios.find((horario) => horario >= 20 && horario <= 22);

if(horaDisponivel === undefined) {
    console.log("Nenhum horário disponível");
} else {
    console.log("Horário disponível:", horaDisponivel + "hrs");
} */

//======================================================================================================

/* ## Exercício 16 — `find()` ou `filter()`?

Considere:

```js
const temperaturas = [19, 27, 34, 31, 24, 36];
```

1. Utilize `find()` para obter **a primeira** temperatura maior que `30`.
2. Utilize `filter()` para obter **todas** as temperaturas maiores que `30`.
3. Mostre os dois resultados.
4. Explique a diferença entre o tipo de resultado produzido por cada método.

--- */

/* const temperaturas = [19, 27, 34, 31, 24, 36];

const temperaturasMaiores = temperaturas.filter((temperatura) => temperatura > 30);

const primeiraMaior = temperaturas.find((temperatura) => temperatura > 30);

console.log("Primeira temperatura maior que 30:", primeiraMaior);
console.log("Temperaturas maiores que 30:", temperaturasMaiores); */

//======================================================================================================

/* # Desafios extras — Para quem quiser ir além

## Exercício 17 — Evitando músicas duplicadas

Considere:

```js
const musicas = ["Aurora", "Horizonte", "Neblina"];
let novaMusica = "Horizonte";
```

Crie uma função `adicionarMusica(musicas, novaMusica)` que:

- usa `includes()` para verificar se a música já existe;
- se já existir, não adiciona novamente;
- caso contrário, adiciona a música com `push()`;
- retorna uma mensagem informando se a música foi adicionada ou se já estava na lista.

Teste com uma música existente e com uma nova.

**Desafio adicional:** faça a comparação ignorar maiúsculas e minúsculas. Se necessário, investigue como `find()` pode ajudar.

--- */

/* const musicas = ["Aurora", "Horizonte", "Neblina"];
let novaMusica = "horizonte";

function adicionarMusica(musicas, novaMusica) {

    const musicaExiste = musicas.find((musica) => musica.toLowerCase() === novaMusica.toLowerCase())

    if (musicaExiste) {
        return "Música já existe na lista";
    }

    musicas.push(novaMusica);
    return "Música adicionada á lista";
}

console.log(adicionarMusica(musicas, novaMusica)); */

//======================================================================================================

/* ## Exercício 18 — Selecionar candidatos por nome

Considere:

```js
const candidatos = [" Ana ", "Bruno", "alberto", "Carla", " Amanda ", "Diego"];
```

Crie uma função:

```js
buscarPorInicial(candidatos, inicial)
```

Ela deve retornar **um novo Array com os nomes que começam com a inicial informada**, 
ignorando espaços nas extremidades e diferenças entre maiúsculas/minúsculas.

Os nomes no Array retornado também devem estar **sem espaços nas extremidades**.

**Obrigatório:** combine `filter()` e `map()`.

Teste com as iniciais `"a"` e `"C"`.

--- */

/* const candidatos = [" Ana ", "Bruno", "alberto", "Carla", " Amanda ", "Diego"];

function buscarPorInicial(candidatos, inicial) {
    const candidatosFormatados = candidatos.map((candidato) => candidato.trim().toLowerCase());

    const candidatosComInicial = candidatosFormatados.filter((candidato) => {
            return candidato.startsWith(inicial.toLowerCase());
    })

    return candidatosComInicial;

}

console.log(buscarPorInicial(candidatos, "a"));
console.log(buscarPorInicial(candidatos, "C")); */

//======================================================================================================

/* ## Exercício 19 — Reajuste parametrizado

Crie uma função:

```js
aplicarDesconto(precos, percentual)
```

Ela deve receber um Array de preços e um percentual de desconto e retornar **outro Array** com os valores descontados.

Teste com:

```js
const valores = [100, 250, 80, 40];

console.log(aplicarDesconto(valores, 10));
console.log(aplicarDesconto(valores, 25));
console.log(valores);
```

**Regras:** use `map()` e não modifique o Array original.

**Extra:** valide com `if` se o percentual está entre `0` e `100`. Se for inválido, retorne um Array vazio.

--- */

/* function aplicarDesconto(precos, percentual) {
    if (percentual < 0 || percentual > 100) {
        return [];
    }

    const resultado = precos.map((preco) => {
        return preco - (preco * percentual / 100);
    })

    return resultado;
}

const valores = [100, 250, 80, 40];

console.log(aplicarDesconto(valores, 10));
console.log(aplicarDesconto(valores, 25));
console.log(valores); */

//======================================================================================================

/* ## Exercício 20 — E-mails de uma organização

Considere:

```js
const emails = [
    "  maria@escola.com ",
    "PEDRO@gmail.com",
    "ana@ESCOLA.com",
    "joao@empresa.com",
    " bruna@escola.com"
];
```

Crie uma função:

```js
selecionarEmails(emails, dominio)
```

Ela deve:

1. selecionar apenas os e-mails que terminam com o domínio informado;
2. ignorar maiúsculas/minúsculas e espaços nas extremidades;
3. retornar um novo Array de e-mails **sem espaços e em letras minúsculas**.

Use **`filter()` e `map()`** e teste com o domínio `"@escola.com"`.

--- */

/* const emails = [
    "  maria@escola.com ",
    "PEDRO@gmail.com",
    "ana@ESCOLA.com",
    "joao@empresa.com",
    " bruna@escola.com"
];



function selecionarEmails(emails, dominio) {

    const emailsFormatados = emails.map((email) => email.trim().toLowerCase());
    
    const solicitado = emailsFormatados.filter((email) => {
        return email.endsWith(dominio.toLowerCase());
    })

    return solicitado;
}

console.log(selecionarEmails(emails, "@escola.com")); */

//======================================================================================================

/* ## Exercício 21 — Sistema de triagem

Considere:

```js
const situacoes = ["PENDENTE", "CONCLUÍDO", "PENDENTE", "CANCELADO", "PENDENTE"];
```

Você deverá:

1. usar `map()` para produzir um novo Array com todos os textos em letras minúsculas;
2. usar `filter()` para separar apenas as situações pendentes;
3. usar `forEach()` para mostrar cada pendência com a numeração `Pendência 1`, `Pendência 2` etc.;
4. mostrar a quantidade total de pendências.

**Desafio:** transforme o processo em uma função `relatarPendencias(situacoes)`.

--- */

/* const situacoes = ["PENDENTE", "CONCLUÍDO", "PENDENTE", "CANCELADO", "PENDENTE"];

function relatarPendencias(situacoes) {
    const padronizados = situacoes.map((situacao) => situacao.toLowerCase());

    const pendentes = padronizados.filter((padronizado) => padronizado === "pendente");

    pendentes.forEach((pendente, index) => {
        console.log("Pendência", index + 1);
    })

    console.log("Quantidade de pendências:", pendentes.length);
}

relatarPendencias(situacoes); */

//======================================================================================================

/* ## Exercício 22 — Identificando malas acima do peso

Uma companhia de transporte registrou duas listas relacionadas pela **mesma posição**:

```js
const malas = ["Mala A", "Mala B", "Mala C", "Mala D", "Mala E"];
const pesos = [12, 26, 18, 31, 23];
```

A bagagem é considerada acima do limite quando pesa **mais de 23 kg**.

1. Use `forEach()` para exibir cada mala e seu peso.
2. Use `filter()` para criar um novo Array **somente com os nomes das malas** acima do limite. 
Utilize o índice recebido pela callback para consultar `pesos`.
3. Use `find()` para descobrir a **primeira mala** acima do limite.
4. Mostre a quantidade de malas acima do limite.

**Regra:** não crie objetos nem altere os Arrays originais.

--- */

/* const malas = ["Mala A", "Mala B", "Mala C", "Mala D", "Mala E"];
const pesos = [12, 26, 18, 31, 23];

let limite = 23;

malas.forEach((mala, indice) => {
    console.log(mala + ":", pesos[indice] + "kg");
});

const acimaLimite = malas.filter((mala, indice) => {
    return pesos[indice] > limite;
})

const primeiraAcima = malas.find((mala, indice) => {
    return pesos[indice] > limite;
})

console.log("Malas acima do limite:", acimaLimite);
console.log("Primeira mala acima do limite:", primeiraAcima);
console.log("Quantidade de malas acima do limite:", acimaLimite.length); */

//======================================================================================================

/* ## Exercício 23 — Corrigindo o programa de outro desenvolvedor

Um colega escreveu:

```js
const notas = [4, 7, 9, 5];

const aprovados = notas.filter((nota) => {
    nota >= 7;
});

const notasComBonus = notas.map((nota) => {
    return nota + 1;
});

const mensagens = notas.forEach((nota) => {
    return "Nota: " + nota;
});

console.log(aprovados);
console.log(notasComBonus);
console.log(mensagens);
```

O programa deveria:

- gerar um Array com as notas aprovadas;
- gerar outro Array com um ponto adicional por nota;
- exibir uma mensagem para cada nota.

**Tarefas:**

1. Descubra por que a variável `aprovados` não contém os resultados esperados.
2. Corrija a seleção dos aprovados.
3. Corrija a parte das mensagens, mantendo o `forEach()`.
4. Explique por que a variável `mensagens` não contém um Array de mensagens.
5. Mostre o resultado esperado de cada etapa.

--- */

/* const notas = [4, 7, 9, 5];

const aprovados = notas.filter((nota) => {
    return nota >= 7;
});

const notasComBonus = notas.map((nota) => {
    return nota + 1;
});

notas.forEach((nota) => {
    console.log("Nota: ", nota);
});

console.log(aprovados);
console.log(notasComBonus); */

//======================================================================================================

/* ## Exercício 24 — Projeto final: inscrições em uma oficina

Uma oficina registrou nomes e idades em **dois Arrays relacionados por índice**:

```js
const inscritos = [" Ana ", "BRUNO", "Carla", "diego", " Elisa ", "Fernanda"];
const idades = [17, 22, 15, 30, 18, 16];
```

**Regras da oficina:** só podem participar pessoas com **18 anos ou mais**.

Crie um programa que realize, nesta ordem:

1. Use `map()` para montar um novo Array com os nomes sem espaços externos e em **letras maiúsculas**.
2. Use `forEach()` para mostrar um relatório com o número da inscrição, o nome formatado, a idade e a situação `"Apto"` ou `"Não apto"`.
3. Use `filter()` para criar um Array **com os nomes** de quem pode participar. A callback deve utilizar o **índice** para consultar a idade correspondente.
4. Use `find()` para localizar o **primeiro nome** de alguém que ainda não tem 18 anos.
5. Use `includes()` para verificar se `"BRUNO"` aparece entre os nomes formatados.
6. Use `indexOf()` para descobrir a posição de `"ELISA"` no Array formatado.
7. No final, mostre quantos inscritos estão aptos e quantos não estão.

**Desafios adicionais:**

- Organize parte do código em funções com parâmetros e `return`.
- Faça o programa funcionar quando novos nomes e idades forem adicionados (mantendo a correspondência entre os índices).
- Trate o caso em que **todos os inscritos são maiores de idade**: o `find()` deve ser interpretado corretamente.

> **Atenção:** não use objetos. O objetivo é praticar os métodos de Arrays e 
compreender como o parâmetro `indice` da callback permite acessar dados relacionados.

--- */

/* const inscritos = [" Ana ", "BRUNO", "Carla", "diego", " Elisa ", "Fernanda"];
const idades = [17, 22, 15, 30, 18, 16];

const idadePermitida = 18;

function formatarNomes(nomes) {
    return nomes.map((nome) => nome.trim().toUpperCase());
}

function mostrarRelatorio(nomes, idades, idadePermitida) {
    nomes.forEach((nome, indice) => {
        if (idades[indice] >= idadePermitida) {
            console.log(
                "Inscrição:", indice + 1,
                "Inscrito:", nome,
                "Idade:", idades[indice],
                "Situação: Apto"
            );
        } else {
            console.log(
                "Inscrição:", indice + 1,
                "Inscrito:", nome,
                "Idade:", idades[indice],
                "Situação: Não apto"
            );
        }
    });
}

function filtrarAptos(nomes, idades, idadePermitida) {
    return nomes.filter((nome, indice) => {
        return idades[indice] >= idadePermitida;
    });
}

function encontrarPrimeiroNaoApto(nomes, idades, idadePermitida) {
    return nomes.find((nome, indice) => {
        return idades[indice] < idadePermitida;
    });
}

function contarInscritos(total, aptos) {
    const quantidadeAptos = aptos.length;
    const quantidadeNaoAptos = total - quantidadeAptos;

    return {
        quantidadeAptos,
        quantidadeNaoAptos
    };
}

const nomesFormatados = formatarNomes(inscritos);

mostrarRelatorio(nomesFormatados, idades, idadePermitida);

const podeParticipar = filtrarAptos(
    nomesFormatados,
    idades,
    idadePermitida
);

console.log("Inscritos aptos:", podeParticipar);

const primeiroNaoApto = encontrarPrimeiroNaoApto(
    nomesFormatados,
    idades,
    idadePermitida
);

if (primeiroNaoApto === undefined) {
    console.log("Todos os inscritos estão aptos.");
} else {
    console.log("Primeiro inscrito não apto:", primeiroNaoApto);
}

console.log("BRUNO está inscrito?", nomesFormatados.includes("BRUNO"));
console.log("Posição de ELISA:", nomesFormatados.indexOf("ELISA"));

const resultado = contarInscritos(
    inscritos.length,
    podeParticipar
);

console.log("Quantidade de aptos:", resultado.quantidadeAptos);
console.log("Quantidade de não aptos:", resultado.quantidadeNaoAptos); */

//======================================================================================================
/* # Revisão final — Escolhendo o método certo

Sem escrever código, complete mentalmente:

| Quero... | Qual método combina mais? |
|---|---|
| Mostrar uma mensagem para cada elemento | ? |
| Criar outro Array com todos os valores transformados | ? |
| Criar outro Array apenas com os elementos aprovados em uma condição | ? |
| Encontrar o primeiro elemento que atende a uma condição | ? |
| Saber se um valor exato existe no Array | ? |
| Descobrir o índice da primeira ocorrência de um valor | ? | */

/* ## Checklist de entrega

- [ ] Diferenciei **índice** de **valor** em cada Array.
- [ ] Usei `return` corretamente nas callbacks que precisam devolver resultados.
- [ ] Entendi a diferença entre `forEach()`, `map()` e `filter()`.
- [ ] Entendi a diferença entre `find()` e `filter()`.
- [ ] Testei os casos de elemento não encontrado (`undefined` e `-1`, conforme o método).
- [ ] Evitei modificar o Array original quando o enunciado pede um novo.
- [ ] Reutilizei funções, `if` e métodos de Strings quando necessário.
- [ ] Testei pelo menos uma variação dos dados de entrada.
- [ ] Consigo explicar **por que escolhi cada método**.

**Boa prática:** antes de programar, escreva em um comentário o que entra, qual transformação ou busca será feita e o que o código deverá produzir.
 */