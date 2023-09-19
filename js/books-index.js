function addNewBook(list, book, total_words, counter) {
  let [parte1, parte2] = splitWords(book.description, total_words);

  console.log(parte1)

  if (parte2.length > 0) { parte1 += "..." }

  if (counter >= 4) {return}

  list.innerHTML += `
    <div class="book">
      <img src="${book.img_path}" alt="LPF">
      <div class="box">
          <p class="title2">${book.name}</p>
          <p class="text">
            ${parte1}
          </p>
      <div class="buttom"><a href="book.html?book=${counter}">Ver Mais</a></div>
      </div>
  </div>
  `
}

function createList(arr, id_list, total_words) {
  let counter = 0

  for (let key in arr) {
    let book = arr[key];
    let list = document.getElementById(id_list);
    addNewBook(list, book, total_words, counter);
    counter += 1
  }
}

createList(books, "book-list", 50);