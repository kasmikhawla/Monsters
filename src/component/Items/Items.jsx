import React  from 'react'
import './Items.scss'


export default function Items (props) {
    


    return (
        <div className='Item-list'>
            <img src="https://robohash.org/1?set=set2" />
            <h1 >{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
        )
    }

