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
        make: "Yamaha",
        model: "MT-07",
        year: "2020",
      },
      {
        make: "Kawasaki",
        model: "ER6-N",
        year: "2016",
      },
      {
        make: "Honda",
        model: "CB 500",
        year: "2022",
      },
      {
        make: "BMW",
        model: "GS 1250",
        year: "2021",
      },
      {
        make: "Suzuki",
        model: "Bandit 650",
        year: "2008",
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
