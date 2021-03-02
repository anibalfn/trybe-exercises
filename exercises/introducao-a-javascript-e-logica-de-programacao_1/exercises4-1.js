// Operações Aritméticas //

let a = 7;
let b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a* b));
console.log('Divisão: ' + (a / b)); 
console.log('Módulo: ' + (a % b));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. //

let a = 5;
let b = 9;

if (a > b) {
    console.log('A é maior que B')
} else {
    console.log('B é maior que A')
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. //

let numbers = {
    a: 3,
    b: 7,
    c: 5
}

if (numbers['a'] > numbers['b'] && numbers['a'] > numbers['c']) {
    console.log('O maior número é: ' + numbers['a'] + ' (a)')
} else if (numbers['b'] > numbers['a'] && numbers['b'] > numbers['c']) {
    console.log('O maior número é: ' + numbers['b'] + ' (b)')
} else {
    console.log('O maior número é: ' + numbers['c'] + ' (c)')
}

// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. //

let a = 0;

if (a > 0) {
    console.log('positive')
} else if (a < 0) {
    console.log('negative')
} else {
    console.log('zero')
}

// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.//

//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.//

//Um ângulo será considerado inválido se não tiver um valor positivo.//

let degreeAngle = {
    a: 90,
    b: 60,
    c: 30
}

let angleTotal = degreeAngle.a + degreeAngle.b + degreeAngle.c;

let areAllAnglesPositive = degreeAngle.a + degreeAngle.b + degreeAngle.c > 0;

if (areAllAnglesPositive) {
    if (angleTotal === 180) {
        console.log('true')
    } else {
        console.log('false')
    };
} else {
    console.log('erro: ângulo inválido')
}