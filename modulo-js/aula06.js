/* Qual a diferença entre for e while, e quando eu utilizo um ou outro?
For é gerelmente utilizado quando conseguimos de antemão saber quantas repetições eu vou fazer (QUANTAS VEZES)
While é geralmente utilizado quando a condição não sabemos necessariamente quantas vezes ela vai acontecer (ATÉ QUANDO)

Exemplo 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

Exemplo 2

let vida = 100;

while (vida > 0) {
    vida -= 17;
} */

/* ============================================================================================================================ */

/* # Exercícios de JavaScript — `for`, `while`, `break` e `continue`

## Objetivo

Praticar:

- quando usar `for`;
- quando usar `while`;
- diferentes formas de escrever e controlar um `for`;
- uso de `if` dentro de laços;
- contadores;
- acumuladores;
- `continue`;
- `break`;
- leitura e previsão do fluxo de execução. */

/* ============================================================================================================================ */

/* # Parte 1 — `for` ou `while`?

> **Não está indicado qual laço deve ser usado.**
>
> Antes de programar, escreva em um comentário por que escolheu `for` ou `while`.

---

## Exercício 1 — Impressão de ingressos

Um cinema precisa imprimir `30` ingressos numerados de `1` até `30`.

Mostre:

```text
Ingresso 1 impresso
Ingresso 2 impresso
...
Ingresso 30 impresso
``` */

/* for (let i = 1; i <= 30; i++) {
    console.log("Ingresso", i, "impresso");
} */

/* ============================================================================================================================ */

/* ## Exercício 2 — Encher um reservatório

Um reservatório começa com `0 litros`.

A cada ciclo entram `25 litros`.

Continue adicionando água até possuir pelo menos `500 litros`.

Mostre o volume após cada ciclo. */

/* let reservatorio = 0;
const litrosPorCiclo = 25;

while (reservatorio < 500) {
    reservatorio += litrosPorCiclo;
    console.log(reservatorio, "Litros");
} */

/* ============================================================================================================================ */

/* ## Exercício 3 — Correção de provas

Um professor possui exatamente `25` provas para corrigir.

Mostre:

```text
Corrigindo prova 1
Corrigindo prova 2
...
Corrigindo prova 25
``` */

/* for (let i = 1; i <= 25; i++) {
    console.log("Corrigindo prova", i);
} */

/* ============================================================================================================================ */

/* ## Exercício 4 — Derrubando uma parede

Uma parede possui `300` pontos de resistência.

Cada golpe causa `37` pontos de dano.

Continue atacando até a resistência chegar a `0` ou menos.

Mostre quantos golpes foram necessários. */

/* let resistenciaParede = 300;
const danoPorGolpe = 37;

let golpes = 0;

while (resistenciaParede > 0) {
    resistenciaParede -= danoPorGolpe;
    golpes++;
}

console.log(golpes); */

/* ============================================================================================================================ */

/* ## Exercício 5 — Parcelas

Uma pessoa precisa pagar `12` parcelas.

Mostre:

```text
Parcela 1 paga
Parcela 2 paga
...
Parcela 12 paga
``` */

/* for (let i = 1; i <= 12; i++) {
    console.log("Parcela", i, "paga");
} */

/* ============================================================================================================================ */

/* ## Exercício 6 — Meta de vendas

Uma loja começa com:

```js
let vendas = 0;
```

A cada dia ela vende `R$ 350`.

Continue até atingir pelo menos `R$ 5.000`.

Descubra quantos dias foram necessários. */

/* let vendas = 0;
const vendasPorDia = 350;

let dias = 0;

while (vendas <= 5000) {
    vendas += vendasPorDia;
    dias++;
}

console.log(dias); */

/* ============================================================================================================================ */

/* ## Exercício 7 — Contagem regressiva

Mostre de `60` até `0`. */

/* for (let i = 60; i >= 0; i--) {
    console.log(i);
} */

/* ============================================================================================================================ */

/* ## Exercício 8 — Energia de uma máquina

Uma máquina começa com `100` de energia.

Cada operação consome `13`.

Enquanto houver energia suficiente para realizar uma nova operação, continue funcionando.

Mostre quantas operações foram realizadas. */

/* let energia = 100;
const consumo = 13;

let operacoes = 0;

while (energia >= 13) {
    energia -= consumo;
    operacoes++;
}

console.log(operacoes); */

/* ============================================================================================================================ */

