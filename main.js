//Saudação

let nome = prompt("Qual é o seu nome?");

alert(`olá ${nome}, seja bem-vindo`);


//Calculadora

function calculadora_manual() {

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

alert(`A soma dos números é: ${(num1) + (num2)}`);
alert(`A subtração dos números é: ${(num1) - (num2)}`);
alert(`A multiplicação dos números é: ${(num1) * (num2)}`);
alert(`A divisão dos números é: ${(num1 / num2).toFixed(2)}`);
}


//Idade

function idade_do_usuario() {

let idade = Number(prompt("Qual é a sua idade?"));

if (idade >= 18) {
    alert("Você é maior de idade.");
} else {
    alert("Você é menor de idade.");
}
}


//Impar ou Par

function impar_ou_par() {

let num3 = Number(prompt("Digite um número: "));
if (num3 % 2 === 0) {
    alert("O número é par.");
} else {
    alert("O número é ímpar.");
}
}


//Maior ou Menor

function maior_da_lista() {

let num4 = Number(prompt("Digite o primeiro número: "));
let num5 = Number(prompt("Digite o segundo número: "));
let num6 = Number(prompt("Digite o terceiro número: "));

const maior = Math.max(num4, num5, num6);
alert(`O maior número é: ${maior}`);

}

//Notas de um aluno

function notas_aluno() {

let nota = Number(prompt("Digite a nota do aluno: "));

if (nota >= 7) {
    alert("O aluno está aprovado.");
}else if (nota >= 5 && nota < 7) {
    alert("O aluno está em recuperação.");
}else {
    alert("O aluno está reprovado.");
}
}


//Mercado (Se o valor total for acima de 50 reais, o cliente ganha 10% de desconto)

function caixa_mercado() {

let produto = Number(prompt("Digite o valor do produto: "));
let quantidade = Number(prompt("Digite a quantidade do produto: "))

let total = produto * quantidade;

if (total > 50) {
    let desconto = total * 0.9
    alert(`O valor total com desconto é: R$ ${desconto.toFixed(2)}`)
} else {
    alert(`O valor total é: R$ ${total.toFixed(2)}`)
}
}


//Calculadora 2.0

function calculadora_automatica() {

let number7 = Number(prompt("Digite o primeiro número: "))
let number8 = Number(prompt("Digite o segundo número: "))

let Operacao = prompt("Digite a operação desejada (+, -, *, /): ");

switch (Operacao) {
    case "+":
        alert(`O resultado da soma é: ${number7 + number8}`)
        break
    case "-":
        alert(`O resultado da subtração é: ${number7 - number8}`)
        break
    case "*":
        alert(`O resultado da multiplicação é: ${number7 * number8}`)
        break
    case "/":
        alert(`O resultado da divisão é: ${(number7 / number8).toFixed(2)}`)
        break
    default:
        alert("Operação inválida.")
}
}


//Ano de nascimento

function carteira_de_motorista() {
    let anoNascimento = Number(prompt("Digite o seu ano de nascimento: "))

    const anoatual = 2026
    let idadeAtual = anoatual - anoNascimento;

    if (idadeAtual >= 18) {
        alert("Você pode tirar sua carteira de motorista.")
    }else {
        alert("Você ainda não pode tirar sua carteira de motorista.")
    }
}


//Temperatura

function Temperatura_em_São_Paulo() {

let temperatura = Number(prompt("Digite a temperatura em graus Celsius: "))

if (temperatura >= 30) {
    alert("Está muito quente.")
}else if (temperatura >= 20 && temperatura < 30) {
    alert("Está agradável.")
}else {
    alert("Está frio.")
}
}



//Maior, menor ou igual

function maior_menor_igual() {

let num9 = Number(prompt("Digite o primeiro número: "))
let num10 = Number(prompt("Digite o segundo número: "))

if (num9 > num10) {
    alert("O primeiro número é maior.")
}else if (num9 < num10) {
    alert("O segundo número é maior.")
}else {
    alert("Os números são iguais.")
}
}



while (true) {
    const escolha = prompt(`Escolha uma opção:\n
        0 - Sair\n 
        1- Calculadora Manual\n 
        2- Verificar Idade\n 
        3- Verificar se é Impar ou Par\n
        4- Maior de uma Lista\n 
        5- Notas de um Aluno\n
        6- Caixa de Mercado\n 
        7- Calculadora Automática\n
        8- Carteira de Motorista\n
        9- Temperatura em São Paulo\n
        10- Maior, Menor ou Igual`)

    if (escolha === null || escolha === "0") {
        alert("Saindo...")
        break
    }

    switch (escolha) {
        case "1":
            calculadora_manual()
            break
        case "2":
            idade_do_usuario()
            break
        case "3":
            impar_ou_par()
            break
        case "4":
            maior_da_lista()
            break
        case "5":
            notas_aluno()
            break
        case "6":
            caixa_mercado()
            break
        case "7":
            calculadora_automatica()
            break
        case "8":
            carteira_de_motorista()
            break
        case "9":
            Temperatura_em_São_Paulo()
            break
        case "10":
            maior_menor_igual()
            break
        default:
            alert("Opção inválida.")
    }
}