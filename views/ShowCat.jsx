import React from 'react'

function ShowCat(props) {
  const cat = props.cat
  return(
    <div>
        <h1>Name: {cat.name}</h1>
        <h4>Age: {cat.age}</h4>
        <h3>Had First Checkup: {cat.HadFirstCheckUp ? "Yes":"No"}</h3>
        <h4>Description: {cat.description}</h4>
        <a href="/catlist">Back to List</a>
    </div>
  )
}

export default ShowCat