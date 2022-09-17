import React from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/nav.css'
const NavB = () => {
    const navigate = useNavigate()
    let authenicatedOptions = (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{justifyContent: 'space-evenly'}}>
        <Navbar.Brand onClick={() => navigate('/')}>Meredith Hanna</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'space-between'}}>
                <Nav className="mr-auto" style={{textAlign: 'center'}}>
                <Nav.Link href='/main'>Home</Nav.Link>
                {/* <Nav.Link href={`/profile/${user.user_id}`}>Profile</Nav.Link> */}
                <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
                <Nav.Link href='/store'>Merch</Nav.Link>
                <Nav.Link href='/w'>Bookings & Submissions</Nav.Link>
                <Nav.Link href='/blog'>Blog</Nav.Link>
                <Nav.Link href='/contact'>Contact Info</Nav.Link>
                {/* <Nav.Link href={`/profile/${user.id}`}>Profile</Nav.Link> */}
                {/* <NavDropdown title="Toolbelt" id="collasible-nav-dropdown" >
                    <NavDropdown.Item id='d-item' href="/python">~ Python / Django ~</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item id='d-item' href="/js">~ JavaScript ~</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item id='d-item' href="/react">~ React ~</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item id='d-item' href="/redux">~ Redux ~</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item id='d-item' href="/sql">~ SQL / Sequelize / Express ~</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item id='d-item' href="/bootstrap">~ Bootstrap / React-Bootstrap ~</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item id='d-item' href="/other">~ Other ~</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Nav style={{textAlign: 'center'}}>
                {/* <Nav.Link href="/about">About</Nav.Link> */}
                <Link className="logg" to="/logout">Log Out</Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )



    return(
        <div>{authenicatedOptions}</div>
    )
}

export default NavB