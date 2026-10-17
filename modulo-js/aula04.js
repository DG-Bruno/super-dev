// Primeiro, determine o desconto.
// Prioridade dos descontos
// 1. VIP e compra >= R$ 1.000 → 20%
// 2. cupom válido → 15%
// 3. primeira compra → 10%
// 4. VIP → 5%
// 5. sem benefício → 0%
// Os descontos não acumulam.
// Depois calcule o frete:
// - compra final >= R$ 500 → frete grátis;
// - ou cliente VIP → frete grátis;
// - caso contrário → R$ 30.
// Exiba tudo.

const valorCompra = 850;
const clienteVip = true;
const possuiCupom = true;
const cupomValido = true;
const primeiraCompra = false;

let percentualDesconto = 0;

if (clienteVip && valorCompra >= 1000) {
    percentualDesconto = 20;
}
else if (possuiCupom && cupomValido) {
    percentualDesconto = 15;
}
else if (primeiraCompra) {
    percentualDesconto = 10;
}
else if (clienteVip) {
    percentualDesconto = 5;
}

const valorDesconto = valorCompra * percentualDesconto / 100;

const valorFinal = valorCompra - valorDesconto;

let frete = 30;

if (valorFinal >= 500 || clienteVip) {
    frete = 0;
}

const totalPedido = valorFinal + frete;

console.log("Compra: R$", valorCompra)
console.log("Percentual de desconto: ", percentualDesconto, "%")
console.log("Valor desconto: R$", valorDesconto)
console.log("Valor compra pós desconto: R$", valorFinal)
console.log("Valor frete: R$", frete)
console.log("Valor total do pedido: R$", totalPedido)

==================================================================================================

laço de repetição = ciclo

//valor inicial
let contador = 0;

//while = enquanto
//condição
while (contador <= 10) {
    //fazer algo
    console.log(contador);

//atualizar algo
//novo valor vai ser = antigo valor + 1
contador = contador + 1;

}

====================================================================================================

let vidaBoss = 100;

while (vidaBoss > 0) {
    console.log("Atacando o Boss!");

    vidaBoss = vidaBoss - 20;

    console.log("Vida:", vidaBoss);
}

=======================================================================================================

let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
    console.log(numero, "é par");
}
else {
    console.log(numero, "é impar");
}

numero = numero + 1;

}

========================================================================================================

let numero = 0;
let divisivelPor3e5 = 0;
let divisivelPor3 = 0;
let divisivelPor5 = 0;

while (numero <= 100) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log(numero, "é divisivel por 3 e 5");
        divisivelPor3e5 += 1;
    }
    else if (numero % 3 === 0) {
        console.log(numero, "é divisivel por 3");
        divisivelPor3 += 1;
    }
    else if (numero % 5 === 0) {
        console.log(numero, "é divisivel por 5");
        divisivelPor5 += 1;
    }

    numero = numero + 1;
}

console.log("Quantidade de números divisíveis por 3 e 5:", divisivelPor3e5);
console.log("Quantidade de números divisíveis por 3:", divisivelPor3);
console.log("Quantidade de números divisíveis por 5:", divisivelPor5);

==========================================================================================================

/* Se eu guardo R$ 50 todo mes 

enquanto estiver menos de 500, continue guardando 50

no final, quantos meses foram necessários? */


let poupanca = 50;
let totalMeses = 0;

while (poupanca <= 500) {
    console.log("Mes:", totalMeses, poupanca);

    totalMeses = totalMeses + 1;

    poupanca = poupanca + 50;
}

console.log("Total meses:", totalMeses);

================================================================================================================

let progresso = 0;

while (progresso <= 100) {
    console.log("Download:", progresso, "%");

    progresso = progresso + parseInt(Math.random() * 6);
}

=================================================================================================================

/* # Lista de Exercícios — JavaScript: `while` + Lógica com `if`

## Objetivo

Praticar estruturas de repetição com `while`, reforçando ao mesmo tempo conceitos de lógica já vistos com:

- `if`
- `else`
- `else if`
- operadores de comparação
- operadores lógicos `&&` e `||`
- contadores
- acumuladores
- validações
- raciocínio passo a passo

> **Importante:** nesta lista, use `while`.  
> Não utilize `for`, arrays ou funções para resolver os exercícios.


# Regras gerais

1. Leia o exercício inteiro antes de começar.
2. Tente identificar:
   - Qual é o valor inicial?
   - Qual é a condição do `while`?
   - O que deve acontecer a cada repetição?
   - O que muda para que o `while` termine?
3. Tome cuidado com **loops infinitos**.
4. Use nomes de variáveis que façam sentido.
5. Quando o exercício pedir uma contagem, provavelmente será necessário um **contador**.
6. Quando o exercício pedir uma soma total, provavelmente será necessário um **acumulador**.
7. Quando houver uma regra diferente dependendo do valor atual, provavelmente será necessário usar `if` dentro do `while`.
 */

