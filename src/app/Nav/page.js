"use client"
"use client"
import React from "react";
import Img from "../img/hero-img.png";
import Image from "next/image";
import Clients from "../Clients/page"
import { FaAngleDown } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LogoImg from "../../assets/img/logo-bg-remove-removebg-preview.png" ;
function page() {
  return (
    <>
      {/* <header id="header" className="fixed-top header-scrolled  ">
      
      </header> */}
          <Navbar expand="lg"  id="header" className="fixed-top header-scrolled">
      <Container >
        <Navbar.Brand href="#" className="main-color "  ><Image src={LogoImg}  className="logo-name" alt="logo-image" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="toggle-btn " />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' ,}}
            navbarScroll
          >
            <Nav.Link href="#home" className="main-color" >Home</Nav.Link>
            <Nav.Link href="#about"  className="main-color " >About</Nav.Link>
            <Nav.Link href="#services"  className="main-color "  >Services</Nav.Link>
            <Nav.Link href="#portfolio"  className="main-color " > Portfolio</Nav.Link>

            <Nav.Link href="#team"  className="main-color "  >    Team</Nav.Link>
            <Nav.Link href="#contact"  className="main-color "  >    Contact</Nav.Link>
            <Nav.Link href="#about"  className=" getstarted main-color" >    Get Started</Nav.Link>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center mt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1>Better Solutions For Your Business</h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link href="/#about" className="btn-get-started scrollto text-decoration-none">
                  Get Started
                </Link>
                <Link
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="glightbox btn-watch-video text-decoration-none"
                >
                <SiYoutubemusic   className="watch-video"/>
                  <span>Watch Video</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img mt-4"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image src={Img} className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Clients/>
    
    </>
  );
}

export default page;
