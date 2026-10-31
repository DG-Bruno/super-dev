/* let texto = "JavaScript";

texto.trim(); // Remove todos os espaços em branco do texto
texto.toUpperCase() // Transforma a string em maiusculo = JAVASCRIPT
texto.toLowerCase() // Transforma a string em minusculo = javascript
texto.startsWith("ja"); //Verifica se o texto fornecido no parametro está contido no INICIO do texto
texto.endsWith("scri"); //Verifica se o texto fornecido no parametro está contido no FINAL do texto

console.log(texto.length); //Retorna a quantidade de caracteres na string (contando com o espaço em branco)

console.log(texto[0]); //Pega o primeiro caracter da string
texto.charAt(0);

console.log(texto[texto.length - 1]); //Pega o último caracter da string
texto.charAt(texto.length - 1);

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i]);
}

let palavra = "banana";
let quantidade = 0;

for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === "a") {
        quantidade++;
    }
}

console.log(quantidade); */

//==============================================================================================================

/* let palavra = "JavaScript";
let invertida = "";

//Interpolação de string
for (let i = palavra.length -1; i >= 0; i--) {
    invertida += palavra[i]; // invertida = invertida + palavra[i]
}

console.log(invertida); */

//==============================================================================================================

/* let sala = 1;

for (let andar = 1; andar <= 4; andar++) {

    for (let sala = 1; sala <= 3; sala++) {
        console.log("Andar", andar, "Sala", sala);
    }
} */

//==============================================================================================================

/* for (let turma = 1; turma <= 3; turma++) {

    for (let aluno = 1; aluno <= 5; aluno++) {
        console.log("Turma", turma, "Aluno", aluno);
    }
} */

//==============================================================================================================

/* for (let semana = 1; semana <= 4; semana++) {

    for (let dia = 1; dia <= 7; dia++) {
        console.log("Semana", semana, "-", "Dia", dia);
    }
} */

//==============================================================================================================

/* for (let numero = 1; numero <= 10; numero++) {
    console.log("Tabuada do", numero);

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        console.log(
            numero,
            "x",
            multiplicador,
            "=",
            numero * multiplicador
        );
    }
} */

//==============================================================================================================

/* for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 5; coluna++) {
        if (linha === 1 || linha === 5 || coluna === 1 || coluna === 5) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }

    }

    console.log(desenho);
} */

//==============================================================================================================

/* for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let espaco = 1; espaco <= 5 - linha; espaco++) {
        desenho += " ";
    }

    for (let estrela = 1; estrela <= linha * 2 - 1; estrela++) {
        desenho += "*";
    }

    console.log(desenho);
} */

//==============================================================================================================
/*# Exercícios de JavaScript — Desenhos com Strings e Dois `for`

## Objetivo

Praticar:

- `for` dentro de `for`;
- construção de desenhos com `String`;
- uso de `if`, `else if` e `else`;
- relação entre linha e coluna;
- uso de espaços e símbolos;
- raciocínio com coordenadas.

## Estrutura base sugerida

```js
for (let linha = 1; linha <= ...; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= ...; coluna++) {
        // decidir o que adicionar na String
    }

    console.log(desenho);
}
```

> O `for` de fora controla as **linhas**, o `for` de dentro controla as **colunas** e o `if` decide **o que desenhar em cada posição**.
 */

//==============================================================================================================

/*  # Nível 1 — Linha e coluna

## Exercício 1 — Quadrado preenchido

Crie:

```text
######
######
######
######
######
######
```

Use 6 linhas e 6 colunas. 

for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        desenho += "#";
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 2 — Quadrado vazio

Crie:

******
*    *
*    *
*    *
*    *
******

Dica: existe `*` quando estivermos na primeira linha, última linha, primeira coluna ou última coluna. */


