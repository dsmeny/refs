import { useQuery, useMutation } from "react-query";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/users");
  const data = await response.json();
  return data;
};

export const useQueryPost = () => {
  return useMutation((newUser) => {
    return fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
  });
};

export const useUserQuery = () => {
  const { isLoading, isError, data } = useQuery("users", fetcher);

  const userData = {
    isLoading,
    isError,
    data,
  };

  return userData;
};
