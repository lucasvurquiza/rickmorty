import React, { useState } from "react";
import { Loading } from "../../components/Loading";
import { CharacterContext } from "./CharacterContext";
import { CharacterProps } from "../../components/Characters";

export const CharacterProvider: React.FC = ({ children }) => {
  const [listOfFavorites, setListOfFavorites] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState(false);

  const addFavorite = (item: CharacterProps) => {
    setListOfFavorites((value) => { return [...value, item]; });
  };

  const removeFavorite = (item: CharacterProps) => {
    setListOfFavorites((value) => {
      return value.filter((oneCharacter) => oneCharacter.idCharacter !== item.idCharacter);
    });
  };

  return (
    <CharacterContext.Provider
      value={{
        addFavorite,
        listOfFavorites,
        removeFavorite,
        setLoading,
      }}
    >
      {loading === true && <Loading />}
      {children}
    </CharacterContext.Provider>
  );
};
