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

/* ## 5. Par ou ímpar ⭐
Dado um número, determine se ele é par ou ímpar. */


const numero = 31;

if (numero % 2 === 0) {
    console.log("Par");
}

else {
    console.log("Impar");
}

=================================================================

/* ## 6. Aluno aprovado ⭐⭐
Dados:
```javascript
const nota1 = 7;
const nota2 = 8;
const nota3 = 5;
```
Calcule a média. Média >= 7 → aprovado; caso contrário → reprovado. */

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

/* ## 7. Qual número é maior? ⭐
Dados dois números diferentes, mostre qual é o maior. */

const idadeEle = 31;
const idadeEla = 29;

if (idadeEle > idadeEla) {
    console.log("Idade dele é maior");
}

else {
    console.log("Idade dela é maior")
}

======================================================================

/* ## 8. Login ⭐⭐
Dados:
```javascript
const usuario = "admin";
const senha = "1234";
```
Se usuário e senha estiverem corretos, mostre `Login realizado`. Caso contrário, `Usuário ou senha incorretos`. */

const usuario = "admin";
const senha = "1234";

if (usuario === "admin" && senha === "1234") {
    console.log("Login realizado");
}

else {
    console.log("Usuário ou senha incorretos");
}

========================================================================

/* ## 9. Pode entrar no brinquedo? ⭐⭐⭐
Uma pessoa só pode entrar se altura >= 1.40 e idade >= 12. */

const idade = 31;
const altura = 1.92;

if (idade >= 12 && altura >= 1.40) {
    console.log("Pode entrar no brinquedo");
}

else {
    console.log("Não pode entrar no brinquedo");
}

=======================================================================

/* ## 10. Maior entre três números ⭐⭐⭐⭐
Dados três números diferentes, descubra qual deles é o maior. */

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

/* ## 11. Número múltiplo de 5 ⭐
Mostre se determinado número é múltiplo de 5. */

const numero = 31;

if (numero % 5 === 0) {
    console.log("O número é múltiplo de 5");
}
else {
    console.log("Não é múltiplo de 5");
}

=============================================================================

/* ## 12. Frete grátis ⭐⭐
A loja oferece frete grátis se compra >= R$ 300 ou o cliente for VIP. */

const valorCompra = 508;
const clienteVip = true;

if (valorCompra >= 300 || clienteVip) {
    console.log("Frete grátis");
}
else {
    console.log("Cliente paga o frete");
}

===================================================================================

/* ## 13. Classificação de temperatura ⭐⭐
- abaixo de 10 → `Muito frio`
- de 10 até 19 → `Frio`
- de 20 até 29 → `Agradável`
- 30 ou mais → `Quente` */

let temperatura = 18;

if (temperatura < 10) {
    console.log("Temperatura:", "Muito frio");
}

else if (temperatura <= 19) {
    console.log("Temperatura:", "Frio");
}

else if (temperatura <= 29) {
  console.log("Temperatura:", "Agradável");
}

else {
    console.log("Temperatura:", "Quente");
}

=======================================================================================

/* ## 14. Triângulo possível? ⭐⭐⭐⭐⭐
Dados três lados `a`, `b` e `c`, verifique se formam um triângulo:
```text
a + b > c
a + c > b
b + c > a
``` */

const ladoA = 31;
const ladoB = 29;
const ladoC = 19;

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("É um triângulo");
}

else {
    console.log("Não é um triangulo");
}

================================================================================================

/* ## 15. Senha forte básica ⭐⭐⭐
Dados:
```javascript
const senha = "SuperDev123";
const tamanho = senha.length;
```
Considere forte se tiver pelo menos 8 caracteres. */

const senha = "SuperFev123";
const tamanho = senha.length;

if (tamanho >= 8) {
    console.log("Senha forte");
}

else {
    console.log("Senha fraca");
}

=================================================================================================

/* ## 16. Aprovado, recuperação ou reprovado ⭐⭐
- média >= 7 → aprovado
- média >= 5 → recuperação
- abaixo de 5 → reprovado */

const nota1 = 7;
const nota2 = 5;
const nota3 = 6;
const nota4 = 8;

const media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    console.log("Aprovado");
}
else if (media >= 5) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}

======================================================================================================

/* ## 17. Número dentro do intervalo ⭐⭐
Verifique se um número está entre 10 e 20, inclusive. */

const numero = 27;

