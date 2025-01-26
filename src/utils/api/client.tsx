import axios from "axios";
import { onRequestFulfilled, onResponseRejected } from "./interceptors";

const apiHostname = "localhost:3000";

const client = axios.create({
  baseURL: `https://${apiHostname}`,
});

client.interceptors.request.use(onRequestFulfilled);
client.interceptors.response.use((response) => response, onResponseRejected);

export default client;
