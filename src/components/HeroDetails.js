import React from 'react'

function HeroDetails({ info }) {
  // const info1 = [
  //   // 1, 2, 3, 4, 5
  // ]
  console.log(info);
  const loaded = () => {
    return (
      <>
        <h1>{info.name}</h1>
        <h2>{info.aka}</h2>
        <p>{info.descrption}</p>
        <p>{info.powers}</p>
        <p>{info.quotes}</p>
        <p>{info.creators}</p>
      </>
    );
  };
  const loading = () => {
    return <h1>No Hero to display</h1>
    
  }
  return info? loaded() : loading()
}
export default HeroDetails