import express from "express";
import {
  getBook,
  getBooks,
  updateBook,
  addBook,
  deleteBook,
} from "../controllers/library.controller.js";

const router = express.Router();

// get all books
router.get("/", getBooks);

// get a single book by its id
router.get("/:id", getBook);

// update a book by its id
router.put("/:id", updateBook);

// add a new book
router.post("/", addBook);

// delete a book by its id
router.delete("/:id", deleteBook);

export default router;
