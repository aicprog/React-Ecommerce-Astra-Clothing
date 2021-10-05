import React from 'react';
import './rectangular-btn.scss'


const RectangularButton = ({children, isBlue, inverted, ...otherProps}) => {
    return(
       <button className={`${inverted ? 'inverted': ''} ${isBlue ? 'blue': ''} custom-button`} {...otherProps}>
        {children}
       </button>
    )
}


export default RectangularButton

