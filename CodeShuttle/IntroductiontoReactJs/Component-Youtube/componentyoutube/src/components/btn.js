import React from 'react';

function BUTton1(props) {
    const topbtn = {
        display: 'flex',
        gap: '10px'
      }

    const buttontyp = {

        btn1x : {
            backgroundColor: 'black',
            color: 'white',
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingInline: '7px',
            borderRadius: '6px',
            cursor: 'pointer'
          },
        
        btn2x : {
            backgroundColor: 'rgb(215, 213, 213)',
            color: 'rgb(0, 0, 0)',
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingInline: '7px',
            borderRadius: '6px',
            border: '0px solid',
            cursor: 'pointer'
          }

    }

    return(
      <div style={topbtn}>
        <button style={buttontyp.btn1x}>Recently Uploaded</button>
        <button style={buttontyp.btn2x}>Popular</button>
      </div>
    );
  }

  export default BUTton1 ;
