import React from 'react'
import { Link } from 'react-router-dom'

export default function Animals({animals, handleAnimalDelete}) {
  return (
    <div>
      <h3>Animals List</h3>
      {animals.map((animal) => (
        <div key={animal.id}>
          <h4>{animal.name}</h4>
          <button>Edit</button>
          <button onClick={()=>handleAnimalDelete(animal.id)}>Delete</button>
        </div>
      ))}
      <Link to='/animals/new'>
        <button>Add a new Animal</button>
      </Link>
    </div>
  )
}
