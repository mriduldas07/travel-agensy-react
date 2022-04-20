import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = e =>{
    signOut(auth);
  }
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky='top'  variant="dark" style={{backgroundColor: 'gray'}}>
  <Container>
  <Navbar.Brand as={Link} to={`/`}>Travelers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about" variant="dark">About</Nav.Link>
      {
        user?
        <Nav.Link onClick={handleSignOut} as={Link} to="/login">
        <span className='text-danger'>Logout</span>
      </Nav.Link>

        :

        <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    );
};

export default Header;