import { useUserQuery } from "../hooks/userQueries";

const Container = () => {
  const { isLoading, isError, data } = useUserQuery();
  console.log("Container data: ", data);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (isError) {
    return <p>Error loading data...</p>;
  }

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Container;