===============================================================================================================================

/* # Parte 1 — Entendendo o ciclo do `while`

## Exercício 1

Mostre no console os números de `1` até `10`.

Saída esperada:

1
2
3
4
5
6
7
8
9
10 */

let number = 1;

while (number <= 10) {
    console.log(number);

    number++;
}

====================================================================================================================================

/* ## Exercício 2

Mostre no console os números de `10` até `1`. */


let number = 10;

while (number >= 1) {
    console.log(number);

    number--;
}

========================================================================================================================================

/* ## Exercício 3

Mostre os números de `0` até `20`, aumentando de `2` em `2`.

Saída esperada:

0
2
4
6
8
...
20 */

let number = 0;

while (number <= 20) {
    console.log(number);

    number = number + 2;
}

============================================================================================================================================

/* ## Exercício 4

Mostre os números:

5
10
15
20
25
30
35
40
45
50 */


let contador = 5;

while (contador <= 50) {
    console.log(contador);

    contador = contador + 5;
}

==================================================================================

/* ## Exercício 5

Mostre todos os números de `20` até `0`, diminuindo de `2` em `2`. */

let number = 20;

while (number >= 0) {
    console.log(number);

    number = number - 2;
}

======================================================================================

/* ## Exercício 6

Sem executar o código primeiro, escreva em um comentário qual será a saída:

let numero = 2;

while (numero <= 8) {
    console.log(numero);
    numero += 2;
}

RESPOSTA
2
4
6
8

Depois execute e confira sua resposta. */

let numero = 2;

while (numero <= 8) {
    console.log(numero);
    numero += 2;
}

============================================================================================

/* ## Exercício 7

Sem executar primeiro, diga qual será o valor final de `numero`:

let numero = 1;

while (numero < 10) {
    numero += 3;
}

console.log(numero);

RESPOSTA
10
 */

let numero = 1;

while (numero < 10) {
    numero += 3;
}

console.log(numero);

=====================================================================================================

// ## Exercício 8

// O código abaixo possui um problema:

// let numero = 1;

// while (numero <= 10) {
//     console.log(numero);
// }

// Responda:

// 1. Qual é o problema?
Entrou em looping
// 2. Por que ele acontece?
Porque não tem a lógica de atualizar o número do contador
// 3. Corrija o código.

let numero = 1;

while (numero <= 10) {
    console.log(numero);

    numero = numero + 1;
}

======================================================================================

/* # Parte 2 — `while` com `if`

## Exercício 9

Percorra os números de `1` até `20`.

Mostre somente os números pares. */

let numero = 1

while (numero <= 20) {
    if (numero % 2 === 0) {
    console.log(numero, "Par");
}    

    numero = numero + 1;
}

========================================================================================

let contador = 1;

while (contador <= 10) {
    console.log("Contador:", contador);

    contador = contador + 1; 
    //contador +=1;
    //contador++;
}

===============================================================

let contador = 0;

while (contador <= 100) {
    console.log("Contador:", contador);

    contador = contador + 2;
}

===============================================================

const numero = 57;

if (numero % 2 === 0) {
    console.log("Par");
}

else if (numero % 2 === 1) {
    console.log("Impar");
}

=============================================

let contador = 0;

while (contador <= 100) {
    if (contador % 2 === 0) {
        console.log("Par:", contador)
    }
    contador++;
}

=========================================================

/* ## Exercício 10

Percorra os números de `1` até `20`.

Mostre somente os números ímpares. */

let numero = 1;

while (numero <= 20) {
    if(numero % 2 === 1) {
        console.log("Impar:", numero);
    }

    numero++;
}

=========================================================

/* ## Exercício 11

Percorra os números de `1` até `30`.

Para cada número, mostre se ele é `PAR` ou `ÍMPAR`.

Exemplo:

1 é ÍMPAR
2 é PAR
3 é ÍMPAR
4 é PAR
... */

let numero = 1;

