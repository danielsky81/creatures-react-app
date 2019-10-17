import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt="creatures" src={`https://robohash.org/${props.creature.id}?set=set2$size=120x120`}></img>
        <h2>{ props.creature.name }</h2>
        <p>{ props.creature.email }</p>
    </div>
)