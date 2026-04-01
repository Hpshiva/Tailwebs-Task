import React from "react";

function Supporters() {
  return (
    <section className="py-5">
      <div className="container py-lg-5">
        <div className="row justify-content-sm-center">
          <div className="col d-flex justify-content-sm-center">
            <p className="fs-36 fs-sm-30 lh-40 fw-300">
              Our{" "}
              <span className="fs-46 fs-sm-30 lh-40 fw-800">Supporters</span>
            </p>
          </div>
        </div>

        <div className="row mt-4 mt-md-0 justify-content-center">
          <div className="col-md-11">
            <div className="d-flex gap-2 gap-md-4 align-items-center">
              <div className="">
                <img
                  className="w-100 "
                  src="src/assets/images/sup1.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="w-100"
                  src="src/assets/images/sup2.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="w-100"
                  src="src/assets/images/sup3.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="w-100"
                  src="src/assets/images/sup4.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="w-100"
                  src="src/assets/images/sup5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Supporters;
