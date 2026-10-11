import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(studentId) {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(studentId)
        ? prevFavorites.filter((id) => id !== studentId)
        : [...prevFavorites, studentId],
    );
  }

  function isFavorite(studentId) {
    return favorites.includes(studentId);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
