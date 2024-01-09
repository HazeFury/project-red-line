import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

// Étape 1 : créer un context "React" basique
const userContext = createContext();

// Étape 2 : créer le provider de mon context
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    console.info(user); // -----------------------------------------  TO REMOVE !!
  };

  const contextValue = useMemo(() => {
    return { user, setUser, login };
  }, [user, login]);

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}

// Étape 3 : créer un hook pour récupérer les valeurs du context depuis
// n'importe quel composant dans l'application
export const useUserContext = () => useContext(userContext);

UserContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
