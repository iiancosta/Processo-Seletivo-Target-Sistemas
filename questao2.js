/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const numProcurado = 165580141;

function Fibonacci(numPretendido) {
  let numAnterior = 0, numSeguinte = 1, result = 0;
  let sequencia = [];

  for (; result < numPretendido;) {
    result = numAnterior + numSeguinte;
    sequencia.push(result);
    numAnterior = numSeguinte;
    numSeguinte = result;
  };
  console.log(sequencia);

  if (sequencia.includes(numPretendido)) {
    console.log(`O número pretendido ${numPretendido}, ESTÁ na sequência de Fibonacci`);
  } else {
    console.log(`O número pretendido ${numPretendido}, NÃO está na sequência de Fibonacci`);
  }

}
Fibonacci(numProcurado);

