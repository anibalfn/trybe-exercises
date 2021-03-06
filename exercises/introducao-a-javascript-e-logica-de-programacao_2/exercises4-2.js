let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
}

// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
}

console.log(result);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
    sum = numbers[index];
}
let average = sum / numbers.length;

console.log(average);

// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let value = 0;
for (let index = 0; index < numbers.length; index += 1) {
    value = numbers[index];
}
let m = value / numbers.length;
    if (m > 20) {
        console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20')
}


// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
    let highestValue = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] > highestValue) {
            highestValue = numbers[index]
        }
    } console.log(highestValue);



// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddNumbers += 1;
    }
}

if (result === 0) {
    console.log('nenhum valor ímpar encontrado')
} else {
    console.log(oddNumbers);
}


// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let lowestValue = 999;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowestValue) {
        lowestValue = numbers[index]
    }
}
console.log(lowestValue);



// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let numbersResult = [];
for (let index = 1; index <= 25; index += 1) {
    numbersResult.push(index)
}
console.log(numbersResult)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

divisionResult = 0;
for (let index = 0; index < numbersResult.length; index += 1) {
    console.log(numbersResult[index] / 2);
}