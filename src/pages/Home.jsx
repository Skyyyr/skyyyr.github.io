import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Image from "../components/Image"
import logo from "../assets/logo.png"

function Home() {
    const nav = useNavigate()

    const data = [
        {
            image: logo,
            title: "Roadmap",
            text: "Visit ROTF's Roadmap page to find out more.",
            buttonText: "Roadmap Page",
            buttonVariant: "primary",
            navLoc: "roadmap"
        },
        {
            image: logo,
            title: "Patches",
            text: "Keep up to date with ROTF's patches.",
            buttonText: "Patch Notes",
            buttonVariant: "primary",
            navLoc: "patchnotes"
        },
        {
            image: logo,
            title: "FAQ",
            text: "Visit ROTF's Frequently Asked Questions.",
            buttonText: "FAQs",
            buttonVariant: "primary",
            navLoc: "faq"
        },
        {
            image: logo,
            title: "About",
            text: "Get to know the ROTF team.",
            buttonText: "About Us Page",
            buttonVariant: "primary",
            navLoc: "about"
        }
    ]

    function navigateMe(location) {
        nav(`/${location}`)
    }

    const createContents = () => {
        return data.map((item, index) => (
            <Col key={index} lg={6} md={6} sm={12} className="p-3">
                <Image
                    image={item.image}
                    title={item.title}
                    text={item.text}
                    buttonText={item.buttonText}
                    buttonVariant={item.buttonVariant}
                    handleClick={() => navigateMe(item.navLoc)}
                />
            </Col>
        ));
    };

    // function createContents() {
    //     return data.map((item, index) => (
    //         <div key={index} className="col-lg-6 col-md-4 col-sm-12 p-3">
    //             <Image
    //                 image={item.image}
    //                 title={item.title}
    //                 text={item.text}
    //                 buttonText={item.buttonText}
    //                 buttonVariant={item.buttonVariant}
    //                 handleClick={() => navigateMe(item.navLoc)}
    //             />
    //         </div>
    //     ));
    // }

    return (
        <Container>
            <Row>
                <h1 className='text-center text-black'>
                    Return of the Force
                </h1>
                <p className='text-center text-black'>
                    This is where we should display images of the game and brief snippets of features
                </p>
                <div className="row text-center">
                    {createContents()}
                </div>
            </Row>
        </Container>
    )
}

export default Home