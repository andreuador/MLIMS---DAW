"use-strict";

var books = [
    {
        title: 'The Amanzing Spider-man',
        author: 'Marvel Comics',
        publishedIn: 1962,
        //alreadyRead: true
    },
    {
        title: 'The Infinity Gauntlet',
        author: 'Marvel Comics',
        publishedIn: 1991,
        //alreadyRead: true
    },
    {
        title: 'The Fantastic Four',
        author: 'Marvel Comics',
        publishedIn: 1961,
        //alreadyRead: true
    },
    {
        title: 'The Avengers',
        author: 'Marvel Comics',
        publishedIn: 1963,
        //alreadyRead: true
    }

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
        /*else {
            var newP = document.createElement("p");
            var newContent = document.createTextNode(' ' + bookInfo);
            newP.appendChild(newContent);

            var currentP = document.getElementById("list");
            document.body.insertBefore(newP, currentP);
        }*/
    }
}