import React , { useState, useEffect }from 'react'
import Items from '../Items/Items'
import './CardList.scss'
import Search from '../header-search/Search'



export default function CardList  () {
    const [monsters, setMonster] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  

    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => res.json())
          .then((monsters) => {
            setMonster(monsters);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      let results = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchTerm);
      }, []);

     

        return (
            <div className='card-container'>
              <h1 className='titre'> Monsters Rolodex</h1>
              <Search   type='search' placeholder='Search monsters'value={searchTerm}
              onChange={handleChange}/>
              <div className='card'>
              {results.map(monster=>(
                  <Items key={monster.id} monster={monster}/>
              ))} 
              </div>
            </div>
        )
}