/* for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {

        if (linha === 1 || linha === 6 || coluna === 1 || coluna === 6) {
            desenho += "*";
        }
        else {
        desenho += " ";
        }
}

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 3 — Diagonal principal

Crie:

*
 *
  *
   *
    *
     *

Dica:

linha === coluna

for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (linha === coluna) {
            desenho += "*";
        }

        else {
            desenho += " "
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 4 — Diagonal contrária

Crie:

     *
    *
   *
  *
 *
*

Descubra a relação entre `linha` e `coluna` necessária para desenhar essa diagonal.

for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (linha + coluna === 7) {
            desenho += "*";
        }

        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* # Nível 2 — Mais condições

## Exercício 5 — Desenhar um X

Crie:

*     *
 *   *
  * *
   *
  * *
 *   *
*     *

Use uma grade `7 x 7`.

for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 7; coluna++) {
        if (linha === coluna || linha + coluna === 8 ) {
            desenho += "*";
        }

        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 6 — Sinal de +

Crie:

   *
   *
   *
*******
   *
   *
   *

Use uma grade `7 x 7`.


for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 7; coluna++) {
        if (linha === 4 || coluna === 4) {
            desenho += "*";
        }

        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 7 — Moldura com X

Crie:

*******
**   **
* * * *
*  *  *
* * * *
**   **
*******

Misture bordas, diagonal principal e diagonal contrária.

for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 7; coluna++) {
        if (linha === 1 || linha === 7 ||
            coluna === 1 || coluna === 7 ||
            linha === coluna ||
            linha + coluna === 8
        ) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 8 — Tabuleiro de xadrez

Crie:

#.#.#.#.
.#.#.#.#
#.#.#.#.
.#.#.#.#
#.#.#.#.
.#.#.#.#
#.#.#.#.
.#.#.#.#

Use uma grade `8 x 8`.

Dica:

(linha + coluna) % 2

pode ajudar.

for (let linha = 1; linha <= 8; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 8; coluna++) {
        if ((linha + coluna) % 2 === 0) {
            desenho += "#";
        }

        else {
            desenho += ".";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* # Nível 3 — Formatos

## Exercício 9 — Triângulo crescente usando grade fixa

Crie:

*
**
***
****
*****
******

Use 6 linhas e 6 colunas em todas as linhas. O `for` interno deve percorrer sempre as 6 colunas.

Use `if` para decidir entre adicionar `*` ou espaço.

for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (coluna <= linha) {
            desenho += "*";
        }

        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 10 — Triângulo alinhado à direita

Crie:

     *
    **
   ***
  ****
 *****
******

Use uma grade `6 x 6`.


for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (linha + coluna >= 7) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 11 — Triângulo invertido alinhado à direita

Crie:

******
 *****
  ****
   ***
    **
     *

Use uma grade `6 x 6`. */

/* for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (coluna >= linha) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================
/* ## Exercício 12 — Escada

Crie:

```text
##
  ##
    ##
      ##
        ##
```

Cada degrau possui duas posições de largura. */

/* for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 5; coluna++) {
        if (linha === coluna) {
            desenho += "##";
        }
        else {
            desenho += "  ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* # Nível 4 — Padrões diferentes

## Exercício 13 — Listras verticais

Crie:

```text
|.|.|.|.
|.|.|.|.
|.|.|.|.
|.|.|.|.
|.|.|.|.
```

A escolha entre `|` e `.` deve depender da coluna. */

/* for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 8; coluna++) {
        if (coluna % 2 !== 0) {
            desenho += "|";
        }
        else {
            desenho += ".";
        }
    }
    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 14 — Listras horizontais

Crie:

```text
########
........
########
........
########
........
```

A escolha entre `#` e `.` deve depender da linha. */

/* for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 8; coluna++) {
        if (linha % 2 !== 0) {
            desenho += "#";
        }
        else {
            desenho += ".";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 15 — Grade

Crie:

```text
+-+-+-+-+
| | | | |
+-+-+-+-+
| | | | |
+-+-+-+-+
| | | | |
+-+-+-+-+
```

Você pode usar `+`, `-`, `|` e espaço. */

/* for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 9; coluna++) {
        if (linha % 2 === 1 && coluna % 2 === 1) {
            desenho += "+";
        }
        else if (linha % 2 === 1 && coluna % 2 === 0) {
            desenho += "-";
        }
        else if (linha % 2 === 0 && coluna % 2 === 1) {
            desenho += "|";
        }
        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* # Nível 5 — Números

## Exercício 16 — Coordenadas

Crie:

```text
11 12 13 14
21 22 23 24
31 32 33 34
41 42 43 44
```

Cada posição deve ser formada usando `linha` e `coluna`.*/

/* for (let linha = 1; linha <= 4; linha ++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 4; coluna++) {
        desenho += linha;
        desenho += coluna;
        desenho += " ";
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 17 — Linhas numeradas

Crie:

```text
11111
22222
33333
44444
55555
```

O valor exibido deve depender da linha. */

/* for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 5; coluna++) {
        desenho += linha;
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 18 — Colunas numeradas

Crie:

```text
12345
12345
12345
12345
12345
```

O valor exibido deve depender da coluna. */



/* for (let linha = 1; linha <= 5; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 5; coluna++) {
        desenho += coluna;
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 19 — Matriz de multiplicação

Crie:

```text
1  2  3  4
2  4  6  8
3  6  9 12
4  8 12 16
```

Cada posição deve ser calculada usando:

```js
linha * coluna
```

> Não precisa deixar o alinhamento perfeito.

--- */

