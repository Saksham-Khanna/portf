import React from "react";

const skills = [
  { name: "ReactJS", img: "/skills/react.png", wiki: "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
  { name: "NodeJS", img: "/skills/node.png", wiki: "https://en.wikipedia.org/wiki/Node.js" },
  { name: "JavaScript", img: "/skills/js.png", wiki: "https://en.wikipedia.org/wiki/JavaScript" },
  { name: "HTML5", img: "/skills/html.png", wiki: "https://en.wikipedia.org/wiki/HTML5" },
  { name: "CSS3", img: "/skills/css.png", wiki: "https://en.wikipedia.org/wiki/CSS" },

  { name: "Java", img: "/skills/java.png", wiki: "https://en.wikipedia.org/wiki/Java_(programming_language)" },
  { name: "C++", img: "/skills/cpp.png", wiki: "https://en.wikipedia.org/wiki/C%2B%2B" },
  { name: "Python", img: "/skills/python.png", wiki: "https://en.wikipedia.org/wiki/Python_(programming_language)" },

  { name: "Spring", img: "/skills/spring.png", wiki: "https://en.wikipedia.org/wiki/Spring_Framework" },
  { name: "Streamlit", img: "/skills/streamlit.png", wiki: "https://en.wikipedia.org/wiki/Streamlit" },
  { name: "Firebase", img: "/skills/firebase.png", wiki: "https://en.wikipedia.org/wiki/Firebase" },

  { name: "MongoDB", img: "/skills/mongodb.png", wiki: "https://en.wikipedia.org/wiki/MongoDB" },
  { name: "MySQL", img: "/skills/mysql.png", wiki: "https://en.wikipedia.org/wiki/MySQL" },

  { name: "AWS", img: "/skills/aws.png", wiki: "https://en.wikipedia.org/wiki/Amazon_Web_Services" },

  { name: "Git", img: "/skills/git.png", wiki: "https://en.wikipedia.org/wiki/Git" },
  { name: "GitHub", img: "/skills/github.png", wiki: "https://en.wikipedia.org/wiki/GitHub" },

  { name: "VS Code", img: "/skills/vscode.png", wiki: "https://en.wikipedia.org/wiki/Visual_Studio_Code" },

  { name: "TailwindCSS", img: "/skills/tailwind.png", wiki: "https://en.wikipedia.org/wiki/Tailwind_CSS" }
];

export default function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center section-title">
        SKILLS <span style={{ color: "#00f7ff" }}>& TECHNOLOGIES</span>
      </h2>

      <div className="row g-4 mt-4 justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2">
            <a
              href={skill.wiki}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-card text-decoration-none"
            >
              <div className="skill-icon-wrapper">
                <img src={skill.img} alt={skill.name} className="skill-icon" />
              </div>
              <p className="skill-name">{skill.name}</p>
              <p className="skill-desc">Learn more →</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
