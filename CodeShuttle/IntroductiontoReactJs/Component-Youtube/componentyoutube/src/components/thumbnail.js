import React from 'react'

function Avatar(props){
    return(
        <div>
            <img src={props.src} alt={props.alter}></img>
        </div>
    )
}

export default Avatar;