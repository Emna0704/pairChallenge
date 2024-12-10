import React, { useState, useEffect, useLayoutEffect } from 'react';
import "../css/randomArray.css";



function generateRandomArray() {
  let array = [];
  while (array.length < 20) {
    let randomNumber = Math.floor(Math.random() * 20) + 1;

    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  return array;
}


function RandomNumberArray() {
  const [numbers, setNumbers] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const randomArray = generateRandomArray();
    setNumbers(randomArray);
  }, []);
 
  useEffect(()=>{
    const sorted = [...numbers].sort((a, b) => a - b)
    const interval = setInterval(() => {
      if (index < sorted.length) {
        setSortedArray([...sortedArray, sorted[index]])
        setIndex(index + 1)
      }
    }, 1000)
    if(index >= sorted.length){
      clearInterval(interval)
    }
    return ()=> {
      clearInterval(interval)
    }
  },[sortedArray,numbers])

 
  return (
    <div className="random-container">

      <div className="random-row">
        <h3>Liste non triée :</h3>
        {numbers.map((number, index) => (
          <div key={index} className="random-number">
            {number}
          </div>
        ))}
      </div>

      <div className="random-row">
        <h3>Liste non triée :</h3>
        {sortedArray.map((number, index) => (
          <div key={index} className="sorted-number ">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomNumberArray;

