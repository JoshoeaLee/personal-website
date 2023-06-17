import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar className='mt-0 w-100' collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#header" className='smoothscroll'>&#60;Joshua Lee/&#62;</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link href="#about" className='smoothscroll'>About Me</Nav.Link>
            <Nav.Link href="#projects" className='smoothscroll'>Projects</Nav.Link>
            <Nav.Link href="#experience" className='smoothscroll'>Experience</Nav.Link>
            <Nav.Link href='#contact' className='smoothscroll'>Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
//mim