if (numero >= 10 && numero <= 20) {
    console.log("Está dentro");
}

else {
    console.log("Não está dentro");
}

==========================================================================================================

/* ## 18. Ano bissexto simplificado ⭐⭐⭐
Considere que um ano é bissexto se for divisível por 4. */

const ano = 2026;

if (ano % 4 === 0) {
    console.log("É um ano bissexto");
}

else {
    console.log("Não é um ano bissexto");
}

============================================================================================================

/* ## 19. Cliente pode parcelar? ⭐⭐
Só pode parcelar se compra >= R$ 100 e o pagamento não estiver bloqueado. */

const valorCompra = 89;
const pagamentoBloqueado = false;

if (valorCompra >= 100 && pagamentoBloqueado === false) {
    console.log("Cliente pode parcelar");
}

else {
    console.log("Cliente não pode parcelar");
}

=========================================================================================

/* ## 20. Pedra, papel e tesoura ⭐⭐⭐⭐⭐
Dados:
```javascript
const jogador1 = "pedra";
const jogador2 = "tesoura";
```
Determine quem venceu ou se houve empate. */

const jogador1 = "pedra";
const jogador2 = "tesoura";

if ((jogador1 === "pedra" && jogador2 === "tesoura") || (jogador2 === "pedra" && jogador1 === "tesoura")) {
    console.log("Vencedor: Pedra");

}

else if ((jogador1 === "tesoura" && jogador2 === "papel") || (jogador2 === "tesoura" && jogador1 === "papel")) {
    console.log("Vencedor: Tesoura");
}

else if ((jogador1 === "papel" && jogador2 === "pedra") || (jogador2 === "papel" && jogador1 === "pedra")) {
    console.log("Vencedor: Papel");
}

else {
    console.log("Empate");
}

==============================================================================================================

/* ## 21. Múltiplo de 3 e 5 ⭐⭐
Dado um número, mostre:
- múltiplo de 3 e 5
- somente de 3
- somente de 5
- nenhum */

const numero = 31;

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("O número é múltiplo de 3 e 5");
}

else if (numero % 5 === 0) {
    console.log("O número é múltiplo de 5");
}

else if (numero % 3 === 0) {
    console.log("O número é múltiplo de 3");
}

else {
    console.log("Nenhum");
}

============================================================================

/* ## 22. Saldo bancário ⭐
Se `saldo` for maior ou igual ao valor da compra, mostre `Compra autorizada`. Caso contrário, `Saldo insuficiente`.
 */

let saldoBancario = 2126;

const valorCompra = 800;

if (saldoBancario >= valorCompra) {
    console.log("Compra autorizada");
}

else {
    console.log("Saldo isuficiente");
}

===================================================================================

/* ## 23. Entrada no evento ⭐⭐⭐
A pessoa precisa possuir ingresso. Se for menor de 18 anos, só pode entrar se estiver acompanhada.
 */

const idade = 16;
const possuiIngresso = true;
const possuiAcompanhante = false;

if (
    (possuiIngresso && idade >= 18) ||
    (possuiIngresso && idade < 18 && possuiAcompanhante)) {
    console.log("Pode entrar no evento");
}

else if (possuiIngresso && idade < 18 ) {
    console.log("Só pode entrar acompanhada");
}

else {
    console.log("Não pode entrar no evento");
}

========================================================================================

/* ## 24. Calculadora simples ⭐⭐⭐⭐
Dados:
```javascript
const numero1 = 10;
const numero2 = 5;
const operacao = "+";
```
Dependendo da operação (`+`, `-`, `*`, `/`), faça o cálculo correspondente. */

const numero1 = 10;
const numero2 = 5;
const operacao = "+";

if (operacao === "+") {
    console.log(numero1 + numero2);
}

else if (operacao === "-") {
    console.log(numero1 - numero2);
}

else if (operacao === "*") {
    console.log(numero1 * numero2);
}

else if (operacao === "/") {
    console.log(numero1 / numero2);
}

===================================================================================================

/* ## 25. Nota válida ⭐⭐
Verifique se uma nota está entre 0 e 10. Caso contrário, mostre `Nota inválida`. */

const nota = 7;

if (nota >= 0 && nota <= 10) {
    console.log("Nota válida");
}

else {
    console.log("Nota inválida");
}

==================================================================================================

/* ## 26. Pode votar? ⭐⭐
- menos de 16 → não pode
- 16 ou 17 → pode
- 18 ou mais → pode */

