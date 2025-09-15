import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section className="aboutSection pd-vl-lg">
      <div className="container-main">
        <div className="aboutContent d-flex justify-content-center align-items-center">
          <div className="row d-flex align-items-center height-inherit">
            <div className="col-xl-3 d-flex align-items-center justify-content-center border-right height-inherit">
              <div className="d-flex justify-content-center">
                <h2 className="heading-2">About</h2>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="d-flex justify-content-center padding-left-60">
                <p className="text-1">
                  With 2+ years of experience, I create modern and animated web
                  experiences that combine clean design, smooth interactivity,
                  and performance to deliver engaging user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
