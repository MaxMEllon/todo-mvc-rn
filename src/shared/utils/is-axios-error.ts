import { AxiosError } from "axios";

export const isAxiosError = (err: any): err is AxiosError => {
  if (err && err.isAxiosError) return true;
  return false;
};
