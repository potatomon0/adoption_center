import React from 'react'

function NewCat() {
  return (
    <div>
        <form action="/catlist" method='POST'>
            Name: <input type="text" name="name"/>
            <br/>
            Age: <input type="number" name="age"/>
            <br/>
            HadFirstCheckUp: <input type="checkbox" name="HadFirstCheckUp" />
            <br/>
            Description: <input type="text" name="description"/>
            <br/>
            <input type="submit" name="" value='Create Entry'/>
        </form>
    </div>
  )
}

export default NewCat