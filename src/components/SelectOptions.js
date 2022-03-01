import React from "react";
import { useUserQuery } from "../hooks/userQueries";

const SelectOptions = () => {
  const { isLoading, isError, data } = useUserQuery();
  console.log("SelectOptions data: ", data);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (isError) {
    return <p>Error loading data...</p>;
  }

  return (
    <>
      <select>
        {data.map((user) => (
          <option value={user.name} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectOptions;
