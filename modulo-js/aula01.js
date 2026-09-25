// # Atividade Prática — Missão Espacial SuperDev 🚀

// ## JavaScript e Lógica de Programação

// ### Contexto

// A equipe da **SuperDev Space Agency** está preparando uma missão para enviar uma nave até uma estação espacial.

// Antes da decolagem, o sistema precisa calcular algumas informações importantes da missão, como:

// - distância percorrida;
// - duração estimada da viagem;
// - consumo de combustível;
// - quantidade de combustível restante;
// - custo da missão;
// - divisão do custo entre patrocinadores.

// Seu trabalho será criar pequenos trechos de código JavaScript para ajudar a equipe a realizar esses cálculos.

// > Nesta atividade, o objetivo principal não é decorar JavaScript.  
// > O objetivo é **entender o problema, separar os dados e transformar a solução em código**.

// ---

// # Regras da atividade

// Por enquanto, utilize apenas os conteúdos que já estamos trabalhando:

// - `console.log()`
// - `const`
// - `let`
// - `String`
// - `Number`
// - `Boolean`
// - `typeof`
// - operadores matemáticos:
//   - `+`
//   - `-`
//   - `*`
//   - `/`
//   - `%`

=========================================================================

// # Parte 1 — Identificação da missão ⭐

// Crie as seguintes informações:

// Nome da missão: SuperDev I
// Destino: Estação Alpha
// Número de tripulantes: 4
// Missão tripulada: true

// Armazene cada informação em uma variável ou constante apropriada.

// Depois, utilize `console.log()` para mostrar:

// Missão: SuperDev I
// Destino: Estação Alpha
// Tripulantes: 4
// Missão tripulada: true

// ## Pergunta

// Qual dessas informações provavelmente deveria utilizar `const`?
Todas

// Por quê?
Porque todas informações são fixas e não precisam ser alteradas durante a execução

const nomeMissao = "SuperDev I";
const destino = "Estação Alpha";
const numeroTripulantes = 4;
const missaoTripulada = true;

console.log("Missão:", nomeMissao);
console.log("Destino:", destino);
console.log("Tripulantes:", numeroTripulantes);
console.log("Missão tripulanda:", missaoTripulada);

=============================================================================================

// # Parte 2 — Descobrindo os tipos ⭐

// Utilizando as informações da missão, mostre no console o **tipo de dado** de:

// - nome da missão;
// - quantidade de tripulantes;
// - informação que indica se a missão é tripulada.

// Utilize:

// ```javascript
// typeof
// ```

// Exemplo de saída:

// string
// number
// boolean

// console.log(nomeMissao);
// console.log(destino);
// console.log(numeroTripulantes);
// console.log(missaoTripulada);

console.log(typeof nomeMissao);
console.log(typeof destino);
console.log(typeof numeroTripulantes);
console.log(typeof missaoTripulada);

===========================================================================================

// # Parte 3 — Distância da viagem ⭐

// A estação espacial está localizada a:

// 384000 km

// A nave precisa:

// 1. viajar até a estação;
// 2. posteriormente retornar para a Terra.

// Crie uma constante chamada:

// ```javascript
// const distanciaAteEstacao = 384000;
// ```

// Calcule a **distância total da missão**.

// Mostre:

// Distância total da missão: XXXXX km

const distanciaAteEstacao = 384000;
const distanciaVolta = 384000;
const distanciaTotal = distanciaAteEstacao + distanciaVolta;

console.log("Distância total da missão:", distanciaTotal, "km");

====================================================================================================

// # Parte 4 — Tempo estimado da viagem ⭐⭐

// A velocidade média da nave será:

// 28000 km/h

// Sabendo a distância total da missão, descubra quantas horas aproximadamente serão necessárias para completar a viagem.

// Utilize a ideia:

// tempo = distância / velocidade

// Mostre:

// Tempo estimado da missão: XXXXX horas

// > Não precisa arredondar o resultado.

const velocidadeMedia = 28000;
const tempoMissao = distanciaTotal / velocidadeMedia;

