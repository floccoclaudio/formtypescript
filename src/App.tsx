import React, { useState } from "react";
import BirdList from "./components/BirdList";
import NewBird from "./components/NewBird";
import { Bird } from "./bird-model";

const App: React.FC = () => {
  const birds: Bird[] = [
    // { name: "Pooper", age: 3, id: "pooperId" },
    // { name: "Colla", age: 2, id: "collaId" },
  ];
  return (
    <div>
      <BirdList birds={birds} />
      <NewBird />
    </div>
  );
};

export default App;
