import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Portfolio() {
  const projects = [
    {
      category: "Web Development",
      title: "Business Growth Platform",
      description:
        "A modern and responsive web platform designed to help businesses establish a strong digital presence.",
      tag: "Website",
    },
    {
      category: "Software Development",
      title: "Smart Business System",
      description:
        "A custom software solution built to simplify workflows, improve efficiency, and manage business operations.",
      tag: "Software",
    },
    {
      category: "Mobile App",
      title: "Connected Mobile Experience",
      description:
        "A user-friendly mobile application designed for seamless experiences across modern devices.",
      tag: "Mobile App",
    },
    {
      category: "AI & Automation",
      title: "Intelligent Automation",
      description:
        "An AI-powered solution focused on automating repetitive tasks and creating smarter business processes.",
      tag: "AI / ML",
    },
    {
      category: "Web Application",
      title: "Digital Management Portal",
      description:
        "A scalable web application for managing data, users, workflows, and business operations from one place.",
      tag: "Web App",
    },
    {
      category: "Custom Development",
      title: "Future-Ready Solution",
      description:
        "A tailored digital solution built around specific business requirements and long-term growth goals.",
      tag: "Custom",
    },
  ];

  return (
    <main className="portfolio-page">
      {/* HERO */}
      <section className="portfolio-hero">
        <div className="container portfolio-hero-content">
          <span className="section-tag">OUR PORTFOLIO</span>

          <h1>
            Ideas We Turn Into
            <span> Digital Solutions.</span>
          </h1>

          <p>
            Explore the kind of innovative, scalable, and user-focused digital
            experiences we build at Enqora Solutions.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="portfolio-intro section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">OUR WORK</span>

            <h2>Built With Innovation. Designed For Growth.</h2>

            <p>
              Every project is an opportunity to solve a real problem through
              technology, creativity, and thoughtful development.
            </p>
          </div>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <article className="portfolio-card" key={index}>
                <div className={`project-visual visual-${index + 1}`}>
                  <span>{project.tag}</span>

                  <div className="project-number">
                    0{index + 1}
                  </div>
                </div>

                <div className="portfolio-card-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <div className="project-title-row">
                    <h3>{project.title}</h3>

                    <button className="project-arrow">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container portfolio-cta-content">
          <div>
            <span className="section-tag">YOUR PROJECT COULD BE NEXT</span>

            <h2>
              Have An Idea?
              <span> Let's Create It.</span>
            </h2>

            <p>
              Partner with Enqora Solutions to build your next digital
              product.
            </p>
          </div>

          <Link to="/contact" className="btn btn-dark">
            Start A Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;