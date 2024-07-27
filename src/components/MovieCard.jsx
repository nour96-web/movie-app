import React from 'react'
import { Button, Card } from 'react-bootstrap'
import RateFiltre from './RateFiltre'

const MovieCard = ({ el ,del }) => {
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imgUrl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.descip}</Card.Text>
        <Card.Text>
              <RateFiltre rating={el.rating} /> 
            </Card.Text>
        <Button variant="danger" onClick={() => del(el.id)}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard