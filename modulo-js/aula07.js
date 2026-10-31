/* //Manipulação de string

//A  n  d  r  e
//0  1  2  3  4
let nome = "André";

//Lenght = Tamanho
console.log(nome.length);

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
} */

//==============================================================================================================

/* let palavra = "JavaScript";

//palavra.length = acessando uma propriedade (uma informação) da string
console.log(palavra.length);

console.log(palavra[0]);
console.log(palavra[palavra.length - 1]);
console.log(palavra[9]);

-------------------------------------------------

console.log(palavra.charAt(0));

------------------------------------------------

//palavra.toUpperCase() = Ele é um método, ele sempre vai fazer uma AÇÃO na minha variavel/string
console.log(palavra.toUpperCase());

------------------------------------------------

console.log(palavra.toLocaleLowerCase()); */

//==============================================================================================================

/* let palavra = "dg_brun@outlook.com";

console.log(palavra.includes("@outlook.com")); //true */

//==============================================================================================================

/* let palavra = "Eu gosto de HTML e CSS";

console.log(palavra.includes("html"));// false */

//==============================================================================================================

/* let palavra = "dg_brun@outlook.com";

if (palavra.includes("@outlook.com")) {
    console.log("Email válido");
}
else {
    console.log("Email inválido");
}
 */
//==============================================================================================================

/* let nome = "André";

if (nome.toLocaleLowerCase().startsWith("a")) {
    console.log("O nome começa com A");
} */

//==============================================================================================================

/* let arquivo = "foto1.png";

//Deny List = Uma lista de "negação"
if (arquivo.endsWith("png") || arquivo.endsWith("jpg")) {
    console.log("Formato do arquivo não suportado");
}

//Allow list = uma lista de permissão
if (arquivo.endsWith("pdf")) {
    console.log("Formato do arquivo suportado");
} */

//==============================================================================================================

/* let = "     André       ";
console.log(nome.length);

console.log(nome.trim()); //Remove os espaços em branco */

//==============================================================================================================

/* let palavra = "JavaScript";

console.log(palavra.slice(0, 4)); //Java 0=letra de inicio; 4=onde o corte para */

//==============================================================================================================

/* let palavra = "banana";
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a") {
        contador++;
    }
}

console.log(contador); // 3 */

//==============================================================================================================

/* let palavra = "JavaScript";
let vogais = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u" ||
    ) {
        vogais++;
    }
}

console.log(vogais); */

//==============================================================================================================

/* # Exercícios de JavaScript — `for` + Strings

## Objetivo

Praticar o uso de `for` junto com Strings, utilizando:

- `.length`
- acesso por índice: `texto[i]`
- `if`, `else if` e `else`
- `&&` e `||`
- `.toUpperCase()`
- `.toLowerCase()`
- `.includes()`
- `.startsWith()`
- `.endsWith()`
- `.trim()`
- `.slice()`
- contadores
- acumuladores

> Evite usar arrays, funções ou métodos que ainda não foram vistos em aula. */

//==============================================================================================================

/* # Parte 1 — `length` e acesso por índice

## Exercício 1 — Mostrar cada letra

Considere:

```js
let palavra = "javascript";
```

Use `for` para mostrar cada caractere em uma linha.

Saída esperada:

```text
j
a
v
a
s
c
r
i
p
t
``` */

/* let palavra = "javascript";

for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
} */

//==============================================================================================================

/* ## Exercício 2 — Mostrar índice e caractere

Considere:

```js
let palavra = "banana";
```

Mostre:

```text
Índice 0: b
Índice 1: a
Índice 2: n
...
``` */

/* let palavra = "banana";

for (let i = 0; i < palavra.length; i++) {
    console.log("Índice", i + ":", palavra[i]);
} */

//==============================================================================================================

/* ## Exercício 3 — Primeira e última letra

Considere:

```js
let palavra = "programacao";
```

Mostre:

```text
Primeira letra: p
Última letra: o
```

Use `.length` para encontrar a última posição. */

/* let palavra = "programacao";

    console.log("Primeira letra:", palavra[0]);
    console.log("Última letra:", palavra[palavra.length - 1]); */

//==============================================================================================================

/* ## Exercício 4 — Letras ao contrário

Considere:

```js
let palavra = "computador";
```

Use um `for` regressivo para mostrar cada caractere do último até o primeiro. */

/* let palavra = "computador";

for (let i = palavra.length - 1; i >= 0; i--) {
    console.log(palavra[i]);
} */

//==============================================================================================================

