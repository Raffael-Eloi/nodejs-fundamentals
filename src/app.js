import express from "express";

const app = express();

app.use(express.json())

const books = [
    { id: 1, "title": "The lord of the rings" },
    { id: 2, "title": "Harry Potter" },
];

app.get('/', (req, res) => {
    res.status(200).send('Alura node course');
});

/* Books */

app.get('/books', (req, res) => {
    res.status(200).json(books);
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