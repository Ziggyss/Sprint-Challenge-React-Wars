import React from "react";
import Character from "./Character";

function CharacterList(props) {
  return props.characterArray.map(character => (
    <Character
      key={character.name}
      name={character.name}
      birth_year={character.birth_year}
      gender={character.gender}
      skin_color={character.skin_color}
      eye_color={character.eye_color}
      hair_color={character.hair_color}
      height={character.height}
      mass={character.mass}
    />
  ));
}

export default CharacterList;
