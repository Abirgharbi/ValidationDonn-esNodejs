import Book from "../models/book.js";
import Joi from "joi";

const bookValidationSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  categories: Joi.array().items(Joi.string()),
});

export const fetchBooks = async (req, res) => {
  const books = await Book.find();
  res.status(201).json({ model: books, message: " Success " });
};

export const addBook = async (req, res) => {
  try {
    const { error } = bookValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { title, author, categories } = req.body;
    const authorBooks = await Book.find({ author });
    if (authorBooks.length === 0) {
      return res
        .status(400)
        .json({ message: "L'auteur doit avoir écrit d'autres livres avant" });
    }
    const book = new Book({ title, author, categories });
    await book.save();

    res.status(201).json({ model: book, message: "Success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur de serveur" });
  }
};

export const getBookById = async (req, res) => {
  console.log("id", req.params.id);
  const book = await Book.findOne({ _id: req.params.id })
    .populate("author")
    .populate("categories");
  console.log(book.categories.map((x) => x));
  res.status(201).json({ model: book, message: " Success " });
};

export const updateBook = async (req, res) => {
  const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(200).json({ model: book, message: "Success" });
};
export const deleteBook = async (req, res) => {
  console.log("id:", req.params.id);
  const book = await Book.findOneAndDelete({ _id: req.params.id });
  res.status(200).json({ message: "Success" });
};
