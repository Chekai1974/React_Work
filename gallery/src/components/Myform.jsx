import React from 'react'

function Myform({addNewId}) {
    const handelSubmit = (e) => {
        e.preventDefault()
        const id = e.target.elements.id.value
        addNewId(id)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder='id' name='id' required/>
                <button className='btn' type="submit">GET</button>
            </form>
        </div>
    )
}

export default Myform