const idade = 31;

if (idade >= 16) {
    console.log("Pode votar");
}

else {
    console.log("Não pode votar");
}

===========================================================================

/* ## 27. Produto em promoção ⭐⭐⭐
Um produto recebe promoção se categoria for `"eletronicos"` e preço for superior a R$ 500. */

const precoProduto = 500;
const categoria = "eletronicos";

if (precoProduto > 500 && categoria === "eletronicos") {
    console.log("Produto em promoção");
}

else {
    console.log("Produto fora da promoção");
}

=======================================================================================================

/* ## 28. Ordenar dois números ⭐
Dados `a` e `b`, mostre primeiro o menor e depois o maior. */

const numeroA = 31;
const numeroB = 27;

if (numeroA < numeroB) {
    console.log(numeroA, "e", numeroB);
}
else {
    console.log(numeroB, "e", numeroA);
}

==================================================================================

/* ## 29. Maior, menor ou iguais ⭐⭐
Dados dois números, informe se o primeiro é maior, se o segundo é maior ou se são iguais. */

const numeroA = 31;
const numeroB = 27;

if (numeroA > numeroB) {
    console.log(numeroA, "é maior");
}

else if (numeroB > numeroA) {
    console.log(numeroB, "é maior");
}

else {
    console.log("Números iguais");
}

==========================================================================

/* ## 30. Plano de celular ⭐⭐⭐⭐
O plano inclui 10 GB:
- uso <= 10 → sem adicional
- uso <= 15 → R$ 20
- uso <= 20 → R$ 40
- acima de 20 → R$ 80 */

const usoPlanoCelular = 27;

if (usoPlanoCelular <= 10) {
    console.log("Sem valor adicional");
}

else if (usoPlanoCelular <= 15) {
    console.log("Valor adicional: R$", 20);
}

else if (usoPlanoCelular <= 20) {
    console.log("Valor adicional: R$", 40);
}

else {
    console.log("Valor adicional: R$", 80);
}

==================================================================================

/* ## 31. Divisível por 2 ou 3 ⭐⭐
Informe se um número é divisível por 2, por 3, por ambos ou por nenhum. */

const numero = 31;

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(numero, "é divisível por 2 e 3");
}

else if (numero % 2 === 0) {
    console.log(numero, "é divisível por 2");
}

else if (numero % 3 === 0) {
    console.log(numero, "é divisível por 3");
}

else {
    console.log(numero, "não é divisível por 2 nem 3");
}

=============================================================================================

/* ## 32. Número de três dígitos ⭐⭐⭐
Verifique se um número positivo está entre 100 e 999. */

const numero = 701;

if (numero >= 100 && numero <= 999) {
    console.log("Número positivo entre 100 e 999");
}

else {
    console.log("Número não está entre 100 e 999");
}

===============================================================================================

/* ## 33. Sistema de XP ⭐⭐⭐
- XP < 1000 → iniciante
- XP < 3000 → intermediário
- XP < 7000 → avançado
- XP >= 7000 → mestre */

const xpPersonagem = 719;

if (xpPersonagem < 1000) {
    console.log("Iniciante");
}

else if (xpPersonagem < 3000) {
    console.log("Intermediário");
}

else if (xpPersonagem < 7000) {
    console.log("Avançado");
}

else {
    console.log("Mestre");
}

===============================================================================

/* ## 34. IMC simplificado ⭐⭐⭐⭐
Calcule:
```javascript
const imc = peso / (altura * altura);
```
Classifique:
- abaixo de 18.5
- entre 18.5 e 24.9
- entre 25 e 29.9
- 30 ou mais */

const peso = 93;
const altura = 1.92;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("abaixo de 18.5");
}

else if (imc <= 24.9) {
    console.log("entre 18.5 e 24.9");
}

else if (imc <= 29.9) {
    console.log("entre 25 e 29.9");
}

else {
    console.log("30 ou mais");
}

============================================================================

/* ## 35. Cupom válido ⭐⭐
O cupom só funciona se código for `"SUPERDEV"` e compra >= R$ 100. */

const valorCompra = 776;
const codigoCupom = "SUPERDEV";

if (valorCompra >= 100 && codigoCupom === "SUPERDEV") {
    console.log("Cupom válido");
}

else {
    console.log("Cupom inválido");
}

==============================================================================

