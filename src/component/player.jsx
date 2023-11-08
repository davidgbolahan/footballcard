import React from 'react'
import Card from 'react-bootstrap/Card';
import './player.css'

const Player = ({playerName, image, logo, team, nationality, age, jerseyNumber}) => {
  return (
    <>
    <div className='player'>
         <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={image} />
           <Card.Body>
              <Card.Title className='playerProfile team'>{team}</Card.Title>
              <Card.Title className='playerProfile playerName'>{playerName}</Card.Title>
              <Card.Title className='playerProfile age'>{age}</Card.Title>
              <Card.Title className='playerProfile jerseyNumber'>{jerseyNumber}</Card.Title>
           </Card.Body>
        </Card>
    </div>
    </>
  )
}

export default Player
