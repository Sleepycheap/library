const t = prompt('Book title');
const a = prompt('author');
const g = prompt('genre');

const myLibrary = [];
function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

const addBookToLibrary = function(title, author, genre) {
  const book = new Book(title, author, genre)
  console.log(Book);
  myLibrary.append(Book);
}

addBookToLibrary(t, a, g);