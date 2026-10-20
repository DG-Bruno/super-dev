let contador = 0;

do {
    console.log("Executou");
    contador++;
} while (contador < 0);

===============================================

let opcao = 1;

do {
    console.log("===MENU===");
    console.log("1 - Jogar");
    console.log("2 - Configurações");
    console.log("0 - Sair");

    console.log("Opção escolhida: ", opcao);
    opcao--;
}while (opcao !== 0);

=========================================================

//for

/* let numero = 1;

while (numero < 5) {
    console.log(numero);
    numero++;
} */

for (let numero = 1; numero <= 5; numero++) {
    console.log(numero);
}

==========================================================

//EXEMPLO 2

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Feliz Ano Novo");

=======================================================

//EXEMPLO 3

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

=======================================================

//EXEMPLO 4

const numero = 7;

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(numero, "x", i, "=", resultado);
}

==========================================================

//EXEMPLO 5

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i, "é Par");
    }

    else {
        console.log(i, "é Ímpar");
    }
}

==============================================================

//EXEMPLO 6

let pares = 0;
let impares = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        pares++;
    }

    else {
        impares++;
    }
}

console.log("Quantidade de pares", pares);
console.log("Quantidade de ímpares", impares);

=====================================================================

//EXEMPLO 8

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let nota = i * 2;

    soma += nota;
}

let media = soma / 2;

console.log(media);

=============================================================

//EXEMPLO 9

for (let i = 1; i <= 5; i++) {
    console.log("Iniciando volta:", i);

    if (i === 5) {
        console.log("Ultima volta");
    }
}

==========================================================

//EXEMPLO 10

for (let i = 1; i <= 100; i++) {

    if (i > 20 &&
        i < 80 &&
        i % 4 === 0
    ) {
        console.log(i);
    }
}

===================================================================

//EXEMPLO 11

for (let i = 1; i <= 100; i++) {
    if (i === 47) {
        break;
    }
    console.log(i);
}

==============================================================

//ex 7

for (let i = 1; i <= 20; i++) {
    if (i === 13) {
        continue;
    }

    console.log("Andar", i);
}

==================================================================

//ex 9

for (let i = 1; i <= 40; i++) {
    if (i % 5 === 0) {
        console.log("Semaforo de numero: ", i, "precisa passar por inspeção");
    }
}

=========================================================================

/* # Exercícios Extras de JavaScript — `for`, `continue` e `break`

> Continuação da lista anterior. Use `for` como estrutura principal de repetição.

Você pode utilizar:
- `if`, `else if`, `else`
- `&&`, `||`, `%`
- contadores e acumuladores
- operações matemáticas
- `continue`
- `break`

Evite por enquanto:
- `while`
- `do...while`
- arrays
- funções
- `for...of`
- `for...in`


## Lembrete rápido

### `continue`

O `continue` interrompe somente a repetição atual e faz o `for` seguir para a próxima.

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Saída:

```text
1
2
4
5
```

### `break`

O `break` encerra completamente o laço de repetição.

```js
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Saída:

```text
1
2
3
4
``` */

==================================================================================================================

/* # Exercício 16 — Dias de treinamento

Uma pessoa irá treinar durante `14` dias.

Mostre:

```text
Treino do dia 1 concluído
Treino do dia 2 concluído
...
Treino do dia 14 concluído
```

No final:

```text
Ciclo de treinamento finalizado!
``` */

for (let i = 1; i <= 14; i++) {
    console.log("Treino do dia", i, "concluído");
}

console.log("Ciclo de treinamento finalizado!");

==================================================================================================================

/* # Exercício 17 — Números negativos até zero

Mostre os números:

```text
-20
-18
-16
...
-2
0
```

usando `for`. */

for (let i = -20; i <= 0; i += 2) {
    console.log(i);
}

==================================================================================================================

/* # Exercício 18 — Equipamento interditado

Uma empresa possui `24` equipamentos numerados de `1` até `24`.

O equipamento `13` está interditado e **não deve ser verificado**.

Para todos os demais, mostre:

```text
Verificando equipamento 1
Verificando equipamento 2
...
```

Use `continue` para pular o equipamento `13`. */

for (let i = 1; i <= 24; i++) {
    if (i === 13) {
        continue;
    }
    console.log("Verificando equipamento", i);
}

==================================================================================================================

/* # Exercício 19 — Entrada gratuita

Um parque está verificando visitantes numerados de `1` até `30`.

Visitantes cujo número seja divisível por `5` recebem entrada gratuita.

Mostre para cada visitante:

```text
Visitante 4 - Entrada normal
Visitante 5 - Entrada gratuita
Visitante 6 - Entrada normal
``` */

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        console.log("Visitante", i, "- Entrada gratuita");
    }
    else {
        console.log("Visitante", i, "- Entrada normal");
    }
}

==================================================================================================================

