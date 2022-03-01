import styled from "styled-components";
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
  return (
    <Wrapper>
      <Container />
      <UserForm />
    </Wrapper>
  );
};

export default App;
