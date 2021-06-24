import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { CharacterProvider } from "./context/Character/CharacterProvider";

import { Search } from "./pages/Search";
import { Favorites } from "./pages/Favorites";

ReactDOM.render(
  <BrowserRouter>
    <CharacterProvider>
      <Route path="/rickmorty" component={Search} exact />
      <Route path="/favorites" component={Favorites} exact />
    </CharacterProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