console.log("Tempo estimado da missão:", tempoMissao, "horas");

=================================================================================================

// # Parte 5 — Combustível ⭐⭐

// A nave inicia a missão com:

// 50000 litros de combustível

// Durante a viagem de ida, serão utilizados:

// 18000 litros

// Durante a viagem de volta:

// 17000 litros

// Calcule:

// 1. combustível total utilizado;
// 2. combustível restante.

// Exiba:

// Combustível inicial: XXXXX litros
// Combustível utilizado: XXXXX litros
// Combustível restante: XXXXX litros

const combustivelInicial = 50000;
const consumoIda = 18000;
const consumoVolta = 17000;
const consumoTotal = consumoIda + consumoVolta;
const combustivelRestante = combustivelInicial - consumoTotal;

console.log("Combustível inicial:", combustivelInicial, "litros");
console.log("Combustível ultilizado:", consumoTotal, "litros");
console.log("Combustível restante:", combustivelRestante, "litros");

=============================================================================================

// # Parte 6 — Consumo médio ⭐⭐

// Utilizando:

// - distância total da missão;
// - combustível total utilizado;

// calcule quantos quilômetros a nave percorre aproximadamente por litro de combustível.

// A ideia é:

// consumo médio = distância total / combustível utilizado

// Mostre:

// Consumo médio: XXXXX km/L

const consumoMedio = distanciaTotal / consumoTotal;

console.log("Consumo médio:", consumoMedio, "km/L");

====================================================================================================

// # Parte 7 — Custo da missão ⭐⭐

// Os custos previstos são:

// Combustível: R$ 1.250.000
// Equipe: R$ 480.000
// Equipamentos: R$ 920.000
// Alimentação: R$ 75.000

// Crie uma constante para cada valor.

// Depois calcule o custo total.

// Saída:

// ========== CUSTOS DA MISSÃO ==========

// Combustível: R$ XXXXX
// Equipe: R$ XXXXX
// Equipamentos: R$ XXXXX
// Alimentação: R$ XXXXX

// Custo total: R$ XXXXX

const gastosCombustivel = 1250000;
const gastosEquipe = 480000;
const gastosEquipamentos = 920000;
const gastosAlimentacao = 75000;
const custoTotal = gastosCombustivel + gastosEquipe + gastosEquipamentos + gastosAlimentacao;

console.log("Combustível: R$", gastosCombustivel);
console.log("Equipe: R$", gastosEquipe);
console.log("Equipamentos: R$", gastosEquipamentos);
console.log("Alimentação: R$", gastosAlimentacao);
console.log("Custo total: R$", custoTotal);

================================================================================================

// # Parte 8 — Patrocinadores ⭐⭐⭐

// A missão será financiada igualmente por:

// 5 patrocinadores

// Utilizando o custo total calculado anteriormente, descubra quanto cada patrocinador deverá pagar.

// Mostre:

// Quantidade de patrocinadores: 5

// Valor por patrocinador: R$ XXXXX

const patrocinadores = 5;
const custoPatrocinador = custoTotal / patrocinadores;

console.log("Quantidade de patrocinadores:" + " " + patrocinadores);
console.log("Custo por patrocinador:" + " " + "R$" + " " + custoPatrocinador);

===================================================================================================

// # Parte 9 — Reserva de segurança ⭐⭐⭐

// A agência decidiu adicionar uma reserva financeira de:

// 12%

// sobre o custo original da missão.

// Calcule:

// 1. valor da reserva;
// 2. novo custo total da missão.

// Saída:

// Custo original: R$ XXXXX
// Reserva de segurança: R$ XXXXX
// Custo final: R$ XXXXX

// ## Antes de programar

// Responda:

// Como calculamos 12% de um valor?
EX: Valor * 12 / 100

// Somente depois transforme sua resposta em código.

const percentualReservaFinanceira = 12;
const valorReserva = custoTotal * (percentualReservaFinanceira / 100);
const custoMissaoReserva = custoTotal + valorReserva;

