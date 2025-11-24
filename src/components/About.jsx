export default function About() {
  return (
    <section
      id="about"
      className="container py-5"
      style={{ scrollMarginTop: "100px" }}
    >
      {/* SECTION TITLE */}
      <h2
        className="section-title text-center"
        data-aos="fade-up"
        style={{ color: "#001E3C" }}
      >
        About <span style={{ color: "#FF6A3D" }}>Me</span>
      </h2>

      <div className="row align-items-center mt-5">
        {/* LEFT IMAGE */}
        <div className="col-md-5 text-center" data-aos="fade-right">
          <div
            className="about-img-container"
            style={{
              background: "linear-gradient(135deg, #FFB68E, #FF6A3D)",
              padding: "20px",
              borderRadius: "50%",
              display: "inline-block",
              boxShadow: "0 18px 34px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src="/contact.jpg"
              alt="about-profile"
              className="about-img"
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                border: "6px solid white",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="col-md-7"
          data-aos="fade-left"
          style={{
            background: "#FFF5ED",
            padding: "35px",
            borderRadius: "20px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
          }}
        >
          {/* Orange Header */}
          <span
            style={{
              background: "#FF6A3D",
              color: "white",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Summary
          </span>

          <h3 className="mt-3 fw-bold" style={{ color: "#001E3C" }}>
            I'm <span style={{ color: "#FF6A3D" }}>Saksham Khanna</span>
          </h3>

          {/* Updated summary */}
          <p
            className="mt-3"
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#003566",
            }}
          >
            A <strong>Full Stack Developer</strong> and
            <strong> AI/ML enthusiast</strong> passionate about creating impactful
            digital experiences and intelligent applications. I combine modern web
            development with data-driven insights to build scalable, user-friendly
            solutions.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#003566",
            }}
          >
            I’ve worked on projects spanning <strong>React</strong>,
            <strong>Node.js</strong>, <strong>Python</strong>,
            <strong>Machine Learning</strong>, and <strong>MongoDB</strong> — with a
            strong focus on intuitive UI, backend logic, and efficient workflows.
          </p>

          {/* Skill Highlights */}
          <ul className="mt-3" style={{ color: "#001E3C", fontSize: "16px" }}>
            <li>📌 Full Stack web apps with React & Node.js</li>
            <li>📌 Machine Learning and data analysis using Python</li>
            <li>📌 Strong understanding of MongoDB, REST APIs & backend systems</li>
            <li>📌 Experience with modern UI/UX, animations & responsive design</li>
          </ul>

          <a
            href="#contact"
            className="btn-gradient mt-4 d-inline-block"
            style={{ fontSize: "16px" }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
