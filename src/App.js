import styled from "styled-components";
import { useQuery } from "react-query";
import UserForm from "./components/UserForm";

/* styles */
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
`;

/* functions */
const fetcher = async () => {
  const response = await fetch("http://localhost:4000/users");
  const data = await response.json();
  return data;
};

/* components */
const Container = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const { isLoading, isError, data } = useQuery("users", fetcher);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (isError) {
    return <p>Error loading data...</p>;
  }

  return (
    <Wrapper>
      <Container users={data} />
      <UserForm />
    </Wrapper>
  );
};

export default App;
