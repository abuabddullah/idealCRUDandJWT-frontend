import './NavigationBar.css';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CustomLink } from './CustomLink'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const NavigationBar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        toast.success('Logging out Successful', { id: 'logout' });
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fontLogo'>crud-jwt</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto navTag">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/products">Products</Nav.Link>
                        <Nav.Link as={CustomLink} to="/upProducts">Upload Products</Nav.Link>
                        


                    </Nav>
                    <Nav className='navTag'>
                        {
                            user ? <Nav.Link onClick={logout}>Log Out</Nav.Link> : <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                        }
                        {
                            user && <>
                            <Nav.Link eventKey={2} as={CustomLink} to="/orders">
                                My Orders
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={CustomLink} to="/user">
                                {user?.displayName}
                            </Nav.Link>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;