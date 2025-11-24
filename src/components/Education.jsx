export default function Education() {
  return (
    <section
      id="education"
      className="container py-5"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2
        className="section-title text-center"
        data-aos="fade-up"
        style={{ color: "#001E3C" }}
      >
        Education <span style={{ color: "#FF6A3D" }}>Timeline</span>
      </h2>

      <div className="position-relative mt-5 edu-timeline">
        {/* Vertical Line */}
        <div className="edu-line"></div>

        {/* COLLEGE / LATEST */}
        <div className="edu-item right" data-aos="fade-left">
          <div className="edu-box edu-card">
            <h4 className="edu-title">Chandigarh University</h4>
            <div className="edu-hidden">
              <p className="fw-semibold" style={{ color: "#FF6A3D" }}>
                B.E. Computer Science Engineering
              </p>
              <p className="mb-1">Specialization: AI & ML</p>
              <small>2023 – 2027</small>
            </div>
          </div>
        </div>

        {/* INTERMEDIATE */}
        <div className="edu-item left" data-aos="fade-right">
          <div className="edu-box edu-card">
            <h4 className="edu-title">Intermediate</h4>
            <div className="edu-hidden">
              <p className="fw-semibold" style={{ color: "#FF6A3D" }}>
                BMS, Narela
              </p>
              <p className="mb-1">CBSE Board</p>
              <small>75%</small>
            </div>
          </div>
        </div>

        {/* MATRICULATION */}
        <div className="edu-item right" data-aos="fade-left">
          <div className="edu-box edu-card">
            <h4 className="edu-title">Matriculation</h4>
            <div className="edu-hidden">
              <p className="fw-semibold" style={{ color: "#FF6A3D" }}>
                Bhartiyam International School
              </p>
              <p className="mb-1">Rudrapur, Uttarakhand</p>
              <small>96%</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
