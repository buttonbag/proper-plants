
// import { useState } from "react";

export default function Plants({plants, addToCart}) {
  

  return (
    <ol id="plants">
      {plants.map( (plant) => 
        <li key={plant.id} className="plant">
          {plant.name}
          <p className="image">{plant.image}</p>
          <button onClick={ () => addToCart(plant) }>Add to cart</button>
        </li>
      )};
    </ol>
  )
};