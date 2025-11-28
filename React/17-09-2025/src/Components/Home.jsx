import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carosel from './Carosel.jsx'
import MyCards from './MyCards.jsx'

function Home() {
  return (
    <Container fluid>
        <Row>
            <Col>
                <Carosel></Carosel>
            </Col>
        </Row>
        <Row>
          
            <MyCards></MyCards>
        </Row>
    </Container>
  )
}

export default Home