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
                            <Link href="/home">
                                Home
                            </Link>
                            <Link href="/roadmap">
                                Roadmap
                            </Link>
                            <Link href="/patchnotes">
                                Patch Notes
                            </Link>
                            <Link href="/faq">
                                FAQ
                            </Link>
                            <Link href="/about">
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
