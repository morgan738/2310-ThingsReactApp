import { useState } from 'react'
import {thingsList} from './things'
import './App.css'


function App() {
  const [things, setThings] = useState(thingsList)
  const [selectedThing, setSelectedThing] = useState(null)
  
  function selectThing (id) {
    const theThing = things.find((thing) => {
      return thing.id === id
    })
    
    setSelectedThing(theThing)
   
  }
  
  return (
    <div>
      <h1>Hello world</h1>

      <ul>
       {
        things.map((thing) => {
          return(
            <li key={thing.id}>{thing.name} <button onClick={() => {selectThing(thing.id)}}>Select</button></li>
          )
        })
       
       }
      </ul>
      {
        selectedThing ? <h2>{selectedThing.id} {selectedThing.name}</h2> : null
      }
    </div>
   
  )
}

export default App
