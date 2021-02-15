import { Handler } from "express";
import store from "../../store";
import log from "../../log";

export const remove: Handler = async (req, res) => {
  const id = req.params.id;
  if (typeof id !== "string") {
    res.status(400).send({ message: "invalid payload" });
    return;
  }
  // 存在しないときは削除できない
  if (!(await store.exist(id))) {
    res.status(400).send({ message: `does not exist a todo: { id: ${id} }` });
    return;
  }
  try {
    await store.remove(id);
    res.status(204).send(JSON.stringify({ status: "ok" }));
  } catch (err) {
    log.error(err);
    res.status(500).send({
      message: "internal server error",
    });
  }
};
