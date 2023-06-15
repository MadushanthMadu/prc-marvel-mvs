import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={props.movies.img} className="card-img" alt={props.movies.id}/>
        <p className="card-title"> {props.movies.title} </p>
        <p className="card-release"> {props.movies.release}</p>
    </div>
)