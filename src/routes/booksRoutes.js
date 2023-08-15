import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
    .get("/books", BookController.getAll)
    .get("/books/:id", BookController.getById)
    .post("/books", BookController.addNewBook)
    .put("/books/:id", BookController.updateById)
    .delete("/books/:id", BookController.deleteById)

export default router;