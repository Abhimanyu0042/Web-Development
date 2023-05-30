import React from 'react'
import Avatar from './thumbnail';

function YOUcard(props){
    const videoTitle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        gap: '5px',
        padding:'5px'
    }
    const Videodesc = {
        display: 'flex',
        flexDirection: 'row',
        gap: '8px'
    }

    const subdesc = {
        color:'lightgrey',
        margin:'0px'
    }



    return(
      <div>
        <Avatar src={props.src} alter={props.alt}/>
        <div style={videoTitle}>
        <p style={{color: 'black',fontSize:'large', margin:'0px'}}>{props.videotitle}</p>
        <div style={Videodesc}>
            <p style={subdesc}>{props.views}</p><p style={subdesc}>{props.time}</p>
        </div>
        </div>
      </div>
    )
  }

  export default YOUcard;