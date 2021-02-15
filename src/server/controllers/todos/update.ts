import { Handler } from "express";
import store from "../../store";
import log from "../../log";
import { validateTodo } from "../../../shared/validator/todo";

export const update: Handler = async (req, res) => {
  const item = req.body;
  // バリデーションに失敗したときは更新できない
  if (!validateTodo(item)) {
    res.status(400).send({ message: "invalid payload" });
    return;
  }
  // 指定されたid のtodo が存在しない場合 更新できない
  if (!(await store.exist(item.id))) {
    res.status(400).send({ message: `does not exist a todo: { id: ${item.id} }` });
    return;
  }
  try {
    const data = await store.update(item.id, item);
    res.status(201).send(JSON.stringify(data));
  } catch (err) {
    log.error(err);
    res.status(500).send({
      message: "internal server error",
    });
  }
};
