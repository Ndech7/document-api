import db from "../../db";

// get a book from the db
export const getItem = (id) => {
  try {
    const book = db?.books.filter((book) => book?.id === id)[0];
    return book;
  } catch (error) {
    console.log("Error", error);
  }
};

// get all books from the db
export const listItems = () => {
  try {
    return db?.books;
  } catch (error) {
    console.log("Error", error);
  }
};

// update a book in the db
export const updateItem = (id, data) => {
  try {
    const index = db.books.findIndex((book) => book.id === id);
    if (index === -1) throw new Error("Book not found");
    else {
      db.books[index] = data;
      return db.books[index];
    }
  } catch (error) {
    console.log("Error", error);
  }
};

// add a new book to the db
export const addItem = (data) => {
  try {
    const newBook = { id: db.books.length + 1, ...data };
    db.books.push(newBook);
    return newBook;
  } catch (error) {
    console.log("Error", error);
  }
};

// delete a book from the db
export const deleteItem = (id) => {
  try {
    const index = db.books.findIndex((book) => book.id === id);
    if (index === -1) throw new Error("Book not Found");
    else {
      db.books.splice(index, 1);
    }
    return book;
  } catch (error) {
    console.log("Error", error);
  }
};
