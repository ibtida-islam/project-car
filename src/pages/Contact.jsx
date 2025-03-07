// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/CommonSection";

// import "../styles/contact.css";

// const socialLinks = [
//     {
//         url: "#",
//         icon: "ri-facebook-line",
//     },
//     {
//         url: "#",
//         icon: "ri-instagram-line",
//     },
//     {
//         url: "#",
//         icon: "ri-linkedin-line",
//     },
//     {
//         url: "#",
//         icon: "ri-twitter-line",
//     },
// ];

// const Contact = () => {
//     return (
//         <Helmet title="Contact">
//             <CommonSection title="Contact" />
//             <section>
//                 <Container>
//                     <Row className="mb-4">
//                         <Col lg="7" md="7">
//                             <h6 className="fw-bold mb-4 blue">Get In Touch</h6>

//                             <Form>
//                                 <FormGroup className="contact__form">
//                                     <Input placeholder="Your Name" type="text" />
//                                 </FormGroup>
//                                 <FormGroup className="contact__form">
//                                     <Input placeholder="Email" type="email" />
//                                 </FormGroup>
//                                 <FormGroup className="contact__form">
//                                     <textarea
//                                         rows="5"
//                                         placeholder="Message"
//                                         className="textarea"
//                                     ></textarea>
//                                 </FormGroup>

//                                 <button className=" contact__btn" type="submit">
//                                     Send Message
//                                 </button>
//                             </Form>
//                         </Col>

//                         <Col lg="5" md="5">
//                             <div className="contact__info">
//                                 <h6 className="fw-bold blue">Contact Information</h6>
//                                 <p className="section__desc mb-0">
//                                     Saltlake,Kolkata, India
//                                 </p>
//                                 <div className=" d-flex align-items-center gap-2">
//                                     <h6 className="fs-6 mb-0 blue">Phone:</h6>
//                                     <p className="section__desc mb-0">+0995345875365</p>
//                                 </div>

//                                 <div className=" d-flex align-items-center gap-2">
//                                     <h6 className="mb-0 fs-6 blue">Email:</h6>
//                                     <p className="section__desc mb-0">eg@gmail.com</p>
//                                 </div>

//                                 <h6 className="fw-bold mt-4 blue">Follow Us</h6>

//                                 <div className=" d-flex align-items-center gap-4 mt-3">
//                                     {socialLinks.map((item, index) => (
//                                         <Link
//                                             to={item.url}
//                                             key={index}
//                                             className="social__link-icon"
//                                         >
//                                             <i class={item.icon}></i>
//                                         </Link>
//                                     ))}
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </Helmet>
//     );
// };

// export default Contact;

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { useState } from 'react';
import axios from 'axios';

import "../styles/contact.css";

const socialLinks = [
    {
        url: "#",
        icon: "ri-facebook-line",
    },
    {
        url: "#",
        icon: "ri-instagram-line",
    },
    {
        url: "#",
        icon: "ri-linkedin-line",
    },
    {
        url: "#",
        icon: "ri-twitter-line",
    },
];



const Contact = () => {

    
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [status, setStatus] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                // const response = await axios.post('http://localhost:5000/api/contact', { name, email, message });

                await axios.post('http://localhost:5000/api/contact', { name, email, message });
                setStatus('Message sent successfully!');
            } catch (error) {
                setStatus('Error sending message');
            }
    
            // Reset form after submission
            setName('');
            setEmail('');
            setMessage('');
        };
    




    return (
        <Helmet title="Contact">
            <CommonSection title="Contact" />
            <section>
                <Container>
                    <Row className="mb-4">
                        <Col lg="7" md="7">
                            <h5 className="fw-bold mb-4 blue">Get In Touch</h5>

                            <Form onSubmit={handleSubmit}>

                                <FormGroup className="contact__form">
                                    <Input placeholder="Your Name" type="text" value={name}
                                     onChange={(e) => setName(e.target.value)} required/>
                                </FormGroup>

                                <FormGroup className="contact__form">
                                    <Input placeholder="Email" type="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} required/>
                                </FormGroup>

                                <FormGroup className="contact__form">
                                    <textarea
                                        rows="5"
                                        placeholder="Message"
                                        className="textarea"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)} required/>
                                </FormGroup>

                                <button className=" contact__btn" type="submit">
                                    Send Message
                                </button>
                            </Form>
                        </Col>



                        <Col lg="5" md="5">
                            <div className="contact__info">
                                <h6 className="fw-bold blue">Contact Information</h6>
                                <p className="section__desc mb-0">
                                    Saltlake,Kolkata, India
                                </p>
                                <div className=" d-flex align-items-center gap-2">
                                    <h6 className="fs-6 mb-0 blue">Phone:</h6>
                                    <p className="section__desc mb-0">+91 9782563478</p>
                                </div>

                                <div className=" d-flex align-items-center gap-2">
                                    <h6 className="mb-0 fs-6 blue">Email:</h6>
                                    <p className="section__desc mb-0">wheelquest@gmail.com</p>
                                </div>

                                <h6 className="fw-bold mt-4 blue">Follow Us</h6>

                                <div className=" d-flex align-items-center gap-4 mt-3">
                                    {socialLinks.map((item, index) => (
                                        <Link
                                            to={item.url}
                                            key={index}
                                            className="social__link-icon"
                                        >
                                            <i class={item.icon}></i>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;