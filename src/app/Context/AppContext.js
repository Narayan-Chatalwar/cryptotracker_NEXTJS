import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
  const [currency, setcurrency] = useState("INR");
  const [symbol, setsymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") {
      setsymbol("₹");
    } else if (currency === "USD") {
      setsymbol("$");
    }
  }, [currency]);

  return (
    <Context.Provider value={{ currency, symbol, setcurrency }}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;

export const AppState = () => {
  return useContext(Context);
};
