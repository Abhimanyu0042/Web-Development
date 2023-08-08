import React from 'react'
import './NewsTile.css';

function NewsTile({news}) {
  return (
    <div>
    <div className='daily-block'>
        <img src={news.urlToImage} alt={news.title}/>
        <div className='daily-content'>
            <p className='date-time'><span style={{color: 'red'}}>Source: </span>{news.author} <span> <span style={{color: 'red'}}>Published on: </span>{news.publishedAt}</span></p>
            <h1>{news.title}</h1>
            <p>{news.description}</p>
            <br></br>
            <button className='read-more-button' onClick={() => window.open(news.url)}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default NewsTile
