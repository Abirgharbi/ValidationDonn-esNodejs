import Category from "../models/category.js";
export const addCategory = async (req, res) => {
  console.log("body", req.body);
  const category = new Category(req.body);
  await category.save();
  res.status(201).json({ model: category, message: " Success " });
};
