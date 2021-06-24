import React from "react";
import { Bird } from "../bird-model";
interface BirdsListProps {
  birds: Bird[];
}

const BirdList: React.FC<BirdsListProps> = ({ birds }) => {
  return (
    <ul>
      {birds.map((bird) => {
        return (
          <li key={bird.id}>
            <div>Name: '{bird.name}'</div>
            <div>Age: {bird.age}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default BirdList;
