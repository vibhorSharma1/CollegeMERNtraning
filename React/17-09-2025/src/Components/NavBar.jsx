import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Login from './Login.jsx';
function NavBar() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="/">RDUS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          {
            isLoggedIn ? <Button className='ms-2' variant='outline-primary'>Welcome Sherrr</Button> :<Button variant='outline-primary' className='ms-2' onClick={handleShow} >Login</Button>
          }
          

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        
        <Modal.Body>
            <Login/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </Container>
      </Navbar>
     
    </>
  );
}

export default NavBar;