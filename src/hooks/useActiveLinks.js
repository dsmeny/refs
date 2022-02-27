import { useState, useRef } from "react";

const useActiveLinks = () => {
  const [activeLinks, setActiveLinks] = useState(["view"]);
  const [links, setLinks] = useState({
    view: true,
    add: false,
    update: false,
    edit: false,
    delete: false,
  });

  const currentIDRef = useRef();
  const nextIDRef = useRef();

  const activeLinkHandler = () => {
    setActiveLinks([nextIDRef.current]);
  };

  const clickHandler = (e) => {
    nextIDRef.current = e.target.id;
    currentIDRef.current = activeLinks[0];
    setActiveLinks((prev) => [...prev, nextIDRef.current]);
    setLinks((prev) => {
      return {
        ...prev,
        [currentIDRef.current]: false,
        [nextIDRef.current]: true,
      };
    });
  };

  const state = {
    nextIDRef,
    activeLinks,
    links,
  };

  const handlers = {
    activeLinkHandler,
    clickHandler,
  };
  return [state, handlers];
};

export default useActiveLinks;