/* # Parte 2 — Variações do `for`

> Agora use obrigatoriamente `for`.

---

## Exercício 9 — De 0 até 100

Mostre os números:

```text
0
10
20
30
...
100
``` */

/* for (let i = 0; i <= 100; i+=10) {
    console.log(i);
} */

/* ============================================================================================================================ */

/* ## Exercício 10 — Voltando de 50

Mostre:

```text
50
45
40
35
...
0
``` */

/* for (let i = 50; i >= 0; i-=5) {
    console.log(i);
} */

/* ============================================================================================================================ */

/* ## Exercício 11 — Números negativos

Mostre:

```text
-30
-25
-20
...
0
```

usando `for`. */

/* for (let i = -30; i <= 0; i+=5) {
    console.log(i);
} */

/* ============================================================================================================================ */

/* ## Exercício 12 — Ímpares ao contrário

Mostre os números ímpares de `99` até `1`. */

/* for (let i = 99; i >= 1; i--) {
    if (i % 2 === 1) {
        console.log(i);
    }
} */

/* ============================================================================================================================ */

/* ## Exercício 13 — Progressão diferente

Mostre:

```text
2
5
8
11
14
...
```

até que o próximo número ultrapasse `50`. */

/* for (let i = 2; i <= 50; i+=3) {
    console.log(i);
} */

/* ============================================================================================================================ */

/* ## Exercício 14 — Potências de 2

Mostre:

```text
1
2
4
8
16
32
64
128
```

Tente controlar a própria variável do `for` multiplicando-a por `2`. */

/* for (let i = 1; i <= 128; i*=2) {
    console.log(i);
} */

/* ============================================================================================================================ */

/* ## Exercício 15 — Anos

Mostre apenas os anos:

```text
2000
2004
2008
...
2028
``` */

/* for (let i = 2000; i <= 2028; i+=4) {
    console.log(i);
} */

/* ============================================================================================================================ */

/* # Parte 3 — `for` + lógica

---

## Exercício 16 — Inspeção de caixas

Existem `60` caixas.

As caixas cujo número seja:

- divisível por `4`;
- e maior que `20`;

precisam de inspeção.

Mostre apenas essas caixas. */

/* for (let i = 1; i <= 60; i++) {
    if (i % 4 === 0 && i > 20) {
        console.log("Caixa", i, "precisa de inspeção");
    }
} */

/* ============================================================================================================================ */

/* ## Exercício 17 — Classificação de temperatura

Percorra temperaturas de `-10` até `40`, aumentando de `5` em `5`.

Para cada temperatura:

- menor que `10`: `"Frio"`
- entre `10` e `25`: `"Agradável"`
- maior que `25`: `"Quente"`

Exemplo:

```text
-10°C - Frio
15°C - Agradável
30°C - Quente
``` */

/* for (let i = -10; i <= 40; i+=5) {
    if (i < 10) {
        console.log(i, "- Frio");
    }
    else if (i <= 25) {
        console.log(i, "- Agradável");
    }
    else {
        console.log(i, "- Quente");
    }
} */

/* ============================================================================================================================ */

/* ## Exercício 18 — Contadores diferentes

Percorra os números de `1` até `100`.

Conte:

- quantos são pares;
- quantos são divisíveis por `3`;
- quantos são divisíveis por `2` **e** por `3`.

Mostre os três resultados no final. */

/* let pares = 0;
let divisivelPor3 = 0;
let divisivelPor2e3 = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        pares++;
    }
    if (i % 3 === 0) {
        divisivelPor3++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
        divisivelPor2e3++;
    }
}

console.log("Pares:", pares);
console.log("Divisível por 3:", divisivelPor3);
console.log("Divisível por 2 e 3:", divisivelPor2e3); */


/* ============================================================================================================================ */

/* ## Exercício 19 — Soma seletiva

Percorra os números de `1` até `100`.

Some somente os números que:

- sejam maiores que `20`;
- menores que `80`;
- divisíveis por `5`.

Mostre o resultado final. */

/* let soma = 0;

for (let i = 1; i <= 100; i++) {
    if (i > 20 && i < 80 && i % 5 === 0) {
        soma += i;
    }
}

console.log(soma); */

/* ============================================================================================================================ */

