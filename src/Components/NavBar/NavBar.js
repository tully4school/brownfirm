import React from 'react'
import "./NavBar.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
function NavBar() {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">Firm History</Nav.Link>
                    <NavDropdown title="Criminal Defense" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Traffic Defense" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Civil Litigation</Nav.Link>
                    <NavDropdown title="Employment Law" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#home">Premises Liability</Nav.Link>
                    <Nav.Link href="#home">Blog</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className="phone-number d-lg-none">
                <h3 className="mb-0 d-flex align-items-center">
                    <a className="tel" href="tel:703-828-0900">703-828-0900</a>
                </h3>
            </div>
        </Navbar>
    )
}
export default NavBar