/* ## 36. Maior entre quatro números ⭐⭐⭐⭐⭐
Dados quatro números diferentes, encontre o maior usando apenas condições. */

const numero1 = 12;
const numero2 = 7;
const numero3 = 25;
const numero4 = 18;

if (numero1 > numero2 && numero1 > numero3 && numero1 > numero4) {
    console.log(numero1, "é maior que", numero2 + ",", numero3, "e", numero4);
}

else if (numero2 > numero3 && numero2 > numero4 && numero2 > numero1) {
    console.log(numero2, "é maior que", numero3 + ",", numero4, "e", numero1);
}

else if (numero3 > numero4 && numero3 > numero1 && numero3 > numero2) {
    console.log(numero3, "é maior que", numero4 + ",", numero1, "e", numero2);
}

else {
    console.log(numero4, "é maior que", numero1 + ",", numero2, "e", numero3);
}

=========================================================================================

/* ## 37. Velocidade permitida ⭐⭐
Limite: 80 km/h.
- até 80 → permitido
- de 81 a 100 → excesso leve
- acima de 100 → excesso grave
 */

const velocidade = 82;

if (velocidade > 100) {
    console.log("Excesso grave");
}

else if (velocidade >= 81) {
    console.log("Excesso leve");
}

else {
    console.log("Permitido");
}

=================================================================================

/* ## 38. Pode fazer a prova? ⭐⭐⭐
O aluno pode realizar a prova se presença >= 75% e trabalhos entregues >= 3. */

const percentualPresencaAluno = 84;
const trabalhosEntreguesAluno = 2;

if (percentualPresencaAluno >= 75 && trabalhosEntreguesAluno >= 3) {
    console.log("Aluno pode realizar a prova");
}

else {
    console.log("Aluno não pode realizar a prova");
}

=================================================================================

/* ## 39. Caixa eletrônico ⭐⭐⭐⭐
Verifique se:
- valor do saque é maior que zero
- há saldo suficiente
- valor não ultrapassa o limite diário */

const valorSaque = 800;
const saldo = 860;
const limiteDiarioSaque = 1000;

if (valorSaque <= 0) {
    console.log("Valor incorreto");
}

else if (valorSaque > saldo) {
    console.log("Saldo insuficiente");
}

else if (valorSaque > limiteDiarioSaque) {
    console.log("Limite diário ultrapassado");
}

else {
    console.log("Saque realizado");
}

=================================================================================

/* ## 40. FizzBuzz unitário ⭐⭐⭐
Para apenas um número:
- múltiplo de 3 e 5 → `FizzBuzz`
- múltiplo de 3 → `Fizz`
- múltiplo de 5 → `Buzz`
- senão → mostre o número */

const numero = 889;

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

=================================================================================

/* ## 41. Hora do dia ⭐⭐
Dada uma hora de 0 a 23:
- 5–11 → manhã
- 12–17 → tarde
- 18–23 → noite
- 0–4 → madrugada

Bônus: mostre `Hora inválida` para valores fora do intervalo. */

const hora = -9;

if (hora >= 0 && hora <= 4) {
    console.log("Madrugada");
}

else if (hora >= 5 && hora <= 11) {
    console.log("Manhã");
}

else if (hora >= 12 && hora <= 17) {
    console.log("Tarde");
}

else if (hora >= 18 && hora <= 23) {
    console.log("Noite");
}

else {
    console.log("Hora inválida");
}

=================================================================================

/* ## 42. Frete por região ⭐⭐⭐
```javascript
const regiao = "sul";
```
- sul → R$ 20
- sudeste → R$ 25
- centro-oeste → R$ 30
- norte/nordeste → R$ 40
- região inválida → informar erro */

const regiao = "sul";

if (regiao === "sul") {
    console.log("Frete: R$", 20);
}

else if (regiao === "sudeste") {
    console.log("Frete: R$", 25);
}

else if (regiao === "centro-oeste") {
    console.log("Frete: R$", 30);
}

else if (regiao === "norte" || regiao === "nordeste") {
    console.log("Frete: R$", 40);
}

else {
    console.log("Região inválida");
}

=================================================================================

/* ## 43. Número mais próximo de 100 ⭐⭐⭐⭐⭐
Dados dois números, descubra qual deles está mais próximo de 100. */

const numero1 = 101;
const numero2 = 98;

