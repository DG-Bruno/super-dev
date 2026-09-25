console.log(10 > 5);
console.log(10 < 5);
console.log(18 >= 18);
console.log(17 >= 18);

console.log(5 === "5");
console.log(5 !== "5");

=============================================================================

const media = Math.round(7);

if (media >= 7) {
    console.log("Aprovado");
}
else if (media >= 6) {
    console.log("Falar com coordenação");
}
else {
    console.log("Reprovado");
}

===============================================================================

const idade = 17;

if (idade >= 18) {
    console.log("Maior de Idade")
}
else {
    console.log("Menor de idade")
}

================================================================================

const meta = 18000;
const vendeu = 19000;

if (vendeu > meta) {
    console.log("Bateu a meta")
}
else {
    console.log("Não bateu a meta")
}

=================================================================================

const idade = 17;
const possuiuIngresso = true;
const querComprarIngresso = true;
const possuiEstoque = true;

if (idade >= 18 && possuiuIngresso) {
    console.log("Pode entrar na festa")
}
else if (idade >= 18 && !possuiuIngresso) {
    if (querComprarIngresso && possuiEstoque) {
        console.log("O ingresso está R$ 500")
    }
    else if (querComprarIngresso && !possuiEstoque) {
        console.log("Nao tem ingresso disponivel")
    }
    else {
        console.log("Vá embora")
    }
}
else if (idade < 18 && possuiuIngresso) {
    console.log("Nao Pode entrar na festa por que é de menor")
}
else {
    console.log("Nao Pode entrar na festa")
}

=================================================================================

V & V = V
V & F = F
F & V = F
F & F = F

-----------------------------

V | V = V
V | F = V
F | V = V
F | F = F

===================================================================================

/* Dado:

const valorCompra = 850;
const clienteVip = true;

Aplicar 20% desconto para clienteVip quando comprar acima de 500

Aplicar 10% desconto para clienteVip

Aplicar 5% se comprar acima de 500

se não, não tem desconto

Valor do desconto
Valor final */

const valorCompra = 850;
const clienteVip = true;

let desconto = 0;

if (valorCompra >=500 && clienteVip) {
    desconto = valorCompra * 20 / 100;
}

else if (clienteVip) {
    desconto = valorCompra * 10 / 100;
}

else if (valorCompra >= 500) {
    desconto = valorCompra * 5 / 100;
}

else {
    console.log("Não tem desconto");
}

const valorFinal = valorCompra - desconto;

console.log("Valor do desconto:", desconto);
console.log("Valor final:", valorFinal);
