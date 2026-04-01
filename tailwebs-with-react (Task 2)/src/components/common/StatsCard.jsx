function StatsCard({ title, description, bgColor, bgImg }) {
  return (
    <div
      className="tab-card  stats-card p-md-4 p-3 rounded-4 text-white position-relative overflow-hidden"
      style={{
        background: `${bgColor} url(${bgImg}) no-repeat center/cover`,
      }}
    >
      <h2 className="fw-600 fs-56 fs-sm-30">{title}</h2>
      <div className="row">
        <div className="col-md-10">
          <p className="fs-14 fs-sm-12 mb-2  pe-md-5">{description}</p>
        </div>
      </div>

      <button className="btn btn-light rounded-pill fs-12 px-3 py-2">
        Read More
      </button>

      {/* <img src={image} className="card-img position-absolute" alt="card" /> */}
    </div>
  );
}

export default StatsCard;
