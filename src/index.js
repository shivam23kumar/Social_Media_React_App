import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from './Sdata';
import Card from './Cards';


function nCard(val){
  console.log(val);
  return(
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}
      button={val.button} 
    />
  );
}
  

ReactDOM.render(
  <>
    <h1 className = "heading_style">My Profiles</h1>
    {Sdata.map(nCard)}
    
  </>,
  document.getElementById('root')
);