if (Math.abs(100 - numero1) < Math.abs(100 - numero2)) {
    console.log(numero1, "é mais próximo de 100");
}

else if (Math.abs(100 - numero1) === Math.abs(100 - numero2)) {
    console.log("A distância entre os números são iguais");
}

else {
    console.log(numero2, "é mais próximo de 100");
}

=================================================================================

/* ## 44. Autenticação com bloqueio ⭐⭐⭐
Login permitido se usuário e senha estiverem corretos e a conta não estiver bloqueada. */

const usuario = "dgbruno";
const senha = "diego123";
const contaBloqueada = false;

if (usuario === "dgbruno" && senha === "diego123" && contaBloqueada === false) {
    console.log("Login permitido");
}

else if (usuario !== "dgbruno" || senha !== "diego123") {
    console.log("Usuário ou senha incorretos");
}

else if (contaBloqueada === true) {
    console.log("Conta bloqueada");
}

=================================================================================

/* ## 45. Estoque crítico ⭐⭐
- estoque = 0 → sem estoque
- estoque <= 5 → estoque crítico
- estoque <= 20 → estoque baixo
- acima de 20 → estoque normal */

const estoque = 10;

if (estoque > 20) {
    console.log("Estoque normal");
}

else if (estoque <= 20) {
    console.log("Estoque baixo");
}

else if (estoque <= 5) {
    console.log("Estoque crítico");
}

else {
    console.log("Sem estoque");
}

=================================================================================

/* ## 46. Desconto por idade ⭐⭐
Um ingresso custa R$ 100:
- até 12 anos → 50% de desconto
- 60 anos ou mais → 40%
- demais → preço normal

Calcule o valor final. */

const precoIngresso = 100;
const idade = 52;

let percentualDesconto = 0;

if (idade <= 12) {
    percentualDesconto = precoIngresso * (50 / 100);
}

else if (idade >= 60) {
    percentualDesconto = precoIngresso * (40 / 100);
}

const valorComDesconto = precoIngresso - percentualDesconto;

console.log("Valor final:", valorComDesconto);

=================================================================================

/* ## 47. Triângulo: tipo ⭐⭐⭐⭐⭐
Considerando que os lados formam um triângulo:
- três lados iguais → equilátero
- dois lados iguais → isósceles
- todos diferentes → escaleno */

const ladoA = 76;
const ladoB = 77;
const ladoC = 78;

if (ladoA === ladoB && ladoA === ladoC) {
    console.log("Equilátero");
}

else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Isósceles");
}

else {
    console.log("Escaleno");
}

=================================================================================

/* ## 48. Nota com conceito ⭐⭐⭐
Primeiro valide a nota entre 0 e 10.
Depois:
- 9–10 → A
- 8–8.9 → B
- 7–7.9 → C
- 5–6.9 → D
- abaixo de 5 → F */

const nota = 3;

if (nota < 0 || nota > 10) {
    console.log("Nota inválida");
}

else if (nota >= 9) {
    console.log("A");
}

else if (nota >= 8) {
    console.log("B");
}

else if (nota >= 7) {
    console.log("C");
}

else if (nota >= 5) {
    console.log("D");
}

else {
    console.log("F");
}

=================================================================================

/* ## 49. Bônus de funcionário ⭐⭐⭐⭐
Dados salário e anos de empresa:
- 10+ anos → 20%
- 5+ anos → 10%
- 2+ anos → 5%
- menos → sem bônus

Calcule o bônus e o novo salário. */

const salario = 11400;
const anosEmpresa = 7;

let percentualBonus = 0;

if (anosEmpresa >= 10) {
    percentualBonus = salario * (20 / 100);
}

else if (anosEmpresa >= 5) {
    percentualBonus = salario * (10 / 100);
}

else if (anosEmpresa >= 2) {
    percentualBonus = salario * (5 / 100);
}

const novoSalario = salario + percentualBonus;

console.log(percentualBonus);
console.log(novoSalario);

=================================================================================

/* ## 50. Jogo: dano crítico ⭐⭐⭐
Dados:
```javascript
const dano = 50;
const critico = true;
```
Se for crítico, dobre o dano. */

const dano = 50;
const critico = true;

if (critico) {
    console.log("Dano:", dano * 2);
}

else {
    console.log("Dano:", dano);
}

=================================================================================

/* ## 51. Validação de cadastro ⭐⭐⭐⭐
Um cadastro só é válido se:
- nome não for vazio
- idade >= 18
- email não for vazio
- aceitouTermos for `true` */

const nome = "Diego";
const idade = 31;
const email = "dg_brun@outlook.com";
const aceitouTermos = true;

if (nome.length > 0 && idade >= 18 && email.length > 0 && aceitouTermos) {
    console.log("Cadastro válido");
}

else {
    console.log("Cadastro inválido");
}

=================================================================================

/* ## 52. Loja com várias regras ⭐⭐⭐⭐⭐
Dados:
```javascript
const valorCompra = 800;
const vip = true;
const cupom = false;
```
Regras:
- VIP + compra >= 500 → 20%
- cupom → 15%
- compra >= 500 → 10%
- compra >= 200 → 5%
- senão → 0%

Calcule desconto e preço final. */

const valorCompra = 800;
const vip = true;
const cupom = false;

let desconto = 0;

if (vip && valorCompra >= 500) {
    desconto = valorCompra * (20 / 100);
}

else if (cupom) {
    desconto = valorCompra * (15 / 100);
}

else if (valorCompra >= 500) {
    desconto = valorCompra * (10 / 100);
}

else if (valorCompra >= 200) {
    desconto = valorCompra * (5 / 100);
}

const valorFinal = valorCompra - desconto;

console.log("Desconto:", desconto);
console.log("Valor final:", valorFinal);

=================================================================================

/* ## 53. Número pertence a qual faixa? ⭐⭐
Classifique:
- menor que 0
- 0 até 10
- 11 até 50
- 51 até 100
- maior que 100 */

const numero = 60;

if (numero < 0) {
    console.log("Menor que 0");
}

else if (numero <= 10) {
    console.log("0 até 10");
}

else if (numero <= 50) {
    console.log("11 até 50");
}

else if (numero <= 100) {
    console.log("51 até 100");
}

else {
    console.log("Maior que 100");
}

=================================================================================

/* ## 54. Validação de data simplificada ⭐⭐⭐⭐⭐
Dados:
```javascript
const dia = 25;
const mes = 8;
```
Considere:
- mês entre 1 e 12
- dia entre 1 e 31

Não precisa tratar fevereiro nem meses com 30 dias. */

const dia = 25;
const mes = 8;

if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12) {
    console.log("Dia e mês correto");
}

else {
    console.log("Dia e mês incorreto");
}

=================================================================================

/* ## 55. Pode comprar o jogo? ⭐⭐⭐
Dados:
```javascript
const idade = 16;
const classificacao = 18;
const autorizacaoResponsavel = true;
```
Pode comprar se tiver idade suficiente ou autorização. */

const idade = 16;
const classificacao = 18;
const autorizacaoResponsavel = true;

if (idade >= classificacao || autorizacaoResponsavel) {
    console.log("Pode comprar");
}

else {
    console.log("Não pode comprar");
}

=================================================================================

/* ## 56. Combustível da nave ⭐⭐⭐⭐
Dados:
```javascript
const combustivel = 35;
const distancia = 300;
const consumoKmLitro = 10;
```
Calcule quantos litros são necessários.
Depois informe:
- combustível suficiente ou insuficiente
- quanto sobra ou falta */

const combustivel = 35;
const distancia = 300;
const consumoKmLitro = 10;

const combustivelNecessario = distancia / consumoKmLitro;
const sobraCombustivel = combustivel - combustivelNecessario;
const necessarioCombustivel = combustivelNecessario - combustivel;

if (combustivel >= combustivelNecessario) {
    console.log("Combustível suficiente");
    console.log("Sobra de combustível:", sobraCombustivel, "Litros");
}

else {
    console.log("Combustível insuficiente");
    console.log("Falta de combustível:", necessarioCombustivel, "Litros");
}

=================================================================================

/* ## 57. Maior e menor entre três ⭐⭐⭐⭐⭐
Dados três números diferentes, mostre o maior e o menor. */

const numero1 = 13;
const numero2 = 6;
const numero3 = 9;

let maior = numero1;
let menor = numero1;

if (numero2 > maior) {
    maior = numero2;
}

if (numero3 > maior) {
    maior = numero3;
}

if (numero2 < menor) {
    menor = numero2;
}

if (numero3 < menor) {
    menor = numero3;
}

console.log("Maior:", maior);
console.log("Menor:", menor);

=================================================================================

