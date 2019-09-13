import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const starWarsApi = 'https://swapi.co/api/people';
  /* const [name, setName] = useState('');  */
 /*  const [birth, setBirth] = useState(''); */
 /* const [gender, setGender] = useState(''); */
    const [characterArray, setCharacterArray] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(() => {
       axios
       .get(starWarsApi)
       .then(response => {
         debugger
         console.log(response.data.results);
         setCharacterArray(response.data.results);
         console.log(characterArray);

          /* response.data.results.map(character => {
           console.log(character); */

           /* setCharacter(response.data.results.character); */
         })
       })
       .catch(error => {
         console.log("Error");
       })

  }, []);
    
      


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
       {/* <Character 
              key={character.name}
              name={character.name}
              birth_date={character.birth_date}
              eye_color={character.eye_color}
              hair_color={character.hair_color}/> */}
      
    </div>
  );
}

export default App;
