/* // Array OU Lista
const numeros = [10, 20, 30];

const dobrados = numeros.map(
    // Função em forma de Arrow function
    (numero) => {
        return numero * 2;
    }
)

console.log(dobrados); */

//==============================================================================

/* const frutas = ["uva", "banana", "abacaxi", "manga"];

// Ele não leva em consideração Acentos e caracteres especiais
frutas.sort();

console.log(frutas);

const nomes = ["Érica", "Bruno", "Alvaro", "Cáio"];

nomes.sort();

console.log(nomes);

nomes.sort((a, b) => {
    return a.localeCompare(b, "pt-BR")
})

console.log(nomes);

const precos = [80, 5, 120, 20];

precos.sort();

console.log(precos);

precos.sort((a, b) => {
    return a - b;
})

console.log(precos);
 */

//==============================================================================

/* Ordene [18, 7, 12, 25] e mostre o menor e maior frete acessando os indices do array.

const fretes = [18, 7, 12, 25];

fretes.sort((a, b) => {
    return a - b;
})

console.log(fretes[0]);
console.log(fretes[fretes.length - 1]); */

//==============================================================================

/* REDUCE */

/* const valores = [20, 35, 15];

let total = 0;

valores.forEach((valor) => {
    total += valor;
})

console.log(total);


// Execução     Acumulador        Item atual         retorno
// Primeira         0                 20                20
// Segunda          20                35                55
// Terceira         55                15                70

const totalV2 = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
})

console.log(totalV2); */

//==============================================================================

//Some as notas [7, 8, 9] com reduce. Depois apresente a média.

/* const notas = [7, 8, 9];

const soma = notas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
})

const media = soma / notas.length;

console.log(soma);
console.log(media); */

//==============================================================================

/* OBJETOS */

/* const nomeProduto = "Caderno";
const valorProduto = 25;

// JSON
const produto = {
    // Key: value
    nome: "Caderno",
    valor: 25
}

// Estou acessando uma propriedade do meu objeto (que nesse caso é a minha string)
console.log(nomeProduto.length);

console.log(produto.nome);
console.log(produto.valor);

produto.valor = 33;

console.log(produto.valor);


const produtos = [
    {
    // Key: value
        nome: "Caderno",
        valor: 25,
        peso: 100.25
    },
    {
        nome: "Mochila",
        valor: 120,
        peso: 20.25
    },
    {
        nome: "Caneta",
        valor: 5,
        peso: 1.12
    }
]

console.log(produtos[0].nome); */

//==============================================================================

//Ordene os produtos abaixo do menor para o maior preço. Depois mostre seus nomes com forEach.

//Mouse 707
//Teclado 375
//Headset 222

/* const produtos = [
    {
    // Key: value
        nome: "Mouse",
        valor: 707
    },
    {
        nome: "Teclado",
        valor: 375
    },
    {
        nome: "Headset",
        valor: 222
    }
]

produtos.sort((a, b) => {
    return a.valor - b.valor;
})

produtos.forEach((produto) => {
    console.log(produto.nome);
}) */