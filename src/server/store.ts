import { readFile, writeFile } from "fs";
import { promisify } from "util";
import { resolve } from "path";
import { Task } from "../shared/models/task";

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const path = resolve(__dirname, "..", "..", "data.json");
const reader = () => readFileAsync(path);
const writer = (txt: string) => writeFileAsync(path, txt);

class Store<T extends { id: string }> {
  async all(): Promise<T[]> {
    const txt = await reader();
    return JSON.parse(txt.toString()) as T[];
  }

  async exist(id: string): Promise<boolean> {
    const txt = await reader();
    const data = JSON.parse(txt.toString()) as T[];
    console.log(
      data.find((d) => d.id === id),
      !!data.find((d) => d.id === id),
    );
    return !!data.find((d) => d.id === id);
  }

  async get(id: string): Promise<T | undefined> {
    const txt = await reader();
    const data = JSON.parse(txt.toString()) as T[];
    return data.find((d) => d.id === id);
  }

  async update(id: string, payload: T): Promise<T | undefined> {
    const txt = await reader();
    const data = JSON.parse(txt.toString()) as T[];
    const idx = data.findIndex((d) => d.id === id);
    if (idx === -1) return;
    data[idx] = payload;
    writer(JSON.stringify(data));
    return payload;
  }

  async append(item: T): Promise<void> {
    const txt = await reader();
    const data = JSON.parse(txt.toString()) as T[];
    data.push(item);
    try {
      writer(JSON.stringify(data));
    } catch {
      throw new Error("cant append item");
    }
  }

  async remove(id: string): Promise<void> {
    const txt = await reader();
    const data = JSON.parse(txt.toString()) as T[];
    const idx = data.findIndex((d) => d.id === id);
    if (idx === -1) return;
    data.splice(idx, 1);
    try {
      writer(JSON.stringify(data));
    } catch {
      throw new Error("cant append item");
    }
  }
}

const store = new Store<Task>();

export default store;
