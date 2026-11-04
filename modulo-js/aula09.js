//Funções

/* let numero = 51;
let numero2 = 4;

let soma = numero + numero2;
console.log(soma); */

/* ======================================================================= */

/* // Parametros
function somar(numero1, numero2) {
    console.log(numero1 + numero2);
}

somar(5, 5) */

/* ======================================================================= */

/* function somar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = somar(2, 2); */

/* ======================================================================= */

/* function darBoasVindas() {
    console.log("Bem vindo ao sistema!")
}

darBoasVindas(); */

/* ======================================================================= */

/* function somar(numero1, numero2) {
    return numero1 / numero2;
}

// DECLARAR a função
// !==
// EXECUTAR a função */

/* ======================================================================= */

/* function cumprimentar(nome) {
    // console.log("Olá", nome)

    return "Olá " + nome;
}

console.log(cumprimentar("Dongle")); */

/* ======================================================================= */

/* function ehPar(numero) {
    return numero % 2 === 0;
}

for (let i = 0; i < 10; i++) {
    if (ehPar(i)) {
        console.log(i, "é Par");
    }
} */

/* ======================================================================= */

/* function contarVogais(palavra) {
    let quantidade = 0;

    for (let i = 0; i < palavra.length; i++) {
        let letra = palavra[i];
        if (letra === "a" ||
            letra === "e" ||
            letra === "i" ||
            letra === "o" ||
            letra === "u"
        ) {
            quantidade++;
        }
    }

    return quantidade;
}

console.log(contarVogais("Computador"));
console.log(contarVogais("Banana"));
console.log(contarVogais("Dongle")); */

/* ======================================================================= */

/* # Exercícios de JavaScript — Funções

## Objetivo

Praticar:

- declaração de funções;
- chamada de funções;
- parâmetros;
- argumentos;
- `return`;
- funções com `if`;
- funções com `for`;
- funções com Strings;
- reutilização de lógica já conhecida.

> **Importante:** não utilize arrays ainda. */

/* ======================================================================= */

/* # Parte 1 — Funções simples

## Exercício 1 — Boas-vindas

Crie uma função chamada:

```js
darBoasVindas()
```

Ela deve mostrar no console:

Bem-vindo ao sistema!

Depois, chame a função. */

/* function darBoasVindas() {
    console.log("Bem-vindo ao sistema!");
}

darBoasVindas(); */

/* function darBoasVindas() {
    console.log("Bem-vindo ao sistema!")
}

darBoasVindas(); */

/* ======================================================================= */

/* ## Exercício 2 — Mostrar uma mensagem

Crie uma função chamada:

```js
mostrarMensagem()
```

Ela deve mostrar:

Estou aprendendo funções em JavaScript!

Chame a função três vezes. */

/* function mostrarMensagem() {
    console.log("Estou aprendendo funções em JavaScript!");
}

mostrarMensagem();
mostrarMensagem();
mostrarMensagem();

for (let i = 1; i <= 3; i++) {
    mostrarMensagem();
} */

/* ======================================================================= */

/* ## Exercício 3 — Cumprimentar uma pessoa

Crie uma função chamada:

```js
cumprimentar(nome)
```

Ela deve receber um nome e mostrar:

Olá, Maria!

Teste com pelo menos três nomes diferentes. */

/* function cumprimentar(nome) {
    return "Olá " + nome;
}

console.log(cumprimentar("Diego"));
console.log(cumprimentar("Xandinho"));
console.log(cumprimentar("Nathan")); */

/* ======================================================================= */

/* ## Exercício 4 — Apresentação

Crie uma função que receba:

- nome;
- idade.

Ela deve mostrar uma frase como:

```text
Meu nome é João e tenho 20 anos.
```

Teste com valores diferentes. */

/* function apresentar(nome, idade) {
    console.log("Meu nome é", nome, "e tenho", idade, "anos");
}
apresentar("André", 25);
apresentar("Xandinhu", 17);
apresentar("Diego", 31); */

/* ======================================================================= */

/* # Parte 2 — Funções com `return`

## Exercício 5 — Dobro

Crie uma função que receba um número e **retorne** o dobro dele.

Exemplo:

```js
dobro(5)
```

deve retornar:

```text
10
``` */

/* function dobro(numero) {
    return numero * 2;
}

console.log(dobro(5));
console.log(dobro(10));
console.log(dobro(20)); */

/* ======================================================================= */

/* ## Exercício 6 — Triplo

Crie uma função que receba um número e retorne o triplo dele.

--- */

/* function triplo(numero) {
    return numero * 3;
}

console.log(triplo(25)); */

/* ======================================================================= */

/* ## Exercício 7 — Somar dois números

Crie uma função que receba dois números e retorne a soma deles.

Exemplo:

```js
somar(10, 20)
```

deve retornar:

```text
30
```*/

/* function somar(numero1, numero2) {
    return numero1 + numero2;
}

console.log(somar(10, 20)); */

/* ======================================================================= */

/* ## Exercício 8 — Subtração

Crie uma função que receba dois números.

A função deve retornar:

```text
primeiro número - segundo número
``` */

/* function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

console.log(subtracao(29, 8)); */

/* ======================================================================= */

/* ## Exercício 9 — Média de três notas

Crie uma função que receba três notas e retorne a média.

Teste com diferentes valores. */

/* function media(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
}

console.log(media(8, 9, 7)); */

/* ======================================================================= */

/* ## Exercício 10 — Quantidade de caracteres

Crie uma função que receba uma palavra e retorne a quantidade de caracteres dela.

Exemplo:

```js
contarCaracteres("JavaScript")
```

deve retornar:

```text
10
``` */

/* function contarCaracteres(palavra) {
    return palavra.length;
}

console.log(contarCaracteres("JavaScript")); */

/* ======================================================================= */

/* # Parte 3 — Funções com `if`

## Exercício 11 — Maior de idade

Crie uma função que receba uma idade.

Ela deve retornar:

```js
true
```

caso a idade seja maior ou igual a `18`, e:

```js
false
```

caso contrário. */

/* function ehDeMaior(idade) {

    //if ternario
    return idade >= 18 ? true : false;
}

console.log(ehDeMaior(18));
console.log(ehDeMaior(17)); */

/* ======================================================================= */

/* ## Exercício 12 — Par ou ímpar

Crie uma função que receba um número e retorne:

```text
Par
```

ou:

```text
Ímpar
```

--- */

/* function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
}

console.log(parOuImpar(396)); */

/* ======================================================================= */

/* ## Exercício 13 — Positivo, negativo ou zero

Crie uma função que receba um número e retorne:

```text
Positivo
```

```text
Negativo
```

ou:

```text
Zero
```

--- */

/* function positivoNegativoOuZero(numero) {
    if (numero > 0) {
        return "Positivo";
    }
    else if (numero < 0) {
        return "Negativo";
    }
    else {
        return "Zero";
    }
}

console.log(positivoNegativoOuZero(43)); */

/* ======================================================================= */

/* ## Exercício 14 — Maior entre dois números

Crie uma função que receba dois números e retorne o maior deles.

Exemplo:

```js
maior(10, 25)
```

deve retornar:

```text
25
```

--- */

/* function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    }
    else {
        return numero2;
    }
}

console.log(maiorNumero(10,25)); */

/* ======================================================================= */

/* ## Exercício 15 — Situação do aluno

Crie uma função que receba uma média.

Regras:

- média maior ou igual a `7` → `"Aprovado"`
- média maior ou igual a `5` e menor que `7` → `"Recuperação"`
- média menor que `5` → `"Reprovado"`

A função deve retornar a situação.

--- */

/* function situacaoAluno(media) {

    if (media >= 7) {
        return "Aprovado";
    }
    else if (media >= 5) {
        return "Recuperação";
    }
    else {
        return "Reprovado";
    }
}

console.log(situacaoAluno(4)); */

/* ======================================================================= */

/* ## Exercício 16 — Número dentro do intervalo

Crie uma função que receba um número.

Ela deve retornar `true` se o número estiver entre `10` e `20`, incluindo os limites.

Caso contrário, deve retornar `false`.

--- */

/* function intervalo(numero) {
    return numero >= 10 && numero <= 20 ? true : false;
}

console.log(intervalo(12)); */

/* ======================================================================= */

/* # Parte 4 — Funções + Strings

## Exercício 17 — Primeira letra

Crie uma função que receba uma palavra e retorne a primeira letra.

Exemplo:

```js
primeiraLetra("JavaScript")
```

deve retornar:

```text
J
```

--- */

/* function primeiraLetra(palavra) {
        return palavra[0];
}

console.log(primeiraLetra("JavaScript")); */

/* ======================================================================= */

/* ## Exercício 18 — Última letra

Crie uma função que receba uma palavra e retorne a última letra.

Use `.length`.

--- */

/* function ultimaLetra(palavra) {
    return palavra[palavra.length - 1];
}

console.log(ultimaLetra("JavaScript")); */

/* ======================================================================= */

/* ## Exercício 19 — Palavra em maiúsculo

Crie uma função que receba uma palavra e retorne essa palavra totalmente em maiúsculo.

Exemplo:

```js
maiusculo("javascript")
```

deve retornar:

```text
JAVASCRIPT
```

--- */

