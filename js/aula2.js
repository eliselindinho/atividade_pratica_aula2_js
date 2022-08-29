/*Resolva os problemas matemáticos abaixo utilizado JS, crie um arquivo chamado aula2_js.html e faça seus scripts nele, todos os resultados devem ser mostrados no console do navegador:
  a. Márcia ganhou 7 pacotes com 30 adesivos em cada pacote. 15 adesivos eram repetidos e não puderam ser colados no álbum. Quantos adesivos Márcia colou no álbum?*/

let quantidadeAdesivos = 30;
let quantidadePacotes = 7;
let adesivosRepetidos = 15;

resultadoProblema = quantidadePacotes * quantidadeAdesivos - adesivosRepetidos;

console.log(resultadoProblema);

/* b. Numa caixa de refrigerantes cabem duas dúzias de latas. Quantas latas poderão ser guardadas em 4 caixas?*/

let duziaLatas = 2;
let umaDuzia = 12;
let quantidadeLatas = 0;
let quantidadeCaixas = 4;

quantidadeLatas = duziaLatas * umaDuzia * quantidadeCaixas;
console.log(quantidadeLatas);

/* c. Utilizando decremento escreva no console todos os números ímpar no intervalo de 10 até 0.*/

let numeroDecremento = 10;

numeroDecremento = numeroDecremento-- - 1;
console.log(numeroDecremento);
numeroDecremento = numeroDecremento-- - 2;
console.log(numeroDecremento);
numeroDecremento = numeroDecremento-- - 2;
console.log(numeroDecremento);
numeroDecremento = numeroDecremento-- - 2;
console.log(numeroDecremento);
numeroDecremento = numeroDecremento-- - 2;
console.log(numeroDecremento);
