import "./styles.css";
import { useContext } from "react";
import { CharacterContext } from "../../context/Character/CharacterContext";
import { Navbar } from "../../components/Navbar";
import { Characters } from "../../components/Characters";

export const Favorites = () => {
  const { listOfFavorites } = useContext(CharacterContext);

  return (
    <div>
      <Navbar />
      <h1 className="textH1">Lista de Favoritos</h1>
      <div className="favoritesList">
        {listOfFavorites.length === 0 ? (
          <h2 className="textH2">Não há favoritos</h2>
        ) : (
          <Characters lists={listOfFavorites} />
        )}
      </div>
    </div>
  );
};
