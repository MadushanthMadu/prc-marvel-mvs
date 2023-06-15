import React from "react";
import { Card } from "../Card/card.component";
import './card-list.styles.css';

export const CardList = props => (
    <div className="card-list">
        {props.movies.map(movies => (
            <Card key={movies.id} movies={movies}/>
        ))}
    </div>
)