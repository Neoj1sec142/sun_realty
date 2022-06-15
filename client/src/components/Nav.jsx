import { useNavigate, Link } from 'react-router-dom'
import React from "react";
import Logout from './Logout'
// import "../styles/App.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavDrop = ({ loginStatus, user }) => {
    const navigate = useNavigate()
    let authenticatedOptions
    if(loginStatus){
        authenticatedOptions = (
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' style={{justifyContent: 'space-evenly'}} >
                <Navbar.Brand onClick={() => navigate('/home')}>Sun Realty</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'space-between'}}>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Link to='/logout'>Logout</Link>
                        {/* <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/home'>Home</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
    const publicOptions = (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' style={{justifyContent: 'space-evenly'}} >
            <Navbar.Brand onClick={() => navigate('/')}>Sun Realty</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className='mr-auto'>
                <Nav.Link href='/'>Get Started</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Navbar>
    )
    return(
    <header>
        {loginStatus ? authenticatedOptions : publicOptions}
    </header>
    )
}
export default NavDrop