while (numero <= 30) {
    if (numero % 2 === 0) {
        console.log(numero, "é PAR");
    }
    else {
        console.log(numero, "é ÍMPAR");
    }

    numero++;
}

=========================================================

/* ## Exercício 12

Percorra os números de `1` até `50`.

Mostre somente os números divisíveis por `5`. */

let numero = 1;

while (numero <= 50) {
    if (numero % 5 === 0) {
        console.log(numero);
    }

    numero++;
}

=========================================================

/* ## Exercício 13

Percorra os números de `1` até `50`.

Mostre somente os números que sejam divisíveis por `3`. */

let numero = 1;

while (numero <= 50) {
    if (numero % 3 === 0) {
        console.log(numero);
    }

    numero++;
}

=========================================================

/* ## Exercício 14

Percorra os números de `1` até `100`.

Mostre somente os números que sejam divisíveis por `3` **e** por `5`. */

let numero = 1;

while (numero <= 100) {
    if (numero % 3 === 0 &&
        numero % 5 === 0
    ) {
        console.log(numero, "é divisível por 3 e 5");
    }

    numero++;
}

=========================================================

/* ## Exercício 15

Percorra os números de `1` até `50`.

Mostre os números que sejam divisíveis por `3` **ou** por `7`. */

let numero = 1;

while (numero <= 50) {
    if (numero % 3 === 0 ||
        numero % 7 === 0
    ) {
        console.log(numero);
    }

    numero++;
}

=========================================================

/* ## Exercício 16

Percorra os números de `1` até `30`.

Para cada número:

- se for divisível por `3`, mostre `"Divisível por 3"`;
- caso contrário, mostre o próprio número.

Exemplo:

1
2
Divisível por 3
4
5
Divisível por 3
... */

let numero = 1;

while (numero <= 30) {
    if (numero % 3 === 0) {
        console.log("Divisível por 3");
    }
    else {
        console.log(numero);
    }

    numero++;
}

=========================================================

/* # Parte 3 — Contadores

## Exercício 17

Percorra os números de `1` até `20`.

No final, mostre quantos números pares existem.

Saída esperada:

Quantidade de números pares: 10 */

let numero = 1;
let quantidadePares = 0;

while (numero <= 20) {
    if (numero % 2 === 0) {
        quantidadePares++;
    }

    numero++;
}

console.log(quantidadePares);

======================================================================

/* ## Exercício 18

Percorra os números de `1` até `30`.

No final, mostre:

Quantidade de pares: X
Quantidade de ímpares: Y */

let numero = 1;
let pares = 0;
let impares = 0;

while (numero <= 30) {
    if (numero % 2 === 0) {
        pares++;
    }
    
    else {
        impares++;
    }

    numero++;
}

console.log("Pares:", pares);
console.log("Ímpares:", impares);

=============================================================

/* ## Exercício 19

Percorra os números de `1` até `100`.

Conte quantos números são divisíveis por `10`. */

let numero = 1;
let divisiveisPor10 = 0;

while (numero <= 100) {
    if (numero % 10 === 0) {
        divisiveisPor10++;
    }

    numero++;
}

console.log(divisiveisPor10);

=============================================================

/* ## Exercício 20

Percorra os números de `1` até `50`.

Conte:

- quantos são divisíveis por `3`;
- quantos são divisíveis por `5`.

> Um mesmo número pode ser contado nos dois grupos. */

let numero = 1;
let divisivelPor3 = 0;
let divisivelPor5 = 0;

while (numero <= 50) {
    if (numero % 3 === 0 &&
        numero % 5 === 0
    ) {
        divisivelPor3++;
        divisivelPor5++;
    }
    else if (numero % 3 === 0) {
        divisivelPor3++;
    }
    else if (numero % 5 === 0) {
        divisivelPor5++;
    }

    numero++;
}

console.log(divisivelPor3);
console.log(divisivelPor5);

=============================================================

/* ## Exercício 21

Percorra os números de `1` até `100`.

Conte quantos números são divisíveis por `3` **e** por `4` ao mesmo tempo. */

let numero = 1;
let divisiveis = 0;

while (numero <= 100) {
    if (numero % 3 === 0 &&
        numero % 4 === 0
    ) {
        divisiveis++;
    }

    numero++;
}

console.log(divisiveis);

=============================================================

/* ## Exercício 22

Percorra os números de `1` até `100`.

Conte quantos números:

- são pares;
- são ímpares;
- são divisíveis por `5`.

Mostre os três resultados no final. */

