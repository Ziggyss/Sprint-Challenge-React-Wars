import React from "react";

function Character(props) {
  const { name, birth_date, gender, eye_color, hair_color } = props;

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Date of Birth: {birth_date}</p>
      <p>Gender: {gender}</p>
      <p>Eye Colour: {eye_color}</p>
      <p>Hair Colour: {hair_color}</p>
    </div>
  );
}

export default Character;
