import React from 'react'
import Card from './Card'

export default function ListBox({list}) {
    const allGroceries = list.map(item => 
        <Card
        key={item.id}
        item={item.name}
        amount={item.amount}

    /> )
  return (
    <div className='box'>
        {allGroceries}
    </div>
    
  )
}
