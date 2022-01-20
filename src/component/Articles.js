import React from 'react';
import {useEffect, useState} from 'react'
const Articles = () => {

    const  [articles, setArticles] = useState([])

    useEffect(() => {
      fetch("https://localhost:8000/api/articles", {
      headers: {
        'Accept': 'application/json'
      }})
        .then((res) => res.json())
        .then((data) => setArticles(data));
      
    }, []);


    return (
      <div className="articles">
          <div className="articlesContent">
          {articles.map(item => (
            <div className="articlesList" key={item.id}>
            <h2>{item.title}</h2>
            <p className='description'>{item.description}</p>
            <p className='content'>{item.content}</p>
            <p>{item.createdAt}</p>
            <img src={item.image} alt="" />
            </div>
           ))}
        </div>
      </div>
  
   
    );
};

export default Articles;