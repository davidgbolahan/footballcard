import React from 'react'
import Card from 'react-bootstrap/Card';
import './Player.css'

const Player = ({playerName, image, logo, team, nationality, age, jerseyNumber}) => {
  return (
    <div>
         <Card style={{ width: '18rem', height: '25rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Img className='logo' variant="top" src={logo} />
      <Card.Body>
        <Card.Title className='playerProfile team'>{team}</Card.Title>
        <Card.Title className='playerProfile playerName'>{playerName}</Card.Title>
        <Card.Title className='playerProfile age'>{age}</Card.Title>
        <Card.Title className='playerProfile jerseyNumber'>{jerseyNumber}</Card.Title>
    
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player
