type APIName = "users" | "emotions";

export type Endpoint = {
  version?: "v1" | "v2";
  path?: APIName;
};

const format = (path?: string) =>
  path ? (path[0] === "/" ? path.substr(1) : path) : "";

export function buildEndpoint({ version = "v1", path }: Endpoint) {
  let endpoint = `api/${version}`;

  if (path) endpoint += `/${format(path)}`;

  return endpoint;
}