console.log("Custo original:" + " " + "R$" + " " + custoTotal);
console.log("Reserva de segurança: " + "R$ " + valorReserva);
console.log("Custo final: " + "R$ " + custoMissaoReserva);

=======================================================================================

// # Parte 10 — Nova divisão entre patrocinadores ⭐⭐⭐

// Agora utilize o **novo custo final da missão**, incluindo a reserva de segurança.

// Calcule novamente quanto cada um dos 5 patrocinadores deverá pagar.

// Mostre:

// Novo valor por patrocinador: R$ XXXXX

const novoCustoPatrocinadores = custoMissaoReserva / patrocinadores;

console.log("Novo valor por patrocinador: " + "R$ " + novoCustoPatrocinadores);

============================================================================================

// # Parte 11 — Contagem regressiva em segundos ⭐⭐⭐

// A equipe precisa iniciar uma contagem regressiva de:

// 10 minutos

// Por enquanto não vamos criar a contagem funcionando automaticamente.

// Seu objetivo é apenas descobrir quantos **segundos** existem em 10 minutos.

// Considere:

// 1 minuto = 60 segundos

// Saída:

// 10 minutos correspondem a XXXXX segundos.

const minutos = 10;
const segundos = 60;
const totalSegundos = minutos * segundos;

console.log("10 minutos correspondem a " + totalSegundos + " segundos");

==================================================================================================

// # Parte 12 — Tempo de comunicação ⭐⭐⭐

// Uma mensagem enviada pela nave demora:

// 8 minutos

// para chegar à central.

// Uma resposta da central também demora:

// 8 minutos

// Calcule quanto tempo passa entre:

// 1. a nave enviar uma pergunta;
// 2. a central receber;
// 3. a central responder imediatamente;
// 4. a nave receber a resposta.

// Mostre o resultado em:

// - minutos;
// - segundos.

const MensagemEnviadaNave = 8;
const MensagemEnviadaCentral = 8;
const tempoTotalMensagens = MensagemEnviadaNave + MensagemEnviadaCentral;
const tempoMensagensSegundos = tempoTotalMensagens * segundos;

console.log(" " + tempoTotalMensagens + " minutos");
console.log(" " + tempoMensagensSegundos + " segundos");

==================================================================================================

// # Parte 13 — Conversão de tipos ⭐⭐⭐

// Um sistema antigo retornou a quantidade de tripulantes como texto:

// ```javascript
// const tripulantes = "4";
// ```

// E existe:

// ```javascript
// const novosTripulantes = 2;
// ```

// Execute:

// ```javascript
// console.log(tripulantes + novosTripulantes);
// ```

// ## Antes de executar

// Anote qual resultado você espera.

// Depois execute.

// ### Perguntas

// 1. Qual foi o resultado?
42
// 2. Por que isso aconteceu?
Porque o valor da const tripulantes está entre ""
// 3. Qual o tipo de `tripulantes`?
String
// 4. Como podemos transformar `"4"` em número?
No console.log posso colocar um "Number" antes do valor "tripulantes" para converter a String em Número

// Corrija o código para que o resultado seja:

// 6

const tripulantes = "4";
const novosTripulantes = 2;

console.log(Number(tripulantes) + novosTripulantes);

============================================================================================================

// # Parte 14 — Caixa misteriosa ⭐⭐⭐

// Analise:

// ```javascript
// let codigoDeAcesso;
// ```

// Execute:

// ```javascript
// console.log(codigoDeAcesso);
// console.log(typeof codigoDeAcesso);
// ```

// Responda:

// 1. Qual foi o valor mostrado?
undefined
// 2. Qual foi o tipo apresentado?
undefined
// 3. O que isso significa?
Que não foi definido nenhum valor na "variável"

let codigoDeAcesso;

console.log(codigoDeAcesso);
console.log(typeof codigoDeAcesso);

==========================================================================================================

// # Parte 15 — Carga da nave ⭐⭐⭐⭐

