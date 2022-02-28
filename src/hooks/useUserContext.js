import { createContext, useContext } from "react";
import { useQuery } from "react-query";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/users");
  const data = await response.json();
  return data;
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { isLoading, isError, data } = useQuery("users", fetcher);

  const context = {
    isLoading,
    isError,
    data,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => {
  const userData = useContext(UserContext);

  return [userData, UserProvider];
};

export default useUserContext;
