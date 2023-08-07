import React from 'react'
import Container from './Container'
import Searchbar from './Searchbar'
import ResultGrid from './ResultGrid'
export default function Home() {
    const [heroes, setHeroes] = useState([])
  return (
    <Container>
        <h1>Search Marvel Heroes!</h1>
        <Searchbar setter={setHeroes}/>
        <ResultGrid>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </ResultGrid>
    </Container>
  );
}

