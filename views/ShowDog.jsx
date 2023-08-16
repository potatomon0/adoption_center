import React from 'react'

function ShowDog(props) {
    const dog = props.dog
    return (
        <div>
            <h1>Name: {dog.name}</h1>
            <h3>Age: {dog.age}</h3>
            <h4>Description: {dog.description}</h4>
            <h4>Breed: {dog.breed}</h4>
            <a href="/doglist">Back to List</a>
        </div>
    )
}

export default ShowDog