import './App.css';
import './index.css';
import { useState,useEffect } from 'react';
import DB from "./db.json";
import Quotes from './quotes';

function App() {
  const[change,setChange]=useState(false);
  const[index,setIndex]=useState(0);
  const[colors,setColors]=useState("white");
  useEffect(
    ()=>{
      setColors(Math.floor(Math.random()*16777215).toString(16));
      document.getElementById("body").style.backgroundColor = '#' + colors;
      setIndex(Math.round(Math.random()*(DB.length-1)));

    },[change]
  )
  return (
  
    <div id='quote-box' className='container m-auto h-50 p-0'>
      <Quotes quote={DB[index]}/>
      <button id='new-quote' onClick={()=>{
        setChange(!change);
      }}>New Quote</button>
    </div>


  );
}

export default App;
