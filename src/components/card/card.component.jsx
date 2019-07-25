import React from 'react'
import './card.styles.css';

const Card = props => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.famille.id}?set=set2&size=180x180`} alt="familly-img"/>
      <h2>{props.famille.name}</h2>
      <p>{props.famille.email}.</p>
    </div>
  )
}

export default Card