/* ## Exercício 5 — Posições pares

Considere:

```js
let palavra = "javascript";
```

Mostre somente os caracteres que estejam em índices pares.

Exemplo:

```text
Índice 0: j
Índice 2: v
Índice 4: s
...
``` */

/* let palavra = "javascript";

for (let i = 0; i < palavra.length; i++) {
    if (i % 2 === 0) {
        console.log("Índice", i + ":", palavra[i]);
    }
} */

//==============================================================================================================

/* # Parte 2 — `for` + `if`

## Exercício 6 — Contar letras A

Considere:

```js
let palavra = "banana";
```

Conte quantas vezes a letra `"a"` aparece.

Resultado esperado:

```text
Quantidade de letras A: 3
``` */

/* let palavra = "banana";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a") {
        quantidade++;
    }
}

console.log(quantidade); */

//==============================================================================================================

/* ## Exercício 7 — Contar uma letra específica

Considere:

```js
let palavra = "desenvolvimento";
let letraProcurada = "e";
```

Percorra toda a palavra e conte quantas vezes `letraProcurada` aparece. */

/* let palavra = "desenvolvimento";
let letraProcurada = "e";

let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letraProcurada) {
        quantidade++;
    }
}

console.log(quantidade);*/

//==============================================================================================================

/* ## Exercício 8 — Contar vogais

Considere:

```js
let palavra = "javascript";
```

Conte quantas vogais existem.

Considere:

```text
a
e
i
o
u
```

Use `||` dentro do `if`. */

/* let palavra = "javascript";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u") {
            quantidade++;
        }
}

console.log(quantidade); */

//==============================================================================================================

/* ## Exercício 9 — Contar consoantes

Considere:

```js
let palavra = "programacao";
```

Conte quantos caracteres **não são vogais**.

> Considere que a palavra contém apenas letras, sem espaços ou símbolos. */

/* let palavra = "programacao";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (letra !== "a" &&
        letra !== "e" &&
        letra !== "i" &&
        letra !== "o" &&
        letra !== "u"
    ) {
        quantidade++;
    }
}

console.log(quantidade); */

//==============================================================================================================

/* ## Exercício 10 — Vogais e consoantes

Considere:

```js
let palavra = "computador";
```

No final mostre:

```text
Vogais: X
Consoantes: Y
``` */

/* let palavra = "computador";
let vogais = 0;
let consoantes = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (letra === "a" ||
        letra === "e" ||
        letra === "i" ||
        letra === "o" ||
        letra === "u"
    ) {
        vogais++;
    }
    else {
        consoantes++;
    }
}

console.log("Quantidade vogais:", vogais);
console.log("Quantidade consoantes:", consoantes); */

//==============================================================================================================

/* # Parte 3 — Maiúsculas e minúsculas

## Exercício 11 — Converter para minúsculo antes de comparar

Considere:

```js
let palavra = "BANANA";
```

Conte quantas letras `"a"` existem.

Antes de percorrer, transforme a palavra para minúsculo. */

/* let palavra = "BANANA";
let quantidade = 0;

palavra = palavra.toLocaleLowerCase();

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i];

    if (letra === "a") {
        quantidade++;
    }
}

console.log(quantidade); */

//==============================================================================================================

/* ## Exercício 12 — Comparação sem diferenciar maiúscula/minúscula

Considere:

```js
let palavra = "JaVaScRiPt";
```

Conte quantas letras `"a"` existem, sem se preocupar se estão em maiúsculo ou minúsculo.*/

/* let palavra = "JaVaScRiPt";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();

    if (letra === "a") {
        quantidade++;
    }
}

console.log(quantidade); */

//==============================================================================================================

/* ## Exercício 13 — Mostrar tudo em maiúsculo

Considere:

```js
let frase = "estudando javascript";
```

Mostre a frase inteira em maiúsculo.

Depois use `for` para mostrar cada caractere da versão em maiúsculo separadamente. */

/* let frase = "estudando javascript";

frase = frase.toUpperCase();

console.log(frase);

for (let i = 0; i < frase.length; i++) {
    console.log(frase[i]);
} */

//==============================================================================================================

/* ## Exercício 14 — Encontrar letras maiúsculas

Considere:

```js
let texto = "JavaScript";
```

Percorra o texto e mostre apenas os caracteres que já estão em maiúsculo.

Dica:

Compare:

```js
texto[i]
```

com:

```js
texto[i].toUpperCase()
```

> Considere apenas letras. */

/* let texto = "JavaScript";

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === texto[i].toUpperCase()) {
        console.log(texto[i]);
    }
} */

//==============================================================================================================

