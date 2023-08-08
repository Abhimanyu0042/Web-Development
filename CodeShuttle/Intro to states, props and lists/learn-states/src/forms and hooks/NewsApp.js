import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css'

function NewsApp() {

    const apikey = '4cd42cc260b2433f8fbb035aed7379f8';
    const [newsList, setNewsList] = useState([]);
    const [query, setQuery] = useState('tesla');
    const queryInputRef = useRef(null);
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-05-16&sortBy=publishedAt&apiKey=${apikey}`;

    
    useEffect (() => {
        fetchData();
    },[query])

    async function fetchData () {
        try {
            const response = await fetch(apiUrl);
            let jsonData = await response.json();

            setNewsList(jsonData.articles);
    
        } catch (error) {
            console.log(error, 'error occured')
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        const queryValue = queryInputRef.current.value;
        setQuery(queryValue);
    }

    // const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
  <div className = "News-app">
    <h1 style={{fontFamily: 'monospace', fontSize:'3rem',  textAlign:'left',marginBottom:'20px'}}>! News Daily !</h1>
    <form onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef}/>
        <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit" />
    </form>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2,48%)', justifyContent: 'space-between', rowGap: '20px'}}>
      {newsList && newsList.map((news) => {
                    return <News key={news.url} news={news} />;
                })}

      {/* <select name="" id="">
        {arr.map((element,index) => {
            return <option key={index}>choose {element} </option>
        })}
      </select> */}
    </div>
  </div>
);
}

export default NewsApp
