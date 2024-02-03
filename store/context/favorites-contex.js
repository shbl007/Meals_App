import { createContext } from "react";

export const FavoritesContext = createContext({
    ids:[],
    addFavorites:(id) => {},
    removeFavorites: (id) => {}
});

function FavoritesContextProvider({children}) {
    return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;