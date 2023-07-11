import React from 'react';
import { CardData } from './card.style';

function Card({children}) {
    return (
        <div>
           <CardData >

           {children}
           </CardData>
        </div>
    );
}

export default Card;