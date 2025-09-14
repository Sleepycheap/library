

const myLibrary = [{
  "title": "This is the first book",
  "author": "guy one",
  "genre": "sci-fi"
}, {
  "title": "this is the second book",
  "author": "guy two",
  "genre": "fantasy"
}];

const displayed = [];

function Book(title, author, genre, id) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.id = id;
}

const addBookToLibrary = function(title, author, genre, id) {
  const item = new Book(title, author, genre, id)
  console.log(item);
  myLibrary.push(item);
}



//if item in displayed dont display


const revealButton = document.body.querySelector('.reveal');

const books = document.querySelector('.books');

// const displayCard = (title, author, genre) => {
//   newCont.appendChild(title);
//   newCont.appendChild(author);
//   newCont.appendChild(genre);
// }
const createDiv = (item) => {
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


revealButton.addEventListener('click', (e) => {
  e.preventDefault();
  const length = myLibrary.length;
  console.log(`Displayed: ${displayed}`);
    for (item of myLibrary){
      console.log(`Title: ${item.title}`);
      //console.log(displayed);
      if (displayed.includes(`${item.title}`)) {
        console.log(`${item.title} Already Displayed`);
        continue;
      }
      else {
        createDiv(item);
        displayed.push(item.title);
      }

  }})







const form = document.body.querySelector('.input');
const button = document.body.querySelector('button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const t = prompt('Book title');
  const a = prompt('author');
  const g = prompt('genre');
  const id = crypto.randomUUID();
  addBookToLibrary(t, a, g, id);
});

//const  

const input = document.querySelector('#submitButton');
//input.addEventListener('submit', handleSubmit);