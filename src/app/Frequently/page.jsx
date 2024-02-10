"use client"
import React from 'react'
import Contact from "../Contact/page"
import Accordion from "../Accordion"
function page() {
  const [openTab, setOpenTab] = React.useState(1)
  return (
    <div>
      <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="faq-list">
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
                    title="   01.Non consectetur a erat nam at lectus urna duis?"
                    answer="   National Institute of Technology MCA Common Entrance
              Test. It is a national-level entrance exam conducted by NITs
              (National Institutes of Technology) for admission to their Master
              of Computer Applications (MCA) programs."
                  />
                  <Accordion
                    title="    02. Feugiat scelerisque varius morbi enim nunc?"
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
                  <Accordion
                    title="  04. Tempus quam pellentesque nec nam aliquam sem et tortor consequat?"
                    answer=" The application process for NIMCET is typically online.
                Candidates need to visit the official website, complete the
                registration, fill in the application form, upload required
                documents, and pay the application fee through the specified
                mode. "
                  />
                
                </div>
              </div>
</div>
        </div>
        </div>

      </div>
    </section>
    <Contact/>
    </div>
  )
}

export default page
