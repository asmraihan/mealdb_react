import React from 'react';

const Card = ({meal}) => {
    console.log(meal)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={meal?.strMealThumb} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{meal?.strMeal}</h2>
    <p>Tags: {meal?.strTags ? meal.strTags : "No data was found"}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-accent">Add Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;