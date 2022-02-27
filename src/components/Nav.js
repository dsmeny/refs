import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;

    li {
      line-height: 1.5rem;
      color: grey;

      &:active {
        color: blue;
      }
    }
  }
`;

export default Nav;
