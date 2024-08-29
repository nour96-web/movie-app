import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import RateFiltre from './RateFiltre'

const Filter = ({ search , handleSearch, handleStar ,rateStar}) => {
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Reviews</Nav.Link>
            <Nav.Link href="#action4">Contact</Nav.Link>
          </Nav>
          <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", alignItems: "center"}}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={handleSearch}
            />
            
          </Form>
        
          <RateFiltre handleStar={handleStar} rating={rateStar}/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Filter