/* function maiuculo(palavra) {
    return palavra.toUpperCase();
}

console.log(maiuculo("JavaScript")); */

/* ======================================================================= */

/* ## Exercício 20 — Começa com determinada letra

Crie uma função que receba:

- uma palavra;
- uma letra.

Ela deve retornar `true` se a palavra começar com a letra informada.

Exemplo:

```js
comecaCom("Anderson", "A")
```

deve retornar:

```js
true
```

--- */

/* function comecaCom(nome, letra) {
    return nome[0] === letra;
}

console.log(comecaCom("Anderson", "A")); */

/* ======================================================================= */

/* # Parte 5 — Funções + `for`

## Exercício 21 — Contar uma letra

Crie uma função que receba:

- uma palavra;
- uma letra.

A função deve percorrer a palavra e retornar quantas vezes a letra aparece.

Exemplo:

```js
contarLetra("banana", "a")
```

deve retornar:

```text
3
```*/

/* function contarLetra(palavra, letra) {
    let quantidade = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            quantidade++;
        }
    }

    return quantidade;
    
}

    console.log(contarLetra("banana", "a")); */

/* ======================================================================= */

/* ## Exercício 22 — Contar vogais

Crie uma função que receba uma palavra e retorne quantas vogais existem nela.

Considere:

```text
a
e
i
o
u
```

A função deve funcionar também com letras maiúsculas.

--- */

/* function contarVogais(palavra) {
    let quantidade = 0;
    palavra = palavra.toLowerCase();

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === "a" ||
            palavra[i] === "e" ||
            palavra[i] === "i" ||
            palavra[i] === "o" ||
            palavra[i] === "u"
        ) {
            quantidade++;
        }
    }

    return quantidade;
}

console.log(contarVogais("JavaScript")); */

/* ======================================================================= */

/* ## Exercício 23 — Inverter uma palavra

Crie uma função que receba uma palavra e retorne a palavra invertida.

Exemplo:

```js
inverter("casa")
```

deve retornar:

```text
asac
```

--- */

/* function inverterPalavra(palavra) {
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    return invertida;
}

console.log(inverterPalavra("casa")); */

/* ======================================================================= */

/* ## Exercício 24 — Palíndromo

Uma palavra é um palíndromo quando pode ser lida da mesma forma de frente para trás e de trás para frente.

Exemplos:

```text
arara
osso
radar
```

Crie uma função que receba uma palavra e retorne:

```js
true
```

se ela for um palíndromo, ou:

```js
false
```

caso contrário. */

/* function ehPalindromo(palavra) {
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];

    }

    return invertida === palavra ? true : false;
}

console.log(ehPalindromo("arara")); */

/* ================================================================================== */

/* ## Exercício 25 — Contar espaços

Crie uma função que receba uma frase e retorne quantos espaços existem nela.

Exemplo:

```js
contarEspacos("Eu gosto de JavaScript")
```

deve retornar:

```text
3
``` */

/* function contarEspacos(frase) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === " ") {
            contador++;
        }
    }

    return contador;
}

console.log(contarEspacos("Eu gosto de JavaScript")); */

/* ================================================================================== */

/* # Parte 6 — Desafios

## Exercício 26 — Maior de três números

Crie uma função que receba três números e retorne o maior deles.

Não utilize `Math.max()`.

--- */

/* function maiorDe3(numero1, numero2, numero3) {
    if (numero1 >= numero2 && numero1 >= numero3) {
        return numero1;
    }
    else if (numero2 >= numero1 && numero2 >= numero3) {
        return numero2;
    }
    else {
        return numero3;
    }
}

console.log(maiorDe3(3, 4, 4)); */

/* ================================================================================== */

/* ## Exercício 27 — Menor de três números

Crie uma função que receba três números e retorne o menor deles.

Não utilize `Math.min()`.

--- */

/* function menorDe3(numero1, numero2, numero3) {
    if (numero1 <= numero2 && numero1 <= numero3) {
        return numero1;
    }
    else if (numero2 <= numero1 && numero2 <= numero3) {
        return numero2;
    }
    else {
        return numero3;
    }
}

console.log(menorDe3(8, 4, 8)); */

/* ================================================================================== */

/* ## Exercício 28 — Contar números em uma String

Considere uma String como:

```text
abc123def45
```

Crie uma função que receba uma String e retorne quantos caracteres numéricos existem nela.

No exemplo acima, o resultado seria:

```text
5
```

--- */

/* function contar(numeros) {
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= "0" && numeros[i] <= "9") {
            contador++;
        }
    }

    return contador;
}

console.log(contar("abc123def45")); */

/* ================================================================================== */

