"use client"
import React  from "react";
import Service from "../Service/page";
import Accordion from "../Accordion"
function Accortion() {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <div>
      <section id="why-us" className="why-us section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div >
                <h3>
                  Eum ipsam laborum deleniti
                  <strong>velit pariatur architecto aut nihil</strong>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>
              <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
            <div
              className="lg:flex sm:block  gap-3 items-center justify-center"
              data-te-toggle="pill"
              data-te-target="#tabs-home1"
              href="#tabs-home1"
              data-te-nav-active
              id="tabs-home1"
              role="tabpanel"
              aria-labelledby="tabs-home-tab1"
              aria-controls="tabs-home1"
              aria-selected="true"
            >
              <div
               
                className="w-full  px-4  "
              >
                <div
                  className="p-4  rounded-lg  "
                  style={{ marginBottom: '40px' }}
                >
                  <Accordion
                    title="   01. Non consectetur a erat nam at lectus urna duis?"
                    answer="  NIMCET is the National Institute of Technology MCA Common Entrance
              Test. It is a national-level entrance exam conducted by NITs
              (National Institutes of Technology) for admission to their Master
              of Computer Applications (MCA) programs."
                  />
                  <Accordion
                    title="    02.  Feugiat scelerisque varius morbi enim nunc?"
                    answer="  NIMCET is conducted by one of the participating NITs on a
              rotational basis. The responsibility of conducting the exam is
              assigned to a specific NIT each year."
                  />
                  <Accordion
                    title=" 03.Dolor sit amet consectetur adipiscing elit?"
                    answer="  Candidates must have a recognized bachelor's degree with at least
              60% marks or 6.5 CGPA (55% marks or 6.0 CGPA for SC/ST) in the
              qualifying degree. They should have studied Mathematics or
              Statistics or Business Mathematics in their graduation or at 10+2
              level."
                  />
                 
                
                </div>
              </div>

            
            </div>
          </div>
            </div>

            <div
              className="col-lg-6 align-items-stretch bg-img-side order-1  order-lg-2 img"
             
              data-aos="fade-up"
              data-aos-delay="200"
              
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
      <Service />
    </div>
  );
}

export default Accortion;
