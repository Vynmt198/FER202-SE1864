import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNav() {
  return (
    <Navbar bg="light" data-bs-theme="light">

        <Container>
          

        <Navbar.Brand href="#home">
          <img
            src="https://www.xpressflower.com/Sitefinity/WebsiteTemplates/Xpressflower/App_Themes/Xpressflower/Images/branding.png" 
            width="130"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ marginRight: '5px' }}
          />
        </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Search</Nav.Link>
            <Nav.Link href="#pricing">Payment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
