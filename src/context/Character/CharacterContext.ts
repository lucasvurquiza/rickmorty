import { createContext } from "react";
import { CharacterProps } from "../../components/Characters";

interface ICharacterContext {
  addFavorite: (item: CharacterProps) => void;
  listOfFavorites: CharacterProps[];
  removeFavorite: (item: CharacterProps) => void;
  setLoading: (value: boolean) => void;
}

export const CharacterContext = createContext({} as ICharacterContext);
