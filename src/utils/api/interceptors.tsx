import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { generateHeaders } from "./headers";

export async function onRequestFulfilled(config: InternalAxiosRequestConfig) {
  config.headers = await generateHeaders();

  return config;
}

export function onResponseRejected(error: AxiosError) {
  return Promise.reject(error);
}
