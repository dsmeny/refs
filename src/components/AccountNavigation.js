import { useEffect } from "react";
import useActiveLinks from "../hooks/useActiveLinks";
import Nav from "./Nav";

const AccountNavigation = () => {
  const [state, handlers] = useActiveLinks();
  const { activeLinks, links } = state;
  const { activeLinkHandler, clickHandler } = handlers;

  useEffect(() => {
    if (activeLinks.length > 1) {
      activeLinkHandler();
    }
  }, [activeLinkHandler, activeLinks.length]);

  return (
    <Nav>
      <h2>Interact with users:</h2>
      <ul>
        <li
          id="view"
          onClick={clickHandler}
          style={{ color: links.view ? "blue" : "grey" }}
        >
          view all
        </li>
        <li
          id="add"
          onClick={clickHandler}
          style={{ color: links.add ? "blue" : "grey" }}
        >
          add
        </li>
        <li
          id="update"
          onClick={clickHandler}
          style={{ color: links.update ? "blue" : "grey" }}
        >
          update
        </li>
        <li
          id="edit"
          onClick={clickHandler}
          style={{ color: links.edit ? "blue" : "grey" }}
        >
          edit
        </li>
        <li
          id="delete"
          onClick={clickHandler}
          style={{ color: links.delete ? "blue" : "grey" }}
        >
          delete
        </li>
      </ul>
    </Nav>
  );
};

export default AccountNavigation;
