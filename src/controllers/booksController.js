import books from "../models/Book.js";

class BookController {
    static getAll = async (req, res) => {
        res.status(200).json(await books.find())
    }

    static getById = async (req, res) => {
        let id = req.params.id;

        try {
            let book = await books.findById(id)
            res.status(200).send(book.toJSON())
        } catch(error) {
            res.status(400).send({ message: error.message })
        }
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

        try {
            await books.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({message: "The book was successful updated"});
        } catch (error) {
            res.status(500).send({ message: err.message })
        }
    }

    static deleteById = async (req, res) => {
        let id = req.params.id;

        try {
            await books.findByIdAndDelete(id);
            res.status(200).send({message: "The book was successful deleted"});
        } catch (error) {
            res.status(500).send({ message: err.message })
        }
    }
}

export default BookController;