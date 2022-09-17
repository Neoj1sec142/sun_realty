import React from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

const NavB = () => {
    const navigate = useNavigate()
    const user_id = localStorage.getItem('user_id')
    let authenicatedOptions;
    if(user_id){
        authenicatedOptions = (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg='dark' style={{justifyContent: 'space-evenly'}}>
        <Navbar.Brand onClick={() => navigate('/main')}>Sun Realty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'space-between'}}>
                <Nav className="mr-auto" style={{textAlign: 'center'}}>
                <Nav.Link href='/main'>Home</Nav.Link>
                {/* <Nav.Link href={`/profile/${user.user_id}`}>Profile</Nav.Link> */}
                
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
    }

    const publicOptions = (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg='dark' style={{justifyContent: 'space-evenly'}}>
          <Navbar.Brand onClick={() => navigate('/login')}>Sun Realty</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'space-between'}}>
            <Nav className="mr-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )

    return(<div>{user_id ? authenicatedOptions : publicOptions}</div>)
}

export default NavB