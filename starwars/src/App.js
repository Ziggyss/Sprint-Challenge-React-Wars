import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from './components/CharacterList';

const App = () => {
  const starWarsApi = "https://swapi.co/api/people";
  const [characterArray, setCharacterArray] = useState([]);

  useEffect(
    () =>
      axios
        .get(starWarsApi)
        .then(response => {
          debugger;
          setCharacterArray(response.data.results);
        })
        .catch(error => {
          console.log("Error");
        }),
    []
  );

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        <CharacterList characterArray={characterArray}/>
      </div>
    </div>
  );
};
export default App;
