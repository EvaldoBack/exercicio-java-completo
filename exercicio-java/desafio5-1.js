import promptSync from "prompt-sync";

console.clear();

const prompt = promptSync();
// 1. Crie um verificador de nota escolar:
// A (≥ 9), B (≥ 7), C (≥ 5), D (≥ 3), F (< 3).
console.log("--- Verificação de Notas ---");
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));
const nota3 = parseFloat(prompt("Digite a terceira nota: "));
const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média do aluno(a) foi: ${media.toFixed(2)}`);

if (media >= 9) {
        console.log(`O aluno obteve a nota ${media.toFixed(2)}, APROVADO com distinção!!!`);
    } else if (media >= 7) {
        console.log(`O aluno obteve a nota ${media.toFixed(2)}, APROVADO!!!`);
    } else if (media >= 5) {
        console.log(`O aluno obteve a nota ${media.toFixed(2)}, FINAL!!!`);
    } else if (media >= 3) {
        console.log(`O aluno obteve a nota ${media.toFixed(2)}, RECUPERAÇÃO!!!`);
    } else {
        console.log(`O aluno obteve a nota ${media.toFixed(2)}, REPROVADO!!!`);
    }