/* # Parte 4 — `continue`

---

## Exercício 20 — Funcionário de férias

Uma empresa possui funcionários numerados de `1` até `20`.

O funcionário `7` está de férias.

Mostre:

```text
Processando funcionário 1
Processando funcionário 2
...
```

Mas não processe o funcionário `7`.

Use obrigatoriamente:

```js
continue;
``` */

/* for (let i = 1; i <= 20; i++) {
    if (i === 7) {
        continue;
    }
    console.log("Processando funcionário", i);
} */

/* ============================================================================================================================ */

/* ## Exercício 21 — Ignorando múltiplos

Percorra os números de `1` até `50`.

Não mostre números divisíveis por `3`.

Use `continue`. */

/* for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
} */

/* ============================================================================================================================ */

/* ## Exercício 22 — Produtos indisponíveis

Uma loja possui produtos numerados de `1` até `30`.

Produtos com números divisíveis por `7` estão sem estoque.

Para esses produtos, pule completamente o processamento.

Para os demais:

```text
Produto X disponível
```

Use `continue`. */

/* for (let i = 1; i <= 30; i++) {
    if (i % 7 === 0) {
        continue;
    }

    console.log("Produto", i, "disponível");
} */

/* ============================================================================================================================ */

/* ## Exercício 23 — Dias úteis simplificados

Considere os dias `1` até `30`.

Todo número divisível por `7` representa um dia de folga fictício.

Ignore esses dias usando `continue`.

Conte quantos dias foram trabalhados. */

/* let diasTrabalhados = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 7 === 0) {
        continue;
    }
    diasTrabalhados++;
}

console.log("Dias trabalhados:", diasTrabalhados); */

/* ============================================================================================================================ */

/* # Parte 5 — `break`

---

## Exercício 24 — Encontrando o primeiro múltiplo

Percorra os números a partir de `1`.

Encontre o **primeiro número maior que 50** que seja divisível por `7`.

Quando encontrar:

```text
Número encontrado: X
```

e encerre o `for` usando `break`. */

/* for (let i = 1; i <= 100; i++) {
    if (i > 50 && i % 7 === 0) {
        console.log("Número encontrado:", i);
        break;
    }
} */

/* ============================================================================================================================ */

/* ## Exercício 25 — Estoque esgotado

Uma loja começa com:

```js
let estoque = 100;
```

Durante até `20` dias, são vendidos `12` produtos por dia.

Mostre o estoque após cada dia.

Quando o estoque chegar a `0` ou menos:

```text
Estoque esgotado!
```

e use `break`. */

/* let estoque = 100;
const vendasDia = 12;

for (let i = 1; i <= 20; i++) {
    estoque -= vendasDia;
    console.log("Estoque:", estoque);

    if (estoque <= 0) {
        console.log("Estoque esgotado!");
        break;
    }
} */

/* ============================================================================================================================ */

/* ## Exercício 26 — Meta de pontos

Um jogador pode disputar até `20` partidas.

Recebe `75` pontos em cada partida.

Assim que atingir pelo menos `600` pontos:

```text
Meta atingida na partida X
```

e interrompa o `for`. */

/* const pontosPartida = 75;

let pontos = 0;

for (let i = 1; i <= 20; i++) {
    pontos += pontosPartida;

    if (pontos === 600) {
        console.log("Meta atingida na partida", i);
        break;
    }
} */

/* ============================================================================================================================ */

/* ## Exercício 27 — Primeiro número especial

Percorra os números de `1` até `500`.

Encontre o primeiro número que:

- seja maior que `100`;
- seja divisível por `7`;
- seja divisível por `9`.

Mostre o número e encerre a busca com `break`. */

/* for (let i = 1; i <= 500; i++) {
    if (i > 100 && i % 7 === 0 && i % 9 === 0) {
        console.log(i);
        break;
    }
}*/

/* ============================================================================================================================ */

/* # Parte 6 — `break` + `continue`

---

## Exercício 28 — Processo de análise

Um sistema possui `50` arquivos.

Regras:

- arquivos divisíveis por `5` estão corrompidos e devem ser ignorados com `continue`;
- quando chegar ao arquivo `37`, ocorre uma falha crítica e o processamento deve parar usando `break`;
- os demais devem mostrar:

```text
Arquivo X processado
``` */

/* for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        continue;
    }
    if (i === 37) {
        break;
    }

    console.log("Arquivo", i, "processado");
} */

/* ============================================================================================================================ */

