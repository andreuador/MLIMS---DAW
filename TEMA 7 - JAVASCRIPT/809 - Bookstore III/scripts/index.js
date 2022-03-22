"use strict";

function main() {
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        let bookInfo = book.title + ' by ' + book.author + ', published in ' + book.publishedIn;
        if (book.title) {
            var newP = document.createElement("p");
            var newContent = document.createTextNode(' ' + bookInfo);
            newP.appendChild(newContent);

            var currentP = document.getElementById("list");
            document.body.insertBefore(newP, currentP);
        }
        else {
            var newP = document.createElement("p");
            var newContent = document.createTextNode(' ' + bookInfo);
            newP.appendChild(newContent);
            var currentP = document.getElementById("list");
            document.body.insertBefore(newP, currentP);
        }
    }
}
document.addEventListener('DOMContentLoaded', main);