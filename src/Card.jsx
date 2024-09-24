import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div>{props.title}</div>
        {/* <img src={'./assets/${props.img}'}/> */}
        <img src={`/assets/${props.img}`} alt={props.title} />

        <div>{props.author}</div>
        <div>{props.genre}</div>

        <button> Click me </button>
    </div>
  )
}
export default Card