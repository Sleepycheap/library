

const myLibrary = [{
  "title": "Fourth Wing",
  "author": "Rebecca Yarros",
  "genre": "Fantasy"
}, {
  "title": "Eragon",
  "author": "Christopher Paolini",
  "genre": "Fantasy"
}, {
  "title": "Twilight",
  "author": "Stephanie Meyer",
  "genre": "Fantasy"
}];
function Book(title, author, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

const addBookToLibrary = function(title, author, genre) {
  const item = new Book(title, author, genre)
  console.log(item);
  myLibrary.push(item);
}


const revealButton = document.body.querySelector('.reveal');
const books = document.querySelector('.books');
revealButton.addEventListener('click', (e) => {
  e.preventDefault();
  for (item of myLibrary) {
    const newCont = document.createElement('div');
    newCont.classList.add('boxes');
    books.appendChild(newCont)
    const title = document.createElement('div');
    title.classList.add('info')
    title.textContent = `Title: ${item.title}`;
    const author = document.createElement('div');
    author.classList.add('info');
    author.textContent = `Author: ${item.author}`;
    const genre = document.createElement('div');
    genre.classList.add('info');
    genre.textContent = `Genre: ${item.genre}`;
    newCont.appendChild(title);
    newCont.appendChild(author);
    newCont.appendChild(genre);
  }
})



const form = document.body.querySelector('.input');
const button = document.body.querySelector('button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const t = prompt('Book title');
  const a = prompt('author');
  const g = prompt('genre');
  addBookToLibrary(t, a, g);
});

// function handleSubmit(e) {
//   e.preventDefault;
//   const formData = new Book(e.target);
//   console.log(formData);
// }

const input = document.querySelector('#submitButton');
//input.addEventListener('submit', handleSubmit);