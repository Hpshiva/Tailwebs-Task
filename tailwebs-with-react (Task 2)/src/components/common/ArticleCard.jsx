import React from "react";

function ArticleCard({ data }) {
  return (
    <div className="card article-card h-100 card-radius bg-none border-0">
      <div className="card-header border-0 p-0 card-radius bg-none">
        <img src={data.avatar_url} className="w-100 card-img-radius" alt="" />
      </div>
      <div className="card-body border-0 p-4 bb-24">
        <div className="line-3">
          <a href="" className="fs-sm-14 fw-600 text-color-02">
            {data.title}
          </a>
        </div>
        <div className="mt-5">
          <div className="d-flex gap-3">
            <div className="d-flex gap-2 align-items-center">
              <div className="dot"></div>
              <p className="fs-12">{data?.author}</p>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div className="dot align-self-center"></div>
              <p className="fs-12">{data?.date} </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-4 gap-2 gap-md-3 ">
          <div className="d-flex gap-2 flex-wrap-wrap">

          {data.state?.map((stateName, index) => (
            <div className="small-box" key={index}>
              {stateName}
            </div>
          ))}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
