import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';


export default class CustomNavbar extends Component {
    render () {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Hello World</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href='/Login' to='/Login'>
                        Login
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href='/News' to='/News'>
                        News
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href='/Save' to='/Save'>
                        Saved Articles
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} href='/dev' to='/dev'>
                        Dev
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}