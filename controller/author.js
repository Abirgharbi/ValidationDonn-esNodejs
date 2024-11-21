import author from "../models/author.js";

export const addAuthor = async (req, res) => {
  console.log("body", req.body);
  const Author = new author(req.body);
  await Author.save();
  res.status(201).json({ model: Author, message: " Success " });
};