let numero = 1;
let pares = 0;
let impares = 0;
let divisiveis = 0;

while (numero <= 100) {
    if (numero % 2 === 0) {
        pares++;
    }
    else {
        impares++;
    }

    if (numero % 5 === 0) {
        divisiveis++;
    }

    numero++;
}

console.log(pares);
console.log(impares);
console.log(divisiveis);

=============================================================

/* # Parte 4 — Acumuladores

## Exercício 23

Some todos os números de `1` até `10`.

No final, mostre o resultado. */

let numero = 1;
let soma = 0;

while (numero <= 10) {
    soma = soma + numero;

    numero++;
}

console.log(soma);

=============================================================

/* ## Exercício 24

Some todos os números de `1` até `100`. */

let numero = 1;
let soma = 0;

while (numero <= 100) {
    soma = soma + numero;
    numero++;
}

console.log(soma);

=============================================================

/* ## Exercício 25

Some somente os números pares entre `1` e `50`. */

let numero = 1;
let soma = 0;

while (numero <= 50) {
    if (numero % 2 === 0) {
        soma = soma + numero;
    }

    numero++;
}

console.log(soma);

=============================================================

/* ## Exercício 26

Some somente os números ímpares entre `1` e `50`. */

let numero = 1;
let soma = 0;

while (numero <= 50) {
    if (numero % 2 === 1) {
        soma = soma + numero;
    }

    numero++;
}

console.log(soma);

=============================================================

/* ## Exercício 27

Some todos os números divisíveis por `3` entre `1` e `100`. */

let numero = 1;
let soma = 0;

while (numero <= 100) {
    if (numero % 3 === 0) {
        soma = soma + numero;
    }

    numero++;
}

console.log(soma);

=============================================================

/* ## Exercício 28

Percorra os números de `1` até `20`.

Calcule separadamente:

- a soma dos pares;
- a soma dos ímpares.

No final, mostre:

Soma dos pares: X
Soma dos ímpares: Y */

let numero = 1;
let somaPares = 0;
let somaImpares = 0;

while (numero <= 20) {
    if (numero % 2 === 0) {
        somaPares = somaPares + numero;
    }
    else {
        somaImpares = somaImpares + numero;
    }

    numero++;
}

console.log(somaPares);
console.log(somaImpares);

=============================================================

/* # Parte 5 — Situações do dia a dia

## Exercício 29 — Cofrinho

Uma pessoa começa com:

let dinheiro = 0;

Todos os meses ela guarda `R$ 100`.

Use um `while` para descobrir quantos meses serão necessários para ela alcançar pelo menos `R$ 1.000`.

Mostre o saldo a cada mês.

Exemplo:

Mês 1 - Saldo: R$ 100
Mês 2 - Saldo: R$ 200
... */

let dinheiro = 0;
const investimentoMes = 100;
let mes = 0;

while (dinheiro < 1000) {
    dinheiro = dinheiro + investimentoMes;
    mes++;

    console.log("Mês", mes, "- Saldo: R$", dinheiro);
}

=============================================================

/* ## Exercício 30 — Meta de economia

Uma pessoa começa com `R$ 200`.

Todo mês ela guarda mais `R$ 150`.

Enquanto o saldo for menor que `R$ 2.000`, continue adicionando dinheiro.

No final, mostre:

- o saldo final;
- quantos meses foram necessários. */

let saldo = 200;
const aplicacao = 150;
let meses = 0;

while (saldo < 2000) {
    saldo = saldo + aplicacao;
    meses++;
}

console.log(saldo);
console.log(meses);

=============================================================

/* ## Exercício 31 — Vida do personagem

Um personagem começa com:

let vida = 100;

A cada ataque ele perde `20` pontos de vida.

Enquanto ele estiver vivo, mostre a vida restante depois de cada ataque.

Quando a vida chegar a `0`, mostre:

O personagem foi derrotado! */

let vida = 100;
const ataque = 20;

while (vida > 0) {
    vida = vida - ataque;

    console.log("Vida restante:", vida);
}

console.log("O personagem foi derrotado!");

=============================================================

/* ## Exercício 32 — Boss

Um boss possui `250` pontos de vida.

Seu personagem causa `30` pontos de dano por ataque.

Descubra quantos ataques são necessários para derrotar o boss.

> Tome cuidado com o último ataque: a vida pode ficar abaixo de zero. */

let vidaBoss = 250;
const danoPersonagem = 30;
let ataques = 0;

