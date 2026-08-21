import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Lightbulb,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const features = [
    "Innovative and scalable digital solutions",
    "Client-focused development approach",
    "Quality, security, and reliability",
    "Dedicated support and long-term partnership",
  ];

  return (
    <main className="about-page">
      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <span className="section-tag">ABOUT ENQORA SOLUTIONS</span>

          <h1>
            We Turn Great Ideas Into
            <span> Digital Experiences.</span>
          </h1>

          <p>
            Enqora Solutions is your technology partner for building
            innovative, scalable, and future-ready digital solutions.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Let's Work Together
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="about-intro section">
        <div className="container about-intro-grid">
          <div className="about-visual">
            <div className="about-visual-bg"></div>

            <div className="about-code-card">
              <div className="code-card-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <Code2 size={65} />

              <h3>Building The Future</h3>

              <p>
                Technology, creativity, and innovation working together.
              </p>
            </div>

            <div className="experience-card">
              <strong>100%</strong>
              <span>Commitment to Quality</span>
            </div>
          </div>

          <div className="about-text">
            <span className="section-tag">WHO WE ARE</span>

            <h2>
              Your Trusted Partner In
              <span> Digital Growth.</span>
            </h2>

            <p>
              At Enqora Solutions, we help businesses transform their ideas
              into powerful digital products. From custom software and modern
              websites to mobile applications and AI-powered solutions, we
              create technology that solves real business challenges.
            </p>

            <p>
              We believe great technology should not only look good—it should
              create value, improve efficiency, and help businesses grow.
            </p>

            <div className="about-features">
              {features.map((feature, index) => (
                <div className="about-feature" key={index}>
                  <CheckCircle2 size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="purpose-section section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">WHAT DRIVES US</span>
            <h2>Driven By Purpose & Innovation</h2>
          </div>

          <div className="purpose-grid">
            <div className="purpose-card">
              <div className="purpose-icon">
                <Target size={30} />
              </div>

              <h3>Our Mission</h3>

              <p>
                To empower businesses with innovative, reliable, and
                high-quality technology solutions that drive meaningful
                growth.
              </p>
            </div>

            <div className="purpose-card featured-purpose">
              <div className="purpose-icon">
                <Eye size={30} />
              </div>

              <h3>Our Vision</h3>

              <p>
                To become a trusted technology partner for businesses
                building a smarter and more connected digital future.
              </p>
            </div>

            <div className="purpose-card">
              <div className="purpose-icon">
                <Lightbulb size={30} />
              </div>

              <h3>Our Approach</h3>

              <p>
                We combine strategy, creativity, and technology to build
                solutions around the unique goals of every business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="container about-cta-content">
          <div>
            <span className="section-tag">LET'S BUILD TOGETHER</span>

            <h2>
              Have An Idea?
              <br />
              Let's Make It <span>Happen.</span>
            </h2>
          </div>

          <Link to="/contact" className="btn btn-dark">
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;