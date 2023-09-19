function addNewBook(list, book, total_words, counter) {
  let [parte1, parte2] = splitWords(book.description, total_words);

  console.log(parte1)

  if (parte2.length > 0) { parte1 += "..." }

  list.innerHTML += `
  <section class="book-container">
      <div class="book">
        <div class="image-container ${book.color}">
          <img src="${book.img_path}" alt="Primeiro Livro - imagem" width="80%">
          <div class="book-name">
            <p>${counter+1}° Livro</p>
          </div>
        </div>
        <div class="info">
          <p class="title">Harry Potter e a Pedra Filosofal</p>
          <div class="description">
            <p>
              ${parte1}
            </p>
          </div>
          <div class="btn-container">
            <a href="book.html?book=${counter}">Ver Mais</a>
          </div>
        </div>
      </div>
    </section>
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