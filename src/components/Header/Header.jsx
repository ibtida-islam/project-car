import React, { useRef } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink ,useNavigate} from "react-router-dom";
import '../../styles/header.css';
import {UserButton } from "@clerk/clerk-react";

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/cars',
    display: 'Cars'
  },
  {
    path: '/blogs',
    display: 'Blogs'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]

const Header = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const handleSOSClick = () => {
    navigate('/sos'); // Navigate to the SOS page
  };

  
  return <header className="header">

    {/* ========================================================header top======================================================== */}
    <div className="header__top">
      <Container>
        <Row>

          <Col lg='6' md='6' sm='6'>
            <div className="header_top_left">
              <span>Need Help?</span>
              <span className='header_top_help'>
                <i class="ri-phone-fill"></i>+91 9782563478
              </span>
              <div>
              <span>{/* SOS Button */}
                    <button className="sos_btn" onClick={handleSOSClick}>
                      <i class="ri-heart-pulse-line"></i> SOS
                    </button>
                  </span>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6' sm='6'>
            <div className="header_top_right d-flex align-items-center justify-content-end gap-1">
            
            <UserButton className="d-flex align-items-center"/>
            
             
                </div>
            
          </Col>

        </Row>
      </Container>
    </div>

    {/* =======================================================header middle========================================================= */}
    <div className="header__middle">
      <Container>
        <Row>
          <Col lg='4' md='3' sm='4'>
            <div className="logo">
              <h1>
                <Link to="/home" className='d-flex align-items-center gap-3'>
                  <i class="ri-car-line"></i>
                  <span>WHEELQUEST</span>
                </Link>
              </h1>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className="header_location d-flex align-items-center gap-2">
              <span><i class="ri-earth-line"></i></span>
              <div className="header_location_content">
                <h4>India</h4>
                <h6>Kolkata, India</h6>
              </div>
            </div>
          </Col>

          <Col lg='3' md='3' sm='4'>
            <div className="header_location d-flex align-items-center gap-2">
              <span><i class="ri-time-line"></i></span>
              <div className="header_location-content">
                <h4>Sunday to Saturday</h4>
                <h6>10am - 7pm</h6>
              </div>
              
            </div>
          </Col>

          <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
            <button className="header_btn btn">
              <Link to="/contact">
                <i class="ri-phone-line"></i>Request a call
              </Link>
            </button>
          </Col>

        </Row>
      </Container>
    </div>


    {/* =======================================================main navigation========================================================= */}
    <div className="main__navbar">
      <Container>
        <div className="navigation_wrapper d-flex align-items-center justify-content-between">
          <span className='mobile__menu'>
            <i class="ri-menu-line" onClick={toggleMenu}></i>
          </span>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav_active nav_item" : "nav_item"}
                  key={index}
                >
                  {item.display}
                </NavLink>
              ))
              }
            </div>
          </div>

          <div className="nav__right">
            <div className="search_box">
              <input type="text" placeholder='Search' />
              <span>
                <i class="ri-search-line"></i>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>

  </header >
};

export default Header
