import React from 'react'
import '../header-search/Search.scss'



export default function Search (props) {


return(

<input placeholder={props.placeholder} onChange={props.onChange} />

)
}