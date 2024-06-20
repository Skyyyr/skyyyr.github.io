import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const faqData = [
    {
        question: 'Question #1',
        answer: 'Lorem ipsum dolor sit amet.'
    },
    {
        question: 'Question #2',
        answer: 'Lorem ipsum dolor sit amet.'
    },
    {
        question: 'Question #3',
        answer: 'Lorem ipsum dolor sit amet.'
    },
    {
        question: 'Question #4',
        answer: 'Lorem ipsum dolor sit amet.'
    },
    {
        question: 'Question #5',
        answer: 'Lorem ipsum dolor sit amet.'
    },
    {
        question: 'Question #6',
        answer: 'Lorem ipsum dolor sit amet.'
    },
    {
        question: 'Question #7',
        answer: 'Lorem ipsum dolor sit amet.'
    },
    {
        question: 'Question #8',
        answer: 'Lorem ipsum dolor sit amet.'
    }
];

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