/* ## Exercício 29 — Validar senha simples

Crie uma função que receba uma senha.

Ela deve retornar `true` somente se:

- possuir pelo menos `8` caracteres;
- possuir pelo menos uma letra maiúscula;
- possuir pelo menos uma letra minúscula;
- possuir pelo menos um número.

Caso contrário, deve retornar `false`.

> Não é necessário validar caracteres especiais.

--- */

/* function validacao(senha) {
    let maiuscula = false;
    let minuscula = false;
    let numeros = false;

    for (let i = 0; i < senha.length; i++) {
        if (senha[i] >= "A" && senha[i] <= "Z") {
            maiuscula = true;
        }
        if (senha[i] >= "a" && senha[i] <= "z") {
            minuscula = true;
        }
        if (senha[i] >= "0" && senha[i] <= "9") {
            numeros = true;
        }
    }

    if (senha.length >= 8 && maiuscula && minuscula && numeros) {
            return true;
        }
    else {
        return false;
    }
}

console.log(validacao("Diego2711")); */

/* ================================================================================== */

/* ## Exercício 30 — Contar uma letra ignorando maiúsculas e minúsculas

Crie uma função que receba:

- uma palavra;
- uma letra.

Ela deve contar quantas vezes a letra aparece, ignorando diferença entre maiúsculas e minúsculas.

Exemplo:

```js
contarLetra("JavaScript", "a")
```

deve funcionar da mesma forma que:

```js
contarLetra("JAVASCRIPT", "A")
```

--- */

/* function contarLetra(palavra, letra) {
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toUpperCase() === letra.toUpperCase()) {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetra("JavaScript", "a")); */

/* ================================================================================== */

/* # Parte 7 — Reutilização de funções

## Exercício 31 — Criar função `inverter`

Crie uma função:

```js
inverter(palavra)
```

que retorne uma palavra invertida.

Depois crie uma segunda função:

```js
ehPalindromo(palavra)
```

A segunda função deve utilizar `inverter()` para descobrir se a palavra é um palíndromo.

> O objetivo é evitar repetir a lógica de inverter a palavra.

--- */

/* function inverter(palavra) {
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    return invertida;

}

function ehPalindromo(palavra) {
    if (palavra === inverter(palavra) ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("radar"));
console.log(ehPalindromo("javascript"));
console.log(ehPalindromo("ovo")); */

/* ================================================================================== */

/* ## Exercício 32 — Calcular média e situação

Crie duas funções:

```js
calcularMedia(nota1, nota2, nota3)
```

e:

```js
verificarSituacao(media)
```

A primeira deve retornar a média.

A segunda deve receber a média e retornar:

- `"Aprovado"`
- `"Recuperação"`
- `"Reprovado"`

Depois utilize as duas funções juntas.

--- */

/* function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    return media;
}

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    }
    else if (media >= 6) {
        return "Recuperação";
    }
    else {
        return "Reprovado";
    }
}

let resultado = calcularMedia(8, 9, 4);

console.log(verificarSituacao(resultado)); */

/* ================================================================================== */

/* # Parte 8 — Entenda o código antes de executar

## Exercício 33

Sem executar, diga o que será mostrado:*/

/* function dobro(numero) {
    return numero * 2;
}

let resultado = dobro(5);

console.log(resultado); */

/* RESPOSTA: 10 */

/* ================================================================================== */

/* ## Exercício 34

Sem executar, diga o valor de `resultado`: */

/* function somar(a, b) {
    return a + b;
}

let resultado = somar(10, 5) * 2;

console.log(resultado); */

/* RESPOSTA: 30 */

/* ================================================================================== */

/* ## Exercício 35

Analise: */

/* function teste(numero) {
    console.log(numero * 2);
}

let resultado = teste(5);

console.log(resultado); */

/* Responda:

1. O que o primeiro `console.log()` mostra?
R: 10
2. Qual será o valor de `resultado`?
R: undefined
3. Qual é a diferença entre `console.log()` e `return` nesse caso?
R: O console.log() serve para exibir informações no console,
 enquanto o return serve para retornar um valor da função,
 permitindo armazená-lo em uma variável ou utilizá-lo em outras operações. */

/* ================================================================================== */

/* # Checklist

Antes de finalizar um exercício, pergunte:

- [ ] Minha função possui um nome claro?
- [ ] Sei quais dados precisam entrar?
- [ ] Criei os parâmetros necessários?
- [ ] Minha função precisa de `return`?
- [ ] Estou retornando o valor correto?
- [ ] Consigo chamar a função com valores diferentes?
- [ ] Estou reutilizando `if`, `for` e Strings quando necessário?
- [ ] Consigo explicar a diferença entre parâmetro e argumento?
- [ ] Consigo explicar a diferença entre mostrar e retornar um valor? */
