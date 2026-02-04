
import { useState } from "react";

export default function Plants({plants, setCart}) {
  

  return (
    <ol id="plants">
      {plants.map( (plant) => 
        <li key={plant.id} className="plant">
          {plant.name}
          <p className="image">{plant.image}</p>
          <button onClick={ () => setCart(plant) }>Add to cart</button>
        </li>
      )};
    </ol>
  )
};