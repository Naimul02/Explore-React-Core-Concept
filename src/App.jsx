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
  <Device name="Laptop"price ="55"></Device>
  <Device name="Mobile"price="17000"></Device>
  <Device name="watch" price="3000"></Device>
  <Device></Device>

  <Person></Person>
  {/* <Person></Person>
  <Person></Person>
  <Person></Person> */}

  <Student grade="7" score="99"></Student>
  <Student></Student>
  <Student></Student>
  <Developer></Developer>
    </>
  )
}

function Device(props){

    return <h2>This Device : {props.name} price : {props.price}</h2>
}
function Person(){
  const age = 25;
  const money = 20;
  const person = {name : 'sakib' , age : 12}
    return  <h3>I am a {person.name} with : {age + money}</h3>
}
const {grade , score} = {grade : '7' , score : '99'}
function Student(props){
  console.log(props)
  // return er pashe jodi div ta na thake tahole se kintu undefined return kore dibe.e jhamela thek mukti paowar jonno amra () bracket use kore thaki
    return (
      // html er moto jeta amra likhtechi eta kintu html na etar nam holo jsx
    <div className="student">
        <h3>This is a student</h3>
        <p>Name : </p>
        <p>Age : </p>

    </div>
    )
}

function Developer(){
  const developerStyle = {
      margin : '20px',
      padding : '20px',
      border : '2px solid purple',
      borderRadius : '10px'
  }
    return (
      // {developerStyle}
        <div style={ {
          margin : '20px',
          padding : '20px',
          border : '2px solid purple',
          borderRadius : '10px'
      }}>
            <h5>Devo Devo</h5>
            <p>Coding : </p>
        </div>
    )
}

export default App
