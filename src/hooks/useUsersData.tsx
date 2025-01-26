import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { User } from "../types/data/Users";
import { fetchUsers } from "../services/users";

export default function useUsersData() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const allUsers = await fetchUsers();
      setUsers(allUsers.items);
    } catch (error) {
      setError((error as AxiosError).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    loading,
    error,
    users,
  };
}
