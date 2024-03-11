/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const stringDesejado = 'Olá eu sou Ian Costa o novo parceiro de vocês!';
const stringInverso = '';
const listaInversa = [];

function inversorStrings(stringDesejado) {
  for (let i = 0; i < stringDesejado.length; i++) {
    listaInversa.unshift(stringDesejado[i]);
  }

  console.log('String normal:  ', stringDesejado);

  const stringInverso = listaInversa.join("");

  console.log('String inverso: ', stringInverso);

}

inversorStrings(stringDesejado);