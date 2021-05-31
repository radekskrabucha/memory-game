import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import Header from './components/Header'
import GameOver from './components/GameOver'

const App = () => {
  const [items, setItems] = useState([])
  const [clickedItems, setClickedItems] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)
  const [loading, setLoading] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [level, setLevel] = useState(4)

  const baseUrl = 'https://rickandmortyapi.com/api/character/'

  const handleClick = (id) => {
    if(clickedItems.includes(id)) {
      setIsGameOver(true)
      return
    }
    setClickedItems([...clickedItems, id])
    setScore((prevScore) => prevScore + 1)
  }

  const resetGame = () => {
    setLevel(4) 
    setScore(0)
    setClickedItems([])
    setIsGameOver(false)
  }

  const nextLevel = () => {
    setLevel(level + 1)
    setClickedItems([])
    setIsGameOver(false)
  }

  const fetchItems = async () => {
    setLoading(true)

    const arr = []
    for (let i=1;i<=level;i++) {
      arr.push(i)
    }
    const arrRandom = arr.map(item => {
      const randomNumber = Math.floor(Math.random()*672) + 1
      return randomNumber
    })

    const params = arrRandom.join(',')
    const response = await fetch(`${baseUrl}${params}`)
    const data = await response.json()
    setItems(data)
    setLoading(false)
  } 

  useEffect(() => {
    if(clickedItems.length === level) {
      setIsGameOver(true)
    }
  },[clickedItems, level])

  useEffect(() => {
    fetchItems()
  }, [level])

  useEffect(() => {
    if(score > bestScore) {
      setBestScore(score)
    }
  },[score, bestScore])

  if(loading) {
    return (
      <>
        <Header score={score} bestScore={bestScore} />
        <section className='container'>
          <h2 className='loading'>loading...</h2>
        </section>
      </>
    )
  }

  if(isGameOver) {
    return (
      <>
        <Header score={score} bestScore={bestScore} />
        <section className='container'>
          <GameOver resetGame={resetGame} clickedItems={clickedItems} level={level} nextLevel={nextLevel} setLevel={setLevel} />
        </section>
      </>
    )
  }

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <section className="container">
        {items.map((item) => {
        const orderNumber = Math.floor(Math.random() * 12)
        return <Card key={item.id} item={item} handleClick={handleClick} orderNumber={orderNumber} />
      })}
      </section>
    </div>
  )
}

export default App