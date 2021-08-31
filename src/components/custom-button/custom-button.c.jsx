import React from 'react';
import './custom-button.s.scss'


const CustomButton = ({children, isBlue, ...otherProps}) => {
    return(
       <button className={`${isBlue ? 'blue': ''} custom-button`} {...otherProps}>
        {children}
       </button>
    )
}


export default CustomButton