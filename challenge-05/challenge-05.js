/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let valores = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function voltaArray(arr) {
  return arr;
}
console.log(voltaArray(valores));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(voltaArray(valores)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaIndice(arr, num) {
  return arr[num];
}
console.log(retornaIndice(valores, 2));
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let valoresDiferentes = [1, "thiago", "mingau", true, 78];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(voltaArray(valoresDiferentes));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
  var livros = {
    senhorDosAneis: {
      nomeLivro: nomeLivro,
      quantidadePaginas: 800,
      autor: "Tolkien",
      editora: "Allen&Unwin",
    },
    harryPotter: {
      nomeLivro: nomeLivro,
      quantidadePaginas: 700,
      autor: "J.K.Rowling",
      editora: "Bloomsburry",
    },
    aMetamorfose: {
      nomeLivro: nomeLivro,
      quantidadePaginas: 600,
      autor: "Franz_Kafka",
      editora: "Kurt_Wolff_Verlag",
    },
  };
  if (nomeLivro === "senhorDosAneis") {
    return livros.senhorDosAneis;
  } else if (nomeLivro === "harryPotter") {
    return livros.harryPotter;
  } else if (nomeLivro === "aMetamorfose") {
    return livros.aMetamorfose;
  }
  return livros;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(
  `O livro ${book("senhorDosAneis").nomeLivro} tem ${
    book("senhorDosAneis").quantidadePaginas
  } páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  `O autor do livro ${book("harryPotter").nomeLivro} é ${
    book("harryPotter").autor
  }`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro ${book("aMetamorfose").nomeLivro} foi publicado pela editora ${
    book("aMetamorfose").editora
  }`
);
