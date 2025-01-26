import { Collection } from "../utils/utils";
export type User = {
  id: string;
  displayName: string;
  email: string;
};

export type Users = Collection<User>;
