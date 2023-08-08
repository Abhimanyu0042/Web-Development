import React from 'react'
import './HeadlinesBlock.css';

function HeadlinesBlock({news}) {
  return (
    <div>
      <div className='headline-block'>
        <img className='image-px'src={news.urlToImage} alt={news.title}/>
        <div className='headline-content'>
            <p className='date-time'>Source : {news.author} <span> Published on : {news.publishedAt}</span></p>
            <h1>{news.title}</h1>
            <p>{news.description}</p>
            <br></br>
            <button className='read-more-button' onClick={() => window.open(news.url)}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default HeadlinesBlock
