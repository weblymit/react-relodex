import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

const  CardList = props => {
  return (
    <div>
      <div className="card-list">
        {
          props.familles.map(famille => (
            <Card
              key={famille.id}
              familles={famille}
            />
          ))
        }
      </div>
    </div>
  )
}

export default  CardList
