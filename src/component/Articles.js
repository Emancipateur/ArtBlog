import React from 'react';
import {useEffect, useState} from 'react'
const Articles = () => {

    const  [articles, setArticles] = useState([])
    const radios = ["Skate", "React"];
    const [selectedRadio, setSelectedRadio] = useState('Skate');


    useEffect(() => {
      fetch("https://localhost:8000/api/articles", {
      headers: {
        'Accept': 'application/json'
      }})
        .then((res) => res.json())
        .then((data) => setArticles(data));
      
    }, []);
console.log(articles.map(item  => item.category))

switch (selectedRadio){
  case "React" :
    setSelectedRadio("/api/categories/1");
    break;
  case "Skate":
    setSelectedRadio("/api/categories/2");
    break;
}

    return (
      <div className="articles">
        <div className="choiceCategory">
        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  checked={radio === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
        </div>
          <div className="articlesContent">

            {(!selectedRadio  == "") ? (
              
           
          articles.filter(article => article.category.includes(selectedRadio))
          .map(item => (
            <div className="articlesList" key={item.id}>
            <h2>{item.title}</h2>
            <p className='description'>{item.description}</p>
            <p className='content'>{item.content}</p>
            <p>{item.createdAt}</p>
            <img src={item.image} alt="" />
            </div>
           ))
            ) : null } 
        </div>
      </div>
  
   
    );
};

export default Articles;