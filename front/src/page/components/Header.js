import {Container, Nav, Navbar} from 'react-bootstrap'
import "../../style/header.css"
import $ from 'jquery'

function Header() {

  return (
    <Navbar>
          <Container className='header'>
          <Navbar.Brand href="/main">W!SH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='link1' className='link' href="/list" >조회</Nav.Link>
            <Nav.Link id='link2' className='link' href="/new">생성</Nav.Link>
            <Nav.Link className='out' href="/">로그아웃</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default Header;