// A nave possui capacidade máxima para:

// 12000 kg

// Ela levará:

// Equipamentos científicos: 4250 kg
// Alimentos: 1850 kg
// Oxigênio: 3100 kg
// Equipamentos pessoais: 950 kg

// Calcule:

// 1. peso total transportado;
// 2. quantidade de capacidade que ainda sobra.

// Exiba:

// Capacidade máxima: XXXXX kg
// Carga utilizada: XXXXX kg
// Capacidade restante: XXXXX kg

const capacidadeMaximaNave = 12000;
const equipamentosCientificos = 4250;
const alimentos = 1850;
const oxigenio = 3100;
const equipamentosPessoais = 950;
const pesoTotalTransportado = equipamentosCientificos + alimentos + oxigenio + equipamentosPessoais;
const pesoSobra = capacidadeMaximaNave - pesoTotalTransportado;

console.log("Capacidade máxima: " + capacidadeMaximaNave + " kg");
console.log("Carga utilizada: " + pesoTotalTransportado + " kg");
console.log("Capacidade restante: " + pesoSobra + " kg");

========================================================================================================

/* # Parte 16 — Pacotes de alimentos ⭐⭐⭐⭐

Existem:

127 pacotes de alimento

Cada caixa comporta:

10 pacotes

Descubra:

1. quantas caixas completas podem ser preenchidas;
2. quantos pacotes sobram.

## Dica

Para descobrir a sobra, pesquise o comportamento do operador:

```javascript
%
```

Você não precisa utilizar `if`. */


const pacotesAlimentos = 127;
const capacidadeCaixa = 10;
const quantidadeCaixas = Math.floor(pacotesAlimentos / capacidadeCaixa);
const sobraPacotes = pacotesAlimentos % capacidadeCaixa;

console.log("Caixas preenchidas: " + quantidadeCaixas);
console.log("Sobra de pacotes: " + sobraPacotes);

===================================================================================================

// # Parte 17 — Problema de lógica ⭐⭐⭐⭐

// A missão possui:

// 4 tripulantes

// Cada tripulante precisa consumir:

// 3 litros de água por dia

// A missão terá duração de:

// 16 dias

// A nave possui:

// 220 litros de água

// Sem utilizar `if`, descubra:

// 1. consumo de água de uma pessoa durante toda a missão;
// 2. consumo total da tripulação;
// 3. quantidade de água restante depois da missão.

// Antes de escrever código, preencha:

// ENTRADAS:
4 tripulantes
3 litros de água por pessoa por dia
16 dias de missão
220 litros de água disponíveis

// PROCESSAMENTO:
Consumo de uma pessoa: 3 × 16 = 48 litros
Consumo total: 48 × 4 = 192 litros
Água restante: 220 - 192 = 28 litros

// SAÍDAS:
Consumo de uma pessoa: 48 litros
Consumo total da tripulação: 192 litros
Água restante: 28 litros

// Depois transforme sua lógica em JavaScript.

const tripulantes = 4;
const consumoAguaTripulanteDia = 3;
const duracaoMissao = 16;
const capacidadeAguaNave = 220;
const consumoTotalAguaPessoa = consumoAguaTripulanteDia * duracaoMissao;
const consumoTotalAguaTripulacao = consumoTotalAguaPessoa * tripulantes;
const sobraAgua = capacidadeAguaNave - consumoTotalAguaTripulacao;

console.log("Consumo total de água por pessoa: " + consumoTotalAguaPessoa);
console.log("Consumo total de água da tripulação: " + consumoTotalAguaTripulacao);
console.log("Quantidade de água resrtante: " + sobraAgua);

======================================================================================================

// # Parte 18 — Relatório final da missão ⭐⭐⭐⭐⭐

// Agora utilize os valores calculados anteriormente para produzir um relatório no console.

// Ele deve ficar aproximadamente assim:

// =======================================
//         SUPERDEV SPACE AGENCY
// =======================================

// Missão: SuperDev I
// Destino: Estação Alpha
// Tripulantes: 4

