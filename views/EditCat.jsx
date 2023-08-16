import React from 'react'

function EditCat(props) {
    const cat = props.cat
    return (
        <div>
            <form action={`/catlist/${cat._id}?_method=PUT`} method='POST'>
                Name: <input type="text" name="name" defaultValue={cat.name} />
                <br />
                Age: <input type="number" name="age" defaultValue={cat.age} />
                <br />
                HadFirstCheckUp: {cat.HadFirstCheckUp ?
                    (<input type="checkbox" name="HadFirstCheckUp" defaultChecked />): 
                    (<input type="checkbox" name="HadFirstCheckUp" />)}
                <br />
                Description: <input type="text" name="description" defaultValue={cat.description} />
                <br />
                <input type="submit" value='Submit Changes' />
            </form>
        </div>
    )
}

export default EditCat