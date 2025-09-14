

const myLibrary = [];

const displayed = [];
const read = [];

function Book(title, author, genre, id) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.id = id;
}

const addBookToLibrary = function(title, author, genre, id) {
  const item = new Book(title, author, genre, id)
  myLibrary.push(item);
}

const revealButton = document.body.querySelector('.reveal');

const books = document.querySelector('.books');

const createDiv = (item) => {
  const newCont = document.createElement('div');
  const id = item.id;
  newCont.classList.add('boxes');
  books.appendChild(newCont)
  const title = document.createElement('div');
  title.classList.add('info')
  title.setAttribute('data-title', id);
  title.classList.add('title');
  title.textContent = `Title: ${item.title}`;
  const author = document.createElement('div');
  author.classList.add('info');
  author.textContent = `Author: ${item.author}`;
  const genre = document.createElement('div');
  genre.classList.add('info');
  genre.textContent = `Genre: ${item.genre}`;
  readButton(newCont);
  closeButton(newCont);
  newCont.setAttribute('data-id', id);
  newCont.appendChild(title);
  newCont.appendChild(author);
  newCont.appendChild(genre);
}

const closeButton = function(newCont) {
  const button = document.createElement('button');
  button.classList.add('btn-close');
  button.setAttribute('aria-label', 'Close');
  const text = document.createElement('div');
  text.innerText = 'Remove';
  text.classList.add('close-text'); 
  newCont.append(button);
  button.append(text);
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const box = button.closest('.boxes');
    const titleDiv = box.querySelector('.title');
    const text = titleDiv.textContent;
    const editText = text.split(': ');
    const displayedText = editText[1];
    const index = myLibrary.indexOf(displayedText);
    if (index === -1) {
      console.log(myLibrary);
      myLibrary.splice(index, 1);
      box.classList.add('hide');
      if (read.includes(displayedText)) {
        const readList = document.querySelector('.list');
        const lis = readList.getElementsByTagName('li');
        const items  = Array.from(lis);
        console.log(items);
        for (i of items) {
          console.log(i.textContent);
          if (i.textContent === displayedText) {
            i.classList.add('hide');
          }
        }
      }
    }
    

  })
}

const readButton = function(newCont) {
  const button = document.createElement('button');
  button.classList.add('read-button');
  const text = document.createElement('div');
  text.innerText = 'Read';
  text.classList.add('read-text'); 
  newCont.append(button);
  button.append(text);
  button.addEventListener('click', (e) => {
  e.preventDefault();
  const box = button.closest('.boxes');
  const titleDiv = box.querySelector('.title');
  const text = titleDiv.textContent;
  const editText = text.split(': ');
  const displayedText = editText[1];
  if (read.includes(text)) {
    return;
  } else {
    read.push(displayedText);
    const list = document.querySelector('.list');
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.textContent = displayedText;
    list.append(listItem);
  }
})
}


revealButton.addEventListener('click', (e) => {
  e.preventDefault();
  const length = myLibrary.length;
    for (item of myLibrary){
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

