import React from 'react'
import './card.styles.css';

const Card = props => {
  return (
    <div className="card-container">
      <h1>{props.familles.name}</h1>
    </div>
  )
}

export default Card
