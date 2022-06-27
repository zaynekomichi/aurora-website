import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const TopNavbar = () => {
    return(
      <div className='container-fluid text-white'>
        <Navbar collapseOnSelect  expand="sm" className="container-fluid text-white">
          <Container>
            <Navbar.Brand className="text-white" href="#home">Aurora</Navbar.Brand>
          </Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start">
            <Nav className="me-auto">
                <Nav.Link className="text-white" href = "/">Home</Nav.Link>
                <Nav.Link className="text-white" href = "/about_us">About</Nav.Link>
                <NavDropdown className="text-white" title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href = "management_systems">Management Systems</NavDropdown.Item>
                    <NavDropdown.Item href = "monitor_services">Monitor Services</NavDropdown.Item>
                    <NavDropdown.Item href = "web_services">Web Services</NavDropdown.Item>
                    <NavDropdown.Item href = "software_dev">Custom Software Development</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="text-white" href = "/pricing" >Pricing</Nav.Link>
                <Nav.Link className="text-white" href = "/roadmap" >Roadmap</Nav.Link>
                <Nav.Link className="text-white" href = "/careers" >Careers</Nav.Link>
                <Nav.Link className="text-white" href = "/support">Support</Nav.Link>
                <Nav.Link className="text-white" href = "/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
    )
}


export default TopNavbar