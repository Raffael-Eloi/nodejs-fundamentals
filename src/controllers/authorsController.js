import authors from "../models/Author.js";

class AuthorController {
    static getAll = async (req, res) => {
        res.status(200).json(await authors.find())
    }

    static getById = async (req, res) => {
        let id = req.params.id;

        try {
            let author = await authors.findById(id)
            res.status(200).send(author.toJSON())
        } catch(error) {
            res.status(400).send({ message: error.message })
        }
    }

    static addNewAuthor = async (req, res) => {
        let author = new authors(req.body);

        try {
            await author.save();
            res.status(201).send(author.toJSON());
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static updateById = async (req, res) => {
        let id = req.params.id;

        try {
            await authors.findByIdAndUpdate(id, { $set: req.body });
            res.status(200).send({message: "The author was successful updated"});
        } catch (error) {
            res.status(500).send({ message: err.message })
        }
    }

    static deleteById = async (req, res) => {
        let id = req.params.id;

        try {
            await authors.findByIdAndDelete(id);
            res.status(200).send({message: "The author was successful deleted"});
        } catch (error) {
            res.status(500).send({ message: err.message })
        }
    }
}

export default AuthorController;