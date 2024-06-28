import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import faqData from '../data/faq.json'

function Faq() {
    return (
        <Accordion defaultActiveKey="0" className="custom-accordion">
            {faqData.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default Faq;
