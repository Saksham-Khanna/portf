export default function Contact() {
  return (
    <section
      id="contact"
      className="container py-5"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="section-title text-center" data-aos="fade-up">
        CONTACT <span style={{ color: "#FF6A3D" }}>ME</span>
      </h2>

      <div className="row align-items-center mt-5">

        {/* LEFT — PROFILE IMAGE */}
        <div className="col-md-5 text-center" data-aos="fade-right">
          <div className="contact-img-wrap">
            <img
              src="/profile.jpg"
              alt="Contact"
              className="contact-img"
            />
          </div>
        </div>

        {/* RIGHT — CONTACT LINKS */}
        <div className="col-md-7" data-aos="fade-left">
          <div
            className="p-4 rounded shadow contact-card"
            style={{
              background: "#FFF5ED",
              borderRadius: "20px",
            }}
          >
            <h4 className="fw-bold mb-2" style={{ color: "#001E3C" }}>
              Let’s Connect 👋
            </h4>

            <p style={{ color: "#003566" }}>
              You can reach out to me through the platforms below.
            </p>

            <div className="contact-links">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/feed/sakshamm-khanna29"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <img
                  src="/contact-icons/linkedin.png"
                  className="contact-icon"
                  alt="LinkedIn"
                />
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href="mailto:khanna.saksham2918@gmail.com"
                className="contact-item"
              >
                <img
                  src="/contact-icons/email.png"
                  className="contact-icon"
                  alt="Email"
                />
                <span>Email Me</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
