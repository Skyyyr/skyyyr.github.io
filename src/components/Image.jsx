import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Image({image, title, text, buttonText, buttonVariant, handleClick}) {

    if (!text) {
        text = "PLACE HOLDER PLACE HOLDER PLACE HOLDER"
    }

    if (!title) {
        title = "PLACE HOLDER TITLE"
    }

    return (
        <Card className='image-container'>
            <Card.Img variant="top" src={image} />
            <Card.Body className=''>
                <div>
                    <Card.Title className='text-black'>
                        {title}
                    </Card.Title>
                    <Card.Text className='text-black card-body'>
                        {text}
                    </Card.Text>
                </div>
                <Button className='card-button' variant="primary" onClick={handleClick}>
                    {buttonText}
                </Button>
            </Card.Body>
        </Card>
    )

}

export default Image 