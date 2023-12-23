import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Posts">Posts</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
