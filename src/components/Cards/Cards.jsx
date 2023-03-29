import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    // useeffect
    const [meals,setMeals] = useState([])

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=fish`)
        .then(res => res.json())
        .then(data => setMeals(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-5 w-8/12'>
          {
            meals?.meals?.map((meal)=> <Card key={meal.idMeal} meal={meal}/>)
          }
        </div>
    );
};

export default Cards;