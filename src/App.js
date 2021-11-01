import React, { useState } from 'react';
import Form from './components/Form'
import Cards from './components/Cards'

function App() {
  const [search, setSearch] = useState("")
  const [hero, setHero] = useState(null)

  const searching = ({value}) =>{
    setSearch(value)
  }

  const requestApi = async (e) =>{
    e.preventDefault()
    const token = '5240519915974601'
    const urlDir = `https://www.superheroapi.com/api.php/${token}/search/${search}`
    const response = await fetch(urlDir)
    const result = await response.json()
    setHero(result.results)
  }
  
  return (
    <div className="App">
      {
        <Form
          handlerSearch={searching}
          handlerSubmit={requestApi}
        />
      }
      {
        hero && hero.length > 0 ?
        hero.map(superHero => (
          <Cards
            key={superHero.id}
            name={superHero.name}
            image={superHero.image.url}
          />
        )):<h4>Nothing was found</h4>
      }
    </div>
  );
}

export default App;
