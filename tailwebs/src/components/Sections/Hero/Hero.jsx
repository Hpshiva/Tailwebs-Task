import React from "react";

function Hero() {
  return (
    <section className="bg-light hero-section">
      <div className="bg-banner py-lg-5 py-md-3 pt-0 pb-0">
        <div className="w-100 d-block d-lg-none">
          <div className="">
            <img
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/22121932/New-Home-Page-Banner-Image.png"
              className="w-100 sr-fade"
              alt="Hero Banner"
              title="Hero Banner"
              data-sr-id="5"
            />
          </div>
        </div>
        <div className="container pb-5 py-md-5">
          <div className="row">
            <div className="col-lg-5">
              <p className="fs-36 fs-sm-30 text-center text-md-start lh-40 fw-300">
                20 years of digital transformation in public service delivery
              </p>

              <p className="fs-56 fs-sm-30 text-center text-md-start lh-40 fw-600 mt-3 mb-md-4 mb-3">
                It's possible.
              </p>

              <div>
                <p className="fw-300 fs-sm-12 text-center text-md-start">
                  Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we’re
                  driven by the power of open digital infrastructure and
                  ecosystems to enable governments deliver accessible, inclusive
                  and transparent services to every citizen.
                </p>
              </div>
              <div className="mt-md-5 mt-4 d-flex gap-3 justify-content-lg-start justify-content-sm-center ">
                <button className="btn-cyan rounded-pill text-white fw-300 fs-14">
                  Our Approach
                </button>
                <button className="btn-outline rounded-pill text-color-01 fw-300 fs-14">
                  Our Impact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
