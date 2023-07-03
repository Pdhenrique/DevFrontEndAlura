import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoriteContext() { // Corrigido o nome da função de exportação
  const { favorite, setFavorite } = useContext(FavoritosContext);

  function addFavorite(newFavorite) {
    const favoritoRepetido = favorite.some(
      (item) => item.id === newFavorite.id
    );

    let newList = [...favorite];

    if (!favoritoRepetido) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    newList.splice(newList.indexOf(newFavorite), 1);
    return setFavorite(newList);
  }
  return {
    favorite,
    addFavorite,
  };
}