import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="aboutSection pd-vl-lg" id="experience">
      <div className="container-main">
        <div className="aboutContent d-flex justify-content-center align-items-center">
          <div className="row d-flex align-items-center height-inherit width-100">
            <div className="col-xl-4 d-block d-md-flex align-items-center justify-content-center border-right height-inherit">
              <div className="d-block d-md-flex justify-content-center">
                <h2 className="heading-2 color-7 animate-lr">Experience</h2>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="d-flex justify-content-center padding-left-60 width-100 padding-auto-md">
                <div className="d-flex flex-column gap-30 experience-content">
                  <div className="experienceContent d-flex flex-column">
                    <p className="heading-4">Web Developer <i className="fw-400">(SuperCode Design)</i></p>
                    <p className="text-3">March 2024 - Present</p>
                    <p className="text-2 color-6 animate">
                      I craft immersive, scroll-triggered animations that bring
                      websites to life. Build 3D interactive experiences using
                      Three.js and Next.js. Focused on smooth, high-performance
                      front-end interactions for modern web experiences.
                    </p>
                  </div>
                  <div className="experienceContent d-flex flex-column">
                    <p className="heading-4">Web Designer Intern <i className="fw-400">(Beleaf Technology)</i></p>
                    <p className="text-3">Nov 2023 - Feb 2024</p>
                    <p className="text-2 color-6 animate">
                      Worked on designing and building websites, learning how projects 
                      move from an initial idea to website. Created layouts and prototypes 
                      in Figma to turn design concepts into web pages. Picked up real-world 
                      skills in web design, development, and theoverall workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
