import React from 'react'

function NewDog() {
    return (
        <div>
            <form action="/DogList" method='POST'>
                Name: <input type="text" name="name" />
                <br />
                Age: <input type="number" name="age" />
                <br />
                Description: <input type="text" name="description" />
                <br />
                Breed: <input type='text' name='breed' />
                <br />
                <input type="submit" name="" value='Create Entry' />
            </form>
        </div>
    )
}

export default NewDog