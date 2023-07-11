import React from 'react';
import { Basebutton } from './button.style';

function Button({children}) {
    return (
        <Basebutton >
            {children}
        </Basebutton>
    );
}

export default Button;