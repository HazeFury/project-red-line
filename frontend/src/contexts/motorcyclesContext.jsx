import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import PropTypes from "prop-types";

const API_KEY = "DW/WYj7E5HAyagMw5XFjCw==vB909yPJs9C0NV5b";
const API_BASE_ENDPOINT =
  "https://api.api-ninjas.com/v1/motorcycles?make=Kawasaki&model=Ninja";

// Étape 1 : créer un context "React" basique
const MotorcyclesContext = createContext();

// Étape 2 : créer le provider de mon context
export function MotorcyclesProvider({ children }) {
  const [motorcycles, setMotorcycles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Et donc dans le cadre d'une API, notre contexte va contenir les données
    // d'un endpoint de notre API
    fetch(API_BASE_ENDPOINT, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setMotorcycles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Ha ! finalement, il faut toujours garder le useMemo
  const contextValue = useMemo(
    () => ({
      motorcycles,
      loading,
      error,
    }),
    [motorcycles, loading, error]
  );

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
