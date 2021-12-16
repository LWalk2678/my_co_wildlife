import React from 'react'
import { Link } from 'react-router-dom'

export default function Animals({animals}) {
  return (
    <div>
      <h3>Animals List</h3>
      {animals.map((animal) => (
        <h4>{animal.name}</h4>
      ))}
      <Link to='/animals/new'>
        <button>Add a new Animal</button>
      </Link>
    </div>
  )
}
