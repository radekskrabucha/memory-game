import React from 'react'

const Card = ({item, handleClick, orderNumber}) => {
   const {name, image, id} = item
   const defaultImg = 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'
   return (
      <article style={{order: `${orderNumber}`}} className='card' onClick={() => handleClick(id)} >
         <img className='img' src={image? image : defaultImg} alt={name} />
         <h2 className='name'>{name}</h2>
      </article>
   )
}

export default Card
