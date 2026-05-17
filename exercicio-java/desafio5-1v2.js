// Crie um verificador de estação do ano baseado no mês (1–12).
import promptSync from "prompt-sync"; //Importa a biblioteca

console.clear();

const prompt = promptSync(); //Inicializa a biblioteca

console.log("---- Verificando a estação do ano!!! ----");

const mesAno = parseInt(prompt("Digite o numero referente ao mês do ano: ")); //Pede para o usuário digitar o número do mês do ano

console.log("-----------------------------------------");
if (mesAno >= 1 && mesAno <= 3) {
    console.log(`O mês ${mesAno} corresponde a estação do: VERÃO!!!`);
} else if (mesAno >= 4 && mesAno <= 6) {
    console.log(`O mês ${mesAno} corresponde a estação do: OUTONO!!!`);
} else if (mesAno >= 7 && mesAno <= 9) {
    console.log(`O mês ${mesAno} corresponde a estação do: INVERNO!!!`);
} else if (mesAno >= 10 && mesAno <= 12) {
    console.log(`O mês ${mesAno} corresponde a estação da: PRIMAVERA!!!`);
} else {
    console.log("Número inválido! Por favor, digite um número entre 1 e 12.");
}
console.log("-----------------------------------------");
