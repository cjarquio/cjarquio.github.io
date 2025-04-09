import React, { setState, useState } from 'react';
import {
    Navbar, Nav, NavbarToggler, Collapse, NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div>
            <Navbar dark expand="md">
                <div className="container homeText">
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/projects'><span className="fa fa-code fa-lg"></span> Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/resume'><span className="fa fa-file fa-lg"></span> Resume</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
}


export default Header;