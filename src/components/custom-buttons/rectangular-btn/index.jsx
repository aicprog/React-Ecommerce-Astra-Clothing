import React from 'react';
import './rectangular-btn.scss'


const RectangularButton = ({children, isBlue, ...otherProps}) => {
    return(
       <button className={`${isBlue ? 'blue': ''} custom-button`} {...otherProps}>
        {children}
       </button>
    )
}


export default RectangularButton