// Distância total: XXXXX km
// Tempo estimado: XXXXX horas

// Combustível inicial: XXXXX L
// Combustível utilizado: XXXXX L
// Combustível restante: XXXXX L

// Carga utilizada: XXXXX kg
// Capacidade restante: XXXXX kg

// Custo original: R$ XXXXX
// Reserva de segurança: R$ XXXXX
// Custo final: R$ XXXXX

// Patrocinadores: 5
// Valor por patrocinador: R$ XXXXX

// =======================================
//           MISSÃO PREPARADA
// =======================================

// Você pode utilizar vários `console.log()`.

console.log("==================================");
console.log("        SUPERDEV SPACE AGENCY     ");
console.log("==================================");

console.log("");

console.log("Missão: " + nomeMissao);
console.log("Destino: " + destino);
console.log("Tripulantes: " + numeroTripulantes);

console.log("");

console.log("Distância total: " + distanciaTotal + " km");
console.log("Tempo estimado: " + tempoMissao + " horas");

console.log("");

console.log("Combustível inicial: " + combustivelInicial + " L");
console.log("Combustível utilizado: " + consumoTotal + " L");
console.log("Combustível restante: " + combustivelRestante + " L");

console.log("");

console.log("Carga utilizada: " + pesoTotalTransportado + " kg");
console.log("Capacidade restante: " + pesoSobra + " kg");

console.log("");

console.log("Custo original: " + "R$ " + custoTotal);
console.log("Reserva de segurança: " + "R$ " + valorReserva);
console.log("Custo final: " + "RS " + custoMissaoReserva);

console.log("");

console.log("Patrocinadores: " + patrocinadores);
console.log("Valor por patrocinador: " + "R$ " + custoPatrocinador);

console.log("==================================");
console.log("          MISSÃO PREPARADA        ");
console.log("==================================");

========================================================================================================

// # Desafio bônus 1 — Descubra o erro 🐛

// O código abaixo deveria calcular o custo de combustível da missão.

// Porém, existem erros.

// ```javascript
// const precoLitro = "25";
// const litrosUtilizados = 35000;

// const custoCombustivel = precoLitro + litrosUtilizados;

// console.log("Custo do combustível:", custoCombustivel);
// ```

// O resultado correto deveria ser:

// 875000

// Descubra o problema e corrija.

const precoLitro = "25";
const litrosUtilizados = 35000;
const custoCombustivel = Number(precoLitro) * litrosUtilizados;

console.log("Custo do combustível: ", custoCombustivel);

=============================================================================================================

// # Desafio bônus 2 — Outro bug 🐛

// Analise:

// ```javascript
// const custoMissao = 3000000;
// const percentualReserva = 10;

// const reserva = custoMissao / percentualReserva;
// const total = custoMissao - reserva;

// console.log("Reserva:", reserva);
// console.log("Total:", total);
// ```

// O objetivo era:

// 1. calcular 10% de reserva;
// 2. adicionar essa reserva ao custo da missão.

// O programa está correto?

// Se não estiver, corrija.

const custoMissao = 3000000;
const percentualReserva = 10;
const reserva = custoMissao * percentualReserva / 100;
const total = custoMissao + reserva;

console.log("Reserva: ", reserva);
console.log("Total: ", total);

===============================================================================================================

/* # Regra especial do professor 👨‍💻

Se você travar em algum exercício, não comece perguntando:

> "Qual código eu uso?"

Primeiro tente responder:

1. Quais informações eu tenho?

2. O que preciso descobrir?

3. Qual conta eu faria no papel?

4. Quais valores preciso guardar?

5. Quais operações preciso realizar?

6. O que preciso mostrar como resultado?

Depois transforme essas respostas em JavaScript.

# Importante 

Não é necessário terminar todos os desafios rapidamente.

A prioridade é conseguir explicar:

> **por que seu código funciona.**

Se você chegou ao resultado copiando algo sem entender, volte ao problema e tente explicar cada linha utilizada. */