import React from 'react'
import { useRef } from 'react';
import { fetchHeroes } from '../utils/fetchFromMarvel';

export default function Searchbar({setter}) {
    let input = useRef("");
    const handleClick = async (e) => {
        let value = input.current.value
        if (value === "") return 
        try{
            let heroes = await fetchHeroes(value)
            setter(heroes)
        } catch(err) {
            return console.error(err);
        }
    }
  return (
    <form>
        <input type="text" placeholder="Search Character..." ref={input}/>
        <button onClick={handleClick}>Search</button>
    </form>
  )
}