/* # Exercício 20 — Pontos de fidelidade

Um cliente realiza `10` compras.

A cada compra ele recebe `20` pontos.

Mostre:

```text
Compra 1 - Pontos acumulados: 20
Compra 2 - Pontos acumulados: 40
...
```

No final, mostre o total de pontos acumulados. */

let pontos = 0;

for (let i = 1; i <= 10; i++) {
    pontos += 20;

    console.log("Compra", i, "- Pontos acumulados:", pontos);
}

console.log("Pontos acumulados:", pontos);

==================================================================================================================

/* # Exercício 21 — Bônus por compra

Um cliente realiza `12` compras.

Cada compra vale `10` pontos.

Porém, a cada terceira compra ele recebe mais `20` pontos de bônus.

Mostre os pontos recebidos em cada compra e, no final, o total acumulado.

Exemplo:

```text
Compra 1 - Pontos recebidos: 10
Compra 2 - Pontos recebidos: 10
Compra 3 - Pontos recebidos: 30
...
``` */

let pontosCompra = 10;
let pontosBonus = 20;
let pontosComBonus = pontosCompra + pontosBonus;
let totalPontos = 0;

for (let i = 1; i <= 12; i++) {
    if (i % 3 === 0) {
        console.log("Compra", i, "- Pontos recebidos:", pontosComBonus);
        totalPontos += pontosComBonus;
    }
    else {
        console.log("Compra", i, "- Pontos recebidos:", pontosCompra);
        totalPontos += pontosCompra;
    }
}

console.log("Pontos acumulados:", totalPontos);

==================================================================================================================

/* # Exercício 22 — Sensor de segurança

Uma máquina realiza até `20` verificações.

A cada verificação, mostre:

```text
Verificação 1 realizada
Verificação 2 realizada
...
```

Porém, na verificação `8` o sistema detecta um problema crítico.

Quando isso acontecer:

1. mostre `Problema crítico detectado!`;
2. use `break` para encerrar imediatamente o `for`;
3. nenhuma verificação após a número `8` deve acontecer. */

for (let i = 1; i <= 20; i++) {
    if (i === 8) {
        console.log("Problema crítico detectado!")
        break;
    }
    console.log("Verificação", i, "realizada");
}

==================================================================================================================

/* # Exercício 23 — Controle de salas

Uma escola possui `30` salas.

As salas de número `10`, `20` e `30` estão fechadas para manutenção e devem ser ignoradas.

Para as demais salas:

- se o número for divisível por `3`, mostre `"Limpeza pela manhã"`;
- se o número for divisível por `5`, mostre `"Limpeza à tarde"`.

Use `continue` para ignorar as salas fechadas.

Exemplo:

```text
Sala 3 - Limpeza pela manhã
Sala 5 - Limpeza à tarde
Sala 10 - não deve aparecer
```

Um mesmo número pode receber as duas mensagens. */

for (let i = 1; i <= 30; i++) {
    if (i === 10 || i === 20 || i === 30) {
        continue;
    }
    if (i % 3 === 0) {
        console.log("Sala", i, "- Limpeza pela manhã");
    }
    if (i % 5 === 0) {
        console.log("Sala", i, "- Limpeza pela tarde");
    }
}

==================================================================================================================

/* # Exercício 24 — Desconto progressivo

Uma loja quer exibir uma tabela de descontos para um produto de `R$ 200`.

Mostre o preço final para descontos de:

```text
5%
10%
15%
20%
25%
30%
```

Exemplo:

```text
5% de desconto - R$ ...
10% de desconto - R$ ...
...
```

Use o `for` para controlar o percentual. */

const valorProduto = 200;

for (let i = 5; i <= 30; i += 5) {
    const valorDesconto = valorProduto * i / 100;
    const valorFinal = valorProduto - valorDesconto;

    console.log(i, "% de desconto - R$", valorFinal);
}

==================================================================================================================

/* # Exercício 25 — Produção diária

Uma fábrica produz `50 unidades` no primeiro dia e aumenta a produção em `10 unidades` a cada dia.

Mostre a produção dos primeiros `10` dias.

Exemplo:

```text
Dia 1 - Produção: 50
Dia 2 - Produção: 60
Dia 3 - Produção: 70
...
```

No final, mostre quantas unidades foram produzidas no total. */

let producao = 50;
let aumentoProducao = 10;
let totalProduzido = 0;

for (let i = 1; i <= 10; i++) {
    console.log("Dia", i, "- Produção:", producao);
    totalProduzido += producao;
    producao += aumentoProducao;
    
}

console.log("Total produzido:", totalProduzido);

==================================================================================================================

/* # Exercício 26 — Classificação de números

Percorra os números de `1` até `60`.

Para cada número:

- se for divisível por `2` e `3`, mostre `"Divisível por 2 e 3"`;
- senão, se for divisível apenas por `2`, mostre `"Divisível por 2"`;
- senão, se for divisível apenas por `3`, mostre `"Divisível por 3"`;
- caso contrário, mostre o próprio número. */

