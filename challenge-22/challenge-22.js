(function () {
  /*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */
  let pessoaUm = {
    name: "Thiago",
    surname: "Garcia",
  };

  let pessoaDois = {
    name: "Luiz",
    surname: "Antonio",
  };

  function getFullName() {
    return `${this.name} ${this.surname}`;
  }

  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
  criada).
  Depois disso, invoque essa função, mostrando no console o nome completo das
  pessoas que foram criadas anteriormente, passando as pessoas acima como
  contexto da função. Use um console.log por pessoa.
  */
  console.log("O nome das pessoas é:");
  console.log(getFullName.call(pessoaUm));
  console.log(getFullName.call(pessoaDois));

  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  function sum() {
    console.log(arguments);
    return Array.prototype.reduce.apply(arguments, [
      (count, next) => {
        return (count += next);
      },
    ]);
  }

  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log("\nSomar alguns números:");

  console.log(sum(1, 2, 3, 4, 5));
  console.log(sum(10, 20, 30));
  console.log(sum(60, 4, 200));

  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  let userEntry = prompt("Entre com alguns números que serão somados:");

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log("\nEntrada do usuário:", userEntry);

  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  function justNumbers(string) {
    let regEx = /\d/g;
    let stringnum = string.match(regEx);
    stringnum = stringnum.map((number) => +number);
    return stringnum;
  }

  console.log(
    "\nFunção que limpa entrada do usuário (somente números):",
    justNumbers.toString()
  );

  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  let numbers = justNumbers(userEntry);
  console.log("\nEntrada do usuário limpa. Somente números:", numbers);

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */

  console.log(
    "\nSomar números entrados pelo usuário:",
    sum.apply(sum, numbers)
  );
})();