while (vidaBoss > 0) {
    vidaBoss = vidaBoss - danoPersonagem;
    ataques++;
    
}

console.log(vidaBoss);
console.log(ataques);

=============================================================

/* ## Exercício 33 — Download

Um download começa em `0%`.

A cada repetição, o progresso aumenta `10%`.

Mostre:

Download: 10%
Download: 20%
Download: 30%
...
Download: 100%
Download concluído! */

let download = 0;

while (download < 100) {
    download = download + 10;

    console.log("Download:", download, "%");
}

console.log("Download concluído!");

=============================================================

/* ## Exercício 34 — Combustível

Um carro começa com `50` litros de combustível.

A cada viagem são consumidos `7` litros.

Enquanto houver combustível suficiente para realizar outra viagem, faça a viagem.

No final, mostre:

- quantas viagens foram realizadas;
- quanto combustível sobrou.*/

let combustivel = 50;
const litrosPorViagem = 7;
let viagens = 0;

while (combustivel >= 7) {
    combustivel = combustivel - litrosPorViagem;
    viagens++;
}

console.log(viagens);
console.log(combustivel);

=============================================================

/* # Parte 6 — Validação com `while`

## Exercício 35 — Senha

Considere:

const senhaCorreta = "1234";
let senha = "0000";

Enquanto a senha for diferente da senha correta, mostre:

Senha incorreta

Para evitar um loop infinito neste exercício, altere manualmente o valor de `senha` dentro do `while` depois de algumas tentativas.

Depois mostre:

Acesso permitido*/

const senhaCorreta = "1234";
let senha = "0000";

while (senha !== senhaCorreta) {
    console.log("Senha incorreta");

    senha = "1234";
}

console.log("Acesso permitido");

=============================================================

/* ## Exercício 36 — Número dentro do intervalo

Comece com:

```js
let numero = -5;
```

Enquanto o número **não estiver entre 1 e 10**, aumente o valor dele em `1`.

Quando ele entrar no intervalo, mostre:

```text
Número válido: X
``` */

let numero = -5;

while (numero < 1) {
    numero++;
}

console.log("Número válido:", numero);

=============================================================

/* ## Exercício 37 — Faixa de idade

Considere:

```js
let idade = -3;
```

Enquanto a idade for menor que `0` **ou** maior que `120`, aumente a idade em `1`.

Quando a idade se tornar válida, mostre o valor.

> O objetivo deste exercício é praticar `while` junto com `||`. */

let idade = -3;

while (idade < 0 || idade > 120) {
    idade++;
}

console.log("Idade válida:", idade);

=============================================================

/* ## Exercício 38 — Temperatura

Uma máquina começa com temperatura de `100°C`.

A cada ciclo ela esfria `8°C`.

Enquanto a temperatura for maior que `30°C`, continue resfriando.

Mostre a temperatura a cada ciclo.

No final:

```text
Temperatura segura.
``` */

let temperaturaMaquina = 100;
const resfrioPorCiclo = 8;

while (temperaturaMaquina > 30) {
    temperaturaMaquina = temperaturaMaquina - resfrioPorCiclo;

    console.log("Temperatura:", temperaturaMaquina);
}

console.log("Temperatura segura.");

=============================================================

/* # Parte 7 — Um pouco mais de lógica

## Exercício 39

Percorra os números de `1` até `100`.

Para cada número:

- se for divisível por `3` **e** `5`, mostre `"Divisível por 3 e 5"`;
- senão, se for divisível apenas por `3`, mostre `"Divisível por 3"`;
- senão, se for divisível apenas por `5`, mostre `"Divisível por 5"`;
- caso contrário, mostre o número. */

let numero = 1;

while (numero <= 100) {
    if (numero % 3 === 0 &&
        numero % 5 === 0
    ) {
        console.log("Divisível por 3 e 5");
    }
    else if (numero % 3 === 0) {
        console.log("Divisível por 3");
    }
    else if (numero % 5 === 0) {
        console.log("Divisível por 5");
    }
    else {
        console.log(numero);
    }

    numero++;
}

=============================================================

/* ## Exercício 40

Percorra os números de `1` até `50`.

Conte quantos números são:

- pares e maiores que `20`;
- ímpares e menores que `20`.

Mostre os dois resultados no final. */

let numero = 1;
let pares = 0;
let impares = 0;

