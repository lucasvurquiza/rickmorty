import { useContext } from "react";
import { CharacterCard } from "../CharacterCard";
import { CharacterContext } from "../../context/Character/CharacterContext";
import "./styles.css";

export type CharacterProps = {
  idCharacter: number;
  nameCharacter: string;
  genderCharacter: string;
  pictureCharacter: string;
};

type ListsProps = {
  lists: Array<CharacterProps>;
};

export const Characters = ({ lists }: ListsProps) => {
  const { addFavorite, removeFavorite, listOfFavorites } =
    useContext(CharacterContext);

  return (
    <div className="lists">
      {lists.map((character: CharacterProps) => {
        const isFavorited = listOfFavorites.some(
          (item) => item.idCharacter === character.idCharacter
        );

        return (
          <>
            <CharacterCard
              key={character.idCharacter}
              id={character.idCharacter}
              name={character.nameCharacter}
              gender={character.genderCharacter}
              picture={character.pictureCharacter}
            >
              <button
                onClick={() =>
                  isFavorited
                    ? removeFavorite(character)
                    : addFavorite(character)
                }
              >
                {isFavorited ? "Desfavoritar" : "Favoritar"}
              </button>
            </CharacterCard>
          </>
        );
      })}
    </div>
  );
};
