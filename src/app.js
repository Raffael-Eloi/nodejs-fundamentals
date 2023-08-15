import express from "express";
import db from "./config/dbConnect.js";

import books from "./models/Book.js";

import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Connection error'))
db.once("open", () => {
    console.log('Successful connection');
})

const app = express();

app.use(express.json())

routes(app)


/* Books */

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