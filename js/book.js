
var url_string = window.location.href; 
var url = new URL(url_string);
var current_book = Number(url.searchParams.get("book"));

if (typeof(current_book) == "number" && books[current_book]) {

  let book = books[current_book]

  document.getElementById("created_at").textContent = book.created_at;
  document.getElementById("description").textContent = book.description;
  document.getElementById("title").textContent = book.name;

  document.getElementById("livro-capa").src = book.img_path;
}


console.log(current_book);