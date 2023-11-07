import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";

// Étape 1 : créer un context "React" basique
const MotorcyclesContext = createContext();

// Étape 2 : créer le provider de mon context
export function MotorcyclesProvider({ children }) {
  const [motorcycles, setMotorcycles] = useState([]);

  useEffect(() => {
    setMotorcycles([
      {
        make: "constructeurTruc0",
        model: "modelMachin0",
        year: "2000",
      },
      {
        make: "constructeurTruc1",
        model: "modelMachin1",
        year: "2001",
      },
      {
        make: "constructeurTruc2",
        model: "modelMachin2",
        year: "2002",
      },
    ]);
  }, []);

  // /!\ ÉTAPE INTERMEDIAIRE /!\ j'utilise useMemo sinon
  // eslint me casse les pieds pour mon commit intermédiaire
  // bon et sinon pour de vrai : dans un cadre de context, le useEffect
  // va être appellé de multiples fois (et donc, malgrés le [] dans useEffect)
  // et donc le motorcycles va changer plein de fois, un comportement qui ne
  // match pas avec la logique de React
  const contextValue = useMemo(() => {
    return { motorcycles };
  }, [motorcycles]);

  return (
    <MotorcyclesContext.Provider value={contextValue}>
      {children}
    </MotorcyclesContext.Provider>
  );
}

// Étape 3 : créer un hook pour récupérer les valeurs du context depuis
// n'importe quel composant dans l'application
export const useMotorcyclesContext = () => useContext(MotorcyclesContext);

MotorcyclesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
