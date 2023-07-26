import React from 'react'

const Card = ({el}) => {
    return (
    <div className='card'>
        <h1>User Information</h1>
        <p>Name: {el.name}</p>
        <p>Email: {el.email}</p>
        <p>Phone: {el.phone}</p>
    </div>
    )
}

export default Card
