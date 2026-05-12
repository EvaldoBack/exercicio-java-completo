// Limpa o console antes de  apresentar o comando
console.clear();

// Definindo váriaveis
let nomeDoProduto = "Calça Jeans";
let precoDoProduto = 80.00;
let quantidadEmEstoque = 30;
let disponivelParaCompra = true;
const codigoDoDesconto = null;
let dataDaEntrega;

// Mostra no console da o resultado
// Para que o JavaScript entenda que queremos mostrar o valor das variáveis, precisamos usar a crase (`) e colocar as variáveis entre ${}
console.log(`O produto ${nomeDoProduto} custa R$ ${precoDoProduto} e temos ${quantidadEmEstoque} em estoque.`);

console.log(typeof nomeDoProduto);
console.log(typeof precoDoProduto);
console.log(typeof quantidadEmEstoque);
console.log(typeof disponivelParaCompra);
console.log(typeof codigoDoDesconto);
console.log(typeof dataDaEntrega);
console.log("-------------------------------");

console.log("Olá! O código do VS Code está funcionando corretamente.");