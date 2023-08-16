import React from 'react'

function Menu() {
  return (
    <div>
        <a href="/catlist">List of Cats</a>
        <br/>
        <a href="/doglist">List of Dogs</a>
        <br/>
        <a href="/catlist/newcat">Create a new entry for Cat</a>
        <br/>
        <a href="/doglist/newdog">Create a new entry for Dog</a>
    </div>
  )
}

export default Menu