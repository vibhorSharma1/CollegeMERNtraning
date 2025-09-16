import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import MyCarosel from './Components/MyCarosel';


function MainPage() {
  return (
    <>
       <Container fluid>
           <Row>
              <Col><NavBar/></Col>
           </Row>
           <Row>
            <Col><MyCarosel/></Col>
           </Row>
       </Container>
    </>
  )
}

export default MainPage