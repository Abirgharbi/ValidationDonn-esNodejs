import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});
export default mongoose.model("Book", bookSchema);
