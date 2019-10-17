import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.creatures.map(creature => (
            <Card key={creature.id} creature={creature}></Card>
        ))}
    </div>
);