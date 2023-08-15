import express from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
    .get("/books", BookController.getAll)
    .post("/books", BookController.addNewBook)
    .put("/books/:id", BookController.updateById)

export default router;