import React from 'react'

const Header = ({score, bestScore}) => {
   return (
      <header className='header'>
         <h1 className='title'>Rick & Morty<br/>Memory Game</h1>
         <p className='description'>Get points by clicking on an image but don't click on any more than once!
         </p>
         <h3>Score: {score}</h3>
         <h3>Best-score: {bestScore}</h3>
         </header>
   )
}

export default Header
