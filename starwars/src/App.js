import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Characters";


const App = () => {
  
  const starWarsApi = "https://swapi.co/api/people";


  const [characterArray, setCharacterArray] = useState([]);
 
  useEffect(() => {
    axios
      .get(starWarsApi)
      .then(response => {
      
        console.log(response.data.results);
        setCharacterArray(response.data.results);

        /* response.data.results.map(character => {
           console.log(character); */

        /* setCharacter(response.data.results.character); */
      })
      .catch(error => {
        console.log("Error");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        <Characters 
          characterArray={characterArray}
        
        />
      </div>
    </div>
  );
};



export default App;
