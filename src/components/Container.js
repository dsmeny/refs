import useUserContext from "../hooks/useUserContext";

const Container = () => {
  const [userData] = useUserContext();
  const { isLoading, isError, data } = userData;

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
