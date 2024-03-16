/* eslint-disable react/prop-types */
import "./Card.css"

function Card({title, imageSources , desc}) {
    
  return (
    <div className="card">
       

        <img src={imageSources} alt="Card" />
        <h2>{title}</h2>
        <br></br>
        <hh5>{desc}</hh5>
        
    </div>
  )
}

export default Card