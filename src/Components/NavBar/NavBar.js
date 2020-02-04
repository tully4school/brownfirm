import React from 'react'
import "./NavBar.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import { Switch, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
function NavBar() {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link
                        as={Link}
                        to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="/history">
                        Firm History
                    </Nav.Link>
                    <LinkContainer to="/criminal-defense">
                        <SplitButton
                            title="Criminal Defense"
                            id="basic-nav-dropdown"
                            activeClassName=""
                            as={Link}
                            to="/criminal-defense">
                            {['right'].map(direction => (
                                <LinkContainer to="/felonies-and-misdemeanors">
                                    <SplitButton
                                        drop={direction}
                                        activeClassName=""
                                        variant="secondary"
                                        title="Felonies & Misdemeanors"
                                        id={`dropdown-button-drop-right`}
                                        key={direction}
                                    >
                                        <Dropdown.Item
                                            eventKey="1"
                                            as={Link}
                                            to="/vafelonylaws">
                                            VA Felony Laws
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="2"
                                            as={Link}
                                            to="/va-felony-penalties">
                                            VA Felony Penalties
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            eventKey="3"
                                            as={Link}
                                            to="/va-misdemeanor-laws">
                                            VA Misdemeanor Laws
                                        </Dropdown.Item>
                                    </SplitButton>
                                </LinkContainer>
                            ))}
                            <NavDropdown.Item
                                as={Link}
                                to="/vafelonylaws">
                                Marijuana Possesion in Virginia
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/vafelonypenalties">
                                Possesion w/ Intent To Distribute Marijuana
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/vamisdameanorlaws">
                                Possesion of a Controlled Substance Virginia
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/theft-and-larceny">
                                Theft and Larceny
                            </NavDropdown.Item>
                        </SplitButton>
                    </LinkContainer>
                    <LinkContainer to="/Traffic-Defense">
                        <SplitButton
                            title="Traffic Defense"
                            id="basic-nav-dropdown"
                            activeClassName="">
                            <LinkContainer to="/Commercial-Drivers-In-Virginia">
                                <SplitButton
                                    drop="right"
                                    title="Commercial Drivers in Virginia">
                                    <Dropdown.Item
                                        eventKey="1"
                                        as={Link}
                                        to="/vafelonylaws">
                                        VA Commercial Drivers License Suspension
                                        </Dropdown.Item>
                                </SplitButton>
                            </LinkContainer>
                            <SplitButton
                                drop="right"
                                title="DUI / DWI Defense">
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Virginia-DUI-DWI-Laws">
                                    Virginia DUI / DWI Laws
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Virginia-DUI-DWI-Penalties">
                                    Virginia DUI / DWI Penalties
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Virginia DUI-DWI-Defense-Strategies">
                                    Virginia DUI / DWI Defense Strategies
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Virginia-DUI-and-DWI-FAQ">
                                    Virginia DUI and DWI FAQ
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Virginia-DUI-License-Suspension">
                                    Virginia DUI License Suspension
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Second-DUI-in-Virginia">
                                    Second DUI in Virginia
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Third-DUI-in-Virginia">
                                    Third DUI in Virginia
                                </Dropdown.Item>
                                <Dropdown.Item
                                    eventKey="1"
                                    as={Link}
                                    to="/Felony-DUI-in-Virginia">
                                    Felony DUI in Virginia
                                </Dropdown.Item>
                            </SplitButton>
                            <NavDropdown.Item
                                as={Link} to="Driving-Without-a-License-in-Virginia">
                                Driving Without a License in Virginia
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="Driving-With-a-Suspended-License-in-Virginia">
                                Driving With a Suspended License in Virginia
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="Eluding-the-Police">
                                Eluding the Police
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="Hit-and-Run">
                                Hit and Run
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="Racing">
                                Racing
                            </NavDropdown.Item>
                            <LinkContainer to="/Reckless-Driving">
                                <SplitButton
                                    title="Reckless-Driving"
                                    drop="right"
                                    activeClassName="">
                                    <Dropdown.Item
                                        eventKey="1"
                                        as={Link}
                                        to="/Reckless-Driving-Penalties">
                                        Reckless Driving Penalties
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        eventKey="1"
                                        as={Link}
                                        to="/Felony-Reckless-Driving">
                                        Felony Reckless Driving
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        eventKey="1"
                                        as={Link}
                                        to="/VA-Reckless-Driving-Defense-Strategies">
                                        VA Reckless Driving Defense Strategies
                                    </Dropdown.Item>
                                </SplitButton>
                            </LinkContainer>
                            <NavDropdown.Item
                                as={Link}
                                to="Speeding">
                                Speeding
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="Texting-And-Driving">
                                Texting And Driving
                            </NavDropdown.Item>
                            <LinkContainer to="/Virginia-Traffic-Laws">
                                <SplitButton
                                    title="Virginia Traffic Laws"
                                    drop="right"
                                    activeClassName="">
                                    <Dropdown.Item
                                        eventKey="1"
                                        as={Link}
                                        to="/Traffic-Tickets">
                                        Traffic Tickets
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        eventKey="1"
                                        as={Link}
                                        to="/Virginia-Traffic-Penalties">
                                        Virginia Traffic Penalties
                                    </Dropdown.Item>
                                </SplitButton>
                            </LinkContainer>
                        </SplitButton>
                    </LinkContainer>
                    <Nav.Link
                        as={Link}
                        to="Civil-Litigation">
                        Civil Litigation
                    </Nav.Link>
                    <LinkContainer to="/Employment-Law">
                        <SplitButton
                            title="Employment Law"
                            id="basic-nav-dropdown"
                            activeClassName="">
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Americans-with-Disabilities-Act">
                                Americans with Disabilities Act (“ADA”) and ADA Amendment Act (“ADA-AA”)
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Breach-of-Employment-Contract">
                                Breach of Employment Contract
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Discrimination-Harassment-and-Civil-Rights-Laws">
                                Discrimination, Harassment and Civil Rights Laws
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Family-And-Medical-Leave-Act">
                                Family And Medical Leave Act
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Northern-Virginia-Employment-Discrimination-Laws">
                                Northern Virginia Employment Discrimination Laws
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Virginia-Non-compete-Laws">
                                Virginia Non-compete Laws
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Virginia-Payment-And-Collection-Laws">
                                Virginia Payment And Collection Laws
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Virginia-Wrongful-Termination-Laws">
                                Virginia Wrongful Termination Laws
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Wage-And-Hour-Disputes">
                                Wage And Hour Disputes
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey="1"
                                as={Link}
                                to="/Whistleblower-Litigation-and-Retaliation">
                                Whistleblower Litigation and Retaliation
                            </Dropdown.Item>
                        </SplitButton>
                    </LinkContainer>
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
        </Navbar >
    )
}
export default NavBar