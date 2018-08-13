import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return(
        <text 
        className="CharComponent"
        onClick={props.clicked}
        >{props.character}</text>
    )
}

export default charComponent;