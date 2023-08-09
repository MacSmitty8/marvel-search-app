import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({id, thumbnail, name}) {
  return (
   <Link to ={`/${id}`}>
     <div className="card">
      <img src={thumbnail} alt="hero thumbnail" />
      <h2 className='card-name'>{name}</h2>
      </div>
   </Link>
  )
}