/* # Parte 4 — Buscas simples em Strings

## Exercício 15 — Palavra proibida

Considere:

```js
let frase = "Eu gosto muito de JavaScript";
```

Verifique se a frase contém `"JavaScript"` usando `.includes()`.

Se contiver, mostre:

```text
Palavra encontrada!
```

Caso contrário:

```text
Palavra não encontrada.
``` */

/* let frase = "Eu gosto muito de JavaScript";

if (frase.includes("JavaScript")) {
        console.log("Palavra encontrada!");
}
else {
        console.log("Palavra não encontrada!");
} */

//==============================================================================================================

/* ## Exercício 16 — Verificar início

Considere:

```js
let nome = "Anderson";
```

Verifique se o nome começa com `"A"`.

Mostre uma mensagem correspondente.
 */

/* let nome = "Anderson";

if (nome.startsWith("A")) {
        console.log("O nome começa com A!");
}
else {
        console.log("O nome começa não com A!");
} */

//==============================================================================================================

/* ## Exercício 17 — Extensão de arquivo

Considere:

```js
let arquivo = "foto.png";
```

Verifique se o nome termina com:

```text
.png
```

Se terminar:

```text
Arquivo de imagem PNG
```

Caso contrário:

```text
Outro tipo de arquivo
``` */

/* let arquivo = "foto.png";

if (arquivo.endsWith(".png")) {
    console.log("Arquivo de imagem PNG");
}
else {
    console.log("Outro tipo de arquivo");
} */

//==============================================================================================================

/* ## Exercício 18 — E-mail simples

Considere:

```js
let email = "aluno@escola.com";
```

Verifique:

- se contém `"@"`;
- se termina com `".com"`.

Se as duas condições forem verdadeiras:

```text
Formato de e-mail aparentemente válido
```

Caso contrário:

```text
Formato inválido
```

> Este exercício é apenas de lógica. Não é uma validação real completa de e-mail. */

/* let email = "aluno@escola.com";

if (email.includes("@") && 
    email.endsWith(".com")) {
        console.log("Formato de e-mail aparentemente válido");
    }
    else {
        console.log("Formato inválido");
    } */

//==============================================================================================================

/* # Parte 5 — Espaços e limpeza de texto

## Exercício 19 — Remover espaços externos

Considere:

```js
let nome = "     Maria Silva     ";
```

Use `.trim()`.

Mostre:

```text
Antes: "     Maria Silva     "
Depois: "Maria Silva"
```

Depois mostre o tamanho da String antes e depois da limpeza. */

/* let nome = "     Maria Silva     ";

console.log(nome);
console.log(nome.trim());

let antes = nome.length;
let nomeLimpo = nome.trim();
let depois = nomeLimpo.length;

console.log("Antes:", antes);
console.log("Depois:", depois); */

//==============================================================================================================

/* ## Exercício 20 — Contar espaços

Considere:

```js
let frase = "JavaScript é muito legal";
```

Percorra a String usando `for` e conte quantos espaços existem. */

/* let frase = "JavaScript é muito legal";
let quantidade = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === " ") {
        quantidade++;
    }
}

console.log(quantidade); */

//==============================================================================================================

/* ## Exercício 21 — Contar palavras de forma simplificada

Considere:

```js
let frase = "Eu estou estudando JavaScript";
```

Conte quantos espaços existem.

Depois calcule a quantidade de palavras considerando:

```text
quantidade de palavras = quantidade de espaços + 1
```

> Considere que existe apenas um espaço entre cada palavra e nenhum espaço no começo ou no final. */

/* let frase = "Eu estou estudando JavaScript";
let quantidadeEspacos = 0;
let quantidadePalavras = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === " ") {
        quantidadeEspacos++;
    }
}

quantidadePalavras = quantidadeEspacos + 1;

console.log(quantidadeEspacos);
console.log(quantidadePalavras); */

//==============================================================================================================

/* # Parte 6 — `slice()`

## Exercício 22 — Pegar parte de uma palavra

Considere:

```js
let palavra = "JavaScript";
```

Use `.slice()` para obter:

```text
Java
```

Depois obtenha:

```text
Script
``` */

/* let palavra = "JavaScript";

console.log(palavra.slice(0, 4));
console.log(palavra.slice(4, 10)); */

//==============================================================================================================

/* ## Exercício 23 — Ocultar parte de um código

Considere:

```js
let codigo = "ABC123456";
```

Mostre somente os três primeiros caracteres usando `.slice()`.

Depois mostre somente os três últimos. */

/* let codigo = "ABC123456";

console.log(codigo.slice(0, 3));
console.log(codigo.slice(- 3)); */

