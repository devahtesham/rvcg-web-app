import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./FAQSection.css"; // Import custom styles
import { FAQ_DATA } from "../../data/global";

const FAQSection = () => {
    return (
        <>
            <Container className="faq-sec mb-5">
                <Accordion className="custom-accordion">
                    {FAQ_DATA.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </>

    );
};

export default FAQSection;
