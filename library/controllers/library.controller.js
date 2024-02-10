// get a book by its id
export const getBook = (req, res) => {
  try {
    const response = getItem(parseInt(req.params.id));
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
// get all books
export const getBooks = (req, res) => {
  try {
    const response = listItems();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
// update a book by its id
export const updateBook = (req, res) => {
  try {
    const response = updateItem(parseInt(req.params.id), req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
// add a new book
export const addBook = (req, res) => {
  try {
    const response = addItem(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
// delete a book by its id
export const deleteBook = (req, res) => {
  try {
    const response = deleteItem(parseInt(req.params.id));
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};