/* ## 58. Pedido de restaurante ⭐⭐⭐⭐
Dados:
```javascript
const valorPedido = 120;
const distanciaKm = 7;
const clienteVip = false;
```
Regras:
- VIP → frete grátis
- pedido acima de R$ 150 → frete grátis
- distância <= 3 km → R$ 5
- distância <= 8 km → R$ 10
- acima disso → R$ 20

Mostre pedido, frete e total. */

const valorPedido = 120;
const distanciaKm = 7;
const clienteVip = false;

let frete = 0;

if (clienteVip || valorPedido > 150) {
    frete = 0;
}

else if (distanciaKm <= 3) {
    frete = 5;
}

else if (distanciaKm <= 8) {
    frete = 10;
}

else {
    frete = 20;
}

const total = valorPedido + frete;

console.log("Valor do pedido: R$", valorPedido);
console.log("Frete: R$", frete);
console.log("Total: R$", total);

=================================================================================

/* ## 59. Sistema escolar completo ⭐⭐⭐⭐⭐
Dados:
```javascript
const nota1 = 8;
const nota2 = 6;
const nota3 = 7;
const frequencia = 80;
```
Regras:
- frequência < 75 → reprovado por frequência
- caso contrário:
  - média >= 7 → aprovado
  - média >= 5 → recuperação
  - abaixo de 5 → reprovado

Mostre média, frequência e situação. */

const nota1 = 8;
const nota2 = 6;
const nota3 = 7;
const frequencia = 80;

const media = (nota1 + nota2 + nota3) / 3;


if (frequencia < 75) {
    console.log("Reprovado por frequência");
}

else if (media >= 7) {
    console.log("Aprovado");
}

else if (media >= 5) {
    console.log("Recuperação");
}
else {
    console.log("Reprovado");
}

console.log("Média:", media);
console.log("Frequência:", frequencia);

=================================================================================

/* ## 60. CHEFÃO — Empréstimo bancário 👹
Dados:
```javascript
const salario = 5000;
const valorEmprestimo = 20000;
const parcelas = 24;
const possuiDividas = false;
```

Calcule:
valor da parcela = valorEmprestimo / parcelas

Regras:
1. não pode possuir dívidas
2. parcela não pode ultrapassar 30% do salário
3. empréstimo não pode ultrapassar 10 vezes o salário
4. parcelas devem estar entre 6 e 48

Mostre:
Empréstimo aprovado

ou:
Empréstimo negado

Bônus: informe o motivo da reprovação. */

const salario = 5000;
const valorEmprestimo = 20000;
const parcelas = 24;
const possuiDividas = false;

const valorParcela = valorEmprestimo / parcelas;
let emprestimoAprovado = true;

if (possuiDividas) {
    console.log("Empréstimo negado: possui dívidas");
    emprestimoAprovado = false;
}

if (valorParcela > salario * 30 / 100) {
    console.log("Empréstimo negado: valor da parcela ultrapassa 30% do salário");
    emprestimoAprovado = false;
}

if (valorEmprestimo > salario * 10) {
    console.log("Empréstimo negado: empréstimo ultrapassa 10x salário");
    emprestimoAprovado = false;
}

if (parcelas < 6 || parcelas > 48) {
    console.log("Empréstimo negado: número de parcelas não permitido");
    emprestimoAprovado = false;
}

if (emprestimoAprovado) {
    console.log("Empréstimo aprovado");
}

=================================================================================

/* # Checklist

Antes de considerar a lista concluída, verifique se você consegue explicar:

- [ ] diferença entre `=` e `===`
- [ ] diferença entre `if` e `else`
- [ ] quando utilizar `else if`
- [ ] o que significa `&&`
- [ ] o que significa `||`
- [ ] o que significa `!`
- [ ] como verificar se um número é par
- [ ] como verificar múltiplos com `%`
- [ ] como verificar se um valor está dentro de um intervalo
- [ ] como combinar duas ou mais regras
- [ ] por que a ordem de um `else if` pode mudar o resultado
- [ ] como transformar uma regra escrita em português em uma condição JavaScript


# Lembrete

Quando travar, não comece pensando:

> Qual código eu uso?

Comece pensando:

Quais dados eu tenho?

O que eu preciso descobrir?

Quais são as regras?

Que pergunta pode ser respondida com true ou false?

O que deve acontecer se for true?

O que deve acontecer se for false?

Depois transforme essa lógica em código.
 */