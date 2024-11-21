import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true },
  nationality: { type: String, required: true },
});

export default mongoose.model("Author", AuthorSchema);
