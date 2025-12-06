import React from "react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="projectSection pd-bm-xl" id="projects">
      <div className="container-main">
        <div className="d-block d-md-flex justify-content-center align-items-center pd-bm-md">
          <h4 className="heading-2 color-7 animate-lr">Projects</h4>
        </div>
        {/* <div className="pd-bm-sm">
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
        </div> */}

        <div className="pd-bm-md">
          <h4 className="heading-4 fp-heading">Featured Projects</h4>
          <p class="text-2 color-6 animate">
            These projects were completed during my employment at Supercode Designs, where I worked as a Frontend & WordPress Developer. My responsibilities included building interactive user interfaces, adding smooth animations, and developing clean, responsive layouts using custom WordPress theming, HTML, CSS, JavaScript, and PHP.
          </p>
        </div>
        
        <div className="d-flex flex-column gap-10">
          <a href="https://www.growtharc.com/" target="_blank">
            <div className="p-box">
              <div className="row d-block d-md-flex align-items-center">
                <div className="col-12 col-md-4">
                  <div className="border-right">
                    <div className="d-block d-md-flex align-items-center gap-2">
                      <p className="text-3 color-7">Growth Arc</p>
                      <p className="text-2"><i>(Supercode Design)</i></p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <p class="text-2 color-6 animate project-p">
                  Specializing in GSAP-powered animations, I craft performance-optimized interactions, 
                  scroll effects, and smooth UI transitions that elevate user engagement without sacrificing speed.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://gravitonspace.com/" target="_blank">
            <div className="p-box">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-4">
                  <div className="border-right">
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-3 color-7">Graviton</p>
                      <p className="text-2"><i>(Supercode Design)</i></p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <p class="text-2 color-6 animate project-p">
                    Integrated Three.js to create interactive 3D elements and implemented custom particle 
                    animations to enhance the visual experience of the WordPress website.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://excelien.com/" target="_blank">
            <div className="p-box">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-4">
                  <div className="border-right">
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-3 color-7">Excelien</p>
                      <p className="text-2"><i>(Supercode Design)</i></p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <p class="text-2 color-6 animate project-p">
                    Integrated Three.js to create interactive 3D elements and implemented custom particle 
                    animations to enhance the visual experience of the WordPress website.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://peopleequation.io/" target="_blank">
            <div className="p-box">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-4">
                  <div className="border-right">
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-3 color-7">People Equation</p>
                      <p className="text-2"><i>(Supercode Design)</i></p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <p class="text-2 color-6 animate project-p">
                    I developed this project by building a custom WordPress theme 
                    with a well-structured CMS and integrating GSAP animations to 
                    create smooth and engaging interactions.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://vaani.in/" target="_blank">
            <div className="p-box">
              <div className="row d-flex align-items-center">
                <div className="col-12 col-md-4">
                  <div className="border-right">
                    <div className="d-flex align-items-center gap-2">
                      <p className="text-3 color-7">Vaani</p>
                      <p className="text-2"><i>(Supercode Design)</i></p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <p class="text-2 color-6 animate project-p">
                    I built a custom WordPress theme for content-heavy pages, focusing on 
                    CMS structure, reusable components, and a fast, readable frontend with minimal animations.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
