import React from 'react'
import { useState } from 'react'

export default function Searchbar() {
    let input = useState("");
  return (
    <form>
        <input type="text" placeholder="Search Character..." ref={input}/>
        <button>Search</button>
    </form>
  )
}
