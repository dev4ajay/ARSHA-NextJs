import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function page() {
  return (
    <div>
      <footer id="footer">
<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email"/>
            <input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Arsha</h3>
        <p>
          A108 Adam Street <br/>
          New York, NY 535022<br/>
          United States <br/>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> info@example.com<br/>
        </p>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#" className='text-decoration-none'>Home</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>About us</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Services</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Terms of service</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Privacy policy</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Web Design</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Web Development</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Product Management</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Marketing</a></li>
          <li><IoIosArrowForward className="bx bx-chevron-right"/> <a href="#"  className='text-decoration-none'>Graphic Design</a></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Social Networks</h4>
        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
        <div className="social-links mt-3">
          <a href="#" className="twitter"><FaTwitter className="bx bxl-twitter"/></a>
          <a href="#" className="facebook"><FaFacebookSquare className="bx bxl-facebook"/></a>
          <a href="#" className="instagram"><FaInstagram className="bx bxl-instagram"/></a>
         
          <a href="#" className="linkedin"><FaLinkedin className="bx bxl-linkedin"/></a>
        </div>
      </div>

    </div>
  </div>
</div>

<div className="container footer-bottom clearfix">
  <div className="copyright">
    &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
   
    Designed by <a  className='text-decoration-none' href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
</div>
</footer>

</div>
  )
}

export default page
