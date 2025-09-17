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
          <Col>
            <MyCards></MyCards>
          </Col>
        </Row>
    </Container>
  )
}

export default Home