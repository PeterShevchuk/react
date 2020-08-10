import React from "react";
import "./Main.css";

import FiltersBlock from "../FiltersBlock/FiltersBlock";
import CardsColection from "../CardsColection/CardsColection"

const Main = () => {
  return (
    <main>
      <FiltersBlock />
        <CardsColection />
    </main>
  );
};

export default Main;
