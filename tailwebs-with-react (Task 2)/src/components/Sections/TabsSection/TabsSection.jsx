import React, { useState } from "react";
import StatsCard from "../../common/StatsCard";
import sup1 from "../../../assets/images/icu.png";
import sup2 from "../../../assets/images/covid-vaccine.png";
import sup3 from "../../../assets/images/punjab-1.png";
import sup4 from "../../../assets/images/women.png";


function TabsSection() {
  const color1 = "#4bb5cb";
  const color2 = "#2396FF";
  const [activeTab, setActiveTab] = useState("home");
  return (
    <section className="tab-section">
      <div className="container">
        <div className="border-card p-md-5 p-4">
          <div className="row align-items-center justify-content-sm-center">
            {/* Left tab menu */}
            <div className="col-lg-5 bg-white">
              <h2 className="fs-36 text-center text-lg-start fs-sm-30 text-color-02 fw-200">
                Big problems need
                <span className="line-break fs-sm-30 fs-46 fw-700 text-color-02">
                  bold approaches
                </span>
              </h2>

              <div className="mt-lg-5 mt-4 mt-md-5 justify-content-sm-center d-flex tab-box-size">
                <div className="d-flex align-items-start w-100 justify-content-sm-center">
                  <div
                    className="nav text-center flex-column bold nav-pills me-md-3 w-100 justify-content-sm-center"
                    role="tablist"
                  >
                    <button
                      className={`mx-sm-auto mx-md-0 nav-link rounded-pill ${activeTab === "home" ? "active" : ""}`}
                      onClick={() => setActiveTab("home")}
                    >
                      Public Health
                    </button>
                    <button
                      className={`mx-sm-auto mx-md-0 nav-link mt-2 rounded-pill ${activeTab === "profile" ? "active" : ""}`}
                      onClick={() => setActiveTab("profile")}
                    >
                      Public Finance
                    </button>
                    <button
                      className={`mx-sm-auto mx-md-0 nav-link mt-2 rounded-pill ${activeTab === "messages" ? "active" : ""}`}
                      onClick={() => setActiveTab("messages")}
                    >
                      Messages
                    </button>
                    <button
                      className={`mx-sm-auto mx-md-0 nav-link mt-2 rounded-pill ${activeTab === "settings" ? "active" : ""}`}
                      onClick={() => setActiveTab("settings")}
                    >
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right tab content */}
            <div className="col-lg-7 mt-4 mt-md-5 mt-lg-0">
              <div className="tab-content h-100">
                {activeTab === "home" && (
                  <>
                    <div className="row tab-card">
                      <div className="col-6 px-2">
                        <StatsCard
                          title="500+"
                          description="Government projects funded"
                          bgImg={sup1}
                          bgColor={color1}
                        />
                      </div>
                      <div className="col-6 px-2">
                        <StatsCard
                          title="$1.2 Bn"
                          description="Budget allocated for public welfare"
                          bgImg={sup2}
                          bgColor={color2}
                        />
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "profile" && (
                  <>
                  <div className="row tab-card">
                      <div className="col-6 px-2">
                        <StatsCard
                          title="5000+"
                          description="rural local bodies managing revenue & expenditure on Water Supply O&M System "
                          bgImg={sup3}
                          bgColor={color1}
                        />
                      </div>
                      <div className="col-6 px-2">
                        <StatsCard
                          title="4000+"
                          description="empowered women Self Help Groups through Social Benefits Delivery System "
                          bgImg={sup4}
                          bgColor={color2}
                        />
                      </div>
                    </div>
                   
                  </>
                )}
                {activeTab === "messages" && (
                  <>
                  <div className="row tab-card">
                      <div className="col-6 px-2">
                        <StatsCard
                          title="1000+"
                          description="rural local bodies managing revenue & expenditure on Water Supply O&M System "
                          bgImg={sup3}
                          bgColor={color1}
                        />
                      </div>
                      <div className="col-6 px-2">
                        <StatsCard
                          title="3400+"
                          description="empowered women Self Help Groups through Social Benefits Delivery System "
                          bgImg={sup4}
                          bgColor={color2}
                        />
                      </div>
                    </div>
                   
                  </>
                )}
                {activeTab === "settings" && (
                  <>
                  <div className="row tab-card">
                      <div className="col-6 px-2">
                        <StatsCard
                          title="4300+"
                          description="rural local bodies managing revenue & expenditure on Water Supply O&M System "
                          bgImg={sup3}
                          bgColor={color1}
                        />
                      </div>
                      <div className="col-6 px-2">
                        <StatsCard
                          title="4320+"
                          description="empowered women Self Help Groups through Social Benefits Delivery System "
                          bgImg={sup4}
                          bgColor={color2}
                        />
                      </div>
                    </div>
                   
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="fs-36 fs-sm-30 lh-40 fw-300">
              20 years of reimagining for citizens and
            </p>

            <p className="fs-46 fs-sm-30 lh-40 fw-600 my-3 mt-md-3 mb-md-4">
              sustaining change
            </p>

            <div>
              <p className="fw-300 fs-sm-12">
                Technology is powerful, but is only one piece of the puzzle,
                when it comes to enhancing the quality of life for every
                citizen. To have sustainable impact at scale, the collective
                energy of local networks to solve local problems needs to be
                tapped into. Our partners & networks bring this collective
                energy to life. The ecosystem already exists; our task is to
                facilitate and amplify their efforts. For 20 years, we’ve been
                turning small steps into lasting, meaningful change, so that no
                citizen is left behind.
              </p>
            </div>
            <div className="row my-5 gap-3 gap-lg-0">
              <div className="col-lg-6">
                <img
                  src="src/assets/images/thumb1.jpg"
                  className="video-img w-100"
                  alt="Video 1 Thumbnail"
                />
              </div>
              <div className="col-lg-6">
                <img
                  src="src/assets/images/thumb2.png"
                  className="video-img w-100"
                  alt="Video 1 Thumbnail"
                />
              </div>
            </div>
            <div className="mt-5 mb-md-5 mb-lg-5 d-flex gap-3 justify-content-center">
              <button className="btn-outline mb-md-3 mb-lg-5 rounded-pill text-color-01 fw-300 fs-14">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabsSection;
