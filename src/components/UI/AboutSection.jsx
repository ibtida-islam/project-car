import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../../styles/about-section.css';
import aboutImg from "../../assets/all-images/cars-img/pexels-mikebirdy-112452.png";

const AboutSection = ({ aboutClass }) => {
    return (
        <section className='about__section' style={aboutClass === "aboutPage" ? { marginTop: "0px" } : { marginTop: "280px" }}>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__section-content">
                            <h4 className="section__subtitle">About Us</h4>
                            <h2 className="section__title">Welcome to car rent service</h2>
                            <p className='section__desc'>
                            A car rental system is a service that allows customers to rent vehicles for a specified period, offering a convenient and flexible alternative to owning a car. Whether for a business trip, vacation, or an emergency need, car rental systems provide a wide range of vehicles—from economy cars to luxury models—designed to suit various customer preferences and requirements. These systems streamline the booking process, often with online platforms that enable users to select, reserve, and pay for their rental cars with ease. In addition to offering a variety of vehicles, car rental services also ensure vehicle maintenance, customer support, insurance options, and additional services such as GPS or child seats. With a car rental system, customers can enjoy the freedom of driving without the long-term commitment of owning a car.

                            </p>
                            <div className="about__section-item d-flex align-items-center">

                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i> Wide Vehicle Selection
                                </p>

                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i> Flexible Rental Duration
                                </p>
                            </div>

                            <div className="about__section-item d-flex align-items-center">
                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i>Online Booking
                                </p>

                                <p className='section__desc d-flex align-items-center gap-2'>
                                    <i class="ri-checkbox-circle-line"></i> Maintenance and Support
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection
