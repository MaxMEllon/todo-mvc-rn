import { Task } from "../models/task";

export const validateTodo = (item: any): item is Task => {
  // null or undefined or 0 is not todo
  if (!item) return false;
  // item should object type
  if (item && typeof item !== "object") return false;
  // item is required id and a todo of id should be number
  if (item.id && typeof item.id === "string") return true;
  // other case is not a todo
  return false;
};
