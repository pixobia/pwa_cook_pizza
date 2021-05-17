import React from "react";
import { createCookPizzaStore } from "./cookPizzaStore";
import { useLocalStore } from "mobx-react-lite";

const CookPizzaContext = React.createContext(null);

export const CookPizzaProvider = ({ children }) => {
  const cookPizzaStore = useLocalStore(createCookPizzaStore);

  return (
    <CookPizzaContext.Provider value={cookPizzaStore}>
      {children}
    </CookPizzaContext.Provider>
  );
};

export const useCookPizzaStore = () => React.useContext(CookPizzaContext);