/* ## Exercício 29 — Campeonato

Um jogador pode jogar até `20` partidas.

Cada partida válida dá `40` pontos.

Porém:

- partidas `4`, `8` e `12` foram canceladas → `continue`;
- ao atingir `400` pontos → `break`.

No final mostre:

```text
Partidas disputadas: X
Pontuação: X
```

Cuidado: partidas canceladas **não contam como partidas disputadas**. */

/* const pontosPartida = 40;

let pontos = 0;
let partidas = 0;

for (let i = 1; i <= 20; i++) {
    if (i === 4 || i === 8 || i === 12) {
        continue;
    }
    if (pontos === 400) {
        break;
    }

    pontos += pontosPartida;
    partidas++;
}

console.log("Partidas disputadas:", partidas);
console.log("Pontuação", pontos); */

/* ============================================================================================================================ */

/* ## Exercício 30 — Sistema de entregas

Um entregador possui até `30` entregas programadas.

Regras:

- entregas divisíveis por `6` foram canceladas → `continue`;
- cada entrega realizada rende `R$ 25`;
- quando o entregador atingir `R$ 400` em ganhos → `break`.

No final mostre:

```text
Entregas realizadas: X
Ganhos: R$ X
``` */

/* const ganhosEntrega = 25;

let ganhos = 0;
let entregas = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 6 === 0) {
        continue;
    }
    if (ganhos >= 400) {
        break;
    }

    entregas++;
    ganhos += ganhosEntrega;
}

console.log("Entregas realizadas:", entregas);
console.log("Ganhos:", ganhos); */

/* ============================================================================================================================ */

/* # Parte 7 — Entenda o código antes de executar

> Nesta parte, tente responder sem executar o código primeiro.

---

## Exercício 31 — O que aparece?

```js
for (let i = 2; i <= 20; i += 3) {
    console.log(i);
}
```

Escreva a saída antes de executar.

---*/

/* RESPOSTA:
2, 5, 8, 11, 14, 17, 20 */

/* ============================================================================================================================ */

/* ## Exercício 32 — Quantas vezes?

```js
for (let i = 30; i >= 0; i -= 5) {
    console.log(i);
}
```

Responda:

1. Qual o primeiro valor?
2. Qual o último valor?
3. Quantas vezes o bloco executa? */

/* RESPOSTAS:
1. O PRIMEIRO VALOR É 30
2. O ÚLTIMO VALOR É 0
3. 7 VEZES (30, 25, 20, 15, 10, 5, 0). */

/* ============================================================================================================================ */

/* ## Exercício 33 — `continue`

Qual será a saída?

```js
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}
```

Explique também o que acontece quando `i` é divisível por `3`. */

/* RESPOSTA:
A SAÍDA SERÁ - 1, 2, 4, 5, 7, 8, 10.
Quando "i" é divisível por 3 o "continue" pula o "i" e continua para o próximo "i". */

/* ============================================================================================================================ */

/* ## Exercício 34 — `break`

Qual será a saída?

```js
for (let i = 1; i <= 100; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}
```

Explique por que os valores depois de `5` não aparecem. */

/* RESPOSTA:
A SAÍDA SERÁ - 1, 2, 3, 4, 5.
Os valores não aparecem porque quando "i" chega em "6" o sistema para e não execulta. */

/* ============================================================================================================================ */

/* ## Exercício 35 — Pegadinha

```js
let total = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }

    total += i;

    if (total >= 20) {
        break;
    }
}

console.log(total);
```

Sem executar, tente descobrir:

1. Quais valores de `i` chegam até `total += i`;
2. quais valores são ignorados pelo `continue`;
3. quando acontece o `break`;
4. qual será o valor final de `total`.*/

/* RESPOSTAS:
1. 2, 4, 6, 8, 10
2. 1, 3, 5, 7, 9
3. Quando maior igual a 20; Quando o "i" for "8"
4. 20 */

/* ============================================================================================================================ */


/* # Checklist

Antes de considerar um exercício concluído, tente responder:

- [ ] Eu sei por que escolhi `for` ou `while`?
- [ ] Sei qual é a condição de parada?
- [ ] Sei qual variável controla a repetição?
- [ ] Meu laço pode entrar em loop infinito?
- [ ] Sei diferenciar contador de acumulador?
- [ ] Sei explicar o que o `continue` está pulando?
- [ ] Sei explicar por que o `break` encerra o laço?
- [ ] Consigo prever ao menos parte da execução sem rodar o programa?
 */

