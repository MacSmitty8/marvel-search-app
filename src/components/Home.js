import { useState } from 'react'
import React from 'react'
import Container from './Container'
import Searchbar from './Searchbar'
import HeroDetails from './HeroDetails'



export default function Home() {
   // const [heroes, setHeroes] = useState([]);



  
           
        
    
    

  return (
    <Container>
        <h1>Search Marvel Heroes!</h1>
        <Searchbar />
       <HeroDetails />
    </Container>
  );
}

