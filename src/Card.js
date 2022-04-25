import React from 'react'

export default function Card({item, amount}) {
  return (
    <div className='card'>
        <h1>{item}</h1>
        <h2>{amount}</h2>
    </div>
  )
}
