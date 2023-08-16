import React from 'react'

function DogList(props) {
  const dogs = props.dogs
  return (
    <div>
      {dogs.map((dog, i) => {
        return (
          <div key={i}>
            <a href={`/doglist/${dog._id}`}>{dog.name}</a>
            <br />
            <a href={`/doglist/${dog._id}/edit`}>Edit</a>
            <form action={`doglist/${dog._id}?_method=DELETE`} method='POST'>
              <input type='submit' value='Delete' />
            </form>
          </div>
        )
      })}
      <a href="/">Back to Menu</a>
      <br />
      <a href="/doglist/newdog">Create New Entry</a>
    </div>
  )
}

export default DogList