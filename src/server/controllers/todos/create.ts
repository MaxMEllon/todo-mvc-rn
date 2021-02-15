import { Handler } from "express";
import store from "../../store";
import log from "../../log";
import { v4 as uuidv4 } from "uuid";
import { validateTodo } from "../../../shared/validator/todo";

export const create: Handler = async (req, res) => {
  const item = {
    id: uuidv4(),
    ...req.body,
  };
  // バリデーションに失敗したときは作成できない
  if (!validateTodo(item)) {
    res.status(400).send({ message: "invalid payload" });
    return;
  }
  try {
    const data = await store.append(item);
    res.status(201).send(JSON.stringify(data));
  } catch (err) {
    log.error(err);
    res.status(500).send({
      message: "internal server error",
    });
  }
};
