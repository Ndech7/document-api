import express from "express";
import {
  getBook,
  getBooks,
  updateBook,
  addBook,
  deleteBook,
} from "../controllers/library.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     Book:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *              description: Book id
 *          name:
 *              type: string
 *              description: Book name
 *          author:
 *              type: integer
 *              description: Book author
 *          description:
 *              type: string
 *              description: Book description
 *          edition:
 *              type: string
 *              description: Book edition
 *     example:
 *          id: 2,
            name: "PostGIS In Action"
            author: "Regina O. Obe"
            description: "An Introduction to PostGIS"
            edition: "3rd"
 */

/**
 * @swagger
 * /library:
 *  get:
 *     summary: Get all books
 *     description: Get all books
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
// get all books
router.get("/", getBooks);

/**
 * @swagger
 * /library/{id}:
 *  get:
 *     summary: Get book detail
 *     description: Get book detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
// get a single book by its id
router.get("/:id", getBook);

/**
 * @swagger
 * /library/{id}:
 *   put:
 *     summary: Edit book
 *     description: Edit book
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
 *     requestBody:
 *       description: A JSON object containing book information
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *           example:
 *             name: "PostGIS In Action"
 *             author: "Regina O. Obe"
 *             description: "An Introduction to PostGIS"
 *             edition: "3rd"
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
// update a book by its id
router.put("/:id", updateBook);

/**
 * @swagger
 * /library:
 *   post:
 *     summary: Add book
 *     description: Add book
 *     requestBody:
 *       description: A JSON object containing book information
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *           example:
 *             name: "PostGIS In Action"
 *             author: "Regina O. Obe"
 *             description: "An Introduction to PostGIS"
 *             edition: "3rd"
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 */
// add a new book
router.post("/", addBook);

/**
 * @swagger
 * /library/{id}:
 *  delete:
 *     summary: Delete book
 *     description: Delete book
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book id
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */
// delete a book by its id
router.delete("/:id", deleteBook);

export default router;
