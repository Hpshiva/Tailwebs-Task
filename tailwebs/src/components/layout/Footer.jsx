import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-color-1 pt-5">
      <div className="container pt-md-4 pb-md-5">
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <img src="src/assets/images/logo.png" width="100px" alt="" />

            <div className="mt-4">
              <p>
                Catalysing digital transformation in public service delivery at
                speed & scale.
              </p>
            </div>
            <div className="mt-md-5 mt-4">
              <div className="d-flex gap-3">
                <div className="i-circle d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fontawesomeicon" icon={faFacebookF} />
                </div>
                <div className="i-circle d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fontawesomeicon" icon={faTwitter} />
                </div>
                <div className="i-circle d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fontawesomeicon" icon={faLinkedinIn} />
                </div>
                <div className="i-circle d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="fontawesomeicon" icon={faYoutube} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
            <h2 className="fs-20 text-color-02 fw-800">Useful Links</h2>

            <div className="mt-4">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex flex-column gap-3">
                    <a href="" className="text-color-02 fw-200">
                      Home
                    </a>
                    <a href="" className="text-color-02 fw-200">
                      Our Impact
                    </a>
                    <a href="" className="text-color-02 fw-200">
                      DIGIT Sandbox
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex flex-column gap-3">
                    <a href="" className="text-color-02 fw-200">
                      Our People
                    </a>
                    <a href="" className="text-color-02 fw-200">
                      Financials
                    </a>
                    <a href="" className="text-color-02 fw-200">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <h2 className="fs-20 text-color-02 fw-800">Subscribe Now</h2>

            <div className="mt-4 mb-5 mb-md-0">
              <div className="row">
                <div className="col">
                  <p className="fw-300">
                    Receive regular updates of our monthly newsletter DOT – in
                    your inbox.{" "}
                  </p>
                  <div className="mt-4">
                    <form action="">
                      <div className="mb-3 d-flex align-items-center">
                        <input
                          className="form-control py-3 h-100 px-4 bg-white border-0"
                          placeholder="Enter your Email"
                          type="email"
                          id="formFile"
                        />
                        <div className="email py-3 px-2 border-0">
                          <img src="src/assets/images/email.png" alt="" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color-2 py-md-2 py-4">
        <div className="container py-md-3">
          <div className="row  gap-4 gap-md-0 justify-content-sm-center">
            <div className="col-md-6">
              <p className="text-white text-center text-md-start">
                ©2024. eGov. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col">
                  <div className="d-flex gap-4 justify-content-sm-center">
                    <p className="text-white text-center text-md-start">
                      Privacy Policy
                    </p>
                    <p className="text-white text-center text-md-start">
                      Terms and Conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
