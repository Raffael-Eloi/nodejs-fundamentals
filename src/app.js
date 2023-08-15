import express from "express";
import db from "./config/dbConnect.js";

import books from "./models/Book.js";

db.on("error", console.log.bind(console, 'Connection error'))
db.once("open", () => {
    console.log('Successful connection');
})

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Alura node course');
});

/* Books */

app.get('/books', async (req, res) => {
    res.status(200).json(await books.find());
});

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send("Book successful saved")
});

app.put('/books/:id', (req, res) => {
    let bookIndex = getBookIndexById(req.params.id);
    books[bookIndex].title = req.body.title;
    res.json(books);
})

app.delete('/books/:id', (req, res) => {
    let bookIndex = getBookIndexById(req.params.id);
    
    books.splice(bookIndex, 1);

    res.send(`Book with id ${req.params.id} successful removed`);
})

/* -- Books-- */

/* Authors */

app.get('/authors', (req, res) => {
    res.status(200).send('Welcome to the authors page');
});

/* -- Authors */

function getBookIndexById(id) {
    return books.findIndex(book => book.id == id);
}

export default app;