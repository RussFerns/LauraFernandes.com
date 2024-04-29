/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Card.css"


const Card = ({ card, handleCardChoice, isFlipped, isDisabled }) => {

  const handleCardClick = () => {
    if (!isDisabled) {
      handleCardChoice(card)
    }
  }

  return (
    <div className='card'>
      <div className={isFlipped ? "flipped" : "" }>
        <img className='front' src={card.src} alt='card front' />
        <img className='back' src='/Laura.png'alt='card back'  onClick={handleCardClick} />
      </div>
    </div>
  )
}

export default Card
