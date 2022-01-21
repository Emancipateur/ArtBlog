import React from 'react';
import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { change } from '../store'


const Articles = () => {

  const dispatch  = useDispatch();

    const  [articles, setArticles] = useState([])
    const radios = ["Skate", "Graffiti"];
    const [selectedRadio, setSelectedRadio] = useState('');
 

    useEffect(() => {
      fetch("https://localhost:8000/api/articles", {
      headers: {
        'Accept': 'application/json'
      }})
        .then((res) => res.json())
        .then((data) => setArticles(data));
      
    }, []);


switch (selectedRadio){
  case "Graffiti" :
    setSelectedRadio("/api/categories/1");
    break;
  case "Skate":
    setSelectedRadio("/api/categories/2")
    break;
  
}

    return (
      <div className="articles">
        <div className="choiceCategory">
          <div  className='choiceSkateGraf'>
         <h3>Skate or Graffiti ?</h3>
         <p>Make a choice</p>
         </div>
        <ul>
         {/* <button onClick={ ()=>  dispatch(change(selectedRadio))}>btn</button> */}
          {radios.map((radio) => {
            return (
              <li className="radioTheme" key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  checked={radio === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
              
                <label className='labelChoice' htmlFor={radio}>{radio} </label>
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