import React from 'react'
import './styles.css'
import Card from './Card'
import './App.css'
const App = () => {
  return (
    <div className="container" id='games-container'>
      <Card title="The Sorcerer's Stone" img="hp1.jpg"genre="Fantasy" author="J.K. Rowling"/>
      <Card title="Chamber of Secrets"  img="hp2.jpg" genre="Fantasy" author="J.K. Rowling"/>
      <Card title="Prisoner of Azkaban" img="hp3.jpg" genre="Fantasy" author="J.K. Rowling"/>
      <Card title="Harry Potter and The Order of The Phoenix" img="hp5.jpg"genre="Fantasy" author="J.K. Rowling"/>
      <Card title="Harry Potter and the Half Blood Prince" img="hp6.jpg"genre="Fantasy" author="J.K. Rowling"/>
      <Card title="Harry Potter and the Deathly Hollows" img="hp7.jpg"genre="Fantasy" author="J.K. Rowling"/>
      
    </div>
  )
}

export default App
