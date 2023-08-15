import express from "express";
import authorsController from "../controllers/authorsController.js";

const router = express.Router();

router
    .get("/authors", authorsController.getAll)
    .get("/authors/:id", authorsController.getById)
    .post("/authors", authorsController.addNewAuthor)
    .put("/authors/:id", authorsController.updateById)
    .delete("/authors/:id", authorsController.deleteById)

export default router;