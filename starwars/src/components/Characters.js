import React from 'react';
import Character from './Character';

function Characters(props) {
   console.log('character props', props);
    return (
      <>
        {
         props.characterArray.map(
            (character) => (
               <Character
                key={character.name}
                name={character.name}
                birth_date={character.birth_date}
                gender={character.gender}
                hair_color={character.hair_color}
                eye_color={character.eye_color}
              /> 
            )) 
        }
      </>
    )
  }
  
  export default Characters;
  