import {Button, Card} from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useState } from 'react'
var url ="https://newsapi.org/v2/everything?q=bitcoin&apiKey=f3bd15885ba6443ab0e2c9e8550f283d";

const NewsComponent = () => {
   const [news, setNews] = useState([]); //initial value is empty array
    async function getNews(){
        const res= await fetch(url); 
        let data = await res.json();
        // console.log(data);
        setNews(data.articles); // pass array of articles not data object whole
    }
    useEffect(()=>{
        getNews();
    },[]);

    return (
    <>
    <div className="container">
    <h1 className='text-center py-3'>Latest News {news.length}</h1>
    <div className="d-flex justify-content-center gap-2 flex-wrap">
    {news.map((mereNews) =>{
        return(
        <Card style={{ width: '18rem' }}>
      <Card.Img className="" style={{width:'100%', height:'50%', objectFit:'cover'}} variant="top" src={mereNews.urlToImage} />
      <Card.Body>
        <Card.Title>{mereNews.title}</Card.Title>
        <Button variant="primary">
            <a href={mereNews.url} className='text-white text-decoration-none' target="_blank">Read More</a>
            </Button>
      </Card.Body>
    </Card> 
        );
    })}
    </div>
    </div>

    </>
  )
}

export default NewsComponent