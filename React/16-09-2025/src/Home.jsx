import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';

function Home() {
  return (
    <>
        <Container fluid="lg">
            <Row style={{minHeight:"100px"}}>
                <Col className="bg-success">Col 1</Col>
                <Col className="bg-primary">Col 2</Col>
            </Row>
            <Row className="mt-3" style={{minHeight:"100px"}}>
                <Col className="bg-success" md={8} lg={6}>Col 1</Col>
                <Col className="bg-primary" md={4} lg={6}>Col 2</Col>
            </Row>
            <Row className="mt-3" style={{minHeight:"100px"}}>
                <Col className="bg-success" >Col 1</Col>
                <Col className="bg-primary" lg={6}>Col 2</Col>
                <Col className="bg-danger" >Col 2</Col>
            </Row>
            <Row className="mt-3" style={{minHeight:"100px"}}>
                <Col className="bg-success" md={3} lg={6}>Col 1</Col>
                <Col className="bg-primary" md={3} lg={6}>Col 2</Col>
                <Col className="bg-danger" md={3} lg={6}>Col 2</Col>
                <Col className="bg-secondary" md={3} lg={6}>Col 2</Col>
            </Row>
            <Row className="mt-3" style={{minHeight:"100px"}}>
                <Col className="bg-success" sm={2} md={3} lg={6}>Col 1</Col>
                <Col className="bg-danger" sm={2} md={3} lg={6}>Col 2</Col>
                <Col className="bg-primary" sm={2} md={3} lg={6}>Col 2</Col>
                <Col className="bg-danger" sm={2} md={3} lg={6}>Col 2</Col>
                <Col className="bg-secondary" sm={2} md={3} lg={6}>Col 2</Col>
                <Col className="bg-danger" sm={2} md={3} lg={6}>Col 2</Col>
            </Row>
            <Row className='mt-3' style={{minHeight:"100px"}}>
                <Col className='bg-success' md={8} lg={6}></Col>
                <Col className='bg-primary' md={4}></Col>
            </Row>
        </Container>
    </>
  )
}

export default Home