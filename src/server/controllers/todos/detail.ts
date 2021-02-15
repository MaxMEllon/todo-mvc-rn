import { Handler } from "express";
import store from "../../store";

export const detail: Handler = async (req, res) => {
  const data = await store.all();
  const item = data.find((d) => d.id === req.params.id);
  if (!item) {
    res.status(400).send({ message: "invalid payload" });
    return;
  }
  res.send(JSON.stringify(item));
};
