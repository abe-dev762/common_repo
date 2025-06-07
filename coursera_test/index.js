function showBook() {
    const booksDiv = book.map((book, index) => `<h1>book Number: ${index + 1}</h1>
    <p><strong>Book Name:</strong>${book.authorName}</p>
     <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>`
    );
        document.getElementById('books').innerHTML = booksDiv.join('');
}

function editBook(index) {
    const book = book[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    book.splice(index, 1);
    showBook();
}

function clearInputs() {
         document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}


let book = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;

if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
       name: bookName,
       authorName: authorName,
       bookDescription: bookDescription,
       pagesNumber: pagesNumber
    };
    book.push(book);
    showBook();
} else {
    alert('Please fill the fields correctly');
}
}