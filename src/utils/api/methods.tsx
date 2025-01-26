import { AxiosRequestConfig } from "axios";
import client from "./client";
import { Endpoint, buildEndpoint } from "./endpoints";

export function clientGET<T>(
  endpoint: Endpoint,
  config: AxiosRequestConfig = {}
) {
  const url = buildEndpoint(endpoint);

  return client.get<T>(url, { ...config }).then((res) => res.data);
}