//==============================================================================================================

/* ## Exercício 24 — Nome abreviado

Considere:

```js
let nome = "Fernando";
```

Mostre apenas as três primeiras letras.

Resultado esperado:

```text
Fer
``` */

/* let nome = "Fernando";

console.log(nome.slice(0, 3)); */

//==============================================================================================================

/* # Parte 7 — Montando novas Strings com `for`

## Exercício 25 — Inverter palavra

Considere:

```js
let palavra = "javascript";
let invertida = "";
```

Use `for` para construir a palavra invertida.

Resultado esperado:

```text
tpircsavaj
``` */

/* let palavra = "javascript";
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

console.log(invertida); */

//==============================================================================================================

/* ## Exercício 26 — Remover uma letra

Considere:

```js
let palavra = "banana";
let novaPalavra = "";
```

Percorra a palavra e monte uma nova String ignorando todas as letras `"a"`.

Resultado esperado:

```text
bnn
``` */

/* let palavra = "banana";
let novaPalavra = "";

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] !== "a") {
        novaPalavra += palavra[i];
    }
}

console.log(novaPalavra); */

//==============================================================================================================

/* ## Exercício 27 — Substituição manual

Considere:

```js
let palavra = "banana";
let resultado = "";
```

Percorra a palavra.

Quando encontrar `"a"`, adicione `"*"` ao resultado.

Caso contrário, adicione o caractere original.

Resultado esperado:

```text
b*n*n*
``` */

/* let palavra = "banana";
let resultado = "";

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] !== "a") {
        resultado += palavra[i];
    }
    else {
        resultado += "*";
    }
}

console.log(resultado); */

//==============================================================================================================

/* ## Exercício 28 — Separar caracteres

Considere:

```js
let palavra = "code";
let resultado = "";
```

Monte:

```text
c-o-d-e
```

usando `for`.

> Tome cuidado para não colocar `-` depois da última letra. */

/* let palavra = "code";
let resultado = "";

for (let i = 0; i < palavra.length; i++) {
    resultado += palavra[i];

    if (i < palavra.length - 1) {
        resultado += "-"
    }
}

console.log(resultado); */

//==============================================================================================================

/* # Parte 8 — Desafios

## Exercício 29 — Palíndromo

Uma palavra é um palíndromo quando pode ser lida da mesma forma de frente para trás e de trás para frente.

Exemplos:

```text
arara
osso
radar
```

Considere:

```js
let palavra = "arara";
```

Use `for` para criar a palavra invertida.

Depois compare:

```js
palavra === invertida
```

Mostre:

```text
É um palíndromo
```

ou:

```text
Não é um palíndromo
``` */

/* let palavra = "arara";
let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];

    if (palavra === invertida) {
        console.log("É um palíndromo");
    }
    else {
        console.log("Não é um palíndromo");
    }
}

console.log(invertida); */

//==============================================================================================================

/* ## Exercício 30 — Palíndromo ignorando maiúsculas

Considere:

```js
let palavra = "Radar";
```

Faça o exercício anterior funcionar mesmo com letras maiúsculas e minúsculas misturadas. */

/* let palavra = "Radar";
let invertida = "";

palavra = palavra.toLowerCase();

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];

}
    if (palavra === invertida) {
        console.log("É um palíndromo");
    }
    else {
        console.log("Não é um palíndromo");
    } */

//==============================================================================================================

/* ## Exercício 31 — Contar tipos de caracteres

Considere:

```js
let texto = "JavaScript 2026";
```

Conte separadamente:

- quantidade de letras;
- quantidade de números;
- quantidade de espaços.

> Para identificar os números, você pode comparar o caractere com `"0"` até `"9"`.

No final:

```text
Letras: X
Números: Y
Espaços: Z
``` */

/* let texto = "JavaScript 2026";

let letras = 0;
let numeros = 0;
let espacos = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
        espacos++;
    }
    else if (texto[i] >= 0 && texto[i] <= 9) {
        numeros++;
    }
    else {
        letras++;
    }
}

console.log("Letras:", letras);
console.log("Números:", numeros);
console.log("Espaços:", espacos); */

//==============================================================================================================

/* ## Exercício 32 — Senha simples

Considere:

```js
let senha = "Dev2026";
```

Percorra a senha e descubra se ela possui:

- pelo menos uma letra maiúscula;
- pelo menos uma letra minúscula;
- pelo menos um número.

No final:

```text
Senha atende aos requisitos
```

ou:

```text
Senha não atende aos requisitos
```

> Não precisa verificar caracteres especiais. */