while (numero <= 50) {
    if (numero > 20 &&
        numero % 2 === 0
    ) {
        pares++;
    }
    else if (numero < 20 &&
        numero % 2 === 1
    ) {
        impares++;
    }

    numero++;
}

console.log(pares);
console.log(impares);

=============================================================

/* ## Exercício 41

Percorra os números de `1` até `100`.

Mostre somente os números que:

- sejam maiores que `20`;
- sejam menores que `80`;
- sejam divisíveis por `4`. */

let numero = 1;

while (numero <= 100) {
    if (numero > 20 && numero < 80 &&
        numero % 4 === 0
    ) {
        console.log(numero);
    }

    numero++;
}

=============================================================

/* ## Exercício 42

Percorra os números de `1` até `100`.

Mostre os números que atendam a pelo menos uma das condições:

- sejam menores que `10`;
- sejam maiores que `90`;
- sejam divisíveis por `25`. */

let numero = 1;

while (numero <= 100) {
    if (numero < 10 || numero > 90 || numero % 25 === 0) {
        console.log(numero);
    }

    numero++;
}

===================================================================================

/* # Parte 8 — Desafios

## Exercício 43 — Tabuada

Crie uma variável:

```js
const numero = 7;
```

Utilizando `while`, mostre a tabuada desse número de `1` até `10`.

Exemplo:

```text
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
```

Depois altere o valor de `numero` e teste novamente. */

const numeroTabuada = 7;
let multiplicador = 1;

let resultado = 0;

while (multiplicador <= 10) {
    resultado = numero * multiplicador;
    console.log(numero, "x", multiplicador, "=", resultado);
    multiplicador++;
}

==============================================================================
/* ## Exercício 44 — Fatorial

Calcule o fatorial de `5` utilizando `while`.

Lembrando:

```text
5! = 5 × 4 × 3 × 2 × 1
```

Resultado:

```text
120
```

Depois tente com outros números. */

let fatorial = 5;
let multiplicadorFatorial = 4;

while (multiplicadorFatorial >= 1) {
    fatorial = fatorial * multiplicadorFatorial;
    multiplicadorFatorial--;
}

console.log(fatorial);

==========================================================================

/* ## Exercício 45 — Potência sem usar `**`

Considere:

```js
let base = 2;
let expoente = 5;
```

Calcule:

```text
2 × 2 × 2 × 2 × 2
```

usando `while`.

Não utilize:

```js
**
Math.pow()
```

Resultado esperado:

```text
32
``` */

let base = 2;
let expoente = 5;

let resultado = 1;
let contador = 0;

while (contador < expoente) {
    resultado *= base;
    console.log(resultado);
    contador++;
}

=====================================================================================

/* ## Exercício 46 — Crescimento de população

Uma cidade possui inicialmente `10.000` habitantes.

A cada ano a população aumenta em `500` habitantes.

Descubra quantos anos serão necessários para a população chegar a pelo menos `15.000`.

Mostre a população a cada ano. */

let habitantes = 10000;
let aumentoPopulacao = 500;
let anos = 1;

while (habitantes < 15000) {
    habitantes += aumentoPopulacao;
    console.log("Ano:", anos, "População:", habitantes);

    anos++;
}

=====================================================================================

/* ## Exercício 47 — Pagamento de dívida

Uma pessoa possui uma dívida de `R$ 5.000`.

Todo mês ela paga `R$ 450`.

Enquanto existir dívida, continue realizando pagamentos.

Mostre:

```text
Mês 1 - Dívida restante: R$ ...
Mês 2 - Dívida restante: R$ ...
...
```

No final, mostre quantos meses foram necessários.

> Tome cuidado para não mostrar uma dívida negativa como valor final. */

let divida = 5000;
let parcelaMes = 450;
let meses = 0;

while (divida > 0) {
    if (divida < parcelaMes) {
        divida = 0;
    }
    else {
        divida -= parcelaMes;
    }

    meses++

    console.log("Mês", meses, "- Dívida restante: R$", divida);
}

console.log("Meses necessários:", meses);

=====================================================================================

/* ## Exercício 48 — Jogo de batalha

Um jogador possui:

```js
let vidaJogador = 100;
let vidaInimigo = 120;
```

Em cada rodada:

- o jogador causa `20` de dano no inimigo;
- se o inimigo ainda estiver vivo, ele causa `15` de dano no jogador.

O combate continua **enquanto os dois estiverem vivos**.

A cada rodada mostre:

```text
Rodada X
Vida do jogador: ...
Vida do inimigo: ...
```

No final, mostre quem venceu.

> Pense bem na condição do `while` e nos `if`s dentro dele. */

