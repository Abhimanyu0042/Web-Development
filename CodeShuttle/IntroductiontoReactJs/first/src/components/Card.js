import React from "react";
import Avatar from "./avatar";

function Card(props){
    const cardstyle = {
        padding: '20px',
        border: '3px solid black',
        margin: '20px',
        // width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyItem: 'center',
        alignItems: 'center'

    }

    return(
        <div style={cardstyle}>
            <Avatar image={props.image} name={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;