/* let senha = "Dev2026";

let temMaiuscula = false;
let temMinuscula = false;
let temNumero = false;

for (let i = 0; i < senha.length; i++) {
    if (senha[i] >= "A" && senha[i] <= "Z") {
        temMaiuscula = true;
    }
    else if (senha[i] >= "a" && senha[i] <= "z") {
        temMinuscula = true;
    }
    else if (senha[i] >= "0" && senha[i] <= "9") {
        temNumero = true;
    }
}

if (temMaiuscula && temMinuscula && temNumero) {
    console.log("Senha atende aos requisitos");
}
else {
    console.log("Senha não atende aos requisitos");
} */

//==============================================================================================================

/* ## Exercício 33 — Quantas vezes uma letra aparece consecutivamente?

Considere:

```js
let palavra = "coooordenador";
```

Descubra quantas vezes a letra `"o"` aparece no total.

Depois mostre também em quais índices ela aparece. */

/* let palavra = "coooordenador";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "o") {
        quantidade++;
        console.log("Índice:", i);
    }
}

console.log(quantidade); */

//==============================================================================================================

/* ## Exercício 34 — Primeira letra maiúscula

Considere:

```js
let nome = "joao";
```

Crie uma nova String que resulte em:

```text
Joao
```

Use:

- acesso por índice;
- `.toUpperCase()`;
- `.slice()`. */

/* let nome = "joao";

let nomeFormatado = nome[0].toUpperCase() + nome.slice(1);

console.log(nomeFormatado); */

//==============================================================================================================

/* ## Exercício 35 — Formatar código

Considere:

```js
let codigo = "abc123";
```

Gere:

```text
ABC-123
```

Use:

- `.toUpperCase()`;
- `.slice()`. */

/* let codigo = "abc123";

let codigoFormatado = codigo.slice(0, 3).toUpperCase() + "-" + codigo.slice(3);

console.log(codigoFormatado); */

//==============================================================================================================

/* # Parte 9 — Entenda antes de executar

## Exercício 36

Qual será a saída?

```js
let palavra = "casa";

for (let i = 0; i < palavra.length; i++) {
    console.log(i, palavra[i]);
}
```

Responda antes de executar.*/

/* RESPOSTA:0 c
         1 a
         2 s
         3 a */

//==============================================================================================================

/* ## Exercício 37

Qual será o resultado?

```js
let palavra = "banana";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "n") {
        quantidade++;
    }
}

console.log(quantidade);
``` */

/* RESPOSTA: 2 */

//==============================================================================================================

/* ## Exercício 38

O código abaixo possui um erro:

```js
let palavra = "teste";

for (let i = 0; i <= palavra.length; i++) {
    console.log(palavra[i]);
}
```

Responda:

1. Quantas vezes o `for` executa?
RESPOSTA: 6
2. Por que aparece `undefined`?
RESPOSTA: Por que o Índice vai até 4 apenas e o Índice 5 não existe
3. Como corrigir? 
RESPOSTA: Tirando o sinal de "="
*/

/* let palavra = "teste";

for (let i = 0; i < palavra.length; i++) {
    console.log(palavra[i]);
} */

//==============================================================================================================

/* ## Exercício 39

Qual será a saída?

```js
let palavra = "abcdef";

for (let i = palavra.length - 1; i >= 0; i -= 2) {
    console.log(palavra[i]);
}
``` */

//RESPOSTA: fdb

//==============================================================================================================

/* ## Exercício 40 — Desafio final

Considere:

```js
let texto = "JavaScript é Legal 2026";
```

Percorra toda a String.

Conte:

- letras maiúsculas;
- letras minúsculas;
- números;
- espaços.

No final mostre:

```text
Maiúsculas: X
Minúsculas: X
Números: X
Espaços: X
```

> Considere apenas letras sem acentos para a classificação entre maiúsculas e minúsculas. O `é` pode ser ignorado nessa classificação. */

/* let texto = "JavaScript é Legal 2026";

let maiusculas = 0;
let minusculas = 0;
let numeros = 0;
let espacos = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] >= "A" && texto[i] <= "Z") {
        maiusculas++;
    }
    else if (texto[i] >= "a" && texto[i] <= "z") {
        minusculas++;
    }
    else if (texto[i] >= "0" && texto[i] <= "9") {
        numeros++;
    }
    else if (texto[i] === " ") {
        espacos++;
    }
}

console.log("Maiúsculas:", maiusculas);
console.log("Minúsculas:", minusculas);
console.log("Números:", numeros);
console.log("Espaços:", espacos); */
