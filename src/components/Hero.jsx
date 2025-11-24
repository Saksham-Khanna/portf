import { useState, useEffect } from "react";

export default function Hero() {
  const roles = [
    "Web Developer",
    "Data Analyst",
    "Full Stack Developer",
    "AI & ML Developer",
    "Software Developer",
    "Tech Explorer",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typing Effect */
  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 800);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 60 : 110
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section
      id="home"
      className="container py-5 d-flex align-items-center justify-content-between"
      style={{ marginTop: "130px", position: "relative" }}
    >
      {/* Floating Background Circles */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-120px",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(255,106,61,0.28)",
          filter: "blur(80px)",
          zIndex: "-1",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(0,30,60,0.25)",
          filter: "blur(80px)",
          zIndex: "-1",
        }}
      ></div>

      {/* LEFT TEXT SECTION */}
      <div data-aos="fade-right">
        <p
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#FF6A3D",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Hey there! 👋
        </p>

        <h1
          className="fw-bold"
          style={{ fontSize: "54px", lineHeight: "1.25", color: "#001E3C" }}
        >
          I'm <span style={{ color: "#FF6A3D" }}>Saksham</span>
          <br />a{" "}
          <span style={{ color: "#FF6A3D" }}>
            {roles[index].substring(0, subIndex)}
          </span>
          <span style={{ color: "#FF6A3D" }}>|</span>
        </h1>

        <p
          className="mt-3"
          style={{
            fontSize: "18px",
            width: "92%",
            color: "#003566",
            lineHeight: "1.65",
          }}
        >
          I craft efficient and scalable digital experiences spanning web
          development, data-driven applications, backend systems, and
          intelligent ML-powered solutions.
        </p>

        {/* ALWAYS line under description */}
        <p
          style={{
            fontWeight: "700",
            fontSize: "18px",
            marginTop: "8px",
            color: "#001E3C",
          }}
        >
          <strong>ALWAYS ➤ BUILDING & LEARNING</strong>
        </p>

        <a
          href="#about"
          className="btn-gradient mt-4 d-inline-block"
          style={{
            padding: "12px 35px",
            fontSize: "17px",
            borderRadius: "30px",
          }}
        >
          Explore More
        </a>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div
        data-aos="fade-left"
        className="about-img-container"
        style={{
          padding: "20px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #FFB68E, #FF6A3D)",
          boxShadow: "0 22px 40px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src="/profile.jpg"
          className="about-img"
          alt="profile"
          style={{
            width: "320px",
            height: "320px",
            objectFit: "cover",
            borderRadius: "50%",
            border: "8px solid white",
          }}
        />
      </div>
    </section>
  );
}
