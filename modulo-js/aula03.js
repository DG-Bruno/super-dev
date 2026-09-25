/* ---# Lista de Exercícios — JavaScript: `if`, Lógica e Tomada de Decisão

## SuperDev — Prática de Lógica com Condicionais

### Objetivo

Esta lista foi criada para praticar:

- `if`
- `else`
- `else if`
- operadores de comparação
- operadores lógicos
- tomada de decisão
- raciocínio lógico
- regras de negócio simples

> O foco principal não é decorar sintaxe.
> O foco é aprender a transformar uma regra em uma condição.

# Regras da atividade

Por enquanto, utilize apenas:

- `const`
- `let`
- `console.log()`
- operações matemáticas
- `%`
- comparações
- `if`
- `else`
- `else if`
- `&&`
- `||`
- `!`

## Não utilize ainda

- `while`
- `for`
- arrays
- funções
- objetos
- DOM

# Antes de programar

Em exercícios mais difíceis, tente primeiro preencher:

DADOS:

PERGUNTA:

REGRAS:

CONDIÇÃO:

RESULTADO: */

===========================================================================================================================

/* ## 1. Maior de idade ⭐
Crie uma variável `idade`. Se a idade for maior ou igual a 18, mostre `Maior de idade`. Caso contrário, `Menor de idade`. */

const idade = 31;

if (idade >= 18) {
    console.log("Maior de idade");
}

else {
    console.log("Menor de idade");
}

=======================================================

/* ## 2. Positivo, negativo ou zero ⭐⭐
Dado um número, mostre `Positivo`, `Negativo` ou `Zero`. */

const numero = 31;

if (numero > 0) {
    console.log("Positivo");
}

else if (numero < 0) {
    console.log("Negativo");
}

else {
    console.log("Zero");
}

==========================================================

/* ## 3. Pode dirigir? ⭐⭐
Dados:
```javascript
const idade = 20;
const possuiCNH = true;
```
A pessoa só pode dirigir se tiver pelo menos 18 anos e possuir CNH. */

const idade = 20;
const possuiCNH = true;

if (idade >= 18 && possuiCNH) {
    console.log("Pode dirigir")
}

else {
    console.log("Não pode dirigir")
}

=============================================================

/* ## 4. Desconto maluco ⭐⭐⭐⭐
Uma loja oferece:
- compra acima de R$ 1.000 → 15%
- compra acima de R$ 500 → 10%
- compra acima de R$ 200 → 5%
- demais compras → sem desconto

Calcule o valor do desconto e o valor final. */

const valorCompra = 999;

let desconto = 0;

if (valorCompra > 1000) {
    desconto = valorCompra * 15 / 100;
}

else if (valorCompra > 500) {
    desconto = valorCompra * 10 / 100;
}

else if (valorCompra > 200) {
    desconto = valorCompra * 5 / 100;
}

else {
    console.log("Sem desconto")
}

const valorFinal = valorCompra - desconto;

console.log("Desconto:", desconto);
console.log("Valor final:", valorFinal);

=================================================================
const numero = 31;

if (numero % 2 === 0) {
    console.log("Par");
}

else {
    console.log("Impar");
}
=================================================================
const nota1 = 7;
const nota2 = 8;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
}

else {
    console.log("Reprovado")
}
==================================================================
const idadeEle = 31;
const idadeEla = 29;

if (idadeEle > idadeEla) {
    console.log("Idade dele é maior");
}

else {
    console.log("Idade dela é maior")
}
======================================================================
const usuario = "admin";
const senha = 1234;

if (usuario === "admin" && senha === 1234) {
    console.log("Login realizado");
}

else {
    console.log("Usuário ou senha incorretos");
}
========================================================================
const idade = 31;
const altura = 1.92;

if (idade >= 12 && altura >= 1.40) {
    console.log("Pode entrar no brinquedo");
}
    else {
        console.log("Não pode entrar no brinquedo");
}
=======================================================================
const numero1 = 31;
const numero2 = 30;
const numero3 = 28;

if (numero1 > numero2 && numero1 > numero3) {
    console.log("Número 1 é maior");
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log("Número 2 é maior");
}
else {
    console.log("Número 3 é maior");
}
===========================================================================
const numero = 31;

if (numero % 5 === 0) {
    console.log("O número é múltiplo de 5");
}
else {
    console.log("Não é múltiplo de 5");
}
=============================================================================
const valorCompra = 508;
const clienteVip = true;

if (valorCompra >= 300 || clienteVip) {
    console.log("Frete grátis");
}
else {
    console.log("Cliente paga o frete");
}