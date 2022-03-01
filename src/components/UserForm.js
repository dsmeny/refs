import { useRef } from "react";
import { useQueryPost } from "../hooks/userQueries";
import AccountNavigation from "./AccountNavigation";
import SelectOptions from "./SelectOptions";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  min-height: 30vh;
`;

const Input = styled.input`
  border-radius: 10px;
  line-height: 2rem;
  padding: 10px;

  &:active {
    border: none;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  line-height: 2rem;
  padding: 10px;

  &:hover {
    background: blue;
    color: white;
  }
`;

const UserForm = () => {
  const mutation = useQueryPost();

  const nameRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const user = nameRef.current.value;

    mutation.mutate({ id: new Date(), name: user });
  };

  return (
    <Form onSubmit={submitHandler}>
      <AccountNavigation />
      <Input
        type="text"
        placeholder="enter a name"
        minLength="3"
        ref={nameRef}
      />
      <SelectOptions />
      <Button>Add a name</Button>
    </Form>
  );
};

export default UserForm;
