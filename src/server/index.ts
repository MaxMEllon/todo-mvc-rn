import express, { ErrorRequestHandler } from "express";
import logger from "express-pino-logger";
import { json } from "body-parser";
import { all, create, remove, update, detail } from "./controllers/todos";
import log from "./log";

const app = express();

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  log.error(err);
  res.send({ message: "internal server error" });
};

app.use(json());
app.use(logger({ logger: log }));

app.get("/todo", all);
app.get("/todo/:id", detail);
app.post("/todo", create);
app.put("/todo", update);
app.delete("/todo/:id", remove);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("express started: http://localhost:3000");
});
