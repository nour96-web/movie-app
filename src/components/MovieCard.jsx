import React from 'react'
import { Button, Card } from 'react-bootstrap'
import RateFiltre from './RateFiltre'
import { Link } from 'react-router-dom'

const MovieCard = ({ el ,del }) => {
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.imgUrl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.descip}</Card.Text>
        <Card.Text className="guest">
              <RateFiltre rating={el.rating} /> 
            </Card.Text>
        <Button variant="danger" onClick={() => del(el.id)}>Delete</Button>
        <Link to={`/details/movie/${el.id}`}>
      <Button className="btn-details">More details</Button>
      </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard