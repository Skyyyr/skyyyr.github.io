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
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                            <Link to="/roadmap" className="nav-link">
                                Roadmap
                            </Link>
                            <Link to="/patchnotes" className="nav-link">
                                Patch Notes
                            </Link>
                            <Link to="/faq" className="nav-link">
                                FAQ
                            </Link>
                            <Link to="/about" className="nav-link">
                                About Us
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default AppNavbar
