/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Game.css"
import Card from '../card/Card';


const Game = () => {
  const cardImages = [
    { "src": "/img/helmet-1.png", matched: false },
    { "src": "/img/potion-1.png", matched: false },
    { "src": "/img/ring-1.png",   matched: false },
    { "src": "/img/scroll-1.png", matched: false },
    { "src": "/img/shield-1.png", matched: false },
    { "src": "/img/sword-1.png",  matched: false },
  ]

  const rules = "Guess and click on a matching pair of cards for each turn"; 
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [isDisabled, setIsDisabled] = useState(false)


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] 
      .sort(() => Math.random() - 0.5)   
      .map((card) => ({ ...card, id:Math.random() })) 

    setCards(shuffledCards)
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(0)
  }


  useEffect(()=>{
    shuffleCards()
  }, [])


  const reShuffleCards = () => {
    setTimeout(()=>shuffleCards(), 300)
  }


  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setIsDisabled(false)
  }


  const handleCardChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  useEffect(()=>{
    if (choiceOne && choiceTwo) {
      setIsDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        setTimeout(()=>resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])



  

  return (
    <div className='game-container'>
      <h1>Memory Game</h1>
      <p className='game-message'>{rules}</p>
      <button onClick={reShuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            handleCardChoice={handleCardChoice}
            isFlipped={card === choiceOne || card === choiceTwo || card.matched} 
            isDisabled={isDisabled}
          />
        ))}
      </div>
      
      <p className='game-message'>Turns taken : <span style={{fontSize:"1.5rem", fontWeight:"bold"}}>{turns}</span> </p>

    </div>
  )
}


export default Game

