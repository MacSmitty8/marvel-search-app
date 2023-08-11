import React from 'react'
//import { useRef } from 'react';
import { useState } from 'react';
import HeroDetails from './HeroDetails';
//require("dotenv").config()

// const REACT_APP_API_KEY = '98c39dba3c12b648fd8ca6b237ab5181'
// const REACT_APP_PRIVATE_KEY = 'a1e0d6f45e8e5fc060b0e5344fec7f4ece392521'
function Searchbar() {
    const [form, setForm] = useState({
        searchTerm: ''
    });
    const [info, setInfo] = useState({

    })
    //let input = useState("");
    const handleChange = (e) => {
        //console.log(e.target.value)
        setForm({
            ...form,
            searchTerm: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // heroSearch(form.searchTerm);
        fetchHero()
    }
    const fetchHero = async () => {
        const url =`https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?q=${form.searchTerm}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7de7e6611emshc6288c8e83c04cap1b282cjsn6c7fccaeea66',
                'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setInfo(result);
        } catch (error) {
            console.error(error);
        }
    }
    // const handleClick = async (e) => {
    //     let value = input.current.value;
    //     if (value === "") return;

    //     try{
    //         let heroes = await fetchHero(value)
    //         setter(heroes)
    //     } catch(err) {
    //         return console.error(err);
    //     }
    // }
    return (
        // <form>
        //     <input type="text" placeholder="Search Character..." ref={input}/>
        //     <button onClick={handleClick}> Search </button>
        // </form>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={form.searchTerm} onChange={handleChange} placeholder='Search a Character.' />
                <input type="submit" value="submit" />
            </form>
            <HeroDetails info={info}/>
        </div>
    )
}
export default Searchbar
//get list of characters to render