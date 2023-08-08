import React from 'react'

function BannerAd() {
    const bannerbox = {
        width: '100%',
        backgroundColor: 'rgb(228, 228, 228)',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'noWrap',
        marginTop: '40px',
        padding: '30px',
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Bahnschrift',
        marginBottom:'2rem'
    }
    const redWords = {
        color: 'red'
    }
  return (
    <div>
    <div style={bannerbox}>
        <h2 style={{fontSize: '1rem', fontWeight: 'light', letterSpacing:'5px'}}>WELCOME TO BULETIN</h2>
        <p style={{fontSize: '1.8rem'}}>Craft narratives✍🏻 that ignite <span style={redWords}>inspiration</span>💡,</p>
        <p style={{fontSize: '1.8rem'}}><span style={redWords}>Knowledge📕</span>, and <span style={redWords}>entertainment🎬</span></p>     
    </div>
    <h2 style={{fontSize: '2rem', marginBottom: '1.2rem'}}>Today's Headlines</h2>
    <hr></hr>
    </div>
  )
}

export default BannerAd
