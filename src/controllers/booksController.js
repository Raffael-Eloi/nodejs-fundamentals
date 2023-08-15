import books from "../models/Book.js";

class BookController {
    static getAll = async (req, res) => {
        res.status(200).json(await books.find())
    } 
}

export default BookController;