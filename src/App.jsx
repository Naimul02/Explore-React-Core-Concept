import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './ToDo'
import Actor from './Actor';
import Singer from './Singer'
import BooksStore from './BookStore'

// react er duniyay function er ei ongsho ta k component bola hoy
// ei function components er bhitore html er moto dekhte je jinis gulo likha hoy egulo k bola hoy javascript XML short bhabe bola hoy jsx.


// Ei App component ta amader main component
function App() {
const actors = ['Sakib' , 'Raj' , 'Jasim' , 'Rubel' , 'Salman Shah'];

const books = [
    {id : 1 , name :"physics" , price : 100},
    {id : 2 , name :"Math" , price : 120},
    {id : 3 , name :"Chemistry" , price : 130},
    {id : 4 , name :"Biology" , price : 140},
]
const singers = [
    {id : 1 , name : 'Dr. Mahfuzur Rahman' , age : 68},
    {id : 2 , name : 'Eva Rahman' , age : 38},
    {id : 3 , name : 'Shuvro Dev' , age : 58},
    {id : 4 , name : 'Pritom' , age : 28},
]





return (
  // <></> eta k fragment ba kew kew empty tag ooo bole thake.
    <>
  <h3>Vite + React</h3>
    <BooksStore books={books}></BooksStore>

  {
      singers.map(singer => <Singer singer={singer}></Singer>)
  }






  <Actor name={"Bappa Raz"}></Actor>

  {
      actors.map(actor => <Actor name={actor}></Actor>)
  }

  {/* <Todo 
  task="Learn React"
   isDone={true}>
   </Todo>
  <Todo 
  task="Explore Core Concepts"
  isDone={false}></Todo>
  <Todo
   task="Try JSX"
   isDone={true}>
   </Todo> */}


  {/* <Device name="Laptop"price ="55"></Device>
  <Device name="Mobile"price="17000"></Device>
  <Device name="watch" price="3000"></Device>
  <Device></Device>

  <Person></Person>
  <Person></Person>
  <Person></Person>
  <Person></Person>

  <Student grade="7" score="99"></Student>
  <Student grade={12} score="85"></Student>
  <Student></Student>
  <Developer></Developer> */}
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
// const {grade , score} = {grade : '7' , score : '99'}
function Student({grade=1 , score=0}){
  // console.log(props)
  // return er pashe jodi div ta na thake tahole se kintu undefined return kore dibe.e jhamela thek mukti paowar jonno amra () bracket use kore thaki
    return (
      // html er moto jeta amra likhtechi eta kintu html na etar nam holo jsx
    <div className="student">
        <h3>This is a student</h3>
        <p>Class : {grade} </p>
        <p>Score : {score} </p>

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
