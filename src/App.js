import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Menu from './Component/Menu';
import Button from './Component/Button';
import Toggle from './Component/Toggle';
import Head from "./responsive/Head"
import Child from './Component/Child';
import Video from "./Component/Video"
import UseRef from './Useref';
function App() {
  const date=new Date()
  const[word,setWord]=useState("Eat")
  function handleClick(){
    setWord("Drink")
  }
  return (
    <div className='App'>
      <Header name="Anna" color="purple"/>
     <Sidebar greet="howday"/>
     <Menu greet="h1"/>
     <Button/>
     <Toggle/>
     <Head message={word+"at little lemon"}/>
     <button onClick={handleClick}>click me</button>
     <Child message={date.toLocaleTimeString}/>
      <Video/>
      <UseRef/>
    </div>
  );
}

export default App;
