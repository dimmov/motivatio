import { AxiosHeaders } from "axios";

export async function generateHeaders(): Promise<AxiosHeaders> {
  const headers = new AxiosHeaders({
    Accept: "application/json; charset=utf-8",
    ["Content-Type"]: "application/json",
    ["Access-Control-Allow-Origin"]: "*",
    ["Access-Control-Allow-Headers"]: "*",
    ["Access-Control-Allow-Methods"]: "*",
  });

  return headers;
}
