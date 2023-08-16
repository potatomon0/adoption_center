import React from 'react'

function CatList(props) {
    const cats = props.cats
    return (
        <div>
            {cats.map((cat, i) => {
                return (
                        <div key={i}>
                            <a href={`/catlist/${cat._id}`}>{cat.name}</a>
                            <br />
                            <a href={`/catlist/${cat._id}/edit`}>Edit</a>
                            <form action={`/catlist/${cat._id}?_method=DELETE`} method='POST'>
                                <input type='submit' value='Delete' />
                            </form>
                        </div>
                )
            })}
            <a href="/">Back to Menu</a>
            <br />
            <a href="/catlist/newcat">Create New Entry</a>
        </div>
    )
}

export default CatList