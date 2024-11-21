import { createServer } from "http";
import http from "http";

import app from "./app.js";
const PORT = process.env.PORT || 6000;
const server = http.createServer(app);

server.listen(PORT, function () {
  console.log("server running port" + PORT);
});
