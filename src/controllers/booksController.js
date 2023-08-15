import books from "../models/Book.js";

class BookController {
    static getAll = async (req, res) => {
        res.status(200).json(await books.find())
    }

    static addNewBook = async (req, res) => {
        let book = new books(req.body);

        try {
            await book.save();
            res.status(201).send(book.toJSON());
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static updateById = async (req, res) => {
        let id = req.params.id;

        let book = await books.findByIdAndUpdate(id, { $set: req.body });

        if (book)
            res.status(200).send({ message: "Books was successful update" })
        else
            res.status(500).send({ message: err.message })


        res.status(200).send(book.toJSON());

    }
}

export default BookController;