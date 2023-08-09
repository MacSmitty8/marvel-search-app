import { useState } from 'react'
import React from 'react'
import Container from './Container'
import Searchbar from './Searchbar'
import Card from './Card'
import ResultGrid from './ResultGrid'

const IMAGE_SIZE = "portrait_fantastic"

export default function Home() {
    const [heroes, setHeroes] = useState([])

    let cards;

    if(heroes){
        cards = heroes.map((hero) => {
            <Card name={hero.name} id={hero.id} key={hero.id} thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}/>;
        })
    }

  return (
    <Container>
        <h1>Search Marvel Heroes!</h1>
        <Searchbar setter={setHeroes}/>
        <ResultGrid>
           {cards ? cards : ""}
        </ResultGrid>
    </Container>
  );
}