for (let i = 1; i <= 60; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log("Divisível por 2 e 3");
    }
    else if (i % 2 === 0) {
        console.log("Divisível por 2");
    }
    else if (i % 3 === 0) {
        console.log("Divisível por 3");
    }
    else {
        console.log(i);
    }

}

==================================================================================================================

/* # Exercício 27 — Ignorando múltiplos

Percorra os números de `1` até `50`.

Porém, **não mostre números divisíveis por `4`**.

Use obrigatoriamente `continue`.

Exemplo:

```text
1
2
3
5
6
7
9
...
```

Depois, conte quantos números realmente foram mostrados. */

let contador = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
    contador++;
}
console.log("Quantidade:", contador);

==================================================================================================================

/* # Exercício 28 — Controle de bateria

Um dispositivo começa com `100%` de bateria.

Durante até `20` ciclos de uso, ele perde `7%` de bateria por ciclo.

Mostre:

```text
Ciclo 1 - Bateria: 93%
Ciclo 2 - Bateria: 86%
...
```

Regras:

- se a bateria ficar abaixo de `30%`, mostre `"Bateria baixa!"`;
- quando a bateria chegar a `9%` ou menos, mostre `"Dispositivo desligado!"`;
- use `break` para encerrar o `for` nesse momento. */

let bateria = 100;
let percaBateriaPorCiclo = 7;

for (let i = 1; i <= 20; i++) {
    bateria -= percaBateriaPorCiclo;
    console.log("Ciclo", i, "- Bateria:", bateria);

    if (bateria < 30) {
        console.log("Bateria baixa!");
    }
    if (bateria <= 9) {
        console.log("Dispositivo desligado!");
        break;
    }
}

==================================================================================================================

/* # Exercício 29 — Meta de arrecadação

Uma campanha pode durar até `30` dias.

Todos os dias ela arrecada `R$ 120`.

Nos dias divisíveis por `5`, uma empresa parceira doa mais `R$ 200`.

A campanha possui uma meta de `R$ 3.000`.

Mostre o total acumulado a cada dia.

Exemplo:

```text
Dia 1 - Total arrecadado: R$ ...
...
Dia 5 - Doação extra recebida!
Dia 5 - Total arrecadado: R$ ...
```

Assim que o total arrecadado atingir ou ultrapassar `R$ 3.000`:

1. mostre `Meta atingida!`;
2. use `break` para encerrar a campanha antes dos 30 dias.

No final, mostre em qual dia a meta foi atingida. */

let arrecadacaoDiaria = 120;
let meta = 3000;
let doacaoEmpresa = 200;

let totalArrecadado = 0;

for (let i = 1; i <= 30; i++) {

    if (i % 5 === 0) {
        totalArrecadado += doacaoEmpresa;

        console.log("Dia", i, "- Doação extra recebida! R$:", doacaoEmpresa);
    }
    
    totalArrecadado += arrecadacaoDiaria;
    console.log("Dia", i, "- Total arrecadado: R$", totalArrecadado);

    if (totalArrecadado >= meta) {
        console.log("Meta atingida!");
        console.log("Dia:", i);
        break;
    }

}

==================================================================================================================

/* # Exercício 30 — Desafio: torneio com desistência

Um jogador pode participar de até `15` partidas.

Em cada partida ele recebe inicialmente `50` pontos.

Regras:

- se o número da partida for par, ganha mais `20` pontos;
- se for divisível por `3`, ganha mais `30` pontos;
- as partidas `5` e `10` foram canceladas e devem ser ignoradas usando `continue`;
- ao atingir ou ultrapassar `500` pontos acumulados, o jogador se classifica automaticamente.

Quando ele atingir `500` pontos ou mais:

1. mostre `Jogador classificado!`;
2. use `break` para encerrar o torneio para esse jogador.

Para cada partida válida, mostre:

```text
Partida 1 - Pontos recebidos: 50
Pontuação acumulada: 50
```

No final, mostre:

```text
Pontuação final: X
```

e a quantidade de partidas realmente disputadas.

> Atenção: uma mesma partida pode receber mais de um bônus. */

let pontosInicial = 50;
let pontos = 0;
let pontosRecebidos = 0;
let partidasDisputadas = 0;

for (let i = 1; i <= 15; i++) {
   
    if (i === 5 || i === 10) {
        continue;
    } 

    pontosRecebidos = pontosInicial;

    if (i % 2 === 0) {
        pontosRecebidos += 20;
    }

    if (i % 3 === 0) {
        pontosRecebidos += 30;
    }

    pontos += pontosRecebidos;
    partidasDisputadas++;

    console.log("Partida", i, "- Pontos recebidos:", pontosRecebidos);
    console.log("Pontuação acumulada:", pontos);

    if (pontos >= 500) {
        console.log("Jogador classificado!");
        break;
    }
}

console.log("Pontuação final:", pontos);
console.log("Partidas disputadas:", partidasDisputadas);