/* for (let linha = 1; linha <= 4; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 4; coluna++) {
        desenho += linha * coluna;
        desenho += " ";
    }

    console.log(desenho);
} */

//==============================================================================================================
/* # Nível 6 — Desafios

## Exercício 20 — Quadrado com interior diferente

Crie:

```text
########
#......#
#......#
#......#
#......#
########
```

Nas bordas use `#`. No interior use `.`. */

/* for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 8; coluna++) {
        if (linha === 1 || linha === 6 ||
            coluna === 1 || coluna === 8
        ) {
            desenho += "#";
        }
        else {
            desenho += ".";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 21 — Quadrado dividido ao meio

Crie:

```text
####....
####....
####....
####....
####....
####....
####....
####....
```

Use uma grade `8 x 8`.

As quatro primeiras colunas devem usar `#` e as demais `.`. */

/* for (let linha = 1; linha <= 8; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 8; coluna++) {
        if (coluna <= 4) {
            desenho += "#";
        }
        else {
            desenho += ".";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 22 — Quadrado dividido na diagonal

Crie:

```text
#......
##.....
###....
####...
#####..
######.
#######
```

A decisão deve depender da relação entre `linha` e `coluna`.

--- */

/* for (let linha = 1; linha <= 6; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 6; coluna++) {
        if (coluna <= linha) {
            desenho += "#";
        }
        else {
            desenho += ".";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================
/* ## Exercício 23 — Xadrez com dois símbolos

Crie:

```text
XOXOXOXO
OXOXOXOX
XOXOXOXO
OXOXOXOX
XOXOXOXO
OXOXOXOX
XOXOXOXO
OXOXOXOX
```

Use uma grade `8 x 8`. */

/* for (let linha = 1; linha <= 8; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 8; coluna++) {
        if (linha % 2 === 1 && coluna % 2 === 1 ||
            linha % 2 === 0 && coluna % 2 === 0
        ) {
            desenho += "X";
        }
        else {
            desenho += "O";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 24 — Letra H

Crie:

```text
*     *
*     *
*     *
*******
*     *
*     *
*     *
```

Pense em três condições principais: primeira coluna, última coluna e linha central. */

/* for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 7; coluna++) {
        if (linha === 4 ||
            coluna === 1 ||
            coluna === 7
        ) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================

/* ## Exercício 25 — Letra A

Crie:

```text
   *
  * *
 *   *
*******
*     *
*     *
*     *
```

O objetivo é descobrir quais posições devem receber `*` e quais devem receber espaço.

> O desenho pode variar um pouco dependendo da grade.

for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 7; coluna++) {

        if (linha <= 3) {
            if (coluna === 5 - linha || coluna === 3 + linha) {
                desenho += "*";
            }
            else {
                desenho += " ";
            }
        }

        else if (linha === 4) {
            desenho += "*";
        }
        else if (linha >= 5 && (coluna === 1 || coluna === 7)) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }
    }

    console.log(desenho);
} */

//==============================================================================================================
/* # Desafio final — Coração simplificado

Tente criar:

```text
 **   **
**** ****
*********
 *******
  *****
   ***
    *
```

Tente decompor o problema em linhas, colunas, condições, espaços e estrelas.

for (let linha = 1; linha <= 7; linha++) {
    let desenho = "";

    for (let coluna = 1; coluna <= 9; coluna++) {
        if (linha === 1) {
            if (coluna === 2 || coluna === 3 || coluna === 7 || coluna === 8) {
                desenho += "*";
            }
            else {
                desenho += " ";
            }
    }

    else if (linha === 2) {
        if (coluna !== 5) {
            desenho += "*";
        }
        else {
            desenho += " ";
        }
    }

    else if (linha === 3) {
        desenho += "*";
    }
    else {
        if (coluna >= linha - 2 &&
            coluna <= 12 - linha) {
            desenho += "*";
        }
        else {
        desenho += " ";
    }

    console.log(desenho);
}
}
} */
//==============================================================================================================

/* # Checklist

- [ ] Usei dois `for`?
- [ ] O `for` externo representa as linhas?
- [ ] O `for` interno representa as colunas?
- [ ] Montei a linha em uma `String` antes de usar `console.log()`?
- [ ] Sei explicar quando adiciono símbolo e quando adiciono espaço?
- [ ] Usei `if` quando a posição precisava decidir o que desenhar?
- [ ] Consigo explicar o desenho pensando em linha e coluna? */

