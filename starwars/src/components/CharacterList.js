import React from "react";
import Character from './Character';

function CharacterList(props) {
    return(
    props.characterArray.map((character) => (
    <Character
      key={character.name}
      name={character.name}
      birth_date={character.birth_date}
      gender={character.gender}
      eye_color={character.eye_color}
      hair_color={character.hair_color}
    />
    )

  ));
}

export default CharacterList;
