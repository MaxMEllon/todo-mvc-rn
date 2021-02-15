import { Handler } from "express";
import store from "../../store";

export const all: Handler = async (_req, res) => {
  const data = await store.all();
  res.send(JSON.stringify(data));
};
