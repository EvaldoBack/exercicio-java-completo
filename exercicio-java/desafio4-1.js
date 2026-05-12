// Limpa o console antes de  apresentar o comando
console.clear();

// 1. Calcule a área e o perímetro de um retângulo com base 8 e altura 5.
const largura = 8;
const comprimento = 5;
const area = largura * comprimento;

console.log(`A área do retângulo é: ${area}`);
console.log("-------------------------------");

// 2. Verifique se um número é par usando o operador %.
const num1 = 10;
const num2 = 11;

// Verificando se num1 é par ou ímpar para a variável "num1"
if (num1 % 2 === 0) {
    console.log(`O número ${num1} é um número par.`);
}else {
    console.log(`O número ${num1} é um número ímpar.`);
};
// Verificando se num1 é par ou ímpar para a variável "num2"
if (num2 % 2 === 0) {
    console.log(`O número ${num2} é um número par.`);
}else {
    console.log(`O número ${num2} é um número ímpar.`);
};
console.log("-------------------------------");

// 3. Dado o salário de R$ 3.500,00 e um aumento de 12%, calcule e exiba o novo salário.
const salarioBase = 3500.00;
const aumento = 0.12;
const novoSalario = salarioBase + (salarioBase * aumento);

console.log(`Seu salario atual é: R$ ${salarioBase.toFixed(2)}`);
console.log(`O novo salário após o aumento de 12% é: R$ ${novoSalario.toFixed(2)}`);
console.log("-------------------------------");

/* 4. Um cinema oferece desconto de 50% para menores de 18 anos.
    O ingresso custa R$ 30,00. 
    Crie variáveis para idade e preçoe calcule o valor a pagar usando operadores. */
const precoIngresso = 30.00;
const idade = 17;
let valorAPagar;

console.log(`O preço do ingresso é: R$ ${precoIngresso.toFixed(2)}`);
console.log(`Menores de 18 anos tem direito a um desconto de 50%.`);

if (idade < 18) {
    valorAPagar = precoIngresso * 0.5;
    console.log(`O valor do ingresso para menores de 18 anos é: R$ ${valorAPagar.toFixed(2)}`);
} else {
    valorAPagar = precoIngresso;
    console.log(`O valor do ingresso para maiores de 18 anos é: R$ ${valorAPagar.toFixed(2)}`);
}
console.log("-------------------------------");

console.log("Olá! O código do VS Code está funcionando corretamente.");