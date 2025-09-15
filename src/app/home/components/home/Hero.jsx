import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="heroBanner pd-tp-xl">
      <div className="container-main">
        <div className="row  pd-tp-xl">
          <div className="col-xl-7">
            <h1 className="heading-1 d-flex pd-bm-sm">Robert Singh</h1>
            <p className="text-1 bannerContent">
              I specialize in building dynamic, animated web experiences that
              bring interfaces to life, ensuring both aesthetic appeal and
              intuitive functionality.
            </p>
            <div className="pd-tp-sm">
              <a href="#" className="primaryBtn">
                <span className="text-2">Resume</span>

                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.8281 9.63209C25.8281 9.5225 25.7864 9.41291 25.7028 9.32929C25.5356 9.16205 25.2647 9.16205 25.0975 9.32929L12.9855 21.4413L0.873809 9.32929C0.706856 9.16205 0.435449 9.16205 0.268496 9.32929C0.101257 9.49653 0.101257 9.76736 0.268496 9.9346L12.683 22.3491C12.8499 22.5163 13.1213 22.5163 13.2883 22.3491L25.7028 9.9346C25.7864 9.85127 25.8281 9.74168 25.8281 9.63209Z"
                    fill="white"
                  />
                  <path
                    d="M25.8281 3.92426C25.8281 3.81467 25.7864 3.70508 25.7028 3.62146C25.5356 3.45422 25.2647 3.45422 25.0975 3.62146L12.9855 15.7334L0.873809 3.62146C0.706856 3.45422 0.435449 3.45422 0.268496 3.62146C0.101257 3.7887 0.101257 4.05954 0.268496 4.22678L12.683 16.6413C12.8499 16.8085 13.1213 16.8085 13.2883 16.6413L25.7028 4.22678C25.7864 4.14344 25.8281 4.03385 25.8281 3.92426Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* banner image  */}
      <img src="/assets/Robert.png" alt="Robert" className="heroImage" />
    </section>
  );
}
