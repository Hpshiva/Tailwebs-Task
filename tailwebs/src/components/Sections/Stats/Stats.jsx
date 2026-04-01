import { useEffect, useRef } from "react";
function Stats() {
  const counterRef = useRef(null); // reference to the DOM element

  useEffect(() => {
    const counter = counterRef.current;
    let start = 1000000000;
    let end = 1000000100;
    let duration = 5000;
    let steps = 100; // number of updates
    let stepTime = duration / steps;

    for (let i = 0; i <= steps; i++) {
      setTimeout(() => {
        let current = start + ((end - start) * i) / steps;
        if (counter) {
          counter.textContent = Math.floor(current).toLocaleString() + "+";
        }
      }, i * stepTime);
    }
  }, []); // run only once on mount
  return (
    <div className="bg-counting py-5">
      <div className="container py-md-5 z-index-for-black-shade">
        <div className="row">
          <div className="col-lg-8">
            <p
              ref={counterRef}
              className="counting text-center text-lg-start fs-sm-44 text-white fw-300"
            >
              1,000,000,100+
            </p>
          </div>
          <div className="col-lg-4 align-self-center">
            <p className="text-white text-center text-lg-start fs-sm-12">
              Citizens availing public services through eGov's Digital Public
              Goods (DPG)
            </p>
          </div>
        </div>

        <div className="row pb-5 coustom-margin justify-content-sm-center">
          <div className="col-md-10 pb-5 pb-md-0">
            <div className="row gap-5 gap-md-0">
              <div className="col-md-6">
                <p className="text-white text-center text-md-start fs-40 fs-sm-30">
                  1.1 Billion+
                </p>
                <p className="text-white text-center text-md-start fs-sm-12">
                  Public services delivered{" "}
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-white text-center text-md-start fs-40 fs-sm-30">
                  50+ partners{" "}
                </p>
                <p className="text-white text-center text-md-start fs-sm-12">
                  From technology, governments and NGOs{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
