import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="aboutSection pd-vl-lg" id="about">
      <div className="container-main">
        <div className="aboutContent d-flex justify-content-center align-items-center">
          <div className="row d-flex align-items-center height-inherit width-100 height-auto-md">
            <div className="col-xl-4 d-block d-md-flex align-items-center justify-content-center border-right height-inherit ">
              <div className="d-block d-md-flex justify-content-center">
                <h2 className="heading-2 color-7 animate-lr">About</h2>
              </div>
            </div>
            <div className="col-xl-8">
          <div className="d-block d-md-flex justify-content-center padding-left-60 padding-auto-md">
              <div className="about-contnet-p">
                <p className="text-1 animate">
                    With 2+ years of experience, I focus on building clean, responsive, 
                    and well-structured web experiences. I enjoy solving real problems 
                    through development and continuously improving my workflow, learning 
                    new tools, and staying updated with modern web technologies.
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
