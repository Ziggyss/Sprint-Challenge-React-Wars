import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from "./components/CharacterList";
import styled from "styled-components";

const App = () => {
  const starWarsApi = "https://swapi.co/api/people";

  const [characterArray, setCharacterArray] = useState([]);

  useEffect(
    () =>
      axios
        .get(starWarsApi)
        .then(response => {
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
      <Container>
        <CharacterList characterArray={characterArray} />
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default App;
