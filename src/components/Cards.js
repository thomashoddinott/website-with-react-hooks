import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src='../images/img-2.jpg'//fixme
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path='/services'
            />
            <CardItem 
              src='../images/img-2.jpg' //fixme
              text="Travel through the island of Bali in a Private Cruise"
              label="Luxury"
              path='/services'
            />
            <CardItem 
              src='../images/img-2.jpg' //fixme
              text="etc..."
              label="Luxury"
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
