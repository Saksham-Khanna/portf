export default function Experience() {
  return (
    <section
      id="experience"
      className="container py-5"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2
        className="section-title text-center"
        data-aos="fade-up"
        style={{ color: "#001E3C" }}
      >
        Professional <span style={{ color: "#FF6A3D" }}>Experience</span>
      </h2>

      <div className="position-relative mt-5 exp-timeline">

        {/* Vertical Timeline Line */}
        <div className="exp-line"></div>

        {/* HashedBit Innovations - Full Stack Intern (Latest) */}
        <div className="exp-item left" data-aos="fade-right">
          <div className="exp-box">
            <h4 className="exp-title">Full Stack Development Intern</h4>

            <div className="exp-hidden">
              <p className="fw-semibold" style={{ color: "#FF6A3D" }}>
                HashedBit Innovations
              </p>
              <p>Aug 2025 – Oct 2025</p>
              <ul style={{ marginLeft: "0", paddingLeft: "18px" }}>
                <li>Developed dynamic React front-end interfaces.</li>
                <li>Built REST APIs using Node.js & Express.</li>
                <li>Integrated MongoDB/MySQL for backend services.</li>
                <li>Optimized applications for performance & usability.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CodeAlpha - Web Development Intern */}
        <div className="exp-item right" data-aos="fade-left">
          <div className="exp-box">
            <h4 className="exp-title">Web Development Intern</h4>

            <div className="exp-hidden">
              <p className="fw-semibold" style={{ color: "#FF6A3D" }}>
                CodeAlpha
              </p>
              <p>Jun 2025 – Jul 2025</p>
              <ul style={{ marginLeft: "0", paddingLeft: "18px" }}>
                <li>Built dynamic web applications.</li>
                <li>Implemented user authentication & CRUD features.</li>
                <li>Worked with Node.js, Express.js, MySQL, JavaScript.</li>
                <li>Maintained backend services and APIs.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
