import React, { createContext, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [comic, setComic] = useState({});
  const value = {
    comic,
    setComic,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Consumer = ({ children }) => {
  return <Context.Consumer>{children}</Context.Consumer>;
};
export { Consumer, Provider, Context as default };
