import React from "react";
import styled from "styled-components";

function Character(props) {
  const {
    name,
    birth_year,
    gender,
    skin_color,
    eye_color,
    hair_color,
    height,
    mass
  } = props;
  console.log("character props", props);
  return (
    <div>
      <CharacterTab>
        <h3>Name: {name}</h3>
        <p>Birth Year: {birth_year}</p>
        <p>Gender: {gender}</p>
        <p>Skin Colour: {skin_color}</p>
        <p>Eye Colour: {eye_color}</p>
        <p>Hair Colour: {hair_color}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
      </CharacterTab>
    </div>
  );
}

const CharacterTab = styled.div`
  width: 350px;
  height: 300px;
  border: solid black 2px;
  border-radius: 10px;
  color: black;
  background: rgba(255,255,255,0.5);
  box-shadow: 0px 10px 51px 0px rgba(0,0,0,0.75);
`;

export default Character;
