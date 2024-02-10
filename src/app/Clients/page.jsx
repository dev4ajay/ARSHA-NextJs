import React from 'react'
import About from "../About/page"
import Image from "next/image";
import Client1 from "../../assets/img/clients/client-1.png"
import Client2 from "../../assets/img/clients/client-2.png"
import Client3 from "../../assets/img/clients/client-3.png"
import Client4 from "../../assets/img/clients/client-4.png"
import Client5 from "../../assets/img/clients/client-5.png"
import Client6 from "../../assets/img/clients/client-6.png"


function page() {
  return (
    <div>
        <section id="clients" className="clients section-bg">
      <div className="container">

        <div className="row" data-aos="zoom-in">

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client1} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client2} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client3} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <Image src={Client4} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <Image src={Client5} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
          <Image src={Client6} className="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>
      <About/>
    </div>
  )
}

export default page
