import styled from "styled-components";
import useUserContext from "./hooks/useUserContext";
import UserForm from "./components/UserForm";
import Container from "./components/Container";

/* styles */
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  min-height: 100vh;
`;

const App = () => {
  const [userData, UserProvider] = useUserContext();

  return (
    <UserProvider>
      <Wrapper>
        <Container />
        <UserForm />
      </Wrapper>
    </UserProvider>
  );
};

export default App;
