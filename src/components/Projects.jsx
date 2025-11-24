import React, { useState } from "react";

const projects = [
  {
    title: "Breast Cancer Prediction",
    repo: "https://github.com/Saksham-Khanna/Breast-Cancer-pred",
    tech: "Python, Machine Learning, Flask",
    desc: "Machine learning model to diagnose breast cancer from cell data.",
    img: "/projects/breast_cancer.png",
  },
  {
    title: "Learning Management Platform",
    repo: "https://github.com/Saksham-Khanna/Learning-Management-Platform",
    tech: "React, Node.js, Express, MongoDB",
    desc: "A complete LMS platform with authentication & course management.",
    img: "/projects/lms.png",
  },
  {
    title: "ATS Tracker App",
    repo: "https://github.com/Saksham-Khanna/ATS-tracker",
    tech: "Python, NLP, Tkinter",
    desc: "ATS-based resume tracking system to optimize resume compatibility.",
    img: "/projects/ats.png",
  },
  {
    title: "Bus Booking System",
    repo: "https://github.com/Saksham-Khanna/intellij-Bus_booking",
    tech: "Java, JDBC, MySQL",
    desc: "Java-based bus reservation system with customer booking management.",
    img: "/projects/bus.png",
  },
  {
    title: "Diabetes Prediction",
    repo: "https://github.com/Saksham-Khanna/diabetic-pred",
    tech: "Python, Streamlit, ML",
    desc: "Interactive web-based diabetes prediction using ML algorithms.",
    img: "/projects/diabetes.png",
  },
  {
    title: "Movie Recommendation System",
    repo: "https://github.com/Saksham-Khanna/movie-rec-sys",
    tech: "Python, Pandas, KNN",
    desc: "Personalized movie recommendations based on user preferences.",
    img: "/projects/movie.png",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="work"
      className="container py-5"
      style={{ minHeight: "100vh" }}
    >
      <h2 className="text-center section-title">
        PROJECTS <span style={{ color: "#ff6a3d" }}>SHOWCASE</span>
      </h2>

      <div className="row g-4 mt-4">
        {visibleProjects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm border-0 card-hover">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${
                    project.img || "/projects/default.jpg"
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "180px",
                  borderRadius: "14px 14px 0 0",
                }}
              />
  
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text text-muted">{project.desc}</p>
                <p>
                  <span className="badge rounded-pill bg-light text-dark border">
                    {project.tech}
                  </span>
                </p>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient mt-2 w-100 btn-arrow"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="text-center mt-4">
        {!showAll ? (
          <button
            onClick={() => setShowAll(true)}
            className="btn-gradient btn-arrow"
          >
            View More Projects
          </button>
        ) : (
          <button
            onClick={() => setShowAll(false)}
            className="btn-gradient btn-arrow"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
