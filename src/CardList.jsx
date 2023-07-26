import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const CardList = () => {
    const [persons, setpersons] = useState([])
    useEffect(() => {
        (async()=>{
            try {
                let result= await axios.get("https://jsonplaceholder.typicode.com/users");
                setpersons(result.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])
    
    return (
    <div className='cardlist'>
        
        {persons.map(el=><Card key={el.id} el={el} />)}
    </div>
    )
}

export default CardList
