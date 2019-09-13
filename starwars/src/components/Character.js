import React from 'react';

function Character(props){
    const {name, birth_date, gender, eye_color, hair_color} = props;
    return (
        <div>
            <p>
                Name: {props.name}
                Date Of Birth: {props.birth_date}
                Gender: {props.gender}
                Eye Colour: {props.eye_color}
                Hair Colour: {props.hair_color}
            </p>
        </div>
    );
};

export default Character; 