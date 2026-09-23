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
    console.log("contador");

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

console.log("Quantidade de números divisíveis por 3 e 5:", divisiveisPor3e5);
console.log("Quantidade de números divisíveis por 3:", divisiveisPor3);
console.log("Quantidade de números divisíveis por 5:", divisiveisPor5);

==========================================================================================================

/* Se eu guardo R$ 50 todo mes 

enquanto estiver menos de 500, continue guardando 50

no final, quantos meses foram necessários? */


let poupanca = 50;
let totalMeses = 0;

while (poupanca <= 500) {
        console.log("mes:", totalMeses + 1, poupanca);
    
    poupanca = poupanca + 50;

    totalMeses = totalMeses + 1;
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

Mostre os números: */

5
10
15
20
25
30
35
40
45
50


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
    if (numero % 2 === 0);
    console.log(numero, "Par");

    
numero = numero + 1;
}




