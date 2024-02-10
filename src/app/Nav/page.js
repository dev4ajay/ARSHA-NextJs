import React from "react";
import Img from "../img/hero-img.png";
import Image from "next/image";
import Clients from "../Clients/page"
import { FaAngleDown } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import Link from 'next/link';
// import LogoImg from "../../assets/img/logo.png";
function page() {
  return (
    <>
      <header id="header" className="fixed-top header-scrolled  ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html" className="text-decoration-none" >Arsha</a>
          </h1>

          {/* <a href="index.html" className="logo me-auto">
            <Image src={LogoImg} alt="" className="img-fluid" />
          </a> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link className="nav-link scrollto active" href="/#hero">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="/#about">
                  About
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="/#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link   scrollto" href="/#portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="nav-link scrollto" href="/#team">
                  Team
                </Link>
              </li>
              <li className="dropdown">
                <Link href="#" className="text-decoration-none" >
                  <span>Drop Down</span> <FaAngleDown/>
                </Link>
                <ul>
                  <li>
                    <Link href="#" className="text-decoration-none">Drop Down 1</Link>
                  </li>
                  <li className="dropdown">
                    <Link href="#" className="text-decoration-none">
                      <span>Deep Drop Down</span>{" "}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link href="#" className="text-decoration-none">Deep Drop Down 1</Link>
                      </li>
                      <li>
                        <Link href="#" className="text-decoration-none">Deep Drop Down 2</Link>
                      </li>
                      <li>
                        <Link href="#" className="text-decoration-none">Deep Drop Down 3</Link>
                      </li>
                      <li>
                        <Link href="#" className="text-decoration-none">Deep Drop Down 4</Link>
                      </li>
                      <li>
                        <Link href="#" className="text-decoration-none">Deep Drop Down 5</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#" className="text-decoration-none">Drop Down 2</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-decoration-none">Drop Down 3</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-decoration-none">Drop Down 4</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className="nav-link scrollto" href="/#contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="getstarted scrollto text-decoration-none" href="/#about">
                  Get Started
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
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
