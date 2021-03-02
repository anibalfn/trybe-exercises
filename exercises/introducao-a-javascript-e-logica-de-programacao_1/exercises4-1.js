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