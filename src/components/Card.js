import React from "react"
import './card.css'

import "tachyons"


const Card=({name, email, id})=>{
    
   
    return(
        
 <div className="bg-light-blue dib br3 pa3 ma2 grow animate">
<img alt="image1" src={`https://robohash.org/${id}?200x200`}  />
<div className="animate1">
    <h1>{name}</h1>
    <p>Email: {email}</p>
</div>
        </div>
    
    )
}
export default Card;