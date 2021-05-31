import React from 'react'

const GameOver = ({resetGame, nextLevel, level, clickedItems}) => {
   return (
      <article className='win-container'>
         {
               clickedItems.length === level?
               <>
                  <h2 className='win-msg'>You win!</h2>
                  <button onClick={nextLevel} className='btn'>Next level</button>
               </>:
               <>
                  <h2 className='win-msg'>You lost... try one more time</h2>
                  <button onClick={resetGame} className='btn'>Play again</button>
               </>
            }
      </article>
   )
}

export default GameOver
