import { USERS_DATA } from "../data/Users";
import { User } from "../types/data/Users";
import { Collection } from "../types/utils/utils";
import { clientGET } from "../utils/api/methods";

export function fetchUsers() {
  return Promise.resolve(USERS_DATA);
  return clientGET<Collection<User>>({
    path: "users",
  });
}
