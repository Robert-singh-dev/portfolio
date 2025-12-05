import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="heroBanner pd-tp-xl">
      <div className="container-main">
        <div className="row  pd-tp-xl">
          <div className="col-xl-7">
            <h1 className="heading-1 d-flex pd-bm-sm color-7 animate-lr">Robert Singh</h1>
            <p className="text-1 bannerContent animate">
              I specialize in building dynamic, animated web experiences that
              bring interfaces to life, ensuring both aesthetic appeal and
              intuitive functionality.
            </p>
            <div className="pd-tp-sm">
              <a href="/assets/resume-robert-singh.pdf" target="_blank" className="primaryBtn">
                <span className="text-3">Resume</span>
                <svg width="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.99611H0.4L0.4 6.59611H1L1 5.99611ZM11 5.99611L11.4364 6.40786C11.6547 6.17654 11.6545 5.81511 11.4361 5.58398L11 5.99611ZM7.18672 1.08787C6.95911 0.847041 6.57936 0.836326 6.33853 1.06394C6.0977 1.29155 6.08699 1.6713 6.3146 1.91213L7.18672 1.08787ZM6.31425 10.0882C6.08684 10.3293 6.09788 10.709 6.33891 10.9364C6.57994 11.1638 6.95968 11.1528 7.18708 10.9118L6.31425 10.0882ZM0.4 1.77636L0.4 5.99611H1.6L1.6 1.77636H0.4ZM1 6.59611L11 6.59611V5.39611H1L1 6.59611ZM11.4361 5.58398L7.18672 1.08787L6.3146 1.91213L10.5639 6.40824L11.4361 5.58398ZM10.5636 5.58436L6.31425 10.0882L7.18708 10.9118L11.4364 6.40786L10.5636 5.58436Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>  
      </div>
      {/* banner image  */}
      {/* <img src="/assets/Robert.png" alt="Robert" className="heroImage" /> */}
    </section>
  );
}
