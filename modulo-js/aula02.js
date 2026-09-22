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
