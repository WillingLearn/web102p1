import React from 'react'
import './styles.css'
import Card from './Card'
import './App.css'
const App = () => {
  return (
    <div>
    <h1>Best Books of the 21st Century</h1>
    <div className="container" id='games-container'>
      
      <Card title="The Sorcerer's Stone" img="hp1.jpg"genre="Fantasy" bn="Book 1" author="J.K. Rowling"/>
      <Card title="Chamber of Secrets"  img="hp2.jpg" genre="Fantasy" bn="Book 2" author="J.K. Rowling"/>
      <Card title="Prisoner of Azkaban" img="hp3.jpg" genre="Fantasy" bn="Book 3" author="J.K. Rowling"/>
      <Card title="Harry Potter and The Order of The Phoenix" img="hp5.jpg" bn="Book 5" genre="Fantasy" author="J.K. Rowling"/>
      <Card title="Harry Potter and the Half Blood Prince" img="hp6.jpg"genre="Fantasy" bn="Book 6" author="J.K. Rowling"/>
      <Card title="Harry Potter and the Deathly Hollows" img="hp7.jpg"genre="Fantasy" bn="Book 7" author="J.K. Rowling"/>
      <Card title="Dune" img="dune.jpg" genre="Science Fiction" author="Frank Herbert"/>
      <Card title="1984" img="1984.jpg"genre="Science Fiction" author="George Orwell"/>
      <Card title="Fahrenheit 451" img="farenheit.jpeg" genre="Science Fiction" author="Rad Bradbury"/>
      <Card title="Hitchhiker's Guide to the Galaxy" img="hitchhiker.jpg" genre="Science Fiction" author="Douglas Adams"/>
    </div>
    </div>
  )
}

export default App
