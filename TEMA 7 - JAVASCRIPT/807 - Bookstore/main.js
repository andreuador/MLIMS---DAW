"use-strict";

const books = [
    {
        title: 'The Amanzing Spider-man',
        author: 'Marvel Comics',
        publishedIn: 1962,
        alreadyRead: true
    },
    {
        title: 'The Infinity Gauntlet',
        author: 'Marvel Comics',
        publishedIn: 1991,
        alreadyRead: false
    }
];

for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '"by ' + book.author + ', published in ' + book.publishedIn;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    }
    else {
        console.log('You stilll need to read "' + bookInfo);
    }
}

document.addEventListener('DOMContentLoaded', main);