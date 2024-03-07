import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// react er duniyay function er ei ongsho ta k component bola hoy
// ei function components er bhitore html er moto dekhte je jinis gulo likha hoy egulo k bola hoy javascript XML short bhabe bola hoy jsx.
function App() {
return (
  // <></> eta k fragment ba kew kew empty tag ooo bole thake.
    <>
  <h1>Vite + React</h1>
  <Person></Person>
  <Person></Person>
  <Person></Person>
  <Person></Person>

  <Student></Student>
    </>
  )
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name : 'sakib' , age : 12}
    return  <h3>I am a {person.name} with : {age + money}</h3>
}
function Student(){
  // return er pashe jodi div ta na thake tahole se kintu undefined return kore dibe.e jhamela thek mukti paowar jonno amra () bracket use kore thaki
    return (
      // html er moto jeta amra likhtechi eta kintu html na etar nam holo jsx
    <div>
        <h3>This is a student</h3>
        <p>Name : </p>
        <p>Age : </p>

    </div>
    )
}

export default App
