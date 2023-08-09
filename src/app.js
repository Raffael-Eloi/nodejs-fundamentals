import Express from "express";

const app = Express();

const books = [
    { id: 1, "title": "The lord of the rings" },
    { id: 2, "title": "Harry Potter" },
];

app.get('/', (req, res) => {
    res.status(200).send('Alura node course');
});

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/authors', (req, res) => {
    res.status(200).send('Welcome to the authors page');
});

export default app;