let vidaJogador = 100;
let vidaInimigo = 120;

let danoJogador = 20;
let danoInimigo = 15;
let rodada = 1;

while (vidaJogador > 0 && vidaInimigo > 0) {
    if (vidaJogador > 0) {
        vidaInimigo -= danoJogador;
    }
    if (vidaInimigo > 0) {
        vidaJogador -= danoInimigo; 
    }
    console.log("Rodada:", rodada);
    console.log("Vida do inimigo:", vidaInimigo);
    console.log("Vida do jogador:", vidaJogador);

    rodada++;
}

if (vidaInimigo <= 0) {
        console.log("Jogador venceu");
    }
else if (vidaJogador <= 0) {
        console.log("Inimigo venceu");
    }

=====================================================================================

/* ## Exercício 49 — FizzBuzz com `while`

Percorra os números de `1` até `100`.

Para cada número:

- se for divisível por `3` e `5`, mostre `"FizzBuzz"`;
- se for divisível apenas por `3`, mostre `"Fizz"`;
- se for divisível apenas por `5`, mostre `"Buzz"`;
- caso contrário, mostre o próprio número.

Obrigatoriamente utilize `while`. */

let numero = 1;

while (numero <= 100) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (numero % 3 === 0) {
        console.log("Fizz");
    }
    else if (numero % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(numero);
    }

    numero++;
}

=====================================================================================

/* ## Exercício 50 — Caixa eletrônico simplificado

Considere:

```js
let saldo = 1000;
let saque = 150;
let quantidadeSaques = 0;
```

Enquanto houver saldo suficiente para realizar um saque de `R$ 150`:

1. desconte o valor;
2. aumente a quantidade de saques;
3. mostre o saldo restante.

No final, mostre:

```text
Quantidade de saques realizados: X
Saldo restante: R$ Y
``` */

let saldo = 1000;
let saque = 150;
let quantidadeSaques = 0;

while (saldo >= saque) {
    saldo -= saque;
    quantidadeSaques++;
    console.log("Saldo restante:", saldo);
}

console.log("Quantidade de saques realizados:", quantidadeSaques);
console.log("Saldo restante:", saldo);

=====================================================================================

/* # Parte 9 — Encontre e corrija os erros

## Exercício 51

O programa deveria mostrar os números de `1` até `5`, mas não funciona corretamente:

```js
let numero = 1;

while (numero <= 5) {
    console.log(numero);
    numero--;
}
```

Explique o problema e corrija. */
O problema está no "numero--;", deveria ser "numero++;". Ele tem que almentar para poder chegar em 5.

let numero = 1;

while (numero <= 5) {
    console.log(numero);
    numero++;
}

=====================================================================================

/* ## Exercício 52

O programa deveria mostrar os números pares de `2` até `20`:

```js
let numero = 2;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}
```

O que está errado? */
Ele está entrando em loop infinito porque falta o contador.

let numero = 2;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero);
    }

    numero++;
}

=====================================================================================

/* ## Exercício 53

O programa deveria contar quantos números pares existem entre `1` e `10`:

```js
let numero = 1;
let pares = 0;

while (numero <= 10) {

    if (numero % 2 === 0) {
        numero++;
    }

    pares++;
}

console.log(pares);
```

Existem problemas na lógica.

Corrija sem utilizar `for`. */
A posição do "numero++;" e "pares++;" está invertida. 

let numero = 1;
let pares = 0;

while (numero <= 10) {

    if (numero % 2 === 0) {
        pares++;
    }
    
    numero++;
}

console.log(pares);

=====================================================================================

/* ## Exercício 54

O objetivo é somar os números de `1` até `5`:

```js
let numero = 1;
let soma = 0;

while (numero <= 5) {
    soma = numero;
    numero++;
}

console.log(soma);
```

O resultado não é o esperado.

Descubra o motivo e corrija. */

let numero = 1;
let soma = 0;

while (numero <= 5) {
    soma += numero;
    numero++;
}

console.log(soma);

=====================================================================================

/* # Parte 10 — Desafios extras

Estes exercícios são opcionais e possuem dificuldade maior.

## Exercício 55 — Primeiro múltiplo

Começando em `1`, encontre o primeiro número que seja:

- maior que `50`;
- divisível por `7`;
- divisível por `3`.

Quando encontrar, pare naturalmente o `while` e mostre o número. */

