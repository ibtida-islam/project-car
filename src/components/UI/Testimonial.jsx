import React from 'react'
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">

                <p className='section__desc'>
                From the moment I made my reservation to the drop-off of the car,jorden provided exceptional service. 
                They made sure I understood everything about the rental agreement and even offered helpful tips about the local area.
                 The car was perfect for my trip, and I truly appreciate jorden's attention to detail. Highly recommend!
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="s mb-0 mt-3">John Cena</h6>
                        <p className='section__desc'>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className='section__desc'>
                I had the pleasure of renting a car from aladin .From the moment I made the reservation, they were incredibly responsive and helpful, 
                answering all my questions. When I picked up the car, it was clean, well-maintained, 
                and ready to go. aladin ensured that the whole process was seamless, making my trip stress-free. 
                I will definitely be coming back!
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="s mb-0 mt-3">Jhon Doe</h6>
                        <p className='section__desc'>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className='section__desc'>
                I had a fantastic experience renting a car from suman. They were extremely professional, 
                and the process was incredibly efficient. The car was in great condition, and I felt confident that
                 I was getting the best value for my money. I highly recommend suman 
                 for anyone looking for a reliable car rental experience!
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="s mb-0 mt-3">Jhon Doe</h6>
                        <p className='section__desc'>Customer</p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p className='section__desc'>
                I’ve rented cars from several places, but the service I received from debendhu was outstanding.
                 They took the time to explain all the rental options and ensured I chose the best one for my needs. 
                 The car was spotless, and debendhu went above and beyond to make sure I was comfortable with everything. 
                 I’ll definitely rent from them again!
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                    <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

                    <div>
                        <h6 className="s mb-0 mt-3">Jhon Doe</h6>
                        <p className='section__desc'>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>

    )
}

export default Testimonial
