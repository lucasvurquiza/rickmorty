import React, { useState, useContext } from "react";
import Character from "../../api/GetCharacter";
import { Characters } from "../../components/Characters";
import { Navbar } from "../../components/Navbar";
import { CharacterContext } from "../../context/Character/CharacterContext";
import "./styles.css";

export const Search = () => {
  const { setLoading } = useContext(CharacterContext);
  const [nameCharacter, setNameCharacter] = useState("");
  const [listCharacter, setListCharacter] = useState([]);

  const handleSearch = async (e: any) => {
    e.preventDefault();

    if (!nameCharacter || /\s/g.test(nameCharacter)) {
      return null;
    } else {
      setLoading(true);
      const response = await Character.getCharacter(nameCharacter);
      setListCharacter(response);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSearch}>
          <input onChange={(e) => setNameCharacter(e.target.value)} />
          <button type="submit" style={{ marginLeft: "5px" }}>
            Search
          </button>
        </form>
        {listCharacter ? (
          <Characters lists={listCharacter} />
        ) : (
          <h1>Não há resultados</h1>
        )}
      </div>
    </>
  );
};
