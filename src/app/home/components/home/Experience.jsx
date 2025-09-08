import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <section className="aboutSection pd-vl-lg">
      <div className="container-main">
        <div className="aboutContent d-flex align-items-center">
          <div className="row d-flex justify-content-between align-items-center height-inherit">
            <div className="col-xl-3 d-flex align-items-center justify-content-center border-right height-inherit">
              <div className="d-flex justify-content-center">
                <h2 className="heading-2">Experience</h2>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="d-flex justify-content-center">
                <div className="experienceContent d-flex flex-column">
                  <p className="text-2">March 2024 - Present</p>
                  <p className="heading-4">Web Developer</p>
                  <p className="text-1">
                    I craft immersive, scroll-triggered animations that bring
                    websites to life.  Build 3D interactive experiences using
                    Three.js and Next.js.  Focused on smooth, high-performance
                    front-end interactions for modern web experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
