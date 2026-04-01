import React from "react";

function Technology() {
  return (
    <>
      <section className=" technology relative">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 py-lg-5 pt-md-3 pt-4 pb-5 order-2 order-lg-1">
              <div className="py-md-5 d-flex  justify-content-sm-center flex-column">
                <div className="row  justify-content-sm-center justify-content-lg-start">
                  <div className="col-5 col-md-5 ">
                    <img
                      src="src/assets/images/digit-n.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>

                <p className="fs-36 lh-40 text-center text-lg-start fw-300 text-white my-3 mt-md-3 mb-md-4">
                  Our open source{" "}
                  <span className="line-break fs-46 fs-sm-30 lh-40 fw-600  text-white text-center text-md-start">
                    technology-for-good platform
                  </span>
                </p>

                {/* <!-- <p className="fs-46 fs-sm-30 lh-40 fw-600 my-3 mt-md-3 mb-md-4 text-white text-center text-md-start">technology-for-good platform</p> --> */}

                <div>
                  <p className="fw-300 text-white text-center text-lg-start fs-sm-12">
                    DIGIT, short for Digital Infrastructure for Governance,
                    Inclusion and Transformation is eGov's open-source platform
                    with reusable building blocks and shared data registries
                    that can be used to build solutions in multiple
                    sectors.{" "}
                  </p>
                </div>

                <div className="d-flex justify-content-sm-center justify-content-lg-start">
                  <button className="btn-blue w-fit rounded-pill text-color-01 fw-300 fs-14 mt-md-5 mt-4">
                    Explore the platform
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 relative order-1 order-lg-2 justify-content-sm-center d-flex">
              <div className="girl-mockup d-flex justify-content-sm-center">
                <img
                  src="src/assets/images/girl-mockUp.png"
                  className="img-fluid h-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Technology;
