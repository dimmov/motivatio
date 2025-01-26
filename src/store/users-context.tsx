import { createContext } from "react";
import { User } from "../types/data/Users";
import { ChildrenProps } from "../types/utils/ChildrenProps";
import useUsersData from "../hooks/useUsersData";

type UsersContextProps = {
  users: User[];
};

export const UsersContext = createContext<UsersContextProps>({
  users: [],
});

export default function UsersContextProvider({ children }: ChildrenProps) {
  const { users, loading, error } = useUsersData();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  const contextValue = {
    users,
  };
  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
}