let numero = 1;

while (numero < 50 || numero % 7 !== 0 || numero % 3 !== 0) {
    numero++;
}

console.log(numero);

=====================================================================================

/* ## Exercício 56 — Número de dígitos

Considere:

```js
let numero = 123456;
```

Descubra quantos dígitos esse número possui usando apenas:

- `while`;
- divisão;
- `Math.floor()`.

Não transforme o número em `String`. */

let numero = 123456;
let digitos = 0;

while (numero > 0) {
    numero = Math.floor(numero / 10);
    digitos++;
}

console.log(digitos);

=====================================================================================

/* ## Exercício 57 — Soma dos dígitos

Considere:

```js
let numero = 5832;
```

Utilizando `while`, calcule:

```text
5 + 8 + 3 + 2
```

Resultado esperado:

```text
18
```

Dica: pense nos operadores `%` e `/`. */

let numero = 5832;
let soma = 0;

while (numero > 0) {
    soma = soma + (numero % 10);
    numero = Math.floor(numero / 10);
    
}

console.log(soma);

=====================================================================================

/* ## Exercício 58 — Número invertido

Considere:

```js
let numero = 1234;
```

Utilizando `while`, monte o número invertido:

```text
4321
```

Não transforme o número em `String`. */

let numero = 1234;
let inverso = 0;

while (numero > 0) {
    inverso = inverso * 10 + (numero % 10);
    numero = Math.floor(numero / 10);
}

console.log(inverso);

=====================================================================================

/* ## Exercício 59 — Sequência de Collatz

Comece com:

```js
let numero = 10;
```

Enquanto o número for diferente de `1`:

- se for par, divida por `2`;
- se for ímpar, multiplique por `3` e some `1`.

Mostre todos os valores.

Para `10`, o início será:

```text
10
5
16
8
4
2
1
``` */

let numero = 10;

while (numero !== 1) {
    console.log(numero);
    if (numero % 2 === 0) {
        numero = numero / 2;
    }
    else if (numero % 2 === 1) {
        numero = (numero * 3) + 1;
    }
}

=====================================================================================

/* ## Exercício 60 — Desafio final: sistema de energia

Um robô possui:

```js
let energia = 100;
let distancia = 0;
```

A cada ciclo ele anda `5 metros`.

Porém:

- normalmente ele perde `8` de energia;
- a cada `20 metros`, ele encontra uma estação e recupera `10` de energia;
- a energia nunca pode ultrapassar `100`.

O robô deve continuar andando enquanto possuir energia suficiente para realizar o próximo movimento.

No final, mostre:

- distância total percorrida;
- energia restante;
- quantidade de vezes que encontrou uma estação.

Use `while` e `if`. */

let energia = 100;
let distancia = 0;
let encontrosEstacao = 0;

const distanciaCiclo = 5;
const perdaEnergiaCiclo = 8;
const recuperacaoEnergia = 10;

while (energia >= 8) {
    distancia = distancia + distanciaCiclo;
    energia = energia - perdaEnergiaCiclo;

    if (distancia != 0 && distancia % 20 === 0) {
        energia = Math.min(energia + recuperacaoEnergia, 100);
        encontrosEstacao++;
    }
}

console.log("Distância percorrida:", distancia, "metros");
console.log("Energia restante:", energia);
console.log("Encontrou estações:", encontrosEstacao, "vezes");

=====================================================================================

/* # Checklist antes de entregar

Para cada exercício, confira:

- [ ] Usei `while`?
- [ ] Minha condição pode eventualmente ficar falsa?
- [ ] Atualizei corretamente a variável de controle?
- [ ] Evitei um loop infinito?
- [ ] Usei `if` quando precisava tomar uma decisão?
- [ ] Meu contador começa com um valor correto?
- [ ] Meu acumulador começa com um valor correto?
- [ ] Testei o código com mais de um valor quando possível?
- [ ] Consigo explicar com palavras o que acontece em cada repetição?

---

# Lembrete

Um `while` normalmente pode ser pensado assim:

```text
1. Começo com algum valor
2. Verifico uma condição
3. Faço alguma coisa
4. Altero algum valor
5. Volto para a condição
6. Repito enquanto a condição for verdadeira
```

Antes de escrever o código, tente explicar o problema usando a frase:

> **"Enquanto ________, faça ________."**

Se você conseguir completar essa frase, provavelmente já entendeu a parte mais importante do exercício. */
