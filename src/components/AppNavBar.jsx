import {Navbar, Nav, Container, Image} from 'react-bootstrap'
import logo from "../assets/logo.png"

function AppNavbar(props) {
    return (
        <div className={'navbar-div'}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand>
                        <Image
                        alt=""
                        src={logo}
                        width={30}
                        height={30}
                        roundedCircle
                        />{' '}
                        SWG:ROTF
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link href="/roadmap">
                                Roadmap
                            </Nav.Link>
                            <Nav.Link href="/patchnotes">
                                Patch Notes
                            </Nav.Link>
                            <Nav.Link href="/faq">
                                FAQ
                            </Nav.Link>
                            <Nav.Link href="/about">
                                About Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNavbar