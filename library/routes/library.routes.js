import express from "express";

const router = express.Router();

// get all books
router.get("/");

// get a single book by its id
router.get("/:id");

// update a book by its id
router.put("/:id");

// add a new book
router.post("/");

// delete a book by its id
router.delete("/:id");

export default router;
