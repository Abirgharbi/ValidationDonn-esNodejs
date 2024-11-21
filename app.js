import express from "express";
const app = express();
app.use(express.json());
import mongoose, { model } from "mongoose";
import routerCategory from "./routes/category.js";
import routerBook from "./routes/book.js";
import routerAuthor from "./routes/author.js";
import routerEvent from "./routes/event.js"

mongoose
  .connect("mongodb://localhost:27017/bookDB")
  .then(function () {
    console.log("connected to database");
  })
  .catch(function () {
    console.log("not connected ");
  });

app.use("/api/books", routerBook);
app.use("/api/authors", routerAuthor);
app.use("/api/categories", routerCategory);
app.use("/api/events", routerEvent);
export default app;
