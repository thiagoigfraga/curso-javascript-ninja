(function () {
  /*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

  /*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

  const person = {
    name: "Thiago",
    lastname: "Fraga",
    age: 21,
  };

  /*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
  console.log(`Propriedades de "person": ${Object.keys(person)}`);

  /*
Crie um array vazio chamado `books`.
*/
  let books = [];

  /*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
  books.push({ name: "harryPotter", pages: "800" });
  books.push({ name: "senhorDosAneis", pages: "600" });
  books.push({ name: "guerraDosTronos", pages: "1200" });

  console.log("\nLista de livros:");

  /*
Mostre no console todos os livros.
*/
  books.forEach((book) => {
    console.log(book.name);
  });

  console.log("\nLivro que está sendo removido:");
  /*
Remova o último livro, e mostre-o no console.
*/
  console.log(books.pop());

  console.log("\nAgora sobraram somente os livros:");
  /*
Mostre no console os livros restantes.
*/
  books.forEach((item) => {
    console.log(item);
  });

  /*
Converta os objetos que ficaram em `books` para strings.
*/
  // ?
  console.log("\nLivros em formato string:");
  books = JSON.stringify(books);

  /*
Mostre os livros nesse formato no console:
*/
  // ?
  console.log(books);
  /*
Converta os livros novamente para objeto.
*/
  // ?
  console.log("\nAgora os livros são objetos novamente:");
  books = JSON.parse(books);
  console.log(books);
  /*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
  for (let i = 0; i < books.length; i++) {
    for (props in books[i]) {
      console.log(`${props}: ${books[i][props]}`);
    }
  }

  /*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
  let myName = ["T", "h", "i", "a", "g", "o"];

  /*
Juntando todos os itens do array, mostre no console seu nome.
*/

  console.log(`\nMeu nome é: ${myName.join("")}`);

  /*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
  console.log(`\nMeu nome invertido é: ${myName.reverse().join("")}`);

  /*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

  console.log(`\nAgora em ordem alfabética: ${myName.sort().join("")}`);
})();
