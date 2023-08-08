import React, { useEffect, useRef, useState } from 'react'
import HeadlinesBlock from './HeadlinesBlock';
import './NewsWeb.css';
import NewsTile from './NewsTile';

function NewsWeb() {
  const apikey = '4cd42cc260b2433f8fbb035aed7379f8';
    const apiHeadingUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4cd42cc260b2433f8fbb035aed7379f8`;
    const [query,setquery] = useState('tech');
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}`;
    const [newslist, setnewslist] = useState([]);
    const [headnews, setheadnews] = useState([]);
    const queryref = useRef(null);

    useEffect(() => {
      fetchData();
    })
    
    useEffect(() => {
      Fetchdata();
    },[query])
    
    async function fetchData(){
      try {
        const response = await fetch(apiHeadingUrl);
        let JsonData = await response.json();
  
        setheadnews(JsonData.articles);
  
      } catch (error) {
        console.log(error);
      }
    }

    async function Fetchdata(){
      try {
        const response1 = await fetch(apiUrl);
        let jsondata = await response1.json();

        setnewslist(jsondata.articles);
        
      } catch (error) {
        console.log(error);
      }
    }

    function handleSubmit(event){
      event.preventDefault();
      const queryInputRef = queryref.current.value;
      setquery(queryInputRef);
    }
  return (
    <div>
            {headnews && headnews.slice(0,1).map((news) => {
                    return <HeadlinesBlock key={news.url} news={news} />;
                })}
            <h2 style={{fontSize: '2rem', marginBottom: '1.2rem', marginTop: '1.2rem'}}>Search for your Daily Dose of News - </h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Want latest updates ? " className='query-input' ref={queryref} />
            <input className="btn-submit" onClick={handleSubmit} type="submit" value="Submit" />
            </form>
            <div className='daily-news'>
            {newslist && newslist.slice(0,12).map((news) => {
                    return <NewsTile key={news.url} news={news} />;
                })}
            </div>

                
    </div>
  )
}

export default NewsWeb

