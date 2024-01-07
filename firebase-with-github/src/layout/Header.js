import React, { useState, useContext } from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarText, NavbarToggler, Collapse } from "reactstrap"
import { Link } from "react-router-dom"
import { Usercontext } from "../context/Usercontext";

const Header = () => {
    const context = useContext(Usercontext);
    const [isOpen, setIsOpen] = useState(false);
    const Toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">My Gitfire App</Link>
            </NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : ""
            }</NavbarText>
            <NavbarToggler onClick={Toggle} />
            <Collapse navbar isOpen={isOpen}>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={()=>context.setUser(null)} className="text-white">
                                    LogOut
                                </NavLink>
                            </NavItem>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/Signup" className="text-white">
                                        SignUp
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Signin" className="text-white">
                                        SignIn
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }

                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;