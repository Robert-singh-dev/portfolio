import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="projectSection pd-bt-xl">
      <div className="container-main">
        <div className="d-flex justify-content-center align-items-center pd-bm-xl">
          <h4 className="heading-2">Projects</h4>
        </div>
        <div className="pd-bm-sm">
          <p className="heading-3">Personal</p>
        </div>
        <div className="projectBoxContainerOne">
          <div className="projectBox">
            <div className="pd-bm-sm">
              <p className="text-1">Particle 3D Animation</p>
            </div>
            <div className="pd-bm-sm">
              <p className="heading-4">Three.js React.js</p>
            </div>
            <ul className="d-flex flex-column">
              <li>
                <p className="text-2 ">
                  Built interactive 3D particle effects with Three.js
                </p>
              </li>
              <li>
                <p className="text-2 ">
                  Created smooth scroll animations using GSAP
                </p>
              </li>
              <li>
                <p className="text-2 ">
                  Explored advanced 3D and motion design for web
                </p>
              </li>
            </ul>
          </div>
          <div className="projectBox">
            <div className="pd-bm-sm">
              <p className="text-1">3D Model Animation</p>
            </div>
            <div className="pd-bm-sm">
              <p className="heading-4">Three.js React.js</p>
            </div>
            <ul className="d-flex flex-column">
              <li>
                <p className="text-2 ">
                  Explored and integrated 3D models into websites with Three.js
                </p>
              </li>
              <li>
                <p className="text-2 ">
                  Developed scroll-triggered animations to move and rotate
                  models
                </p>
              </li>
              <li>
                <p className="text-2 ">
                  Enhanced user experience with interactive 3D motion effects
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="pd-tp-sm">
          <div className="projectBoxContainerTwo">
            <div className="projectBox"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
